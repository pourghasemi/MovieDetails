import axios from "axios";

import Toast from "@/components/widget/toast";
import { Episode, EpisodeResponseHttpRequest, MovieDetail } from "@/types/types";
import { API_KEY, API_URL } from "@/utils/config";
import {
  PARAMETER_EPISODE,
  PARAMETER_ID,
  PARAMETER_SEASON,
  PARAMETER_TYPE,
} from "@/utils/parameter";

export function buildApiUrl(
  parameters: Record<string, string>,
  apiURL: string,
): string {

  const queryString = Object.entries(parameters)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
  if (queryString) return `${apiURL}?apikey=${API_KEY}&${queryString}`;
  return `${apiURL}?apikey=${API_KEY}`;

}

export async function getEpisodes(
  movieId: string,
  season: string,
): Promise<Episode[]> {

  const url = buildApiUrl(
    { [PARAMETER_ID]: movieId, [PARAMETER_SEASON]: season },
    API_URL,
  );
  try {

    let episodes: Episode[] = [];
    const response = await axios.get(url);
    const episodeDataList: EpisodeResponseHttpRequest[] = response.data.Episodes;
    if (response.data.Response === "True") {

      const moviePromises = episodeDataList.map((episodeData) =>
        getEpisodePlot(movieId, season, episodeData.Episode).then((plot) => {

          const movie: Episode = {
            id: episodeData.Episode,
            title: episodeData.Title,
            rate: episodeData.imdbRating,
            released: episodeData.Released,
            season: season,
            plot: plot,
          };
          return movie;

        }),
      );
      const movies = await Promise.all(moviePromises);
      episodes = movies;

    } else {

      response.data.Error && Toast(response.data.Error);

    }
    return episodes;

  } catch (e) {

    console.error(
      `Error fetching episodes for movie ${movieId} and season ${season}: `,
      e,
    );
    return [];

  }

}

export async function getEpisodePlot(
  movieId: string,
  season: string,
  episodeId: string,
): Promise<string> {

  const url = buildApiUrl(
    {
      [PARAMETER_ID]: movieId,
      [PARAMETER_SEASON]: season,
      [PARAMETER_EPISODE]: episodeId,
    },
    API_URL,
  );

  try {

    const response = await axios.get(url);
    return response.data.Plot || "";

  } catch (error) {

    console.error(
      `Error fetching the episode for movie ${movieId}, season ${season}, and episode ${episodeId}: `,
      error,
    );
    return "";

  }

}

async function geMovieTitleList(): Promise<string[]> {

  return [
    "Insecure",
  ];

}

export async function getMovieDetailsByTitle(
  title: string,
): Promise<MovieDetail | null> {

  return await getMovieDetails({ [PARAMETER_TYPE]: title });

}

export async function getMovieDetailsById(
  id: string,
): Promise<MovieDetail | null> {

  return await getMovieDetails({ [PARAMETER_ID]: id });

}

async function getMovieDetails(
  parameters: Record<string, string>,
): Promise<MovieDetail | null> {

  const url = buildApiUrl(parameters, API_URL);
  try {

    const response = await axios.get(url);
    const movieData = response.data;
    if (response.data.Response === "True") {

      const movie: MovieDetail = {
        id: movieData.imdbID,
        title: movieData.Title,
        plot: movieData.Plot,
        poster: movieData.Poster,
        totalSeasons: movieData.totalSeasons || null,
      };
      return movie;

    }
    response.data.Error && Toast(response.data.Error);
    return null;

  } catch (error) {

    console.error("Error fetching movie details", error);
    return null;

  }

}

export async function getAllMovies(): Promise<MovieDetail[]> {

  const movieTitleList = await geMovieTitleList();
  const moviePromises = movieTitleList.map((title) =>
    getMovieDetailsByTitle(title),
  );
  const movies = await Promise.all(moviePromises);
  return movies.filter((movie) => movie !== null) as MovieDetail[];

}

export function getMovieUrl(id: string): string {

  return buildApiUrl({ [PARAMETER_ID]: id, [PARAMETER_SEASON]: "1" }, "movie");

}

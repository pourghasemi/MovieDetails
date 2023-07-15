import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import HeadTags from "@/components/widget/headTags";
import { setEpisodes, setMovie } from "@/slices/episodesSlice";
import { MovieDetail } from "@/types/types";

import Episodes from "../components/episodes/episodes";
import { getEpisodes, getMovieDetailsById } from "../utils/service";

type PageProps = {
  movie: MovieDetail;
};

export default function EpisodesPage({ movie }: PageProps) {

  const { query } = useRouter();
  const dispatch = useDispatch();
  const { i, Season } = query;

  dispatch(setMovie(movie));

  useEffect(() => {

    if (movie) getEpisodesList();

  }, []);

  async function getEpisodesList() {

    const episodes = await getEpisodes(movie.id, Season as string);
    if (episodes) dispatch(setEpisodes(episodes));

  }

  return (
    <>
      <HeadTags title={movie?.title} description={movie?.title} />
      <Episodes />
    </>
  );

}

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {

  try {

    const movie = await getMovieDetailsById(query.i as string);

    return {
      props: {
        movie,
      },
    };

  } catch (error) {

    return {
      props: {
        movie: null,
      },
    };

  }

};

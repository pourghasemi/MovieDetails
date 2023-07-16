export interface EpisodeResponseHttpRequest {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
}

export interface Episode {
  title: string;
  released: string;
  id: string;
  rate: string;
  plot?: string;
  season?: string;
}

export interface MovieDetail {
  title: string;
  id: string;
  plot: string;
  poster: string;
  totalSeasons?: string | null;
}

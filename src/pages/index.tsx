import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import HorizontalCard from "@/components/widget/horizontalCard";
import { MovieDetail } from "@/types/types";
import { getAllMovies } from "@/utils/service";
import { getMovieUrl } from "@/utils/service";;

import HeadTags from "@/components/widget/headTags";
import LoadingPage from "@/components/widget/loadingPage";

export default function Home(): ReactElement {

  const [movies, setMovies] = useState<MovieDetail[]>([]);

  useEffect(() => {

    getMovies();

  }, []);

  async function getMovies() {

    const movies = await getAllMovies();
    setMovies(movies);

  }

  return (
    <>
      <HeadTags title="movies" description="movies" />
      <div className=" p-4 md:px-16 md:py-16">

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {!movies.length && <LoadingPage />}
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link key={movie.id} href={getMovieUrl(movie.id)}>
                <HorizontalCard
                  title={movie.title}
                  description={movie.plot}
                  image={movie.poster}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div >
    </>
  );

}

import { ReactElement, useEffect, useState } from "react";
import Link from "next/link";

import HorizontalCard from "@/components/widget/horizontalCard";
import { MovieDetail } from "@/types/types";
import { getAllMovies } from "@/utils/service";
import { getMovieUrl } from "@/utils/service";

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
    <div className="px-16 py-8">
      <h1 className="text-4xl font-bold dark:text-white mb-4">Movie List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
    </div>
  );

}

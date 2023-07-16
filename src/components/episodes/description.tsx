import React from "react";
import { useRouter } from "next/router";

import { MovieDetail } from "@/types/types";

type PropsType = {
  movie: MovieDetail;
};
const Description = ({ movie }: PropsType) => {

  const { query } = useRouter();
  const { Season } = query;
  return (
    <>
      {movie && (
        <>
          <h3 className="text-lg md:text-xl lg:text-2xl font-thin">Season {Season}</h3>
          <h1 className="text-[2.25rem]  font-bold md:leading-[3.25rem]  ">
            {movie?.title}
          </h1>
          <p className="max-w-[510px] font-thin text-lg md:text-xl lg:text-2xl ">
            {movie?.plot}
          </p>
        </>
      )}
    </>
  );

};

export default Description;

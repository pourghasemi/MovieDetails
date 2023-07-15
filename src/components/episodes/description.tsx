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
          <h3 className="text-sm md:text-2xl font-thin">Season {Season}</h3>
          <h1 className="text-[36px] md:text-[48px] lg:text-[54px] xl:text-[74px]  font-bold md:leading-[52px] lg:leading-[60px] xl:leading-[80px] ">
            {movie?.title}
          </h1>
          <p className="max-w-[510px] font-thin text-base md:text-2xl ">
            {movie?.plot}
          </p>
        </>
      )}
    </>
  );

};

export default Description;

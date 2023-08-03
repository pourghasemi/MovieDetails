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
          <h3 className="text-[1.43rem] tracking-widest md:text-xl  font-thin">Season {Season}</h3>
          <h1 className="text-[4.62rem]  font-bold md:leading-[4.62rem]  ">
            {movie?.title}
          </h1>
          <p className="max-w-[491px] tracking-widest font-thin text-[1.43rem] md:text-xl  ">
            {movie?.plot}
          </p>
        </>
      )}
    </>
  );

};

export default Description;

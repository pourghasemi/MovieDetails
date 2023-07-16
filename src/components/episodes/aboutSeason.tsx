import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/app/store";
import Card from "@/components/widget/card";
import Slider from "@/components/widget/slider";
import { setEpisode } from "@/slices/episodesSlice";

import LoadingPage from "../widget/loadingPage";

import Description from "./description";

const AboutSeason = () => {

  const dispatch = useDispatch();
  const { movie, episodes } = useSelector(
    (state: RootState) => state.episodesReducer,
  );

  const changeEpisode = useCallback(
    (id: string | number) => {

      const obj = episodes?.filter((item) => item.id === id);
      if (obj?.length) dispatch(setEpisode(obj[0]));
    
    },
    [episodes, dispatch],
  );

  const renderEpisodeList = episodes?.map((episode) => {

    const values = {
      title: episode.title,
      description: episode.plot || "",
      id: episode.id,
      tag: episode.id,
    };
    return <Card data={values} key={episode.id} handelClick={changeEpisode} />;
  
  });

  return (
    <>
      {movie && (
        <div>
          <div className="h-[65vh] text-white flex flex-col justify-center p-4 md:p-10 lg:p-20 ">
            <Description movie={movie} />
          </div>

          <div className=" pl-4 md:pl-10 lg:pl-16">
            {renderEpisodeList && <Slider list={renderEpisodeList} />}
          </div>
        </div>
      )}
      {!episodes && <LoadingPage />}
    </>
  );

};

export default AboutSeason;

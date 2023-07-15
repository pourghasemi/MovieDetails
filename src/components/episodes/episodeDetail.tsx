import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import type { RootState } from "@/app/store";
import Star from "@/assets/images/icons/start.svg";

import ImageLoading from "../widget/imageLoading";
import ListLoading from "../widget/listLoading";
import TextLoading from "../widget/textLoading";

const EpisodeDetail = () => {

  const episode = useSelector(
    (state: RootState) => state.episodesReducer.episode,
  );

  return (
    <>
      {!episode && (
        <div className="flex flex-col text-black">
          <div className=" relative flex-auto h-[65vh] block overflow-hidden">
            <ImageLoading />
          </div>
          <div className="flex-auto divide-y divide-[#eaeae] text-lg">
            <div className=" flex justify-between items-center px-6 py-12">
              <ListLoading />
            </div>
            <div className="px-6 py-12">
              <TextLoading />
            </div>
          </div>
        </div>
      )}
      {episode && (
        <div className="flex flex-col text-black">
          <div className=" relative flex-auto h-[65vh] block overflow-hidden">
            <Image
              src={`/images/${episode?.id}.jpg`}
              alt=""
              objectFit="cover"
              objectPosition="center"
              layout="fill"
            />
          </div>
          <div className="flex-auto divide-y divide-[#eaeae] text-lg">
            <div className=" flex justify-between items-center px-6 py-12">
              <div className="flex-1">
                <span data-testid="episodeNumber">Episode {episode.id} - </span>
                <span data-testid="episodeRelease">{episode?.released}</span>
              </div>
              <span className="flex items-center">
                <Image
                  src={Star}
                  width="27.98"
                  height="26.62"
                  alt=""
                  className="float-left mr-4"
                />
                <b>{Number(episode?.rate) || "-"}</b> / 10{" "}
              </span>
            </div>
            <div className="px-6 py-12">
              <h3
                data-testid="episodeTitle"
                className="text-2xl mb-2 font-bold"
              >
                {episode?.title}
              </h3>
              <p data-testid="episodePlot" className="text-lg ">
                {episode.plot}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default EpisodeDetail;

import React from "react";
import Image from "next/image";

type PropsType = {
  data: {
    title: string;
    description: string;
    id: string | number;
    tag: string | number;
  };
  handelClick: (id: string | number) => void;
};

const Card = ({ data, handelClick: changeEpisode }: PropsType) => {

  console.log("render cart" + data.id);

  return (
    <>
      {!data && "loading..."}
      {data && (
        <div
          className="block rounded-lg  text-white"
          onClick={() => changeEpisode(data.id)}
          data-testid={`card_${data.id}`}
        >
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <div className="relatives min-h-[133px] bg-white">
              <Image
                src={`/images/${data?.id}.jpg`}
                alt=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <span className=" absolute top-0 left-0 bg-white w-[30px] h-[30px] text-black text-center leading-[1.8rem] text-base">
              <b>{data.id}</b>
            </span>
          </div>
          <div className="my-4 tracking-widest	">
            <h2 className="mb-2 text-base font-thin ">{data.title}</h2>
            <p className="mb-4 text-[13px] font-thin  opacity-80	">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );

};

export default Card;

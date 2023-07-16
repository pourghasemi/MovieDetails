import React from "react";
import Image from "next/image";


type PropsType = {
  title: string;
  description: string;
  id?: string | number;
  image: string;
  handelClick?: (id: string | number) => void;
};

const HorizontalCard = ({
  title,
  description,
  image,
  id,
  handelClick,
}: PropsType) => (
  <div className="flex flex-col md:flex-row w-full h-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div className="w-full h-[200px] md:h-full  md:w-[100px]  relative overflow-hidden">
      <Image
        className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={image}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
    </div>
    <div className=" flex-1 flex flex-col justify-between p-4 leading-normal">
      <h5 className="mb-2 text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 text-sm lg:text-base font-normal ">
        {description}
      </p>
    </div>
  </div>
);

export default HorizontalCard;

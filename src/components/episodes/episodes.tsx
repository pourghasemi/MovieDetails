import Image from "next/image";

import AboutSeason from "./aboutSeason";
import EpisodeDetail from "./episodeDetail";

export default function Episodes() {

  return (
    <main className="flex md:flex-row flex-col max-w-[100vw]">
      <div className="image-shadow relative z-0 min-h-[100vh] w-full md:w-[65%] ">
        <Image
          src="/images/poster.jpg"
          alt=""
          objectFit="cover"
          objectPosition="center"
          layout="fill"
        />
        <div className=" relative z-[10]">
          <AboutSeason />
        </div>
      </div>
      <div className="w-full md:w-[35%] p-4 md:p-0">
        <EpisodeDetail />
      </div>
    </main>
  );

}

import React, { useRef } from "react";
import Image from "next/image";

import TailLeft from "@/assets/images/icons/tailLeft.svg";
import TailRight from "@/assets/images/icons/tailRight.svg";

const Slider = ({ list }: { list: React.JSX.Element[] }) => {

  const containerRef = useRef<HTMLDivElement | null>(null);


  // Next
  function handelNextBtn() {

    if (containerRef?.current) {

      const slides = containerRef.current.children;
      containerRef.current.scrollBy({ left: (slides[0] as HTMLElement).offsetWidth, behavior: "smooth" });

    }

  }

  // Previous
  function handelPrevBtn() {

    if (containerRef?.current) {

      const slides = containerRef.current.children;
      containerRef.current.scrollBy({
        left: -(slides[0] as HTMLElement).offsetWidth,
        behavior: "smooth",
      });

    }

  };

  return (
    <div className="relative mb-6 max-w-full">
      {list?.length && (
        <>
          <div className="flex w-full  flex-col items-center justify-center">
            <div ref={containerRef}

              className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="relative  w-[97%] max-w-[201px] shrink-0 snap-start snap-always rounded-xl md:w-[50%] lg:w-[25%]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className=" text-right px-4">
            <button className="prev-btn  p-2" onClick={handelPrevBtn}>
              <Image
                src={TailLeft}
                width="29"
                height="19"
                alt=""
                className="float-left"
                aria-label="Next Button"
                title="Next Button"
                loading="lazy"
              />
            </button>
            <button className="next-btn  p-2" onClick={handelNextBtn}>
              <Image
                src={TailRight}
                width="29"
                height="19"
                alt=""
                className="float-left"
                aria-label="previous Button"
                title="previous Button"
                loading="lazy"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );

};

export default Slider;

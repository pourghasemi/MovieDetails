//@ts-nocheck
import React, { useEffect } from "react";
import Image from "next/image";

import TailLeft from "@/assets/images/icons/tailLeft.svg";
import TailRight from "@/assets/images/icons/tailRight.svg";

const Slider = ({ list }: { list: React.JSX.Element[] }) => {

  useEffect(() => {

    const container = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".carousel > div");
    const dots = document.querySelectorAll(".pagination > span");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const breakpoint = 768;
    const slidesPerPage = 3;
    const totalSlidesCount = slides.length;
    // Mobile stuff
    let touchStartX = 0;
    let touchEndX = 0;
    if (container) {

      // Previous
      prevBtn?.addEventListener("click", () => {

        container.scrollBy({
          left: -slides[0].offsetWidth,
          behavior: "smooth",
        });
        const centerSlideIndex = getCenterSlideIndex() - 1;
        updateActiveDot(centerSlideIndex);
      
      });

      // Next
      nextBtn?.addEventListener("click", () => {

        container.scrollBy({ left: slides[0].offsetWidth, behavior: "smooth" });
        const centerSlideIndex = getCenterSlideIndex() + 1;
        updateActiveDot(centerSlideIndex);
      
      });

      // Mobile
      container.addEventListener("touchstart", (event) => {

        touchStartX = event.touches[0].clientX;
      
      });

      container.addEventListener("touchmove", (event) => {

        touchEndX = event.touches[0].clientX;
      
      });

      container.addEventListener("touchend", () => {

        let centerSlideIndex;
        const swipeThreshold = 50;

        if (touchStartX - touchEndX > swipeThreshold) {

          centerSlideIndex = getCenterSlideIndex() + 1;
        
        } else {

          centerSlideIndex = getCenterSlideIndex() - 1;
        
        }

        updateActiveDot(centerSlideIndex);
        touchStartX = 0;
        touchEndX = 0;
      
      });

      // Misc functions
      function updateActiveDot(centerSlideIndex) {

        const isMobileView = container.offsetWidth <= breakpoint;
        const dotsCount = isMobileView ? dots.length : dots.length - 2;
        const slidesCount = isMobileView ? 1 : dotsCount - slidesPerPage;
        const pageIndex = centerSlideIndex - slidesCount;
        if (pageIndex >= 0 && pageIndex < dotsCount) {

          dots.forEach((dot) => dot.classList.remove("w-8"));
          dots[pageIndex].classList.add("w-8");
        
        }
      
      }

      function getCenterSlideIndex() {

        const slideWidth = slides[0].offsetWidth;
        const containerWidth = container.offsetWidth;
        const centerSlideIndex = Math.round(
          (container.scrollLeft + Math.floor(containerWidth / 2)) / slideWidth,
        );
        return centerSlideIndex;
      
      }
    
    }
  
  }, []);

  return (
    <div className="relative mb-6 max-w-full">
      {list?.length && (
        <>
          <div className="flex w-full  flex-col items-center justify-center">
            <div className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="relative  w-[85%] shrink-0 snap-start snap-always rounded-xl  md:w-[25%]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className=" text-right px-4">
            <button className="prev-btn  p-2">
              <Image
                src={TailLeft}
                width="29"
                height="19"
                alt=""
                className="float-left"
                aria-label="Next Button"
                title="Next Button"
              />
            </button>
            <button className="next-btn  p-2">
              <Image
                src={TailRight}
                width="29"
                height="19"
                alt=""
                className="float-left"
                aria-label="previous Button"
                title="previous Button"
              />
            </button>
          </div>
        </>
      )}
    </div>
  );

};

export default Slider;

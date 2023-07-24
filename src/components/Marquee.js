import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = [
  "REACTJS",
  "NEXTJS",
  "TYPESCRIPT",
  "TAILWIND",
  "MATERIAL-UI",
  "SCSS",
  "SOLIDITY"
];

const Marquee = () => {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const marqueeTween = useRef();

  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      //marqueeTween.pause();
    };
  }, []);

  console.log(screenWidth)

  useEffect(() => {
    marqueeInitialSet();
    marqueeTween.current && marqueeTween.current.pause().kill();
    marqueeTween.current = gsap.to(marqueeElements.current, {
      x: `+=${screenWidth * 1.5}`,
      ease: "none",
      repeat: -1,
      duration: 30,
      rotation: 0.1,
      modifiers: {
        x: (x) => {
          return (parseFloat(x) % (screenWidth * 1.5)) + "px";
        }
      }
    });
  }, [screenWidth]);

  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function (index) {
        return (screenWidth / 5) * index;
      }
    });
  };

  const resizeHandler = () => {
    gsap.set(marqueeElements.current, { clearProps: "all" });
    setScreenWidth(window.innerWidth);
  };

  const marqueeElementsRefHandler = (e, i) => {
    marqueeElements.current[i] = e;
  };

  const renderMarqueeElements = () => {
    if (marqueeTexts.length === 1) {
      marqueeTexts[2] = marqueeTexts[1] = marqueeTexts[0];
    }
    if (marqueeTexts.length === 2) {
      marqueeTexts[2] = marqueeTexts[0];
    }
    return marqueeTexts.map((e, i) => (
      <p
        className="text-center font-body text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-semibold absolute pin-l min-w-full"
        key={`marquee-${i}`}
        ref={(el) => marqueeElementsRefHandler(el, i)}
      >
        {e}
      </p>
    ));
  };
  return (
    <div
      className="relative w-full mt-5 py-5 bg-[#777] font-body text-[#F7F7F7]/40 flex overflow-hidden items-center">
      {renderMarqueeElements()}
    </div>
  );
};

export default Marquee;

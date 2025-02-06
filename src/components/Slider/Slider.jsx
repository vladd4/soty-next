"use client";

import styles from "./NewsSlider.module.scss";

import Arrow from "@/../public/arrow.svg";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useRef, useState } from "react";
import useResize from "../../hooks/useResize";

import Image from "next/image";
import useImages from "@/hooks/useImages";

const Slider = () => {
  const sliderRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const [slides, setSlides] = useState(4);

  const handleClick = (side) => {
    if (sliderRef.current) {
      const splide = sliderRef.current.splide;
      splide.go(side);
    }
  };

  const { data, isLoading } = useImages();

  useResize(setSlides, "news", null);

  if (isLoading) return null;

  return (
    <>
      <Splide
        ref={sliderRef}
        options={{
          height: 300,
          focus: "center",
          drag: true,
          perPage: slides,
          gap: "3%",
          arrows: false,
          pagination: false,
        }}
        className={styles.slider}
      >
        {data && data.length > 0
          ? data.map((image) => {
              return (
                <SplideSlide
                  data-fancybox="gallery"
                  href={image}
                  key={image}
                  className={styles.splide_slide}
                  id="slides"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                  }}
                />
              );
            })
          : null}
      </Splide>
      <div className={styles.arrows}>
        <Image
          ref={prevRef}
          alt="Prev"
          src={Arrow}
          className={styles.prev}
          onClick={() => handleClick("<")}
        />
        <Image
          ref={nextRef}
          alt="Next"
          src={Arrow}
          className={styles.next}
          onClick={() => handleClick(">")}
        />
      </div>
    </>
  );
};
export default Slider;

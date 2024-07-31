"use client";
import React, { useRef } from "react";
import styles from "../../styles/components/home/_SliderItems.module.scss";
import Slider from "react-slick";
import user from "../../../../public/img/user.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import SliderItem from "./SliderItem";

const data_slider = [
  {
    paragraph1:
      "Sobrus Labs est encadré par une équipe très réactive, performante est toujours à l'écoute de ses clients.",
    paragraph2: "Leur dernière mise à jour nous a largement convainus.",
    name: "Jaouad",
    cabinet: "Nom du cabinet",
  },
  {
    paragraph1:
      "Sobrus Labs est encadré par une équipe très réactive, performante est toujours à l'écoute de ses clients.",
    paragraph2: "Leur dernière mise à jour nous a largement convainus.",
    name: "Jaouad",
    cabinet: "Nom du cabinet",
  },
  {
    paragraph1:
      "Sobrus Labs est encadré par une équipe très réactive, performante est toujours à l'écoute de ses clients.",
    paragraph2: "Leur dernière mise à jour nous a largement convainus.",
    name: "Jaouad",
    cabinet: "Nom du cabinet",
  },
  {
    paragraph1:
      "Sobrus Labs est encadré par une équipe très réactive, performante est toujours à l'écoute de ses clients.",
    paragraph2: "Leur dernière mise à jour nous a largement convainus.",
    name: "Jaouad",
    cabinet: "Nom du cabinet",
  },
];

const SliderItems: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", bottom: "-3rem" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className={styles.main}>
      <div className={styles.ArrowLeft} onClick={slideLeft}>
        <IoIosArrowBack />
      </div>
      <div className={styles.ArrowRight} onClick={slideRight}>
        <IoIosArrowForward />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {data_slider.map((item, index) => (
          <SliderItem
            key={`sliderItem${index}`}
            paragraph1={item.paragraph1}
            paragraph2={item.paragraph2}
            name={item.name}
            cabinet={item.cabinet}
            user={user}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderItems;

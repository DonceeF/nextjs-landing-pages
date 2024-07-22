"use client";
import React, { useRef } from "react";
import styles from "../../styles/components/home/_SliderItems.module.scss";
import Slider from "react-slick";
import Image from "next/image";
import user from "../../../../public/img/user.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
      <div style={{ position: "absolute", bottom: "-30px" }}>
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
          <div key={`sliderItem${index}`} className={styles.items}>
            <p>{item.paragraph1}</p>
            <p>{item.paragraph2}</p>
            <div className={styles.user}>
              <Image src={user} alt="" />
              <div className={styles.userInfo}>
                <h3>{item.name}</h3>
                <h4>{item.cabinet}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderItems;

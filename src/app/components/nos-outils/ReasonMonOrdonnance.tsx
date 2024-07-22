import React from "react";
import styles from "../../styles/components/nos-outils/_ReasonMonOrdonnance.module.scss";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
}

const ReasonMonOrdonnance = ({ img, title }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <Image src={img} alt="Icon why MonOrdonnance" />
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default ReasonMonOrdonnance;

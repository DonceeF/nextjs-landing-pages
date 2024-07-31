import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/components/home/_SliderItem.module.scss";

interface Props {
  paragraph1: string;
  paragraph2: string;
  user: StaticImageData;
  name: string;
  cabinet: string;
}

const SliderItem = ({ paragraph1, paragraph2, user, name, cabinet }: Props) => {
  return (
    <div className={styles.items}>
      <p>{paragraph1}</p>
      <p>{paragraph2}</p>
      <div className={styles.user}>
        <Image src={user} alt="" />
        <div className={styles.userInfo}>
          <h2>{name}</h2>
          <h2>{cabinet}</h2>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;

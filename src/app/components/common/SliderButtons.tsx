import React from "react";
import styles from "../../styles/components/common/_SliderButtons.module.scss";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const SliderButtons = () => {
  return (
    <div className={styles.main}>
      <div className={styles.dots}>
        <div></div>
        <div className={styles.grayDot}></div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.ArrowLeft}>
          <IoIosArrowBack />
        </div>
        <div className={styles.ArrowRight}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default SliderButtons;

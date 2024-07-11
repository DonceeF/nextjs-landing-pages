import React from "react";
import styles from "../../styles/components/functionality/_NumbersInfo.module.scss";

interface Props {
  number1: string;
  paragraph: string;
}

const NumbersInfo = ({ number1, paragraph }: Props) => {
  return (
    <div className={styles.numberInfo}>
      <h2>{number1}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default NumbersInfo;

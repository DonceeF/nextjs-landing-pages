import React from "react";
import styles from "../../styles/components/tarification/_featurColumn.module.scss";
import { StaticImageData } from "next/image";
import { MdDone } from "react-icons/md";
import Image from "next/image";

interface TarificationElementProps {
  src1: StaticImageData;
  src2?: StaticImageData;
  valid: number;
  button: string;
  active?: boolean;
}

const FeatureColumn = ({
  src1,
  src2,
  valid,
  button,
  active,
}: TarificationElementProps) => {
  const validFeatures = [];

  if (valid === 12) {
    for (let i = 0; i < 12; i++) {
      validFeatures.push(
        <div className={styles.element} key={`Feature ${i + 1}`}>
          <MdDone className={styles.icon} />
        </div>
      );
    }
  } else {
    for (let i = 0; i < valid; i++) {
      validFeatures.push(
        <div className={styles.element} key={`Feature ${i + 1}`}>
          <MdDone className={styles.icon} />
        </div>
      );
    }

    let a = 12 - valid;
    for (let i = 0; i < a; i++) {
      validFeatures.push(
        <div className={styles.element} key={`Feature ${i + 1}`}>
          <div className={styles.line}></div>
        </div>
      );
    }
  }

  return (
    <div className={active ? styles.active : styles.featureColumn}>
      {active && <h5>Nous recommandons</h5>}
      <div className={styles.logoContainer}>
        {src2 ? (
          <div className={styles.twoLogos}>
            <div>

            <Image src={src1} alt="valid" />
            +
            <Image src={src2} alt="notValid" />
            <h2>?</h2>
          </div>
          </div>
        ) : (
          <div className={styles.oneLogo}>

            <Image src={src1} alt="valid" />
            <h2>?</h2>
          </div>
        )}
      </div>
      <div className={styles.validColumn}>
        {validFeatures.map((item) => item)}
      </div>
      <div className={styles.button}>
        <button>{button}</button>
      </div>
    </div>
  );
};

export default FeatureColumn;

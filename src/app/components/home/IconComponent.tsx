import React from "react";
import styles from "../../styles/components/home/_IconComponent.module.scss";
import Image, { StaticImageData } from "next/image";

interface TarificationElementProps {
  src: StaticImageData;
  title?: string;
  statistic?: string;
  definition?: string;
}

const IconComponent = ({
  src,
  title,
  statistic,
  definition,
}: TarificationElementProps) => {
  return (
    <div className={styles.main}>
      <div className={styles.icon}>
        <Image src={src} alt="" />
      </div>
      {title ? (
        <h3>{title}</h3>
      ) : (
        <div className={styles.definition}>
          <h1>{statistic}</h1>
          <h4>{definition}</h4>
        </div>
      )}
    </div>
  );
};

export default IconComponent;

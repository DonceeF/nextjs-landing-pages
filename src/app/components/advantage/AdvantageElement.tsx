import React from "react";
import styles from "../../styles/components/advantage/_advantageElement.module.scss";
import Image from "next/image";
import { AdvantageElementProps } from "@/app/types/advantage.type";

const advantageElement = ({ src, title, paragraph }: AdvantageElementProps) => {
  return (
    <div className={styles.element}>
      <div className={styles.icon}>
        <Image src={src} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
};

export default advantageElement;

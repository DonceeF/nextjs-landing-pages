import React from "react";
import styles from "../../styles/components/common/_Paragraph.module.scss";
import { FaArrowRight } from "react-icons/fa6";

interface Props {
  title: React.ReactElement;
  paragraph: string;
}

const Paragraph = ({ title, paragraph }: Props) => {
  return (
    <div className={styles.paragraph}>
      <div className={styles.paragraphText}>
        {title}
        <p>{paragraph}</p>
      </div>
      <button>
        Demandez votre démo{" "}
        <div className={styles.icon}>
          <FaArrowRight />
        </div>
      </button>
    </div>
  );
};

export default Paragraph;

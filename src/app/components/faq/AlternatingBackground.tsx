import React, { ReactNode } from "react";
import styles from "../../styles/components/faq/_alternatingBackground.module.scss";

interface AlternatingBackgroundProps {
  index: number;
  children: ReactNode;
}

const AlternatingBackground = ({
  index,
  children,
}: AlternatingBackgroundProps) => {
  const isEven = index % 2 === 0;
  const backgroundColor = isEven ? "#fff" : "#f9fdfe";

  return (
    <div style={{ background: backgroundColor }} className={styles.main}>
      {children}
    </div>
  );
};

export default AlternatingBackground;

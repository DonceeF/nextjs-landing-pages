import React from "react";
import styles from "../../styles/components/common/_DemandeDemonstration.module.scss";

interface Props {
  background: string;
  color: string;
  lightUnderLine: boolean;
  backgroundButton: string;
  colorButton: string;
}

const DemandeDemonstration = ({
  background,
  color,
  lightUnderLine,
  backgroundButton,
  colorButton,
}: Props) => {
  return (
    <div
      style={{ background: background, color: color }}
      className={styles.DemandeDemo}
    >
      <h1>
        <span className={styles.boldText}>
          <span
            className={
              lightUnderLine ? styles.lightUnderLineText : styles.underLineText
            }
          >
            Sobrus MED
          </span>{" "}
          au service de la digitalisation
        </span>{" "}
        <br />
        des cabinets médicaux.
      </h1>
      <button style={{ background: backgroundButton, color: colorButton }}>
        Demandez une démonstration
      </button>
    </div>
  );
};

export default DemandeDemonstration;

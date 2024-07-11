import React from "react";
import styles from "../../styles/components/common/_DemandeDemonstration.module.scss";

const DemandeDemonstration = () => {
  return (
    <div className={styles.DemandeDemo}>
      <h1>
        <span className={styles.boldText}>
          <span className={styles.underLineText}>Sobrus MED</span> au service de
          la digitalisation
        </span>{" "}
        <br />
        des cabinets médicaux.
      </h1>
      <button>Demandez une démonstration</button>
    </div>
  );
};

export default DemandeDemonstration;

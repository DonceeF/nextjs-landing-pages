import React from "react";
import styles from "../../styles/components/functionality/_Section5.module.scss";
import NumbersInfo from "./NumbersInfo";

const Section5 = () => {
  return (
    <div className={styles.section}>
      <h2>
        Des <span>larges bases de données</span> conforme aux normes nationales
        et internationales
      </h2>
      <p>
        Restez à jour grâce à notre large base de données produits qui compte{" "}
        <span>
          plus de 82.000 médicaments et produits parapharmaceutiques, ainsi que
        </span>{" "}
        notre glossaire des maladies intégré, avec{" "}
        <span>plus de 16.000 maladies référenciées par l&apos;OMS.</span>
      </p>
      <div className={styles.NumbersInfo}>
        <NumbersInfo
          number1="+87.000*"
          paragraph="médicaments et produits parapharmaceutiques"
        />
        <NumbersInfo
          number1="16.000"
          paragraph="plus de 16.000 maladies référenciées par l'OMS."
        />
      </div>
      <h6>
        *Le nombre augmente à raison <br /> de 100 produits chaque jour
      </h6>
    </div>
  );
};

export default Section5;

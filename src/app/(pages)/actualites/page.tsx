import React from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/pages/_actualites.module.scss";
import img1 from "../../../../public/img/actualites-img-1.png";
import img2 from "../../../../public/img/actualites-img-2.png";
import img3 from "../../../../public/img/actualites-img-3.png";
import img4 from "../../../../public/img/actualites-img-4.png";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Title = dynamic(() => import("../../components/common/Title"));
const DemandeDemonstration = dynamic(
  () => import("../../components/common/DemandeDemonstration")
);
const ActualitesParts = dynamic(
  () => import("../../components/actualites/ActualitesParts")
);

const page = () => {
  return (
    <>
      <Title title1="Actualités" />
      <div className={styles.main}>
        <div className={styles.contentGrid}>
          <ActualitesParts src={img1} />
          <ActualitesParts src={img3} />
          <ActualitesParts src={img2} />
          <ActualitesParts src={img4} />
        </div>
        <div className={styles.buttons}>
          <FaChevronLeft className={styles.icon} />
          <h2>2</h2>
          <FaChevronRight className={styles.icon} />
        </div>
      </div>
      <DemandeDemonstration
        background="rgba(248, 248, 248, 1)"
        backgroundButton="#19b0d2"
        color="#000"
        colorButton="#fff"
        lightUnderLine={false}
      />
    </>
  );
};

export default page;

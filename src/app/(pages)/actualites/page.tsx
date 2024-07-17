import React from 'react';
import DemandeDemonstration from "../../components/common/DemandeDemonstration";
import Title from "../../components/common/Title";
import ActualitesParts from '../../components/actualites/ActualitesParts';
import img1 from "../../../../public/img/actualites-img-1.png";
import img2 from "../../../../public/img/actualites-img-2.png";
import img3 from "../../../../public/img/actualites-img-3.png";
import img4 from "../../../../public/img/actualites-img-4.png";
import styles from "../../styles/pages/_actualites.module.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const page = () => {
  return (
    <>
        <Title title1="Actualités" />
        <div className={styles.main}>
          <div className={styles.contentGrid}>
            < ActualitesParts src={img1}/>
            < ActualitesParts src={img3}/>
            < ActualitesParts src={img2}/>
            < ActualitesParts src={img4}/>
          </div>
          <div className={styles.buttons}>
            <FaChevronLeft className={styles.icon}/>
            <h2>2</h2>
            <FaChevronRight className={styles.icon}/>
          </div>
        </div>
        <DemandeDemonstration />
    </>
  )
}

export default page
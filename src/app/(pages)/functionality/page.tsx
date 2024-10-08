import React from "react";
import dynamic from "next/dynamic";
import styles from "../../styles/pages/_functionality.module.scss";
import Image from "next/image";
import {
  functionality1,
  functionality2,
  functionality3,
  functionality4,
  functionality5,
  functionality6,
} from "../../../../public/img";

const DemandeDemonstration = dynamic(
  () => import("../../components/common/DemandeDemonstration"),
  {
    ssr: false,
  }
);
const Title = dynamic(() => import("../../components/common/Title"), {
  ssr: false,
});
const Paragraph = dynamic(() => import("@/app/components/common/Paragraph"), {
  ssr: false,
});
const Section5 = dynamic(
  () => import("../../components/functionality/Section5"),
  {
    ssr: false,
  }
);
const SliderButtons = dynamic(
  () => import("@/app/components/common/SliderButtons"),
  {
    ssr: false,
  }
);

const titles = [
  {
    title: (
      <h2>
        Des ordonnances <span>digitalisées</span>
      </h2>
    ),
    paragraph:
      "Garantissez une meilleure santé pour vos patients grâce aux ordonnances digitales, simples et faciles à interpréter.",
  },
  {
    title: (
      <h2>
        Une <span>gestion simplifiée</span> des rendez-vous digitalisées
      </h2>
    ),
    paragraph:
      "Garantissez une meilleure santé pour vos patients grâce aux ordonnances digitales, simples et faciles à interpréter.",
  },
  {
    title: (
      <h2>
        Des dossiers patients <span>informatisés</span>
      </h2>
    ),
    paragraph:
      "Garantissez une meilleure santé pour vos patients grâce aux ordonnances digitales, simples et faciles à interpréter.",
  },
  {
    title: (
      <h2>
        Des <span>consultations plus fluide</span>
      </h2>
    ),
    paragraph:
      "Profitez de notre système complet pour une consultation plus fluide et bien maîtrisée.",
  },
  {
    title: (
      <h2>
        Un <span>suivi </span>
        <span>pointu </span>
        <span>de </span>
        <span>la </span>
        <span>facturation</span>
      </h2>
    ),
    paragraph:
      "Gardez une parfaite traçabilité sur les entrées de votre cabinet grâce à notre module de facturation.",
  },
];

export default function Home() {
  return (
    <>
      <Title title1="Fonctionnalités" />
      <div className={styles.Section1}>
        <Paragraph title={titles[0].title} paragraph={titles[0].paragraph} />
        <div className={styles.image}>
          <Image src={functionality1} alt="" />
          <SliderButtons />
          <div className={styles.cercle}></div>
        </div>
      </div>
      <div className={styles.Section2}>
        <div className={styles.image}>
          <Image src={functionality2} alt="" />
          <div className={styles.bigRec}></div>
          <div className={styles.smallRec}></div>
        </div>
        <Paragraph title={titles[1].title} paragraph={titles[1].paragraph} />
      </div>
      <div className={styles.Section3}>
        <Paragraph title={titles[2].title} paragraph={titles[2].paragraph} />
        <div className={styles.image}>
          <Image src={functionality3} alt="" />
          <div className={styles.cercle2}></div>
        </div>
      </div>

      <div className={styles.Section4}>
        <div className={styles.image}>
          <Image src={functionality4} alt="" />
          <div className={styles.halfCercle}></div>
        </div>
        <Paragraph title={titles[3].title} paragraph={titles[3].paragraph} />
      </div>
      <div className={styles.Section5}>
        <Section5 />
        <div className={styles.image}>
          <Image src={functionality5} alt="" />
          <div className={styles.rec}></div>
        </div>
      </div>
      <div className={styles.Section6}>
        <div className={styles.image}>
          <Image src={functionality6} alt="" />
          <SliderButtons />
          <div className={styles.secondCercle}></div>
        </div>
        <Paragraph title={titles[4].title} paragraph={titles[4].paragraph} />
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
}

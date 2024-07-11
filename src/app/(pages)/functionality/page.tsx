import styles from "../../styles/pages/_functionality.module.scss";
import DemandeDemonstration from "../../components/common/DemandeDemonstration";
import Title from "../../components/common/Title";
import Paragraph from "@/app/components/common/Paragraph";
import Image from "next/image";
import Section5 from "../../components/functionality/Section5";
import {
  functionality1,
  functionality2,
  functionality3,
  functionality4,
  functionality5,
  functionality6,
} from "../../../../public/img";

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
          <div className={styles.cercle2}></div>
        </div>
        <Paragraph title={titles[3].title} paragraph={titles[3].paragraph} />
      </div>
      <div className={styles.Section5}>
        <Section5 />
        <div className={styles.image}>
          <Image src={functionality5} alt="" />
        </div>
      </div>
      <div className={styles.Section6}>
        <div className={styles.image}>
          <Image src={functionality6} alt="" />
          <div className={styles.cercle2}></div>
        </div>
        <Paragraph title={titles[4].title} paragraph={titles[4].paragraph} />
      </div>
      <DemandeDemonstration />
    </>
  );
}

import React from "react";
import styles from "@/app/styles/pages/_nos-outils.module.scss";
import Title from "@/app/components/common/Title";
import DemandeFormSection from "@/app/components/common/DemandeFormSection";
import Image from "next/image";
import Paragraph from "@/app/components/common/Paragraph";
import imgNosOutils1 from "../../../../public/img/nos-outils-img-1.png";
import imgNosOutils2 from "../../../../public/img/nos-outils-img-2.png";
import imgNosOutils3 from "../../../../public/img/nos-outils-img-3.png";
import MonOrdonnance from "../../../../public/img/mon_ordonnance_logo.png";
import ReasonMonOrdonnance from "@/app/components/nos-outils/ReasonMonOrdonnance";
import icon1 from "../../../../public/img/icon-nos-outils-1.png";
import icon2 from "../../../../public/img/icon-nos-outils-2.png";
import icon3 from "../../../../public/img/icon-nos-outils-3.png";
import icon4 from "../../../../public/img/icon-nos-outils-4.png";
import icon5 from "../../../../public/img/icon-nos-outils-5.png";
import icon6 from "../../../../public/img/icon-nos-outils-6.png";
import icon7 from "../../../../public/img/icon-nos-outils-7.png";

const titles = [
  {
    title: (
      <h2>
        <span>MonOrdonnance</span> c’est quoi ?
      </h2>
    ),
    paragraph:
      "Le premier logiciel en Afrique, 100% gratuit, dédié aux médecins spécialistes et généralistes, qui vous permet de gérer vos ordonnances et prescriptions médicales en toute simplicité grâce à son interface intuitive et une équipe de Support disponible. Il vous donne également accès à +90.000 fiches de médicaments et de produits de parapharmacie.",
  },
  {
    title: (
      <h2>
        <span>MonSiteSobrus</span> c’est quoi ?
      </h2>
    ),
    paragraph:
      "MonSiteSobrus est un nouveau service proposé par Sobrus pour permettre aux médecins de créer et personnaliser leur site web en 15 minutes sans prérequis techniques grâce à un modèle déjà en place créé en collaboration avec des médecins pour répondre à leurs besoins en terme de visibilité et pour être toujours proches de leurs patients.",
  },
];

const page = () => {
  return (
    <>
      <Title title1="Nos outils" />
      <div className={styles.main}>
        <div className={styles.definitionMonOrdonnance}>
          <div className={styles.paragraph}>
            <Image src={MonOrdonnance} alt="MonOrdonnance logo" />
            <Paragraph
              title={titles[0].title}
              paragraph={titles[0].paragraph}
            />
          </div>
          <div className={styles.image}>
            <Image src={imgNosOutils1} alt="" />
            <div className={styles.bigRec}></div>
          </div>
        </div>
        <div className={styles.whyMonOrdonnance}>
          <h2 className={styles.title}>
            Pourquoi utiliser <span>MonOrdonnance ?</span>
          </h2>
          <div className={styles.reasons}>
            <ReasonMonOrdonnance
              img={icon1}
              title="Base de produits complète et à jour"
            />
            <ReasonMonOrdonnance
              img={icon2}
              title="Gain de temps au quotidien"
            />
            <ReasonMonOrdonnance
              img={icon3}
              title="Parfaite traçabilité des prescriptions"
            />
          </div>
        </div>
        <div className={styles.ordonnace}>
          <h2 className={styles.title}>
            Ordonnance <span>avant </span>
            <span>et </span>
            <span>après</span>
          </h2>
          <div className={styles.image}>
            <Image src={imgNosOutils2} alt="Ordonnance avant et après" />
          </div>
        </div>
        <div className={styles.definitionMonSite}>
          <div className={styles.image}>
            <Image src={imgNosOutils3} alt="MonSiteSobrus image" />
            <div className={styles.bigRec}></div>
          </div>
          <Paragraph title={titles[1].title} paragraph={titles[1].paragraph} />
        </div>

        <div className={styles.whyMonSite}>
          <h2 className={styles.title}>
            Pourquoi utiliser <span>MonSiteSobrus</span> ?
          </h2>
          <div className={styles.reasons}>
            <ReasonMonOrdonnance img={icon4} title="Une visibilité garantie" />
            <ReasonMonOrdonnance
              img={icon5}
              title="Une personnalisation en 15 minutes"
            />
            <ReasonMonOrdonnance
              img={icon6}
              title="Un service client disponible"
            />
            <ReasonMonOrdonnance img={icon7} title="Une formation gratuite" />
          </div>
        </div>
      </div>
      <DemandeFormSection />
    </>
  );
};

export default page;

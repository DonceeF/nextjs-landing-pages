import React from "react";
import DemandeDemonstration from "../../components/common/DemandeDemonstration";
import Title from "../../components/common/Title";
import styles from "../../styles/pages/_tarification.module.scss";
import FeatureColumn from "../../components/tarification/FeatureColumn";
import sobrusLogo from "../../../../public/img/logo.png";
import monOrdonnanceLogo from "../../../../public/img/mon_ordonnance_logo.png";
import chezLeDorcteurLogo from "../../../../public/img/ChezleDocteur_logo.png";

const page = () => {
  return (
    <>
      <Title title1="Tarification" />
      <div className={styles.main}>
        <div className={styles.features}>
          <div>
            <h5>Digitalisation des ordonnaces</h5>
          </div>
          <div>
            <h5>Gestion des fichiers patients</h5>
          </div>
          <div>
            <h5>
              Une base de données de{" "}
              <span>+82.000 médicaments et produits pharmaceutiques</span>
            </h5>
          </div>
          <div>
            <h5>Modèles d&apos;ordonnances préétablies</h5>
          </div>
          <div>
            <h5>Gestion des rendez-vous</h5>
          </div>
          <div>
            <h5>Gestion de votre page professionnelle</h5>
          </div>
          <div>
            <h5>Augmenter la visibilité de votre cabinets</h5>
          </div>
          <div>
            <h5>La gestion de la salle d&apos;attente</h5>
          </div>
          <div>
            <h5>La gestion de votre facturation</h5>
          </div>
          <div>
            <h5>La centralisation de vos consultations</h5>
          </div>
          <div>
            <h5>La gestion des patients mutualiste</h5>
          </div>
          <div className={styles.last}>
            <h5>L&apos;intégration des documents</h5>
          </div>
        </div>
        <FeatureColumn
          src1={monOrdonnanceLogo}
          valid={4}
          button={"Démarrez gratuitement"}
        />
        <FeatureColumn
          src1={chezLeDorcteurLogo}
          valid={7}
          button={"Contactez-nous"}
        />
        <FeatureColumn
          src1={sobrusLogo}
          valid={12}
          button={"Demandez un démo"}
          active={true}
        />
        <FeatureColumn
          src1={sobrusLogo}
          src2={chezLeDorcteurLogo}
          valid={12}
          button={"Contactez-nous"}
        />
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

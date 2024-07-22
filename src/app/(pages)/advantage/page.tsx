import React from "react";
import DemandeDemonstration from "../../components/common/DemandeDemonstration";
import Title from "../../components/common/Title";
import iconAvan1 from "../../../../public/img/icon-avantage1.png";
import iconAvan2 from "../../../../public/img/icon-avantage2.png";
import iconAvan3 from "../../../../public/img/icon-avantage3.png";
import iconAvan4 from "../../../../public/img/icon-avantage4.png";
import iconAvan5 from "../../../../public/img/icon-avantage5.png";
import iconAvan6 from "../../../../public/img/icon-avantage6.png";
import styles from "../../styles/pages/_advantage.module.scss";
import AdvantageElement from "../../components/advantage/AdvantageElement";

const advantages = [
  {
    icon: iconAvan1,
    title: "Un meilleur pilotage de votre activité",
    paragraph:
      "Pilotez le parcours de vos patients de la prise de rendez-vous jusqu'à la facturaction.",
  },
  {
    icon: iconAvan2,
    title: "Une sécurité et confidentialité maximale",
    paragraph:
      "Bénéficiez de tous les avantages du cloud et garantissez la sécurité de vos données et ceux de vos patients.",
  },
  {
    icon: iconAvan3,
    title: "Une gestion centralisée",
    paragraph:
      "Optimisez vos efforts et trouvez toutes vos informations en un seul endroit.",
  },
  {
    icon: iconAvan4,
    title: "Une sauvegarde automatique",
    paragraph:
      "Garantissez la pérennité de vos données avec la sauvegarde automatique et en temps réel.",
  },
  {
    icon: iconAvan5,
    title: "Des formations personnalisées",
    paragraph:
      "Bénéficiez de tous les avantages du cloud et garantissez la sécurité de vos données et ceux de vos patients.",
  },
  {
    icon: iconAvan6,
    title: "Une disponibilité immédiate du service client",
    paragraph:
      "N'hésitez pas à contacter notre service client, joignable 6j/7 pour vous écouter et répondre à vos questions et vos demandes.",
  },
];

const page = () => {
  return (
    <>
      <Title title1="Avantages" />
      <div className={styles.container}>
        {advantages.map((advantage, index) => (
          <AdvantageElement
            key={`advantage${index}`}
            src={advantage.icon}
            title={advantage.title}
            paragraph={advantage.paragraph}
          />
        ))}
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

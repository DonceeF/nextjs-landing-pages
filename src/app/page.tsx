import React from "react";
import styles from "./styles/pages/_page.module.scss";
import Image from "next/image";
import acceuil1 from "../../public/img/acceuil-img-1.png";
import acceuil2 from "../../public/img/acceuil-img-2.png";
import ContactForm from "./components/home/ContactForm";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import InfoContact from "./components/home/InfoContact";
import DemandeForm from "./components/home/DemandeForm";
import Paragraph from "./components/common/Paragraph";
import CopieButton from "./components/common/CopieButton";
import SliderItems from "./components/home/SliderItems";

const titles = [
  {
    title: (
      <h2>
        La solution qui vous accompagne <span>durant </span>
        <span>tout </span>
        <span>le </span>
        <span>processus</span> de vos consultations
      </h2>
    ),
    paragraph:
      "Pilotez le parcours de vos patients de la prise de rendez-vous jusqu’à la facturation, en passant par la consultation, la prescription médicale sur ordonnance digitale et la constitution du dossier patient. ",
  },
];

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.Section1}>
        <div className={styles.textPart}>
          <h1>
            Sobrus MED au service de la digitalisation des{" "}
            <span>cabinets </span>
            <span>médicaux.</span>
          </h1>
          <h5>
            La solution idéale pour gérer efficacement votre cabinet médical.
          </h5>
          <div className={styles.Form}>
            <h5>Je souhaite être contacté</h5>
            <ContactForm />
          </div>
        </div>
        <div className={styles.imageAcceuil1}>
          <Image src={acceuil1} alt="" />
        </div>
      </div>

      <div className={styles.Definition}>
        <div className={styles.imgAcceuil}>
          <Image src={acceuil2} alt="page d'acceuil 2" />
        </div>
        <div className={styles.paragraph}>
          <h1>Qu&apos;est-ce que Sobrus MED ?</h1>
          <p>
            <span>
              Sobrus MED est la solution Cloud idéale à la gestion des{" "}
            </span>
            cabinets médicaux. La solution se caractérise par une sécurité et
            une confidentialité maximales pour toutes vos données et ceux de vos
            patients.
          </p>
          <p>
            <span>
              Sobrus MED vous donne la possibilité de profiter d&apos;une{" "}
            </span>
            panoplie d&apos;avantages dédiée aux médecins pour les accompagner
            dans leur transition digitale avec une interface simple, des
            formations personnalisées et un service client disponible pour vous
            aider à exceller dans votre transformation.
          </p>
        </div>
      </div>

      <div className={styles.Solution}>
        <div className={styles.image}>
          {/* <Image src={} alt="" /> */}
          <div className={styles.cercle2}></div>
        </div>
        <Paragraph title={titles[0].title} paragraph={titles[0].paragraph} />
      </div>

      <div className={styles.Section2}>
        <div>
          <h4>Témoignages</h4>
          <h2>Ce que les médecins en pensent ?</h2>
        </div>
        <div>{/* <SliderItems /> */}</div>
      </div>
      <div className={styles.Section3}>
        <h3>
          Vous êtes médecin et vous avez besoin d&apos;un logiciel de
          <br /> gestion pour votre cabinet médical ?
        </h3>
        <h4>Démonstration gratuitement !</h4>
        <h5 className={styles.FirstH5}>
          Notre équipe prendra contract avec vous pour répondre à toutes <br />
          vos questions
        </h5>
        <div className={styles.ContactInfo}>
          <InfoContact
            titre="Téléphone"
            valeur="05 30 500 500"
            icon={<IoCallOutline />}
            iconColor="#19b0d2"
            iconBackground="#fff"
            textColor="#fff"
          />
          <div className={styles.copyPasteDiv}>
            <InfoContact
              titre="E-mail"
              valeur="support@sobrus.com"
              icon={<CiMail />}
              iconColor="#19b0d2"
              iconBackground="#fff"
              textColor="#fff"
            />
            <CopieButton background="#19b0d2" color="#fff" />
          </div>
        </div>
        <div className={styles.DemandeForm}>
          <DemandeForm />
        </div>
      </div>
    </div>
  );
};

export default Home;

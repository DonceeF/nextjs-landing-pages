import React from "react";
import styles from "../../styles/components/common/_DemandeFormSection.module.scss";
import InfoContact from "../home/InfoContact";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import CopieButton from "./CopieButton";
import DemandeForm from "../home/DemandeForm";

const DemandeFormSection = () => {
  return (
    <div className={styles.main}>
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
          <CopieButton background="#2bb6d5" color="#fff" />
        </div>
      </div>
      <div className={styles.DemandeForm}>
        <DemandeForm />
      </div>
    </div>
  );
};

export default DemandeFormSection;

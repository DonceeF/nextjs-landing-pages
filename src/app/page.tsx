import styles from "./styles/pages/_page.module.scss";
import Image from "next/image";
import acceuil1 from "../../public/img/acceuil-img-1.png";
import ContactForm from "./components/home/ContactForm";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import InfoContact from "./components/home/InfoContact";
import DemandeForm from "./components/home/DemandeForm";
import SliderItems from "./components/home/SliderItems";

const telephoneInfo = {
  titre: "Telephone",
  valeur: "05 30 500 500",
  children: <IoCallOutline />,
};

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.Section1}>
        <div className={styles.textPart}>
          <h1>
            Sobrus MED au service de la digitalisation des cabinets médicaux.
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
          <Image src={acceuil1} alt=""></Image>
        </div>
      </div>
      <div className={styles.Section2}>
        <div>
          <h4>Témoignages</h4>
          <h2>Ce que les médecins en pensent ?</h2>
        </div>
        {/* <SliderItems /> */}
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
          />
          <InfoContact
            titre="E-mail"
            valeur="support@sobrus.com"
            icon={<CiMail />}
          />
        </div>
        <div className={styles.DemandeForm}>
          <DemandeForm />
        </div>
      </div>
    </div>
  );
};

export default Home;

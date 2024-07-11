import styles from "../../styles/components/common/_Footer.module.scss";
import Image from "next/image";
import FooterInfo from "./FooterInfo";
import FooterContact from "./FooterContact";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import logo from "/public/img/logo.png";
import sobrusMED from "/public/img/logo-MED.png";
import sobrusWhite from "/public/img/logo-sobrus-white.png";

const footer_data = [
  {
    name: "SOLUTIONS",
    contenu: ["Sobrus Pharma", "Sobrus Labs", "Sobrus SNS", "Sobrus MED"],
  },
  {
    name: "OUTILS",
    contenu: [
      "Annuaire Médicaments",
      "Annuaire Pharmacies",
      "Annuaire Médecins",
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FirstPart}>
        <div className={styles.Definition}>
          <div className={styles.Logo}>
            <Image src={logo} alt="" />
            <p className={styles.parag}>
              <b>Sobrus MED est la solution Cloud idéale à la </b>
              <br />
              gestion des cabinets médicaux. La solution se caractérise par une
              sécurité et une confidentialité maximales pour toutes vos données
              et ceux de vos patients.
            </p>
          </div>
        </div>
        <div className={styles.SoluOuti}>
          {footer_data.map((data, index) => (
            <div key={`footer_div${index}`}>
              <FooterInfo name={data.name} contenu={data.contenu} />
            </div>
          ))}
        </div>
        <div className={styles.Contact}>
          <h4>
            CONTACTEZ-<b>NOUS</b>
          </h4>
          <div className={styles.moyenContact}>
            <FooterContact text="05 30 500 500" icon={<IoCallOutline />} />
            <FooterContact text="support@sobrus.com" icon={<CiMail />} />
            <FooterContact text="sobrus.com" icon={<TbWorldWww />} />
          </div>
        </div>
      </div>
      <div className={styles.SecondPart}>
        <div className={styles.copy}>
          <Image src={sobrusMED} alt="" />
          <h5>&copy; 2024</h5>
          <h5>Dernière mise à jour le 07/02/2024</h5>
        </div>
        <div className={styles.offert}>
          <h5>Offert par : </h5>
          <Image src={sobrusWhite} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

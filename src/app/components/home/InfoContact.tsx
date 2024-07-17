import React from "react";
import styles from "../../styles/components/home/_InfoContact.module.scss";
import { IconType } from "react-icons";

interface Props {
  titre: string;
  valeur: string;
  icon: React.ReactElement<IconType>;
  iconColor: string;
  iconBackground: string;
  textColor: string;
}

const InfoContact = ({
  titre,
  valeur,
  icon,
  iconColor,
  iconBackground,
  textColor,
}: Props) => {
  return (
    <div className={styles.InfoContact}>
      <div
        style={{ background: iconBackground, color: iconColor }}
        className={styles.Icon}
      >
        {icon}
      </div>
      <div style={{ color: textColor }} className={styles.InfoCard}>
        <h5>{titre}</h5>
        <h3>{valeur}</h3>
      </div>
    </div>
  );
};

export default InfoContact;

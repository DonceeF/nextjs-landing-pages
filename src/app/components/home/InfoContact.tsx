import styles from "../../styles/components/home/_InfoContact.module.scss";
import { IconType } from "react-icons";

interface Props {
  titre: string;
  valeur: string;
  icon: React.ReactElement<IconType>;
}

const InfoContact = ({ titre, valeur, icon }: Props) => {
  return (
    <div className={styles.InfoContact}>
      <div className={styles.Icon}>{icon}</div>
      <div className={styles.InfoCard}>
        <h5>{titre}</h5>
        <h3>{valeur}</h3>
      </div>
    </div>
  );
};

export default InfoContact;

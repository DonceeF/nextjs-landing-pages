import styles from "../../styles/components/common/_FooterContact.module.scss";
import { IconType } from "react-icons";

interface Props {
  text: string;
  icon: React.ReactElement<IconType>;
}

const FooterContact = ({ text, icon }: Props) => {
  return (
    <div className={styles.Icons}>
      {icon}
      <h6>{text}</h6>
    </div>
  );
};

export default FooterContact;

import React from "react";
import styles from "../../styles/components/common/_FooterContact.module.scss";
import { IconType } from "react-icons";
import PartageIcon from "../actualites/content/PartageIcon";

interface Props {
  text: string;
  icon: IconType;
}

const FooterContact = ({ text, icon }: Props) => {
  return (
    <div className={styles.Icons}>
      <PartageIcon
        iconBackground="#f8fdfd"
        iconBorder="transparent"
        iconColor="#19b0d2"
        Icon={icon}
      />
      <h5>{text}</h5>
    </div>
  );
};

export default FooterContact;

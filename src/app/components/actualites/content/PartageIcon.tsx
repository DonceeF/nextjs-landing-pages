import React from "react";
import styles from "../../../styles/components/actualites/content/_partageIcon.module.scss";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  iconColor: string;
  iconBackground: string;
  iconBorder: string;
}

const PartageIcon = ({
  Icon,
  iconBackground,
  iconColor,
  iconBorder,
}: Props) => {
  return (
    <div
      style={{
        background: iconBackground,
        color: iconColor,
        border: `solid 1px ${iconBorder}`,
      }}
      className={styles.icon}
    >
      <Icon />
    </div>
  );
};

export default PartageIcon;

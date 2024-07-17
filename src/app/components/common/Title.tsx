import React from "react";
import styles from "../../styles/components/common/_Title.module.scss";
import { FaRegUser } from "react-icons/fa";

interface Props {
  title1: string;
  title2?: string;
}

const Title = ({ title1, title2 }: Props) => {
  return (
    <>
      {title2 ? (
        <div className={styles.firstCase}>
          <h4>
            Acceuil / {title1} / <span> {title2}</span>
          </h4>
          <h1>{title2}</h1>
          <div className={styles.icon}>
            <FaRegUser />
            <h4>Sobrus Admin</h4>
          </div>
        </div>
      ) : (
        title1 === "Contact" ? (
          <div className={styles.headerTitleContact}>
            <div className={styles.secondCase}>
              <h4>
                Acceuil / <span>{title1}</span>
              </h4>
              <h1>
                Pour plus d’informations, <br />
                contactez-nous
              </h1>
            </div>

          </div>
          
        ) : (
          <div className={styles.headerTitle}>
            <div className={styles.secondCase}>
              <h4>
                Acceuil / <span>{title1}</span>
              </h4>
              <h1>{title1}</h1>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Title;

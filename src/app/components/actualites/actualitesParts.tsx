import React from 'react';
import styles from "../../styles/components/actualites/_actualitesParts.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";
interface Props {
  src: StaticImageData;
}

const ActualitesParts = ({src} : Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.Image}>
        <Image src={src} alt="Image d'actualite"/>
      </div>
      <div className={styles.paragraph}>
        <h2>Un meilleur pilotage de votre activité</h2>
        <h3>Pilotez le parcours de vos patients de la prise de rendez-vous jusqu&apos;à la facturation. </h3>
        
          <Link className={styles.link} href={"/actualites/content"}>
            <div className={styles.btn}>
              Lire la suite …{" "}
              <FaArrowRight />
            </div>
          </Link>
        
      </div>
    </div>
  )
}

export default ActualitesParts;
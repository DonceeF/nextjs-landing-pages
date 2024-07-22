import React from "react";
import Title from "@/app/components/common/Title";
import DemandeDemonstration from "@/app/components/common/DemandeDemonstration";
import styles from "../../../styles/pages/content/_content.module.scss";
import Image from "next/image";
import img from "../../../../../public/img/pilotage-img.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import PartageIcon from "@/app/components/actualites/content/PartageIcon";

const page = () => {
  return (
    <>
      <Title
        title1="Actualités"
        title2="Un meilleur pilotage de votre activité"
      />
      <div className={styles.main}>
        <div className={styles.image}>
          <Image src={img} alt="Image de pilotage" />
        </div>
        <div className={styles.paragraph}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
            <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu
            <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non{" "}
            <br />
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>
        <div className={styles.partage}>
          <h3>Partager l’article</h3>
          <div className={styles.icons}>
            <PartageIcon
              iconBackground="#fff"
              iconBorder="#e0e0e0"
              iconColor="#19b0d2"
              Icon={FaFacebookF}
            />
            <PartageIcon
              iconBackground="#fff"
              iconBorder="#e0e0e0"
              iconColor="#19b0d2"
              Icon={FaInstagram}
            />
            <PartageIcon
              iconBackground="#fff"
              iconBorder="#e0e0e0"
              iconColor="#19b0d2"
              Icon={FaLinkedinIn}
            />
          </div>
        </div>
      </div>
      <DemandeDemonstration
        background="rgba(248, 248, 248, 1)"
        backgroundButton="#19b0d2"
        color="#000"
        colorButton="#fff"
        lightUnderLine={false}
      />
    </>
  );
};

export default page;

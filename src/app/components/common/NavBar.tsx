import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/components/common/_NavBar.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo.png";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.FirstPart}>
        <h5>Besoin d&apos;aide ? Appelez nous sur le 05 30 500 500</h5>
        <div className={styles.Icons}>
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
      </div>
      <div className={styles.SecondPart}>
        <div className={styles.Logo}>
          <Image src={logo} alt=""></Image>
        </div>
        <div className="List">
          <ul>
            <li className={"index0"}>
              <Link href={"/"}>Acceuil</Link>
            </li>
            <li className={"index1"}>
              <Link href={"/functionality"}>Fonctionnalités</Link>
            </li>
            <li className={"index2"}>
              <Link href={"/advantage"}>Avantages</Link>
            </li>
            <li className={"index3"}>
              <Link href={"/tarification"}>Tarification</Link>
            </li>
            <li className={"index4"}>
              <Link href={"/actualites"}>Actualités</Link>
            </li>
            <li className={"index5"}>
              <Link href={"/"}>Contact</Link>
            </li>
            <li className={"index6"}>
              <Link href={"/"}>FAQ</Link>
            </li>

            <li></li>
          </ul>
        </div>
        <div className={styles.Buttons}>
          <Button content="se connecter" colored={false} />
          <Button content="s'inscrire" colored={true} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

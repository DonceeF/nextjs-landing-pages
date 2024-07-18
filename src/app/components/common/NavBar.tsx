"use client";
import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../../styles/components/common/_NavBar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/img/logo.png";
import Button from "./Button";

const NavBar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  const menuItems = [
    { href: "/", label: "Acceuil" },
    { href: "/functionality", label: "Fonctionnalités" },
    { href: "/advantage", label: "Avantages" },
    { href: "/tarification", label: "Tarification" },
    { href: "/actualites", label: "Actualités" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

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
          <Image src={logo} alt="Logo" />
        </div>
        <div className={styles.List}>
          <ul>
            {menuItems.map(({ href, label }) => (
              <li
                key={href}
                className={
                  href === "/actualites" && activePath === "/actualites/content"
                    ? styles.active
                    : activePath === href
                    ? styles.active
                    : ""
                }
              >
                <Link onClick={() => handleClick(href)} href={href}>
                  {label}
                </Link>
              </li>
            ))}
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

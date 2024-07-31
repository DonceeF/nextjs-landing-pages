"use client";

import React from "react";
import dynamic from "next/dynamic";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import styles from "@/app/styles/pages/_contact.module.scss";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Title = dynamic(() => import("@/app/components/common/Title"));
const DemandeDemonstration = dynamic(
  () => import("@/app/components/common/DemandeDemonstration")
);
const InfoContact = dynamic(() => import("@/app/components/home/InfoContact"));
const PartageIcon = dynamic(
  () => import("@/app/components/actualites/content/PartageIcon")
);
const CopieButton = dynamic(
  () => import("@/app/components/common/CopieButton")
);
const FormContact = dynamic(
  () => import("@/app/components/contact/FormContact")
);
const ErrorBoundary = dynamic(
  () => import("../../errorBoundary/ErrorBoundary"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <Title title1="Contact" />
      <div className={styles.main}>
        <ErrorBoundary fallback="Something went wrong with the contact form.">
          <FormContact />
        </ErrorBoundary>
        <div className={styles.info}>
          <p>
            Notre équipe prendra contact avec vous pour répondre à toutes vos{" "}
            <br />
            questions.
          </p>
          <div className={styles.ContactInfo}>
            <InfoContact
              titre="Téléphone"
              valeur="05 30 500 500"
              icon={<IoCallOutline />}
              iconColor="#19b0d2"
              iconBackground="#eaf3f6"
              textColor="#000"
            />
            <div className={styles.copyDiv}>
              <InfoContact
                titre="E-mail"
                valeur="support@sobrus.com"
                icon={<CiMail />}
                iconColor="#19b0d2"
                iconBackground="#eaf3f6"
                textColor="#000"
              />
              <CopieButton background="#79d1e5" color="#fff" />
            </div>
          </div>
          <div className={styles.icons}>
            <PartageIcon
              iconBackground="#eaf3f6"
              iconBorder="transparent"
              iconColor="#19b0d2"
              Icon={FaFacebookF}
            />
            <PartageIcon
              iconBackground="#eaf3f6"
              iconBorder="transparent"
              iconColor="#19b0d2"
              Icon={FaInstagram}
            />
            <PartageIcon
              iconBackground="#eaf3f6"
              iconBorder="transparent"
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

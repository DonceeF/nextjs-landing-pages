"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import Title from "@/app/components/common/Title";
import DemandeDemonstration from "@/app/components/common/DemandeDemonstration";
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import styles from "@/app/styles/pages/_contact.module.scss";
import InfoContact from "@/app/components/home/InfoContact";
import PartageIcon from "@/app/components/actualites/content/PartageIcon";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import CopieButton from "@/app/components/common/CopieButton";

enum Specialite {
  MEDECINE = "Médecine",
  CHIRURGIE = "Chirurgie",
  RADIOLOGIE = "Radiologie",
  LABORATOIRE = "Laboratoire",
}
interface FormInput {
  mobileNumber: number;
  speciality: Specialite;
  lastName: string;
  firstName: string;
  message: string;
}

const page = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const response = await fetch(
        "https://api.sobrus.ovh/api/med/contact-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      reset();
    }
  };

  return (
    <>
      <Title title1="Contact" />
      <div className={styles.main}>
        <div className={styles.form}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={styles.formRow}>
              <div className={styles.FormLabelInput}>
                <label>Nom du medécin</label>
                <div className={styles.FormInput}>
                  <div className={styles.Icon}>
                    <FaRegUser />
                  </div>
                  <input
                    className={styles.Input}
                    placeholder={"Votre nom ici …"}
                    {...register("lastName", { required: true })}
                  />
                </div>
              </div>
              <div className={styles.FormLabelInput}>
                <label>Prénom du médecin</label>
                <div className={styles.FormInput}>
                  <div className={styles.Icon}>
                    <FaRegUser />
                  </div>
                  <input
                    className={styles.Input}
                    placeholder={"Votre prénom ici …"}
                    {...register("firstName", { required: true })}
                  />
                </div>
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.FormLabelInput}>
                <label>Téléphone portable</label>
                <div className={styles.FormInput}>
                  <div className={styles.Icon}>
                    <IoCallOutline />
                  </div>
                  <input
                    className={styles.Input}
                    placeholder={"Votre téléphone ici …"}
                    {...register("mobileNumber", { required: true })}
                  />
                </div>
              </div>
              <div className={styles.FormLabelInput}>
                <label>Spécialité</label>
                <div className={styles.FormInput}>
                  <div className={styles.Icon}>
                    <FaStethoscope />
                  </div>
                  <select {...register("speciality")} className={styles.Input}>
                    <option value="" disabled selected>
                      Votre spécialité ici …
                    </option>
                    {Object.entries(Specialite).map(([key, value]) => (
                      <option key={key} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.formRowTextArea}>
              <label>Message</label>
              <div className={styles.FormTextArea}>
                <div className={styles.Icon}>
                  <AiFillMessage />
                </div>

                <textarea
                  className={styles.textArea}
                  placeholder="Votre message ici …"
                  {...register("message", { required: true })}
                />
              </div>
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
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

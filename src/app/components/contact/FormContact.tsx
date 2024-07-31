"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { FaStethoscope } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import styles from "@/app/styles/pages/_contact.module.scss";
import axios from "axios";
import { MdDone } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";

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

const FormContact = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [showResponse, setShowResponse] = useState(false);
  const [showError, setShowError] = useState(false);

  const { register, handleSubmit, reset } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const res = await axios.post(
        "https://api.sobrus.ovh/api/med/contact-request",
        data
      );

      console.log(res.data);
      setResponse(res.data);
      setShowResponse(true);
      setShowError(false);
      setTimeout(() => {
        setShowResponse(false);
      }, 3000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
      setShowError(true);
      setShowResponse(false);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } finally {
      reset();
    }
  };

  return (
    <>
      <div
        className={`${styles.form} ${showResponse ? styles.green : ""} ${
          showError ? styles.red : ""
        }`}
      >
        {(showResponse || showError) && <div className={styles.over}></div>}

        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.formRow}>
            <div className={styles.FormLabelInput}>
              <label>Nom du médecin</label>
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
          {showResponse && response && (
            <div className={styles.valid}>
              <div className={styles.correct}>
                <MdDone />
              </div>
              <h1 className={styles.validH1}>
                Response: {JSON.stringify(response)}
              </h1>
            </div>
          )}
          {showError && error && (
            <div className={styles.valid}>
              <div className={styles.notCorrect}>
                <BsPlusLg />
              </div>
              <h1 className={styles.notValidH1}>Error: {error}</h1>
            </div>
          )}
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </>
  );
};

export default FormContact;

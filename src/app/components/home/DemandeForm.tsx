"use client";
import React from "react";
import styles from "../../styles/components/home/_DemandeForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import InputForm from "../common/InputForm";
import { IFormInput } from "@/app/types/common.type";

const DemandeForm = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.FormDiv}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label="Nom du medécin"
          register={register}
          placeholder="Votre nom ici ..."
          name="nom"
          icon={<FaRegUser />}
          required={true}
        />

        <InputForm
          label="Prénom du médecin"
          register={register}
          placeholder="Votre prénom ici ..."
          name="prenom"
          icon={<FaRegUser />}
          required={true}
        />

        <div className={styles.Checkbox}>
          <input
            {...register("checkbox", { required: true })}
            type="checkbox"
          />
          <p>
            J&apos;accepte{" "}
            <span>les conditions générales d&apos;utilisations</span>
          </p>
        </div>

        <div className={styles.FormLabelInput}>
          <label>Spécialité</label>
          <div className={styles.FormInput}>
            <div className={styles.Icon}>
              <CiMail />
            </div>
            <select {...register("specialite")} className={styles.Input}>
              <option value="" disabled selected>
                Choisissez spécialité
              </option>
            </select>
          </div>
        </div>

        <InputForm
          label="Téléphone portable"
          register={register}
          placeholder="Votre téléphone ici ..."
          name="telephone"
          icon={<IoCallOutline />}
          required={true}
        />

        <div className={styles.FormSubmit}>
          <button>
            Demander une démonstration
            <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemandeForm;

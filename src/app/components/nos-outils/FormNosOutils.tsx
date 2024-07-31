"use client";
import React from "react";
import styles from "../../styles/components/nos-outils/_FormNosOutils.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { TbBriefcase2Filled } from "react-icons/tb";
import InputForm from "../common/InputForm";

enum Specialite {}
interface IFormInput {
  telephone: number;
  specialite: Specialite;
  nom: string;
  prenom: string;
  checkbox: boolean;
}

const FormNosOutils = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={styles.FormDiv}>
      <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          label="Nom du médecin"
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

        <div className={styles.FormLabelInput}>
          <label>Spécialité</label>
          <div className={styles.FormInput}>
            <div className={styles.Icon}>
              <TbBriefcase2Filled />
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
        <div className={styles.CheckboxesContainer}>
          <label>Choisir produits </label>
          <div className={styles.checkboxes}>
            <div className={styles.inputs}>
              <input
                {...register("checkbox", { required: true })}
                type="checkbox"
              />
              <p>MonSiteSobrus </p>
            </div>
            <div className={styles.inputs}>
              <input
                {...register("checkbox", { required: true })}
                type="checkbox"
              />
              <p>MonOrdonnance</p>
            </div>
          </div>
        </div>

        <div className={styles.FormSubmit}>
          <button>
            Demander une démonstration
            <FaArrowRight />
          </button>
        </div>
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
      </form>
    </div>
  );
};

export default FormNosOutils;

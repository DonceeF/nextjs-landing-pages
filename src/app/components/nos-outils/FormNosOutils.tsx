"use client";
import React from "react";
import styles from "../../styles/components/nos-outils/_FormNosOutils.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { TbBriefcase2Filled } from "react-icons/tb";

enum Specialite {}
interface IFormInput {
  telephone: number;
  specialite: Specialite;
  nom: string;
  prenom: string;
  checkbox1: boolean;
  checkbox2: boolean;
  checkbox3: boolean;
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
        <div className={styles.FormLabelInput}>
          <label>Nom du médecin</label>
          <div className={styles.FormInput}>
            <div className={styles.Icon}>
              <FaRegUser />
            </div>
            <input
              className={styles.Input}
              placeholder={"Votre nom ici …"}
              {...register("nom", { required: true })}
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
              {...register("prenom", { required: true })}
            />
          </div>
        </div>

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

        <div className={styles.FormLabelInput}>
          <label>Téléphone portable</label>
          <div className={styles.FormInput}>
            <div className={styles.Icon}>
              <IoCallOutline />
            </div>
            <input
              className={styles.Input}
              placeholder={"Votre téléphone ici …"}
              {...register("telephone", { required: true })}
            />
          </div>
        </div>
        <div className={styles.CheckboxesContainer}>
          <label>Choisir produits </label>
          <div className={styles.checkboxes}>
            <div className={styles.inputs}>
              <input
                {...register("checkbox1", { required: true })}
                type="checkbox"
              />
              <p>MonSiteSobrus </p>
            </div>
            <div className={styles.inputs}>
              <input
                {...register("checkbox2", { required: true })}
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
            {...register("checkbox3", { required: true })}
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

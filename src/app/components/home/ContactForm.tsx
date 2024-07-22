"use client";
import React from "react";
import styles from "../../styles/components/home/_ContactForm.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../common/Button";

enum Disponibilite {
  dispo = "oui",
  nonDespo = "non",
}

interface IFormInput {
  telephone: number;
  disponibilite: Disponibilite;
}

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.Input}
        placeholder="Votre téléphone ici ..."
        {...register("telephone", { required: true })}
      />
      {
        //errors.disponibilite && <span>This field is required</span>
      }

      <select
        {...register("disponibilite", { required: true })}
        className={styles.Select}
      >
        <option value="" disabled selected>
          Disponibilté
        </option>
        <option value="oui">oui</option>
        <option value="non">non</option>
      </select>
      {
        //errors.disponibilite && <span>This field is required</span>
      }
      <Button content="Demander" colored={true} />
    </form>
  );
};

export default ContactForm;

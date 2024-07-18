"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Title from "@/app/components/common/Title";
import DemandeDemonstration from "@/app/components/common/DemandeDemonstration";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/pages/_faq.module.scss";
import QuestionsComponent from "@/app/components/faq/QuestionsComponent";
import AlternatingBackground from "@/app/components/faq/AlternatingBackground";

interface FormInput {
  search: string;
}

const questions = [
  {
    question: "Où sont stockées nos données ?",
    answer:
      "Vos données sont chiffrées de bout en bout et stockées sur des serveurs dédiés qui se trouvent dans des datacenters certifiés selon les normes internationales et de haute sécurité, inaccessibles au public.",
  },
  {
    question: "Question 2?",
    answer: "Answer 2.",
  },
];

const page = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Title title1="Foire Aux Questions" />
      <div className={styles.main}>
        <div className={styles.searchBar}>
          <form
            className={styles.formContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className={styles.Input}
              placeholder={"Recherchez une question ici …"}
              {...register("search", { required: true })}
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
        <div className={styles.questionsPart}>
          {questions.map((q, index) => (
            <AlternatingBackground key={index} index={index}>
              <QuestionsComponent question={q.question} answer={q.answer} />
            </AlternatingBackground>
          ))}
        </div>
      </div>
      <DemandeDemonstration />
    </>
  );
};

export default page;

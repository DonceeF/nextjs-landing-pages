"use client";
import React, { useEffect, useState } from "react";
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

interface FAQ {
  id: number;
  question: string;
  answer: string;
  feedback: string;
}

const page = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  useEffect(() => {
    async function fetchData() {
      const url = new URL("https://api.sobrus.ovh/api/published-faqs");
      url.searchParams.append("application", "sobrus_med");
      url.searchParams.append("order", "DESC");

      try {
        const res = await fetch(url.toString());
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setFaqs(data.data);
      } catch (error) {
        console.error("Error fetching data:", (error as Error).message);
      }
    }

    fetchData();
  }, []);

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
          {faqs.map((faq) => (
            <AlternatingBackground key={faq.id} index={faq.id}>
              <QuestionsComponent
                question={faq.question}
                answer={JSON.parse(faq.answer).blocks[0].text}
              />
            </AlternatingBackground>
          ))}
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

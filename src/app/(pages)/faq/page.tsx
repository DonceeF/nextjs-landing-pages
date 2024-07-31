"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import styles from "../../styles/pages/_faq.module.scss";
const SearchBar = dynamic(() => import("../../components/faq/SearchBar"), {
  ssr: false,
});
const ErrorBoundary = dynamic(
  () => import("../../errorBoundary/ErrorBoundary"),
  {
    ssr: false,
  }
);
const Title = dynamic(() => import("@/app/components/common/Title"));
const DemandeDemonstration = dynamic(
  () => import("@/app/components/common/DemandeDemonstration")
);
const QuestionsComponent = dynamic(
  () => import("@/app/components/faq/QuestionsComponent")
);
const AlternatingBackground = dynamic(
  () => import("@/app/components/faq/AlternatingBackground")
);

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
      try {
        const response = await axios.get<{ data: FAQ[] }>(
          "https://api.sobrus.ovh/api/published-faqs",
          {
            params: {
              application: "sobrus_med",
              order: "DESC",
            },
          }
        );
        console.log(response.data);
        setFaqs(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Title title1="Foire Aux Questions" />
      <div className={styles.main}>
        <div className={styles.searchBar}>
          <ErrorBoundary fallback="Something went wrong with the search bar.">
            <SearchBar />
          </ErrorBoundary>
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

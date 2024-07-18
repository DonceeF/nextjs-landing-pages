"use client";

import React from "react";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineMinus } from "react-icons/hi2";
import { BsPlusLg } from "react-icons/bs";
import PartageIcon from "../actualites/content/PartageIcon";
import styles from "../../styles/components/faq/_questionsComponent.module.scss";

interface QuestionProps {
  question: string;
  answer: string;
}

const QuestionsComponent = ({ question, answer }: QuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className={styles.main}>
      <div className={styles.questionPart}>
        <div className={styles.question}>
          <PartageIcon
            iconBackground="#eaf3f6"
            iconBorder="transparent"
            iconColor="#19b0d2"
            Icon={FaRegCircleQuestion}
          />
          <h2>{question}</h2>
        </div>
        <div className={styles.toggleButton}>
          {showAnswer ? (
            <button onClick={toggleAnswer}>
              <HiOutlineMinus />
            </button>
          ) : (
            <button onClick={toggleAnswer}>
              <BsPlusLg />
            </button>
          )}
        </div>
      </div>
      {showAnswer && (
        <>
          <div className={styles.line}></div>
          <div className={styles.answerPart}>
            <p>{answer}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionsComponent;

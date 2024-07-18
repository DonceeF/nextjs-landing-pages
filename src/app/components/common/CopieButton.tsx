"use client";
import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { MdDone } from "react-icons/md";
import styles from "../../styles/components/common/_CopieButton.module.scss";

interface CopieButtonProps {
  background: string;
  color: string;
}

const CopieButton = ({ background, color }: CopieButtonProps) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("support@sobrus.com");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <button
      style={{ background: background, color: color }}
      onClick={copyToClipboard}
      className={styles.CopyButton}
    >
      {copySuccess ? <MdDone /> : <MdContentCopy />}
    </button>
  );
};

export default CopieButton;

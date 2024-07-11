import styles from "../../styles/components/common/_Button.module.scss";

interface Props {
  content: string;
  colored: boolean;
}

const Button = ({ content, colored }: Props) => {
  return (
    <button
      className={colored ? styles.coloredButton : styles.notColoredButton}
    >
      {content}
    </button>
  );
};

export default Button;

import styles from "../../styles/components/common/_InputForm.module.scss";
import { UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";
import { IFormInput } from "../../components/home/DemandeForm";

interface Props {
  label: string;
  name:
    | "telephone"
    | "specialite"
    | "nom"
    | "prenom"
    | "checkbox"
    | "telephone.toFixed"
    | "telephone.toExponential"
    | "telephone.toPrecision"
    | "telephone.toLocaleString"
    | "telephone.toString"
    | "telephone.valueOf";
  placeholder: string;
  register: UseFormRegister<IFormInput>;
  icon: React.ReactElement<IconType>;
  required?: boolean;
}

const InputForm = ({
  label,
  placeholder,
  name,
  register,
  icon,
  required,
}: Props) => {
  return (
    <div className={styles.FormLabelInput}>
      <label>{label}</label>
      <div className={styles.FormInput}>
        <div className={styles.Icon}>{icon}</div>
        <input
          className={styles.Input}
          placeholder={placeholder}
          {...register(name, { required })}
        />
      </div>
    </div>
  );
};

export default InputForm;

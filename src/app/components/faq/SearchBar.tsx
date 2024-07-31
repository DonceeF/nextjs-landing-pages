import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/pages/_faq.module.scss";

interface FormInput {
  search: string;
}

const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.Input}
        placeholder={"Recherchez une question ici …"}
        {...register("search", { required: true })}
      />
      <button type="submit">
        <FiSearch />
      </button>
    </form>
  );
};

export default SearchBar;

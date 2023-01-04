import styles from "./index.module.scss";

const MainInput = ({ setValueInput, placeholder, type }) => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input
          maxLength="20"
          onChange={(event) => setValueInput(event.target.value)}
          type={type}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default MainInput;

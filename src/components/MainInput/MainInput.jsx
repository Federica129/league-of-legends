import styles from "./index.module.scss";

const MainInput = ({ setValueInput, placeholder }) => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input
          onChange={(event) => setValueInput(event.target.value)}
          type="text"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default MainInput;

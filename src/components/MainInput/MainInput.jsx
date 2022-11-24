import styles from "./index.module.scss";

const MainInput = ({ setValueInput }) => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input
          onChange={(event) => setValueInput(event.target.value)}
          type="text"
          placeholder="Search a champion.."
        />
      </form>
    </div>
  );
};

export default MainInput;

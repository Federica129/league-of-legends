import styles from "./index.module.scss";

const MainInput = () => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input type="text" placeholder="Search a champion.." />
      </form>
    </div>
  );
};

export default MainInput;

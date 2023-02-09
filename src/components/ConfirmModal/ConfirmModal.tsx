import styles from "./index.module.scss";

const ConfirmModal = ({ phrase, onClickbtn1, onClickbtn2 }) => {
  return (
    <div className={styles.ConfirmModal}>
      <div className={styles.box}>
        <p>{phrase}</p>
        <div className={styles.box2}>
          <button onClick={onClickbtn1}>Yes</button>
          <button onClick={onClickbtn2}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

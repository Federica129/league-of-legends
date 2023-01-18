import styles from "./index.module.scss";

const MainInput = ({
  setValueInput,
  placeholder,
  type,
}: {
  setValueInput?: any;
  placeholder: string;
  type?: string;
}) => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input
          maxLength={20}
          onChange={(event: { target: HTMLInputElement }): void => {
            setValueInput(event.target.value);
          }}
          type={type}
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default MainInput;

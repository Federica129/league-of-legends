import styles from "./index.module.scss";

const MainInput = ({
  setValueInput,
  placeholder,
  type,
  maxLength,
}: {
  setValueInput?: any;
  placeholder: string;
  type?: string;
  maxLength?: number;
}) => {
  return (
    <div className={styles.MainInput}>
      <form>
        <input
          maxLength={maxLength}
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

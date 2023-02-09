import styles from "./index.module.scss";

const MainInput = ({
  setValueInput,
  placeholder,
  type,
  maxLength,
  onSubmit,
}: {
  setValueInput?: any;
  placeholder: string;
  type?: string;
  maxLength?: number;
  onSubmit?: (value: any) => void;
}) => {
  return (
    <div className={styles.MainInput}>
      <form onSubmit={onSubmit}>
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

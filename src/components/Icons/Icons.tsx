import styles from "./index.module.scss";
import { useContext, useEffect, useState, useCallback } from "react";
import { state } from "../../../pages/_app";

const ModalIcon = () => {
  const { setIcon, icons } = useContext(state);

  return (
    <div className={styles.ModalIcon}>
      <div className={styles.box}>
        <div className={styles.box2}>
          <div className={styles.icons}>
            {icons.map((icon, i) => (
              <img
                key={i}
                width="65"
                height="65"
                src={icon.src}
                alt="photo"
                onClick={() => {
                  setIcon(icon.src);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalIcon;

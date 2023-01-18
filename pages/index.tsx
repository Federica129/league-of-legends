import styles from "../styles/Home.module.scss";
import { state } from "./_app";
import { useContext, useState, useEffect } from "react";
import { arrayVersion, Version } from "../src/utils/api";

export default function Home() {
  const { user } = useContext(state);
  const [version, setVersion] = useState([]);

  useEffect(() => {
    Version();
    setVersion(arrayVersion);
  }, []);

  return (
    <>
      {user && (
        <div className={styles.Home}>
          <div className={styles.box}>
            <h1>
              Hi <span>{user}</span>
            </h1>
            <p>
              Api version: <span>{version[0]}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

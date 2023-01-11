import styles from "../styles/Home.module.scss";
import { state } from "./_app";
import { useContext, useState, useEffect } from "react";
import { Version } from "../src/utils/api";

export default function Home() {
  const { user } = useContext(state);
  // const [version, setVersion] = useState("");
  // useEffect(() => {
  // Version().then((data) => console.log(data));
  //   console.log(Version());
  // }, []);

  return (
    <>
      <div className={styles.Home}>
        <div className={styles.box}>
          <h1>Hi {user}</h1>
          <p>
            Api version: <span>-Numero-</span>
          </p>
        </div>
      </div>
    </>
  );
}

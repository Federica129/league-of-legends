import styles from "../styles/404.module.scss";
import porogif from "./poro-gif-1.gif";
import Image from "next/image";

export default function custom404() {
  return (
    <main>
      <div className={styles.custom404}>
        <div className={styles.box}>
          <Image src={porogif} alt="porogif" />
          <h1>404</h1>
          <p>Oops! That page could not be found.</p>
        </div>
      </div>
    </main>
  );
}

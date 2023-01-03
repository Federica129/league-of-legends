import styles from "../styles/Home.module.scss";
import Access from "../src/components/Access/Access";
import Image from "next/image";
import gifCait from "./cait.gif";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Image className={styles.gif} src={gifCait} />
      </div>{" "}
      <div className={styles.box}>
        <Access />
      </div>
    </>
  );
}

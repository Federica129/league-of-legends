import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/Navbar/Navbar";
import InfoChamp from "../src/components/InfoChamp/InfoChamp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>List Champions</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <InfoChamp />
    </div>
  );
}

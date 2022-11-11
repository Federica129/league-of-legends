import styles from "../styles/Home.module.css";
import InfoChamp from "../src/components/InfoChamp/InfoChamp";

export default function Home() {
  return (
    <div className={styles.container}>
      <InfoChamp />
    </div>
  );
}

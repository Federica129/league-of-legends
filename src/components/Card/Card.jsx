import { memo } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

function Card({ data }) {
  const { name } = data;
  const pngImg = data.image.full.split(".")[0];

  return (
    <div className={styles.Card}>
      <Link href="/champ">
        <div
          className={styles.cardImg}
          style={{
            backgroundImage: `URL(
            http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pngImg}_0.jpg
          )`,
          }}
        >
          <div className={styles.nameChamp}>
            <p>{name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default memo(Card);

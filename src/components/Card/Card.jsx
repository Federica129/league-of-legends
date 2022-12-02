import { memo } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

function Card({ champWithBox, data, setChampWithBox }) {
  const { name, id } = data;
  const pngImg = data.image.full.split(".")[0];

  const addChamp = () => {
    if (champWithBox.includes(champWithBox.find((e) => e === data.key))) {
      setChampWithBox((prev) => prev.filter((e) => e !== data.key));
    } else {
      setChampWithBox((prev) => [...prev, data.key]);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.Card}>
        <Link href={`/champ/${id}`}>
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
      {champWithBox.includes(champWithBox.find((e) => e === data.key)) ? (
        <button onClick={addChamp}>Done</button>
      ) : (
        <button onClick={addChamp}>Add</button>
      )}
    </div>
  );
}

export default memo(Card);

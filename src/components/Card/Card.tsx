import { memo, useContext, useCallback, useEffect } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import axios from "axios";
import { state } from "../../../pages/_app";

function Card({ data }) {
  const { name, id } = data;
  const pngImg = data.image.full.split(".")[0];
  const { champWithBox, setChampWithBox } = useContext(state);

  const addChamp = useCallback(() => {
    if (champWithBox.includes(data.key)) {
      setChampWithBox((prev: []) => prev.filter((e) => e !== data.key));
    } else {
      setChampWithBox((prev: []) => [...prev, data.key]);
    }
  }, [champWithBox]);

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
      {champWithBox.includes(
        champWithBox.find((event: any) => event === data.key)
      ) ? (
        <button onClick={addChamp} className={styles.btnDone}>
          Done
        </button>
      ) : (
        <button onClick={addChamp} className={styles.btnAdd}>
          Add
        </button>
      )}
    </div>
  );
}

export default memo(Card);

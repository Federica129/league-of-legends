import styles from "./name.module.scss";

import { useRouter } from "next/router";
import { GET } from "../../src/utils/api";
import { useEffect, useState, useRef, useCallback } from "react";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import Link from "next/link";

const Champ = () => {
  const router = useRouter();
  const { name } = router.query;
  const [infoChamp, setInfoChamp] = useState([]);
  const [num, setNum] = useState(0);
  const refImg = useRef(null);
  const refContainer = useRef(null);

  useEffect(() => {
    GET("en_US", `/${name}`).then((data) => {
      setInfoChamp(data.data[name]);
    });
  }, [name]);

  const Next = useCallback(() => {
    refContainer.current.scrollLeft += refImg.current.offsetWidth;
  }, []);

  const Prev = useCallback(() => {
    refContainer.current.scrollLeft -= refImg.current.offsetWidth;
  }, []);

  // const {
  //   id,
  //   key,
  //   title,
  //   image,
  //   skins,
  //   lore,
  //   blurb,
  //   allytips,
  //   enemytips,
  //   tags,
  //   partype,
  //   info,
  //   stats,
  //   spells,
  //   passive,
  //   recommended,
  // } = infoChamp;

  return (
    <div
      className={styles.name}
      style={{
        backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${infoChamp?.id}_${num}.jpg)`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.info}>
          <h1>{infoChamp?.name}</h1>
          <h3>{infoChamp?.title}</h3>
          <h4>{infoChamp?.tags?.join(" ")}</h4>
          <p>{infoChamp?.blurb}</p>
        </div>
        <div className={styles.abilities}>
          <h2>Abilities</h2>
          <div className={styles.passive}>
            <div>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/${infoChamp?.passive?.image?.full}`}
              />
              <h4>P - {infoChamp?.passive?.name}</h4>
            </div>
            <p>{infoChamp?.passive?.description}</p>
          </div>
          {infoChamp?.spells?.map((e, i) => {
            return (
              <div className={styles.spell}>
                <div>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${e.image?.full}`}
                  />
                  <h4>
                    {e.id.substring(e.id.length - 1)} - {e.name}
                  </h4>
                </div>
                <p>{e.description}</p>
              </div>
            );
          })}{" "}
        </div>
        <div className={styles.skin}>
          <h2>Skins</h2>
          <div className={styles.btn}>
            <button onClick={Prev}>
              <HiArrowSmLeft />
            </button>
            <button onClick={Next}>
              <HiArrowSmRight />
            </button>
          </div>
          <div ref={refContainer} className={styles.cardSkin}>
            {infoChamp?.skins?.map((e, i) => (
              <div
                key={i}
                className={styles.Card}
                onClick={() => setNum(e.num)}
                ref={refImg}
              >
                <div
                  className={styles.cardImg}
                  style={{
                    backgroundImage: `URL(
            http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${e.num}.jpg
          )`,
                  }}
                >
                  <div className={styles.nameChamp}>
                    <p>{e.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.btn2}>
          <Link href="/champ">
            <span></span>
            <button>Prev page..</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Champ;

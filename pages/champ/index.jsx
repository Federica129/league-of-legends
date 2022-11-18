import { useEffect, useState, useContext } from "react";
import { GET } from "../../src/utils/api";
import Card from "../../src/components/Card/Card";
import styles from "./index.module.scss";
import { Prova } from "../_app";
import MainInput from "../../src/components/MainInput";

const champ = () => {
  const [champ, setChamp] = useState([]);
  const [tag, setTag] = useState("");
  const info = [];
  const arrayTags = [
    "Assassin",
    "Fighter",
    "Mage",
    "Marksman",
    "Support",
    "Tank",
  ];

  const lang = useContext(Prova);

  useEffect(() => {
    GET(lang, "").then((data) => {
      setChamp(data?.data);
    });
  }, [lang]);

  for (let key in champ) {
    info.push(champ[key]);
  }

  return (
    <div className={styles.Champ}>
      <div className={styles.box}>
        <div>
          <MainInput />
          <ul className={styles.tags}>
            <li
              onClick={() => setTag("")}
              style={tag == "" ? { color: "white" } : { color: "#c28f2c" }}
            >
              All
            </li>
            {arrayTags.map((tags) => (
              <li
                onClick={() => setTag(tags)}
                style={tag == tags ? { color: "white" } : { color: "#c28f2c" }}
              >
                {tags}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.CardList}>
        {info
          ?.filter((e) => (tag ? e.tags.includes(tag) : e))
          .map((champions, i) => (
            <Card key={i} data={champions} />
          ))}
      </div>
    </div>
  );
};

export default champ;

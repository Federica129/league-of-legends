import { useEffect, useState, useContext } from "react";
import { GET } from "../../src/utils/api";
import Card from "../../src/components/Card/Card";
import styles from "./index.module.scss";
import { Prova } from "../_app";
import MainInput from "../../src/components/MainInput";
import Image from "next/image";
import poro from "./poro.gif";

const Champ = () => {
  const [champ, setChamp] = useState([]);
  const [valueInput, setValueInput] = useState("");
  const [tag, setTag] = useState("");
  const arrayTags = [
    "Assassin",
    "Fighter",
    "Mage",
    "Marksman",
    "Support",
    "Tank",
  ];

  const [champWithBox, setChampWithBox] = useState([]);

  const lang = useContext(Prova);

  useEffect(() => {
    GET(lang, "").then((data) => {
      setChamp(
        Object.values(data?.data)
          .filter((e) =>
            valueInput
              ? e.name.toLowerCase().includes(valueInput.toLowerCase())
              : e
          )
          .filter((e) => (tag ? e.tags.includes(tag) : e))
      );
    });
  }, [lang, valueInput, tag]);

  return (
    <div className={styles.Champ}>
      <div className={styles.box}>
        <div>
          <MainInput
            setValueInput={setValueInput}
            placeholder="Search a champion.."
          />
          <ul className={styles.tags}>
            <li
              onClick={() => setTag("")}
              style={tag == "" ? { color: "white" } : { color: "#c28f2c" }}
            >
              All
            </li>
            {arrayTags.map((tags, i) => (
              <li
                key={i}
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
        {champ.length > 0 ? (
          champ.map((champions, i) => (
            <Card
              key={i}
              data={champions}
              champWithBox={champWithBox}
              setChampWithBox={setChampWithBox}
            />
          ))
        ) : (
          <div className={styles.error}>
            <Image width="150" src={poro} alt="photo poro" />
            <p>We are sorry, no champions matches your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Champ;

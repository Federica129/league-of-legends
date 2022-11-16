import { useEffect, useState, useContext } from "react";
import { GET } from "../../src/utils/api";
import Card from "../../src/components/Card/Card";
import styles from "./index.module.scss";

const champ = ({ lang }) => {
  const [champ, setChamp] = useState([]);
  const info = [];

  useEffect(() => {
    GET(lang, "").then((data) => {
      setChamp(data?.data);
    });
  }, [lang]);

  for (let key in champ) {
    info.push(champ[key]);
  }

  return (
    <div className={styles.CardList}>
      {info?.map((champions, i) => (
        <Card key={i} data={champions} />
      ))}
    </div>
  );
};

export default champ;

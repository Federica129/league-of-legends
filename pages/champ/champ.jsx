import { useEffect, useState } from "react";
import { GET } from "../../src/utils/api";
import Card from "../../src/components/Card/Card";
import styles from "./index.module.scss";

const champ = () => {
  const [champ, setChamp] = useState([]);
  const info = [];

  useEffect(() => {
    GET("en_US", "").then((data) => {
      setChamp(data?.data);
    });
  }, []);

  for (let key in champ) {
    info.push(champ[key]);
  }
  console.log(info);
  return (
    <div className={styles.CardList}>
      {info?.map((champions, i) => (
        <Card key={i} data={champions} />
      ))}
    </div>
  );
};

export default champ;

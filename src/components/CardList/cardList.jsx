import { useEffect, useState } from "react";
import { GET } from "../../utils/api.js";
import Card from "../Card/Card";

const cardList = () => {
  const [champ, setChamp] = useState([]);
  const [champData, setChampData] = useState([]);
  const info = [];

  useEffect(() => {
    GET("en_US").then((data) => {
      setChamp(data?.data);
    });
  }, []);

  for (let key in champ) {
    info.push(champ[key]);
  }
  console.log(info);
  return (
    <div>
      {info?.map((champions, i) => (
        <Card key={i} data={champions} />
      ))}
    </div>
  );
};

export default cardList;

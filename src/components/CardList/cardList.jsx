import { useEffect, useState } from "react";
import { GET } from "../../utils/api.js";
import Card from "../Card/Card";

const cardList = () => {
  const [champ, setChamp] = useState([]);
  const [champData, setChampData] = useState([]);

  useEffect(() => {
    GET("en_US").then((data) => {
      setChamp(data?.data);
    });

    for (let key in champ) {
      setChampData([champ[key]]);
    }
  }, []);

  console.log(champ);
  return (
    <div>
      {/* {champData?.map((champions, i, a) => (
        <Card key={i} data={champions} />
      ))} */}
    </div>
  );
};

export default cardList;

import { memo } from "react";

const Card = ({ data }) => {
  const { name } = data;
  const pngImg = data.image.full.split(".")[0];

  return (
    <div>
      <div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${pngImg}_0.jpg`}
        />{" "}
        <p>{name}</p>
      </div>
    </div>
  );
};

export default memo(Card);

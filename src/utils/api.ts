//http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json
import axios from "axios";

//version
const arrayVersion = [];

const Version = async function prova() {
  const res = await axios.get(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  arrayVersion.push(res.data[0]);
};
Version();

const GET = async (lang, name, router) => {
  try {
    const res = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/${arrayVersion[0]}/data/` +
        lang +
        "/champion" +
        name +
        ".json"
    );

    if (!Object.keys(res.data)) {
      throw Error;
    }

    return res.data;
  } catch (error) {
    router.push("../404");
    return { data: { data: [] } };
  }
};

export { GET, Version, arrayVersion };

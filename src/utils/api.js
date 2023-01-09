//http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json
import axios from "axios";

const GET = async (lang, name, router) => {
  try {
    const res = await axios.get(
      "http://ddragon.leagueoflegends.com/cdn/12.22.1/data/" +
        lang +
        "/champion" +
        name +
        ".json"
    );

    if (!Object.keys(res.data)) {
      throw error;
    }

    return res.data;
  } catch (error) {
    router.push("../404");
    return { data: { data: [] } };
  }
};

export { GET };

//http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json

const GET = async (lang, name) => {
  const res = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.20.1/data/" +
      lang +
      "/champion" +
      name +
      ".json"
  );
  return await res.json();
};

export { GET };

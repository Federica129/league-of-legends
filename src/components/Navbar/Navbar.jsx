import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = ({ setLang }) => {
  const [dataLang, setDataLang] = useState([]);

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/languages.json")
      .then((response) => response.json())
      .then((data) => setDataLang(data));
  }, []);

  return (
    <div className={styles.Navbar}>
      <p>
        Welcome <span>-nome-</span>
      </p>
      <div className={styles.list}>
        <ul>
          <Link href="/champ">
            <li>
              <p>Champions</p>
              <div></div>
            </li>
          </Link>
          <Link href="/aboutme">
            <li>
              <p>About me</p>
              <div></div>
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.select}>
        <p>Lang :</p>
        <select id="lang" name="lang" onChange={(e) => setLang(e.target.value)}>
          {dataLang?.map((e) => {
            return (
              <>
                <option value={e}>{e.split("_")[1]}</option>
              </>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Navbar;

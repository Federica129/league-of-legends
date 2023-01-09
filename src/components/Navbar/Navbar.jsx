import styles from "./index.module.scss";
import { Fragment, useEffect, useState } from "react";
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
      <div className={styles.box}>
        <img
          width="45"
          height="45"
          src="https://cdnb.artstation.com/p/assets/images/images/012/033/999/medium/thomas-randby-npe-ahri.jpg?1532668669"
          alt="photo"
          style={{ border: `3px solid red` }}
        />
        <span>-nome-</span>
      </div>
      <div className={styles.list}>
        <ul>
          <Link href="/">
            <li>
              <p>Home</p>
              <div></div>
            </li>
          </Link>
          <Link href="/champ">
            <li>
              <p>Champions</p>
              <div></div>
            </li>
          </Link>
          <Link href="/about_me">
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
          {dataLang?.map((e, i) => {
            return (
              <Fragment key={i}>
                <option value={e}>{e.split("_")[1]}</option>
              </Fragment>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Navbar;

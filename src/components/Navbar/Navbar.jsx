import styles from "./index.module.scss";
import { Fragment, useEffect, useState, useContext, useCallback } from "react";
import Link from "next/link";
import { state } from "../../../pages/_app";

import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [dataLang, setDataLang] = useState([]);
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState("");
  const { user, setLang, online, icon, color } = useContext(state);

  useEffect(() => {
    fetch("https://ddragon.leagueoflegends.com/cdn/languages.json")
      .then((response) => response.json())
      .then((data) => setDataLang(data));
  }, []);

  const activeModal = useCallback(() => {
    if (active === true) {
      setActive(false);
      setVisible("");
    }
    if (active === false) {
      setActive(true);
      setVisible(styles.active);
    }
  }, [active]);

  return (
    <div className={styles.Navbar}>
      {online === true ? (
        <div className={styles.box}>
          <img
            width="45"
            height="45"
            src={icon}
            alt="photo"
            style={{ border: `2px solid ${color}` }}
          />
          <span>{user}</span>
        </div>
      ) : null}
      <div className={styles.list}>
        <ul>
          {online === true ? (
            <>
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
              </Link>{" "}
            </>
          ) : null}
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
      <div className={styles.btnMobile}>
        <button onClick={activeModal}>
          {active === false ? <CgMenuGridO /> : <MdClose />}
        </button>
      </div>
      <div className={`${styles.listModal} ${visible}`}>
        <div className={styles.list2}>
          <ul>
            {online === true ? (
              <>
                <Link
                  href="/"
                  onClick={() => {
                    setVisible("");
                    setActive(false);
                  }}
                >
                  <li>
                    <p>Home</p>
                    <div></div>
                  </li>
                </Link>
                <Link
                  href="/champ"
                  onClick={() => {
                    setVisible("");
                    setActive(false);
                  }}
                >
                  <li>
                    <p>Champions</p>
                    <div></div>
                  </li>
                </Link>{" "}
              </>
            ) : null}
            <Link
              href="/about_me"
              onClick={() => {
                setVisible("");
                setActive(false);
              }}
            >
              <li>
                <p>About me</p>
                <div></div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import styles from "./index.module.scss";
import { Fragment, useEffect, useState, useContext, useCallback } from "react";
import Link from "next/link";
import { state } from "../../../pages/_app";

import { CgMenuGridO } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdSettings } from "react-icons/md";

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

  const logout = useCallback(() => {
    localStorage.clear();
    window.location.reload();
  }, []);

  return (
    <div className={styles.Navbar}>
      {online === true ? (
        <div className={styles.user}>
          <div className={styles.box} onClick={activeModal}>
            <img
              width="45"
              height="45"
              src={icon}
              alt="photo"
              style={{ border: `2px solid ${color}` }}
            />
            <span>{user}</span>
          </div>
          <div className={`${styles.logout} ${visible}`}>
            <div>
              <span>
                <MdSettings />
              </span>
              <Link href="/user_settings" onClick={activeModal}>
                <p>Settings</p>
              </Link>
            </div>
            <div>
              <span>
                <FiLogOut />
              </span>
              <p onClick={logout}>Logout</p>
            </div>
          </div>
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
          ) : (
            <>
              <Link
                href="/access"
                onClick={() => {
                  setVisible("");
                  setActive(false);
                }}
              >
                <li>
                  <p className={styles.login}>Login</p>
                  <div></div>
                </li>
              </Link>
            </>
          )}
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
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/access"
                  onClick={() => {
                    setVisible("");
                    setActive(false);
                  }}
                >
                  <li>
                    <p className={styles.login}>Login</p>
                  </li>
                </Link>
              </>
            )}
            <Link
              href="/about_me"
              onClick={() => {
                setVisible("");
                setActive(false);
              }}
            >
              <li>
                <p>About me</p>
              </li>
            </Link>
          </ul>
          {online === true && (
            <div className={styles.logout}>
              <Link href="/user_settings" onClick={activeModal}>
                <p>Icon</p>
              </Link>
              <p onClick={logout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

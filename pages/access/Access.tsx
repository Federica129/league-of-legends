import MainInput from "../../src/components/MainInput";
import styles from "./index.module.scss";
import { ReactElement, useEffect, useState, useContext } from "react";
import { state } from "../_app";
import Image from "next/image";
import gifCait from "./cait.gif";
import { useRouter } from "next/router";

const Access = (): ReactElement => {
  const [visible, setVisible] = useState(true);
  const [login, setLogin] = useState(false);
  const router = useRouter();

  const {
    user,
    setUser,
    pass,
    setPass,
    online,
    setOnline,
    icon,
    setIcon,
    color,
    setColor,
    icons,
  } = useContext(state);

  useEffect(() => {
    if (user.length === 0) {
      setUser("Name");
    }
  }, [user]);

  const btnRegister = () => {
    setVisible(true), setLogin(false);
  };

  const btnLogin = () => {
    setVisible(false), setLogin(true);
  };

  return (
    <div className={styles.Access}>
      <Image alt="gif" className={styles.gif} src={gifCait} />
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.mainBtn}>
            <button onClick={btnRegister} disabled={visible === true}>
              Register
            </button>
            <button onClick={btnLogin} disabled={login === true}>
              Login
            </button>
          </div>
          {visible && (
            <div className={styles.Register}>
              <div className={styles.containerRegis}>
                <div className={styles.box1}>
                  <div className={styles.form}>
                    <MainInput placeholder="Name" setValueInput={setUser} />
                    <MainInput
                      type="password"
                      placeholder="Passoword"
                      setValueInput={setPass}
                    />
                  </div>
                  <p>Icon</p>
                  <div className={styles.icons}>
                    {icons.map((icon, i) => (
                      <img
                        key={i}
                        width="65"
                        height="65"
                        src={icon.src}
                        alt="photo"
                        onClick={() => setIcon(icon.src)}
                      />
                    ))}
                  </div>
                  <div className={styles.box2}>
                    <p>Border color</p>
                    <input
                      value={color}
                      type="color"
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.box3}>
                  <img
                    width="150"
                    height="150"
                    src={icon}
                    alt="photo"
                    style={{ border: `3px solid ${color}` }}
                  />
                  <h1>{user}</h1>
                </div>
              </div>
              <div className={styles.box4}>
                <div>
                  <button
                    onClick={() => {
                      setOnline(true);
                      router.push("/");
                    }}
                    disabled={user === "Name" || pass === ""}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
          {login && (
            <>
              <div className={styles.Login}>
                <MainInput placeholder="Name" />
                <MainInput placeholder="Password" />
                <div className={styles.box4}>
                  <div>
                    <button
                      onClick={() => {
                        setOnline(true);
                        router.push("/");
                      }}
                      disabled={user === "Name" || pass === ""}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Access;

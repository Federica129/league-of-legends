import MainInput from "../../src/components/MainInput";
import styles from "./index.module.scss";
import { ReactElement, useEffect, useState, useContext } from "react";
import { state } from "../_app";
import Image from "next/image";
import gifCait from "./cait.gif";

const Access = (): ReactElement => {
  const [visible, setVisible] = useState(true);
  const [login, setLogin] = useState(false);
  const [arrayUsers, setArrayUsers] = useState([]);
  const [loginFailed, setLoginFailed] = useState(false);
  const [checkname, setCheckname] = useState({ color: "", phrase: "" });

  const {
    user,
    setUser,
    pass,
    setPass,
    online,
    icon,
    setIcon,
    color,
    setColor,
    icons,
    client,
  } = useContext(state);

  useEffect(() => {
    if (!user) {
      setUser("Name");
    }

    if (arrayUsers.find((el) => el.name === user)) {
      setCheckname({ color: "red", phrase: "Nickname already exists" });
    } else {
      setCheckname({ color: "green", phrase: "Nickname valid" });
    }

    client.get("/users").then((data) => setArrayUsers(data.data));
  }, [user]);

  const btnRegister = () => {
    setVisible(true), setLogin(false);
    setUser("Name");
    setLoginFailed(false);
  };

  const btnLogin = () => {
    setVisible(false), setLogin(true);
  };

  const registed = (e) => {
    e.preventDefault();
    setVisible(false), setLogin(true);

    client.post("/users", {
      name: user,
      password: pass,
      icon: icon,
      borderColor: color,
      gotbox: [],
    });

    client.get("/users").then((data) => setArrayUsers(data.data));
  };

  const access = (e) => {
    e.preventDefault();
    const found = arrayUsers.find(
      (el) => el.name === user && el.password === pass
    );

    if (found) {
      localStorage.setItem("id", found.id);
      window.location.reload();
    } else {
      setLoginFailed(true);
    }
  };

  return (
    <>
      {online === false && (
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
                        <MainInput
                          maxLength={15}
                          placeholder="Name"
                          setValueInput={setUser}
                          onSubmit={registed}
                        />
                        <MainInput
                          type="password"
                          placeholder="Password"
                          setValueInput={setPass}
                          onSubmit={registed}
                        />
                      </div>
                      <div className={styles.checkName}>
                        <p style={{ color: checkname.color }}>
                          {user !== "Name" && checkname.phrase}
                        </p>
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
                        onClick={registed}
                        disabled={
                          user === "Name" ||
                          pass === "" ||
                          checkname.color === "red"
                        }
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
                    <MainInput
                      placeholder="Name"
                      setValueInput={setUser}
                      onSubmit={access}
                    />
                    <MainInput
                      type="password"
                      placeholder="Password"
                      setValueInput={setPass}
                      onSubmit={access}
                    />
                    <div className={styles.box4}>
                      <div>
                        <button
                          onClick={access}
                          disabled={user === "Name" || pass === ""}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                    <div className={styles.loginFail}>
                      {loginFailed && (
                        <>
                          <p>Login failed.</p>
                          <p>Incorrect nickname or password.</p>
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Access;

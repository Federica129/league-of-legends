import styles from "./index.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiUserCircle } from "react-icons/hi";
import Federica from "./me.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const about = () => {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive(styles.active);
  }, []);

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.box2}>
            <div>
              <p className={`${styles.hi} ${isActive}`}>Hi! I'm</p>
              <h2 className={`${styles.Name} ${isActive}`}>
                Federica Schillaci
              </h2>
              <p className={`${styles.who} ${isActive}`}>
                Front-end web developer,
              </p>
              <p className={`${styles.lang} ${isActive}`}>
                HTML/CSS/JAVASCRIPT/REACT/NEXT
              </p>
            </div>{" "}
            <div className={`${styles.list} ${isActive}`}>
              <ul>
                <li>
                  <span>
                    <AiFillLinkedin />
                  </span>{" "}
                  {"-"}
                  <a href="https://www.linkedin.com/in/federica-schillaci-b61199234/">
                    {" "}
                    Federica Schillaci
                  </a>
                </li>
                <li>
                  {" "}
                  <span>
                    <AiFillGithub />{" "}
                  </span>{" "}
                  {"-"}
                  <a href="https://github.com/Federica129"> Federica129</a>
                </li>
                <li>
                  {" "}
                  <span>
                    <HiUserCircle />{" "}
                  </span>{" "}
                  {"-"}
                  <a href="https://my-portfolio-omega-snowy.vercel.app/">
                    {" "}
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.image} ${isActive}`}>
            <Image
              width="150"
              src={Federica}
              alt="photo Federica"
              style={{
                borderRadius: "100px",
                boxShadow: " 0 0 3px 0px black",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;

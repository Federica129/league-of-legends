import "../styles/globals.css";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const state = createContext();

const client = axios.create({
  baseURL: "http://localhost:8080",
});

function MyApp({ Component, pageProps }) {
  const icons = [
    {
      id: 1,
      src: "https://pbs.twimg.com/media/D6yHZ5VVsAAwZxz.png",
    },
    {
      id: 2,
      src: "https://cdnb.artstation.com/p/assets/images/images/012/033/999/medium/thomas-randby-npe-ahri.jpg?1532668669",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/originals/a0/a2/62/a0a262062ff8d4ecf2ae305d25eea56d.jpg",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/474x/c5/f6/a9/c5f6a9ca4a0c6b79faa6508a938a0c0f.jpg",
    },
    { id: 5, src: "https://pbs.twimg.com/media/FZvggCvX0AESBfJ.jpg" },
    {
      id: 6,
      src: "https://external-preview.redd.it/XRDO17wTvq1-LC9Xxfc5g6BdsFw6xntHReTcqwSmyl8.jpg?auto=webp&s=f6d95ed21199b649c5c7eeb47a4f416235937997",
    },
    {
      id: 7,
      src: "https://cdna.artstation.com/p/assets/images/images/012/042/902/large/thomas-randby-npe-yi.jpg?1532712747",
    },
    {
      id: 8,
      src: "https://external-preview.redd.it/Ot_7l56sKeF7k7yF33xE4rsVUSC3ZtNfvLrr-o66KLo.jpg?auto=webp&s=d6bf7543974bb7bdf2536d2d80d0e41debd23777",
    },
    { id: 9, src: "https://pbs.twimg.com/media/EVso1FFUwAAMFZ0.jpg" },
    {
      id: 10,
      src: "https://preview.redd.it/v2qx9a5ekzt11.jpg?auto=webp&s=0788b7d446f7a399d7716fc4dc38d69f21f696e7",
    },
  ];

  const [lang, setLang] = useState("en_US");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [icon, setIcon] = useState(icons[0].src);
  const [online, setOnline] = useState(false);
  const [color, setColor] = useState("#c28f2c");
  const [champWithBox, setChampWithBox] = useState();
  const [actModal, setActModal] = useState("");
  const [visibilityModal, setVisibilityModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("id")) {
      client.get(`/users/${localStorage.getItem("id")}`).then((res) => {
        setUser(res.data.name);
        setColor(res.data.borderColor);
        setIcon(res.data.icon);
        setOnline(true);
        setChampWithBox(res.data.gotbox);
        router.push("/");
      });
    } else {
      router.push("/access");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("id")) {
      client.patch(`/users/${localStorage.getItem("id")}`, {
        gotbox: champWithBox,
      });
    }
  }, [champWithBox]);

  return (
    <>
      <Head>
        <title>List Champions</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <state.Provider
        value={{
          lang,
          setUser,
          icon,
          setIcon,
          user,
          setLang,
          online,
          setOnline,
          pass,
          setPass,
          color,
          setColor,
          icons,
          champWithBox,
          setChampWithBox,
          client,
          router,
          actModal,
          setActModal,
          visibilityModal,
          setVisibilityModal,
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </state.Provider>
    </>
  );
}

export default MyApp;

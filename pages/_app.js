import "../styles/globals.css";
import Navbar from "../src/components/Navbar/Navbar";
import Head from "next/head";
import { useState, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const state = createContext();

function MyApp({ Component, pageProps }) {
  const icons = [
    {
      id: 1,
      src: "data:image/jpeg;base64,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",
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
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("id")) {
      axios
        .get(`http://localhost:8080/users/${localStorage.getItem("id")}`)
        .then((res) => {
          setUser(res.data.name);
          setColor(res.data.borderColor);
          setIcon(res.data.icon);
          setOnline(true);
          router.push("/");
        });
    } else {
      router.push("/access");
    }
  }, []);

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
      </Head>{" "}
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
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </state.Provider>
    </>
  );
}

export default MyApp;

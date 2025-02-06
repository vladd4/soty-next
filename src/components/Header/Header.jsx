"use client";

import styles from "./Header.module.scss";

import Logo from "@/../public/logo.png";
import Hamburger from "@/../public/hamburger.svg";

import { Phone, MapPin, Facebook, Instagram, Menu } from "lucide-react";

import { useState } from "react";

import Image from "next/image";

export default function Header() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className={styles.root}>
      <article className={styles.wrapper}>
        <Image alt="Logo" src={Logo} className={styles.logo} />
        <div className={styles.text_block}>
          <Image
            alt="Hamburger"
            id="burger-icon"
            src={Hamburger}
            className={`${styles.hamburger} ${
              clicked ? styles.transformed : ""
            }`}
            onClick={handleClick}
          />
          <div className={styles.phone_block}>
            <Phone color="#faba19" strokeWidth="1.5" size={35} />
            <div className={styles.phone_inner}>
              <a href="tel:+380969562020">+38 096 956 20 20</a>
              <a href="tel:+380939562020">+38 093 956 20 20</a>
            </div>
          </div>
          <div className={styles.phone_block}>
            <MapPin color="#faba19" strokeWidth="1.5" size={35} />
            <a
              href="https://maps.app.goo.gl/M4MpJLJrim7oRBW9A"
              target="_blank"
              rel="noreferrer"
            >
              Львів, вул. Зелена, 301
            </a>
          </div>

          <div className={styles.social_block}>
            <a
              href="https://www.facebook.com/people/%25D0%25A1%25D0%25BE%25D1%2582%25D0%25B8-%25D0%25A2%25D0%25B2%25D1%2596%25D0%25B9-%25D0%259C%25D1%2596%25D0%25BD%25D1%2596-%25D0%25A1%25D0%25BA%25D0%25BB%25D0%25B0%25D0%25B4/61553857121742/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook color="#faba19" strokeWidth="1.5" size={40} />
            </a>
            <a
              href="https://www.instagram.com/soty_tviy_mini_sklad/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color="#faba19" strokeWidth="1.5" size={40} />
            </a>
          </div>
          <div className={styles.language_block}>
            <p
              id="ua"
              className={styles.current_lang}
              // onClick={() => changeLanguage("ua")}
            >
              UA
            </p>
            <span>|</span>
            <p id="en">EN</p>
          </div>
        </div>
        <Menu strokeWidth="2" size={40} className={styles.menu} />
      </article>
      {/* <Burger clicked={clicked} setClicked={setClicked} /> */}
    </header>
  );
}

"use client";

import styles from "./Burger.module.scss";

import { useRef, useEffect } from "react";

import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

const Burger = ({ clicked, setClicked, i18n, t }) => {
  const componentRef = useRef(null);

  const changeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const burger = document.querySelector("#burger-icon");
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        event.target !== burger
      ) {
        setClicked(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setClicked]);

  return (
    <section
      className={`${styles.root} ${clicked ? styles.show_burger : ""}`}
      id="burger"
      ref={componentRef}
    >
      <article className={styles.wrapper}>
        <div className={styles.links_block}>
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
              {t("location")}
            </a>
          </div>
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
            className={i18n.language === "uk" ? styles.current_lang : ""}
            onClick={() => changeLanguage("uk")}
          >
            UA
          </p>
          <span>|</span>
          <p
            className={i18n.language === "en" ? styles.current_lang : ""}
            id="en"
            onClick={() => changeLanguage("en")}
          >
            EN
          </p>
        </div>
      </article>
    </section>
  );
};
export default Burger;

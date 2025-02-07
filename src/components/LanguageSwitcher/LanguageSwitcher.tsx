"use client";

import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation<"translation">();

  const changeLanguage = async (lang: "en" | "uk") => {
    await i18n.changeLanguage(lang);
  };

  return (
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
  );
}

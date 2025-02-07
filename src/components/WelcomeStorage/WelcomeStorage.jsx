"use client";

import styles from "./WelcomeStorage.module.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import Background from "@/../public/main-min.webp";
import { useTranslation } from "react-i18next";

const WelcomeStorage = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <article className={styles.wrapper}>
        <h1>{t("welcome_h")}</h1>
        <p>
          {t("welcome_p")}
          <sup>3</sup>
        </p>
        <AnchorLink
          href="#calculator"
          data-aos="zoom-out"
          data-aos-offset="0"
          data-aos-duration="2500"
          className={styles.button}
        >
          {t("welcome_btn")}
        </AnchorLink>
      </article>
    </section>
  );
};
export default WelcomeStorage;

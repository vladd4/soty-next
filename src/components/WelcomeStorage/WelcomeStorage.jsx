"use client";

import styles from "./WelcomeStorage.module.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

import Background from "@/../public/main.jpg";

const WelcomeStorage = () => {
  return (
    <section
      className={styles.root}
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <article className={styles.wrapper}>
        <h1>Міні склади для ваших речей</h1>
        <p>
          Доступні склади розміром від 1м<sup>3</sup>
        </p>
        <AnchorLink
          href="#calculator"
          data-aos="zoom-out"
          data-aos-offset="0"
          data-aos-duration="2500"
          className={styles.button}
        >
          Переглянути ціни
        </AnchorLink>
      </article>
    </section>
  );
};
export default WelcomeStorage;

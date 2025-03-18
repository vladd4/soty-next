"use client";

import { useTranslation } from "react-i18next";
import styles from "./Footer.module.scss";

import { Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.root}>
      <h5>{t("footer_graph_h_1")}</h5>
      <section
        className={styles.wrapper}
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <article className={styles.info}>
          <div className={styles.info_div}>
            <h5>{t("footer_sklad")}</h5>
            <p>{t("footer_graph_p_1")}</p>
          </div>
          <div className={styles.info_div}>
            <h5>{t("footer_office")}</h5>
            <p>{t("footer_graph_p_2")}</p>
          </div>
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
          <div className={styles.social_block}>
            <a
              href="https://www.facebook.com/people/%25D0%25A1%25D0%25BE%25D1%2582%25D0%25B8-%25D0%25A2%25D0%25B2%25D1%2596%25D0%25B9-%25D0%259C%25D1%2596%25D0%25BD%25D1%2596-%25D0%25A1%25D0%25BA%25D0%25BB%25D0%25B0%25D0%25B4/61553857121742/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook color="#faba19" strokeWidth="1.5" size={40} />
            </a>
            <a
              href="https://www.instagram.com/soty_vash_mini_sklad?igsh=bW5pZWl4ZjJnOWhw&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color="#faba19" strokeWidth="1.5" size={40} />
            </a>
          </div>
        </article>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8673360086386!2d24.0791154!3d49.798598399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ae903dfa5f19b%3A0xe3e6fded702d7a4!2z0JzRltC90ZYg0YHQutC70LDQtNC4INCh0J7QotCY!5e1!3m2!1suk!2sua!4v1742280402138!5m2!1suk!2sua"
          allowFullScreen=""
          loading="lazy"
          className={styles.map}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <p
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-duration="1500"
        className={styles.copy}
      >
        {t("footer_copy")}
      </p>
    </footer>
  );
};

export default Footer;

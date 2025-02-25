import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";
import styles from "./About.module.scss";
import Propositions from "../Propositions/Propositions";

export default function About() {
  const { t } = useTranslation<"translation">();
  return (
    <article className={styles.root} id="about">
      <h3>{t("about_h")}</h3>
      <p>{t("about_p_1")}</p>
      <p>
        {t("about_p_2")} {t("public_a")}{" "}
        <a
          href="https://docs.google.com/document/d/1CUcEp5vyPVeNSXUfGjDp2ew_V31RybuT04vuxdy5kFk/edit?tab=t.0"
          target="_blank"
          rel="noreferrer"
        >
          {t("public_href")}.
        </a>
      </p>
      <Propositions />
      <div className={styles.slider_block}>
        <Slider />
      </div>
    </article>
  );
}

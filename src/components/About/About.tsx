import { useTranslation } from "react-i18next";
import Slider from "../Slider/Slider";
import styles from "./About.module.scss";

export default function About() {
  const { t } = useTranslation();
  return (
    <article className={styles.root}>
      <h3>{t("about_h")}</h3>
      <p>{t("about_p_1")}</p>
      <p>{t("about_p_2")}</p>
      <div className={styles.slider_block}>
        <Slider />
      </div>
    </article>
  );
}

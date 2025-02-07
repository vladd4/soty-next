"use client";

import styles from "./Benefits.module.scss";

import useResize from "@/hooks/useResize";

import MobileBlock from "./MobileBlock";
import DesktopBlock from "./DesktopBlock";
import { useTranslation } from "react-i18next";

const Benefits = ({ polygon }) => {
  const isMobile = useResize(null);
  const { t } = useTranslation();

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>{t("benefits_h")}</h3>
        <p>{t("benefits_p")}</p>
        {isMobile ? <MobileBlock /> : <DesktopBlock polygon={polygon} />}
      </article>
    </section>
  );
};

export default Benefits;

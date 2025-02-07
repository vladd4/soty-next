"use client";

import styles from "./Allowed.module.scss";

import Toys from "@/../public/h.svg";
import Clothes from "@/../public/allowed/clothes-icon.svg";
import Tyres from "@/../public/allowed/tire-icon.svg";
import Mebli from "@/../public/allowed/furniture-icon.svg";
import Sport from "@/../public/allowed/sport-equipment-icon.svg";
import Tech from "@/../public/allowed/office-equipment.svg";
import Docs from "@/../public/allowed/documents-icon.svg";
import Other from "@/../public/allowed/tools-icon.svg";

import AllowedLink from "./AllowedLink";
import { useTranslation } from "react-i18next";

const Allowed = ({ polygon }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>{t("all_item_H")}</h3>
        <article className={styles.image_block}>
          <article className={styles.article_one}>
            <AllowedLink label="ind_all_tech" icon={Toys} polygon={polygon} />
            <AllowedLink
              label="ind_all_clothes"
              icon={Clothes}
              polygon={polygon}
            />
            <AllowedLink label="ind_all_tyres" icon={Tyres} polygon={polygon} />
          </article>
          <article className={styles.article_two}>
            <AllowedLink label="ind_all_mebli" icon={Mebli} polygon={polygon} />
            <AllowedLink label="ind_all_sport" icon={Sport} polygon={polygon} />
            <AllowedLink
              label="ind_all_offTech"
              icon={Tech}
              polygon={polygon}
            />
          </article>
          <article className={styles.article_three}>
            <AllowedLink label="ind_all_docs" icon={Docs} polygon={polygon} />
            <AllowedLink label="ind_all_other" icon={Other} polygon={polygon} />
          </article>
        </article>
      </article>
    </section>
  );
};
export default Allowed;

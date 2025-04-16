"use client";

import Image from "next/image";
import styles from "./Propositions.module.scss";
import Polygon from "@/../public/black-poly.svg";
import Left from "@/../public/left.svg";
import Right from "@/../public/right.svg";
import { useTranslation } from "react-i18next";

export default function Propositions() {
  const { t } = useTranslation<"translation">();
  return (
    <div className={styles.root}>
      <Image alt="Left Polygon" src={Left} className={styles.left} />
      <Image alt="Right Polygon" src={Right} className={styles.right} />
      <div className={styles.wrapper}>
        <h3>{t("offer_h")}</h3>
        <div className={styles.list}>
          <div>
            <Image alt="Point" src={Polygon} width={30} height={30} />
            <p dangerouslySetInnerHTML={{ __html: t("offer_1") }}></p>
          </div>
          <div>
            <Image alt="Point" src={Polygon} width={30} height={30} />
            <p dangerouslySetInnerHTML={{ __html: t("offer_2") }}></p>
          </div>
          <div>
            <Image alt="Point" src={Polygon} width={30} height={30} />
            <p dangerouslySetInnerHTML={{ __html: t("offer_3") }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import styles from "./Forbidden.module.scss";

import Polygon from "@/../public/poly-grey.svg";
import { useTranslation } from "react-i18next";

const ItemsContainer = ({ image, title }) => {
  const { t } = useTranslation();
  return (
    <div
      className={styles.container}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="2000"
    >
      <Image alt="Polygon" src={Polygon} className={styles.polygon_parent} />
      <div className={styles.polygon_text}>
        <Image alt="Polygon" src={image} />
        <p>{t(title)}</p>
      </div>
    </div>
  );
};

export default ItemsContainer;

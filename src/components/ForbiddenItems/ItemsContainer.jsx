import Image from "next/image";
import styles from "./Forbidden.module.scss";

import Polygon from "@/../public/poly-grey.svg";

const ItemsContainer = ({ image, title }) => {
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
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ItemsContainer;

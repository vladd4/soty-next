import Image from "next/image";
import styles from "./Allowed.module.scss";
import { useTranslation } from "react-i18next";

const AllowedLink = ({ polygon, icon, label }) => {
  const { t } = useTranslation();
  return (
    <div
      className={styles.container}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="1500"
    >
      <Image alt="Polygon" src={polygon} className={styles.polygon_parent} />
      <div className={styles.polygon_text}>
        <Image alt="Polygon" src={icon} />
        <p>{t(label)}</p>
      </div>
    </div>
  );
};

export default AllowedLink;

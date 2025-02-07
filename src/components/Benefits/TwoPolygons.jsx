import Image from "next/image";
import styles from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";

const TwoPolygons = ({
  polygon,

  icons,
  labels,
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.two_polygon}>
      <div
        className={styles.two_polygon_parent}
        data-aos="zoom-in-down"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <Image alt="Polygon" src={polygon} />
        <div className={styles.polygon_text}>
          <Image alt="Icon" src={icons[0]} />
          <p>{t(labels[0])}</p>
        </div>
      </div>

      <div
        className={styles.two_polygon_parent}
        data-aos="zoom-in-up"
        data-aos-offset="0"
        data-aos-duration="1500"
      >
        <Image alt="Polygon" src={polygon} />
        <div className={styles.polygon_text}>
          <Image alt="Icon" src={icons[1]} />
          <p>{t(labels[1])}</p>
        </div>
      </div>
    </div>
  );
};

export default TwoPolygons;

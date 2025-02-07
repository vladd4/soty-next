import Image from "next/image";
import styles from "./Benefits.module.scss";
import { useTranslation } from "react-i18next";

const OnePolygon = ({
  handleHover,
  handleHoverRemove,
  polygon,
  icon,
  label,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={styles.one_polygon}
      data-aos="zoom-in"
      data-aos-offset="0"
      data-aos-duration="1500"
      onMouseOver={handleHover}
      onMouseOut={handleHoverRemove}
    >
      <Image alt="Polygon" src={polygon} />
      <div className={styles.polygon_text}>
        <Image alt="Icon" src={icon} />
        <p>{t(label)}</p>
      </div>
    </div>
  );
};

export default OnePolygon;

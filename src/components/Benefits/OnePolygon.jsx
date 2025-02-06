import Image from "next/image";
import styles from "./Benefits.module.scss";

const OnePolygon = ({
  handleHover,
  handleHoverRemove,
  polygon,
  icon,
  label,
}) => {
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
        <p>{label}</p>
      </div>
    </div>
  );
};

export default OnePolygon;

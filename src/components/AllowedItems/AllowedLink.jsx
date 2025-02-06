import Image from "next/image";
import styles from "./Allowed.module.scss";

const AllowedLink = ({ polygon, icon, label }) => {
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
        <p>{label}</p>
      </div>
    </div>
  );
};

export default AllowedLink;

import { icons } from "@/static_store/benefit_icons";
import styles from "./Benefits.module.scss";

import Polygon from "@/../public/polygon-ben-yellow.svg";

import Image from "next/image";
import { useTranslation } from "react-i18next";

const MobileBlock = () => {
  const { t } = useTranslation();
  return (
    <article className={styles.mobile_block}>
      {icons.map((icon) => {
        return (
          <div
            key={icon.text}
            className={styles.mobile_one_polygon}
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-duration="1500"
          >
            <Image
              alt="Polygon"
              src={Polygon}
              className={styles.mobile_polygon}
            />
            <div className={styles.mobile_polygon_text}>
              <Image alt="Icon" src={icon.icon} />
              <p>{t(icon.text)}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};

export default MobileBlock;

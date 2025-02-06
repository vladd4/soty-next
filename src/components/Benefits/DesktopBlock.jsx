import styles from "./Benefits.module.scss";
import OnePolygon from "./OnePolygon";

import Park from "@/../public/advantages/parking-icon.png";
import People from "@/../public/advantages/personnel-icon.png";
import Safe from "@/../public/advantages/guard-icon.png";
import Sale from "@/../public/advantages/price-icon.png";
import Ramp from "@/../public/advantages/lift-icon.png";
import Loc from "@/../public/advantages/location.png";
import Kub from "@/../public/advantages/assortment-icon.png";
import Cam from "@/../public/advantages/camera-icon.png";
import Gryz from "@/../public/special-vehicle-icon 1.svg";
import Bud from "@/../public/advantages/building-icon.png";
import TwoPolygons from "./TwoPolygons";

const DesktopBlock = ({ polygon }) => {
  return (
    <>
      <article className={styles.polygon_block}>
        <OnePolygon polygon={polygon} label="ind_ben_security" icon={Safe} />
        <TwoPolygons
          icons={[People, Ramp]}
          labels={["ind_ben_pers", "ind_ben_ramp"]}
          polygon={polygon}
        />
        <OnePolygon polygon={polygon} label="ind_ben_location" icon={Loc} />
        <TwoPolygons
          icons={[Kub, Cam]}
          labels={["ind_ben_prostir", "ind_ben_cam"]}
          polygon={polygon}
        />
        <OnePolygon polygon={polygon} label="ind_ben_technika" icon={Gryz} />
        <TwoPolygons
          icons={[Sale, Bud]}
          labels={["ind_ben_price", "ind_ben_dostyp"]}
          polygon={polygon}
        />
        <OnePolygon polygon={polygon} label="ind_ben_park" icon={Park} />
      </article>
    </>
  );
};

export default DesktopBlock;

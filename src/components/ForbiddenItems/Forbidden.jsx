import styles from "./Forbidden.module.scss";

import Prod from "@/../public/prohibited/food-icon.svg";
import Ros from "@/../public/prohibited/plant-icon.svg";
import Weapon from "@/../public/prohibited/gun-icon.svg";
import Ball from "@/../public/prohibited/gas-icon.svg";
import Fuel from "@/../public/petrol-icon.svg";
import Tocs from "@/../public/prohibited/toxic-icon.svg";
import Smell from "@/../public/prohibited/scent-icon.svg";
import Other from "@/../public/prohibited/animal-icon.svg";

import ItemsContainer from "./ItemsContainer";

const Forbidden = () => {
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>Заборонено</h3>
        <article className={styles.image_block}>
          <article className={styles.article_three}>
            <ItemsContainer image={Prod} title="ind_fob_prod" />
            <ItemsContainer image={Ros} title="ind_fob_ros" />
          </article>
          <article className={styles.article_two}>
            <ItemsContainer image={Weapon} title="ind_fob_weapon" />
            <ItemsContainer image={Ball} title="ind_fob_ball" />
            <ItemsContainer image={Fuel} title="ind_fob_fuel" />
          </article>
          <article className={styles.article_one}>
            <ItemsContainer image={Tocs} title="ind_fob_tocs" />
            <ItemsContainer image={Other} title="ind_fob_pets" />
            <ItemsContainer image={Smell} title="ind_fob_smell" />
          </article>
        </article>
      </article>
    </section>
  );
};
export default Forbidden;

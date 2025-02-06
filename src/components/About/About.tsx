import Slider from "../Slider/Slider";
import styles from "./About.module.scss";

export default function About() {
  return (
    <article className={styles.root}>
      <h3>Про нас</h3>
      <p>
        У нас Ви орендуєте тепле, сухе і чисте приміщення площею від 1 до 10 м²
        з охороною, відеоспостереженням, доступом 24/7. Вам необхідно звільнити
        підвал, горище чи балкон від речей, якими Ви рідко користуєтеся?
      </p>
      <p>
        Ми вирішимо Ваші проблеми. Забудьте про обмеження в просторі та
        переймайтеся лише своїми справами, довіривши нам важливе завдання
        зберігання вашого майна.
      </p>
      <div className={styles.slider_block}>
        <Slider />
      </div>
    </article>
  );
}

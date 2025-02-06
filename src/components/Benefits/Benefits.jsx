"use client";

import styles from "./Benefits.module.scss";

import useResize from "@/hooks/useResize";

import MobileBlock from "./MobileBlock";
import DesktopBlock from "./DesktopBlock";

const Benefits = ({ polygon }) => {
  const isMobile = useResize(null);

  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <h3>Наші Переваги</h3>
        <p>
          Ми є оператором складських приміщень різного розміру, а також
          власниками будівель, де знаходяться склади, тому ви можете не
          хвилюватися щодо безпеки, у нас є досвід та налагоджена інфраструктура
        </p>
        {isMobile ? <MobileBlock /> : <DesktopBlock polygon={polygon} />}
      </article>
    </section>
  );
};

export default Benefits;

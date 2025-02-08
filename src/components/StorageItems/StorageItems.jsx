import styles from "./Items.module.scss";

import Allowed from "../AllowedItems/Allowed";
import Forbidden from "../ForbiddenItems/Forbidden";

const StorageItems = ({ polygon }) => {
  return (
    <section className={styles.root} id="rules">
      <article className={styles.wrapper}>
        <Allowed polygon={polygon} />
        <Forbidden />
      </article>
    </section>
  );
};
export default StorageItems;

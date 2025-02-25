import Image from "next/image";
import styles from "./Propositions.module.scss";
import Polygon from "@/../public/black-poly.svg";
import Left from "@/../public/left.svg";
import Right from "@/../public/right.svg";

export default function Propositions() {
  return (
    <div className={styles.root}>
      <Image alt="Left Polygon" src={Left} className={styles.left} />
      <Image alt="Right Polygon" src={Right} className={styles.right} />
      <div className={styles.wrapper}>
        <h3>СПЕЦПРОПОЗИЦІЇ</h3>
        <div className={styles.list}>
          <div>
            <Image alt="Point" src={Polygon} width={30} height={30} />
            <p>
              від <b>6 місяців</b> даруємо знижку <b>5%</b>
            </p>
          </div>
          <div>
            <Image alt="Point" src={Polygon} width={30} height={30} />
            <p>
              від <b>12 місяців</b> - знижку <b>10%</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

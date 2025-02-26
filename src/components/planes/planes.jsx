import styles from "./planes.module.css";
import Image from "next/image";
import CardPlanesOne from "@/components/cardPlanes/cardPlanesOne";
import CardPlanesTwo from "@/components/cardPlanes/cardPlanesTwo";
import CardPlanesTre from "@/components/cardPlanes/cardPlanesTre";
import CardPlanesFor from "@/components/cardPlanes/cardPlanesFor";

export default function Planes({ id }) {
  return (
    <section id={id} className={styles.containerPlanes}>
      <section className={styles.titleSection}>
        <div className={styles.flexDescripcionTitle}>
          <p>Encuentra el programa ideal</p>
          <Image src="/arrow.svg" alt="icon-btn" width={17} height={17} />
        </div>
        <h2>
          Planes de <span>entrenamiento</span>
        </h2>
      </section>
      <section className={styles.flexBoxCards}>
        <CardPlanesOne />
        <CardPlanesTwo />
        <CardPlanesTre />
        <CardPlanesFor />
      </section>
    </section>
  );
}

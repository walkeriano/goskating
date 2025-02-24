import styles from "./productOne.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductOne() {
  return (
    <section className={styles.containerInfo}>
      <section className={styles.boxImageProduct}>
        <Image src="/traje.png" alt="image-product" fill={true} />
      </section>
      <section className={styles.infoProduct}>
        <h3>Patín lineal 4 ruedas conex 2025</h3>
        <div className={styles.precioProduct}>
          <p>S/. 130.00</p>
          <p>S/. 130.00</p>
        </div>
        <ul>
          <li>Tallas: 32 - 43</li>
          <li>Material: Cuero Sintético</li>
          <li>Ruedas: Poliotireno</li>
        </ul>
        <section className={styles.flexImages}>
          <div className={styles.itemImg}>
            <Image src="/traje.png" alt="image-product" fill={true} />
          </div>
          <div className={styles.itemImg}>
            <Image src="/card-kids.jpg" alt="image-product" fill={true} />
          </div>
          <div className={styles.itemImg}>
            <Image src="/card-kids.jpg" alt="image-product" fill={true} />
          </div>
        </section>
      </section>
    </section>
  );
}

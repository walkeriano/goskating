import styles from "./productos.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductOne from "@/components/productOne/productOne";

export default function Productos({id}) {
  return (
    <section id={id} className={styles.containerProductos}>
      <section className={styles.titleSection}>
        <div className={styles.flexDescripcionTitle}>
          <p>Productos disponibles</p>
          <Image src="/arrow.svg" alt="icon-btn" width={15} height={15} />
        </div>
        <h2>
          tienda <span>deportiva</span>
        </h2>
      </section>
      <section className={styles.catalogSpace}>
        <button>
          <Image src="/arrow-next.svg" alt="icon-btn" width={22} height={22} />
        </button>
        <section className={styles.carrilProducts}>
          <ProductOne />
          <ProductOne />
        </section>
        <button>
          <Image src="/arrow-next.svg" alt="icon-btn" width={22} height={22} />
        </button>
        <span></span>
      </section>
      <Link href="/" className={styles.btnComprar}>
        comprar
        <Image src="/buy.svg" alt="icon-btn-comprar" width={22} height={22} />
      </Link>
    </section>
  );
}

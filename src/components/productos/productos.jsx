import React, { useState } from "react";
import styles from "./productos.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductOne from "@/components/productOne/productOne";

export default function Productos({ id }) {
  const [index, setIndex] = useState(0);

  const products = [
    <ProductOne key={0} />,
    <ProductOne key={1} />,
    <ProductOne key={2} />,
  ];

  const nextProduct = () => {
    if (index < products.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevProduct = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

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
        <button onClick={prevProduct} disabled={index === 0}>
          <Image src="/arrow-next.svg" alt="icon-btn" width={22} height={22} />
        </button>
        <section
          className={styles.carrilProducts}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {products}
        </section>
        <button onClick={nextProduct} disabled={index === products.length - 1}>
          <Image src="/arrow-next.svg" alt="icon-btn" width={22} height={22} />
        </button>
      </section>
      <a
        href="https://wa.me/51983552696?text=Hola%20,me%20interesa%20este%20producto"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnComprar}
      >
        comprar
        <Image src="/buy.svg" alt="icon-btn-comprar" width={22} height={22} />
      </a>
      <span className={styles.degradGrey}></span>
    </section>
  );
}

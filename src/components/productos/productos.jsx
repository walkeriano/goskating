import React, { useState } from "react";
import styles from "./productos.module.css";
import Image from "next/image";
import Link from "next/link";
import ProductOne from "@/components/productOne/productOne";
import ProductTwo from "@/components/productOne/productTwo";
import ProductTre from "@/components/productOne/productTre";
import ProductFor from "@/components/productOne/productFor";
import ProductFive from "@/components/productOne/productFive";
import ProductSix from "@/components/productOne/productSix";
import ProductSeven from "@/components/productOne/productSeven";
import ProductOcho from "@/components/productOne/productOcho";
import ProductNine from "@/components/productOne/productNine";
import ProductTen from "@/components/productOne/productTen";








export default function Productos({ id }) {
  const [index, setIndex] = useState(0);

  const products = [
    <ProductOne key={0} />,
    <ProductTwo key={1} />,
    <ProductTre key={2} />,
    <ProductFor key={3} />,
    <ProductFive key={4} />,
    <ProductSix key={5} />,
    <ProductSeven key={6} />,
    <ProductOcho key={7} />,
    <ProductNine key={8} />,
    <ProductTen key={9} />,
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

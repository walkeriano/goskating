import React, { useState } from "react";
import styles from "./productOne.module.css";
import Image from "next/image";

export default function ProductOne() {
  const [selectedImage, setSelectedImage] = useState("/traje.png");

  const images = ["/traje.png", "/card-elite.jpg", "/card-kids.jpg"];

  return (
    <section className={styles.containerInfo}>
      <section className={styles.boxImageProduct}>
        <Image src={selectedImage} alt="image-product" fill={true} />
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
          {images.map((img, index) => (
            <div
              key={index}
              className={`${styles.itemImg} ${
                selectedImage === img ? styles.active : ""
              }`}
              onClick={() => setSelectedImage(img)}
            >
              <Image src={img} alt="image-product" fill={true} />
            </div>
          ))}
        </section>
      </section>
    </section>
  );
}

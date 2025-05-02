import React, { useState } from "react";
import styles from "./productOne.module.css";
import Image from "next/image";

export default function ProductTre() {
  const [selectedImage, setSelectedImage] = useState("/item-3-1.png");

  const images = ["/item-3-1.png", "/item-3-2.png"];

  return (
    <section className={styles.containerInfo}>
      <section className={styles.boxImageProduct}>
        <Image src={selectedImage} alt="image-product" fill={true} />
      </section>
      <section className={styles.infoProduct}>
        <h3>Casco protector sho-vit - Blanco</h3>
        <div className={styles.precioProduct}>
          <p>S/.130.00</p>
          <p>S/.130.00</p>
        </div>
        <ul>
          <li>Tallas: S / M / L</li>
          <li>Material: Plástico</li>
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

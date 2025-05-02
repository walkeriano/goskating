import React, { useState } from "react";
import styles from "./productOne.module.css";
import Image from "next/image";

export default function ProductSeven() {
  const [selectedImage, setSelectedImage] = useState("/item-7-1.png");

  const images = ["/item-7-1.png", "/item-7-2.png"];

  return (
    <section className={styles.containerInfo}>
      <section className={styles.boxImageProduct}>
        <Image src={selectedImage} alt="image-product" fill={true} />
      </section>
      <section className={styles.infoProduct}>
        <h3>Patines sho-vit IVOLI - Verde</h3>
        <div className={styles.precioProduct}>
          <p>S/.130.00</p>
          <p>S/.130.00</p>
        </div>
        <ul>
          <li>Tallas: 35-44</li>
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

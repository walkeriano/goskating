import React, { useState } from "react";
import styles from "./cardPlanes.module.css";
import Image from "next/image";

export default function CardPlanesTre() {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState("/card-elite.jpg");

  const imagesCards = [
    "/card-elite.jpg",
    "/card-kids.jpg",
    "/card-basic.jpg",
    "/card-competicion.jpg",
  ];

  return (
    <section className={styles.cardPlan}>
      <section
        className={`${styles.leftCard} ${showCard ? styles.switch : ""}`}
      >
        <section className={styles.textCard}>
          <h3>
            go<span>elite</span>
          </h3>
          <h4>Nivel: Solo para avanzados</h4>
          <p>
            En este nivel, los niños comienzan a aprender los principios básicos
            del patinaje, como el equilibrio y los movimientos fundamentales.
          </p>
          {showCard && (
            <p>
              A través de clases dinámicas y juegos, desarrollan confianza y
              coordinación, sentando las bases para un progreso efectivo. Este
              nivel es crucial para avanzar hacia una etapa en la quepodrán
              disfrutar aún más del deporte y mejorar sus habilidadesde manera
              significativa.
            </p>
          )}
        </section>
        <section className={styles.buttonsCard}>
          <a
            href="https://wa.me/51983552696?text=Hola%20¿Quiero%20ver%20los%20horarios%20de%20goElite"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnContactCard}
          >
            Ver horarios
            <Image src="/wss.svg" alt="icon-btn" width={22} height={22} />
          </a>
          {showCard ? (
            <button
              className={styles.btnMoreDetails}
              onClick={() => setShowCard((prev) => !prev)}
            >
              ocultar
              <Image
                src="/arrow-next.svg"
                alt="icon-btn"
                width={18}
                height={18}
                style={{ transform: `rotate(-90deg)` }}
              />
            </button>
          ) : (
            <button
              className={styles.btnMoreDetails}
              onClick={() => setShowCard((prev) => !prev)}
            >
              más detalles
              <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
            </button>
          )}
        </section>
      </section>
      {showCard ? (
        <section className={styles.rightCardShow}>
          <section className={styles.viewImage}>
            <Image
              src={selectedCard}
              alt="image-product"
              fill={true}
              className={styles.visualizerImg}
            />
          </section>
          <section className={styles.flexAllImages}>
            {imagesCards.map((img, index) => (
              <div
                key={index}
                className={`${styles.boxImage} ${
                  selectedCard === img ? styles.active : ""
                }`}
                onClick={() => setSelectedCard(img)}
              >
                <Image
                  src={img}
                  alt="icon-btn"
                  fill={true}
                  className={styles.boxImg}
                />
              </div>
            ))}
          </section>
        </section>
      ) : (
        <section className={styles.rightCard}>
          <span className={styles.boxMore} onClick={() => setShowCard(true)}>
            <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
          </span>
          <Image
            src="/card-elite.jpg"
            alt="icon-btn"
            fill={true}
            className={styles.portadaCard}
          />
        </section>
      )}
      <span className={`${styles.titleBg} ${showCard ? styles.moreSize : ""}`}>elite</span>
      <div className={styles.boxColor}></div>
    </section>
  );
}

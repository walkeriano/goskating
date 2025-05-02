import React, { useState } from "react";
import styles from "./cardPlanes.module.css";
import Image from "next/image";

export default function CardPlanesTwo() {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState("/card-basic.jpg");

  const imagesCards = [
    "/card-basic.jpg",
    "/card-kids.jpg",
    "/card-elite.jpg",
    "/card-competicion.jpg",
  ];

  return (
    <section className={styles.cardPlan}>
      <section
        className={`${styles.leftCard} ${showCard ? styles.switch : ""}`}
      >
        <section className={styles.textCard}>
          <h3>
            go<span>basic</span>
          </h3>
          <h4>Nivel: Iniciados e intermedios</h4>
          <p>
            El Nivel GO BASIC es nuestra segunda etapa del aprendizaje del
            patinaje, enfocada en reforzar las habilidades básicas y mejorar la
            estabilidad, coordinación y control del movimiento. Aquí, los
            patinadores comienzan a desarrollar mayor fluidez y seguridad en su
            desplazamiento.
          </p>
          {showCard && (
            <p>
              Objetivos del Nivel GO BASIC: Perfeccionamiento de la postura y
              equilibrio. Técnica de deslizamiento con ambos pies. Giros básicos
              y cambios de dirección. Frenado con mayor control. Introducción a
              la técnica de empuje para mejorar la velocidad. En este nivel, los
              patinadores adquieren mayor confianza y comienzan a moverse con
              mayor naturalidad, preparándose para maniobras más avanzadas.
            </p>
          )}
        </section>
        <section className={styles.buttonsCard}>
          <a
            href="https://wa.me/51983552696?text=Hola%20¿Quiero%20ver%20los%20horarios%20de%20goBasic"
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
            src="/card-basic.jpg"
            alt="icon-btn"
            fill={true}
            className={styles.portadaCard}
          />
        </section>
      )}
      <span className={`${styles.titleBg} ${showCard ? styles.moreSize : ""}`}>
        basic
      </span>
      <div className={styles.boxColor}></div>
    </section>
  );
}

import React, { useState } from "react";
import styles from "./cardPlanes.module.css";
import Image from "next/image";

export default function CardPlanesOne() {
  const [showCard, setShowCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState("/card-kids.jpg");

  const imagesCards = [
    "/card-kids.jpg",
    "/card-basic.jpg",
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
            go<span>kids</span>
          </h3>
          <h4>Nivel: Exclusivo para niño(a)s</h4>
          <p>
            Es nuestra etapa inicial en el aprendizaje del patinaje, diseñada
            para quienes nunca han patinado o tienen poca experiencia. En este
            nivel, se trabajan las bases fundamentales para desarrollar
            equilibrio, confianza y control sobre los patines.
          </p>
          {showCard && (
            <p>
              Objetivos del Nivel GO: Familiarización con el equipo (patines,
              protecciones y casco). Postura y equilibrio adecuado en posición
              básica. Técnicas de seguridad: cómo caer y levantarse
              correctamente. Desplazamiento inicial: marcha en V y pasos cortos.
              Aprendizaje del frenado básico Este nivel es clave para adquirir
              confianza y seguridad antes de avanzar a técnicas más complejas,
              tomando en cuenta que en este nivel no importa la edad del alumno.
            </p>
          )}
        </section>
        <section className={styles.buttonsCard}>
          <a
            href="https://wa.me/51983552696?text=Hola%20¿Quiero%20ver%20los%20horarios%20de%20goKids"
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
            src="/card-kids.jpg"
            alt="icon-btn"
            fill={true}
            className={styles.portadaCard}
          />
        </section>
      )}
      <span className={`${styles.titleBg} ${showCard ? styles.moreSize : ""}`}>
        kids
      </span>
      <div className={styles.boxColor}></div>
    </section>
  );
}

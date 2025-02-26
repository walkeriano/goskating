import React, { useState } from "react";
import styles from "./nosotros.module.css";
import Image from "next/image";
import ContactChanels from "@/components/contactChanels/contactChanels";

export default function Nosotros({ id }) {
  const [index, setIndex] = useState(0);

  const images = [
    "/img-slider-one.jpg",
    "/img-slider-two.jpg",
    "/img-slider-tre.jpg",
    "/img-slider-for.jpg",
    "/img-slider-five.jpg",
    "/card-kids.jpg",
    "/card-elite.jpg",
    "/card-basic.jpg",
    "/card-competicion.jpg",
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex < images.length - 5 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 5));
  };

  return (
    <section id={id} className={styles.containerNosotros}>
      <h2>
        Escuela de <span>patinaje</span>
      </h2>
      <section className={styles.sliderSection}>
        <button onClick={prevSlide}>
          <Image src="/arrow-next.svg" alt="icon-wss" width={25} height={25} />
        </button>
        <section
          className={styles.slider}
          style={{
            transform: `translateX(-${index * 19.4}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((src, i) => (
            <div className={styles.imageBox} key={i}>
              <Image src={src} alt={`slide-${i}`} fill={true} />
            </div>
          ))}
        </section>
        <button onClick={nextSlide}>
          <Image src="/arrow-next.svg" alt="icon-wss" width={25} height={25} />
        </button>
      </section>
      <section className={styles.infoNosotros}>
        <div className={styles.flexDescription}>
          <p>
            <span>
              Somos una escuela dedicada a ofrecer programas de formación y
              entrenamientos especializados, diseñados para ser herramientas
              clave en el desarrollo físico, social y emocional de la comunidad.
            </span>{" "}
            A través de una enseñanza integral, buscamos fomentar habilidades
            que contribuyan al bienestar general de nuestros estudiantes,
            promoviendo la actividad física como un medio para mejorar la salud
            y fortalecer los lazos sociales.
          </p>
          <p>
            Además, nuestro enfoque está orientado a crear un ambiente inclusivo
            y motivador, donde cada individuo pueda alcanzar su máximo potencial.
          </p>
        </div>
        <ContactChanels />
      </section>
    </section>
  );
}
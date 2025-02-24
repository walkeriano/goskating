import styles from "./nosotros.module.css";
import Link from "next/link";
import Image from "next/image";
import ContactChanels from "@/components/contactChanels/contactChanels";

export default function Nosotros({ id }) {
  return (
    <section id={id} className={styles.containerNosotros}>
      <h2>
        Escuela de <span>patinaje</span>
      </h2>
      <section className={styles.sliderSection}>
        <button>
          <Image src="/arrow-next.svg" alt="icon-wss" width={25} height={25} />
        </button>
        <section className={styles.slider}>
          <div className={styles.imageBox}>
            <Image src="/img-slider-one.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-two.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-tre.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-for.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-five.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-one.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-two.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-tre.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-for.jpg" alt="Hero-2" fill={true} />
          </div>
          <div className={styles.imageBox}>
            <Image src="/img-slider-five.jpg" alt="Hero-2" fill={true} />
          </div>
        </section>
        <button>
          <Image src="/arrow-next.svg" alt="icon-wss" width={25} height={25} />
        </button>
      </section>
      <section className={styles.infoNosotros}>
        <div className={styles.flexDescription}>
          <p>
            <span>
              Somos una escuela dedicada a ofrecer programas deformación y
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
            y motivador, donde cada individuo pueda alcanzar su máximo potencial
          </p>
        </div>
        <ContactChanels/>
      </section>
    </section>
  );
}

import styles from "./planes.module.css";
import Image from "next/image";


export default function Planes({ id }) {
  return (
    <section id={id} className={styles.containerPlanes}>
      <section className={styles.titleSection}>
        <div className={styles.flexDescripcionTitle}>
          <p>Encuentra el programa ideal</p>
          <Image src="/arrow.svg" alt="icon-btn" width={17} height={17} />
        </div>
        <h2>
          Planes de <span>entrenamiento</span>
        </h2>
      </section>
      <section className={styles.flexBoxCards}>
        <section className={styles.cardPlan}>
          <section className={styles.leftCard}>
            <section className={styles.textCard}>
              <h3>
                go<span>kids</span>
              </h3>
              <h4>Nivel: Exclusivo para niño(a)s</h4>
              <p>
                En este nivel, los niños comienzan a aprender los principios
                básicos del patinaje, como el equilibrio y los movimientos
                fundamentales.
              </p>
            </section>
            <section className={styles.buttonsCard}>
              <a
                href="https://wa.me/51983552696?text=Hola%20¿me%20brindas%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnContactCard}
              >
                Ver horarios
                <Image src="/wss.svg" alt="icon-btn" width={22} height={22} />
              </a>
              <button className={styles.btnMoreDetails}>
                más detalles
                <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
              </button>
            </section>
          </section>
          <section className={styles.rightCard}>
            <span className={styles.boxMore}>
              <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
            </span>
            <Image
              src="/card-kids.jpg"
              alt="icon-btn"
              fill={true}
              className={styles.portadaCard}
            />
          </section>
          <span className={styles.titleBg}>kids</span>
          <div className={styles.boxColor}></div>
        </section>
        <section className={styles.cardPlan}>
          <section className={styles.leftCard}>
            <section className={styles.textCard}>
              <h3>
                go<span>basic</span>
              </h3>
              <h4>Nivel: Iniciados e intermedios</h4>
              <p>
                En este nivel, los niños comienzan a aprender los principios
                básicos del patinaje, como el equilibrio y los movimientos
                fundamentales.
              </p>
            </section>
            <section className={styles.buttonsCard}>
              <a
                href="https://wa.me/51983552696?text=Hola%20¿me%20brindas%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnContactCard}
              >
                Ver horarios
                <Image src="/wss.svg" alt="icon-btn" width={22} height={22} />
              </a>
              <button className={styles.btnMoreDetails}>
                más detalles
                <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
              </button>
            </section>
          </section>
          <section className={styles.rightCard}>
            <span className={styles.boxMore}>
              <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
            </span>
            <Image
              src="/card-basic.jpg"
              alt="icon-btn"
              fill={true}
              className={styles.portadaCard}
            />
          </section>
          <span className={styles.titleBg}>basic</span>
          <div className={styles.boxColor}></div>
        </section>
        <section className={styles.cardPlan}>
          <section className={styles.leftCard}>
            <section className={styles.textCard}>
              <h3>
                go<span>elite</span>
              </h3>
              <h4>Nivel: Avanzados con experiencia</h4>
              <p>
                En este nivel, los niños comienzan a aprender los principios
                básicos del patinaje, como el equilibrio y los movimientos
                fundamentales.
              </p>
            </section>
            <section className={styles.buttonsCard}>
              <a
                href="https://wa.me/51983552696?text=Hola%20¿me%20brindas%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnContactCard}
              >
                Ver horarios
                <Image src="/wss.svg" alt="icon-btn" width={22} height={22} />
              </a>
              <button className={styles.btnMoreDetails}>
                más detalles
                <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
              </button>
            </section>
          </section>
          <section className={styles.rightCard}>
            <span className={styles.boxMore}>
              <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
            </span>
            <Image
              src="/card-elite.jpg"
              alt="icon-btn"
              fill={true}
              className={styles.portadaCard}
            />
          </section>
          <span className={styles.titleBg}>elite</span>
          <div className={styles.boxColor}></div>
        </section>
        <section className={styles.cardPlan}>
          <section className={styles.leftCard}>
            <section className={styles.textCard}>
              <h3>
                go<span>transition</span>
              </h3>
              <h4>Nivel: Competición profesional</h4>
              <p>
                En este nivel, los niños comienzan a aprender los principios
                básicos del patinaje, como el equilibrio y los movimientos
                fundamentales.
              </p>
            </section>
            <section className={styles.buttonsCard}>
              <a
                href="https://wa.me/51983552696?text=Hola%20¿me%20brindas%20más%20información?"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnContactCard}
              >
                Ver horarios
                <Image src="/wss.svg" alt="icon-btn" width={22} height={22} />
              </a>
              <button className={styles.btnMoreDetails}>
                más detalles
                <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
              </button>
            </section>
          </section>
          <section className={styles.rightCard}>
            <span className={styles.boxMore}>
              <Image src="/more.svg" alt="icon-btn" width={18} height={18} />
            </span>
            <Image
              src="/card-competicion.jpg"
              alt="icon-btn"
              fill={true}
              className={styles.portadaCard}
            />
          </section>
          <span className={styles.titleBg}>transition</span>
          <div className={styles.boxColor}></div>
        </section>
      </section>
    </section>
  );
}

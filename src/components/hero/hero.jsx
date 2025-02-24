import styles from "./hero.module.css";
import Image from "next/image";
import ContactChanels from "@/components/contactChanels/contactChanels";
import AnimationHero from "@/components/animationHero/animationHero";
export default function Hero({ id }) {
  return (
    <section id={id} className={styles.heroContainer}>
      <section className={styles.infoHero}>
        <h1>
          Patinaje de
          <br />
          <span>velocidad</span>
        </h1>
        <h2>
          Programas de formación y<br />
          entrenamientos personalizados
        </h2>
        <div className={styles.socialHero}>
          <a href="https://www.facebook.com/Comopezenelaula" target="_blank">
            <Image src="/ins.svg" alt="icon-hero-1" width={25} height={25} />
          </a>
          <a href="https://www.facebook.com/Comopezenelaula" target="_blank">
            <Image src="/tk.svg" alt="icon-hero-2" width={27} height={27} />
          </a>
          <a href="https://www.facebook.com/Comopezenelaula" target="_blank">
            <Image src="/fb.svg" alt="icon-hero-3" width={27} height={27} />
          </a>
        </div>
      </section>
      <section className={styles.contactButton}>
        <ContactChanels />
      </section>
      <section className={styles.leftSpace}>
        <section className={styles.personSection}>
          <Image src="/person.png" alt="Hero-2" fill={true} />
        </section>
        <section className={styles.degradPerson}>
          <Image src="/person-degrad.png" alt="Hero-2" fill={true} />
        </section>
      </section>
      <section className={styles.rightSpace}>
        <AnimationHero />
      </section>
      <section className={styles.degradText}>
        <h2>goskating</h2>
        <div></div>
      </section>
    </section>
  );
}

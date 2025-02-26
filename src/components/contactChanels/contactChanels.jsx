import styles from "./contactChanels.module.css";

export default function ContactChanels() {
  return (
    <section className={styles.allBtns}>
      <a
        href="https://wa.me/51983552696?text=Hola%20¿me%20quiero%20inscribirme%20ahora"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.wssBtn}
      >
        Inscribirme
        <img src="/wss.svg" alt="icon-btn" width={22} height={22} />
      </a>
      <a href="tel:+34639405634" className={styles.otherBtn}>
        <img src="/call.svg" alt="icon-btn" width={20} height={20} />
      </a>
      <a href="mailto: contacto@goskating.com" className={styles.otherBtn}>
        <img src="/email.svg" alt="icon-btn" width={20} height={20} />
      </a>
    </section>
  );
}

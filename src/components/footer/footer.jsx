import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <button onClick={() => scrollToSection("hero")} className={styles.btnUp}>
        <Image src="/arrow.svg" alt="icon-btn" width={30} height={30} />
      </button>
      <span className={styles.animationMove}></span>
      <h2>goskating</h2>
      <section className={styles.containFooter}>
        <section className={styles.leftFooter}>
          <Image
            src="/logo-goskating.png"
            alt="icon-btn"
            width={230}
            height={70}
          />
          <p>Todos los derechos reservados 2025.</p>
          <p>Go Skating S.A.C</p>
        </section>
        <section className={styles.rightFooter}>
          <ul>
            <li>993 744 957</li>
            <li>contacto@gmail.com</li>
            <li>goskating.com</li>
            <li>Lima, Perú</li>
          </ul>
          <div className={styles.socialMediaFooter}>
            <Link href="/" className={styles.btnSocial}>
              <Image src="/ins.svg" alt="icon-btn" width={30} height={30} />
            </Link>
            <Link href="/" className={styles.btnSocial}>
              <Image src="/tk.svg" alt="icon-btn" width={30} height={30} />
            </Link>
            <Link href="/" className={styles.btnSocial}>
              <Image src="/fb.svg" alt="icon-btn" width={30} height={30} />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}

import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.headerBox}>
      <Image
        src="/logo-goskating.png"
        alt="Logo-goskating"
        width={230}
        height={70}
        onClick={() => scrollToSection("hero")}
      />
      <section className={styles.sectionButtons}>
        <button onClick={() => scrollToSection("nosotros")}>nosotros</button>
        <button onClick={() => scrollToSection("planes")}>planes</button>
        <button onClick={() => scrollToSection("productos")}>productos</button>
        <button onClick={() => scrollToSection("contacto")}>contacto</button>
      </section>
    </section>
  );
}

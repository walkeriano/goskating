import React, { useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
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
        className={styles.logoGo}
      />
      <button
        onClick={() => setShowMenu((prev) => !prev)}
        className={styles.menuShow}
      >
        {showMenu ? (
          <Image
            src="/more.svg"
            alt="menu-icon"
            width={25}
            height={25}
            style={{ transform: `rotate(45deg)` }}
          />
        ) : (
          <Image src="/menu-icon.svg" alt="menu-icon" width={30} height={18} />
        )}
      </button>
      {showMenu && (
        <section className={styles.responsiveMenu}>
          <button onClick={() => scrollToSection("nosotros")}>nosotros</button>
          <button onClick={() => scrollToSection("planes")}>planes</button>
          <button onClick={() => scrollToSection("productos")}>
            productos
          </button>
          <button onClick={() => scrollToSection("contacto")}>contacto</button>
        </section>
      )}
      <section className={styles.sectionButtons}>
        <button onClick={() => scrollToSection("nosotros")}>nosotros</button>
        <button onClick={() => scrollToSection("planes")}>planes</button>
        <button onClick={() => scrollToSection("productos")}>productos</button>
        <button onClick={() => scrollToSection("contacto")}>contacto</button>
      </section>
    </section>
  );
}

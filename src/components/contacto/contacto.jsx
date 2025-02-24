import styles from "./contacto.module.css";
import Image from "next/image";
import ContactChanels from "@/components/contactChanels/contactChanels";

export default function Contacto({ id }) {
  return (
    <section id={id} className={styles.containContact}>
      <section className={styles.leftContact}>
        <h2>
          Atención al
          <br />
          <span>cliente</span>
        </h2>
        <p>
          Envía tus datos de contacto y nuestros asesores de venta te
          contactarán
        </p>
        <ContactChanels />
      </section>
      <section className={styles.rightContact}>
        <div className={styles.titleContact}>
          <p>Formulario de contacto</p>
          <Image src="/arrow.svg" alt="icon-btn" width={15} height={15} />
        </div>
        <form action="" className={styles.formContact}>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Teléfono" />
          <textarea placeholder="Mensaje..."></textarea>
          <button type="submit">
            Enviar
            <Image src="/send.svg" alt="icon-btn" width={20} height={20} />
          </button>
        </form>
      </section>
      <div className={styles.bgDegrad}>
        <Image src="/person-degrad.png" alt="degrad-person" fill={true} />
      </div>
    </section>
  );
}

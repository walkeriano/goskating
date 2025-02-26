import { useState, useRef } from "react";
import styles from "./contacto.module.css";
import Image from "next/image";
import ContactChanels from "@/components/contactChanels/contactChanels";

export default function Contacto({ id }) {
  const formRef = useRef(null);
  const [isSuccess, setIsSuccess] = useState(false); // Estado para mostrar mensaje de éxito
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para deshabilitar el botón mientras se envía
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  const onSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setErrorMessage(""); // Limpiar cualquier mensaje de error anterior

    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);

    // Aquí es donde agregamos la clave de acceso de Web3Forms
    const accessKey = "285d4c2e-2da7-44f5-8632-15a4707d41a5"; // Asegúrate de incluir las comillas
    object.access_key = accessKey;

    const json = JSON.stringify(object);

    // Enviar los datos al API de Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setIsSuccess(true);
      // Resetea el formulario después de un tiempo
      setTimeout(() => {
        formRef.current.reset();
        setIsSuccess(false);
      }, 3000);
    } else {
      setErrorMessage(
        "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }

    setIsSubmitting(false); // Rehabilitar el botón después de la respuesta
  };

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
        {isSuccess && (
          <div className={styles.successMessage}>
            <Image src="/check.svg" alt="Success" width={50} height={50} />
            <p>¡Gracias! Tu mensaje ha sido enviado con éxito</p>
          </div>
        )}
        <div className={styles.titleContact}>
          <p>Formulario de contacto</p>
          <Image src="/arrow.svg" alt="icon-btn" width={15} height={15} />
        </div>
        <form ref={formRef} onSubmit={onSubmit} className={styles.formContact}>
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="number" name="phone" placeholder="Teléfono" required />
          <textarea name="message" placeholder="Mensaje..." required></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar"}
            <Image src="/send.svg" alt="icon-btn" width={20} height={20} />
          </button>
        </form>
        {errorMessage && (
          <div className={styles.errorMessage}>
            <p>{errorMessage}</p>
          </div>
        )}
      </section>
      <div className={styles.bgDegrad}>
        <Image src="/person-degrad.png" alt="degrad-person" fill={true} />
      </div>
    </section>
  );
}

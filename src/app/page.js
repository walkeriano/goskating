"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Head from "next/head";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Nosotros from "@/components/nosotros/nosotros";
import Planes from "@/components/planes/planes";
import Productos from "@/components/productos/productos";
import Contacto from "@/components/contacto/contacto";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loading/loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Go Skating - Patinaje de velocidad - Programas de formación y
          entrenamientos personalizados para niños, adolescentes y adultos.
        </title>
        <meta
          name="description"
          content="Descubre Go Skating - Patinaje de velocidad - Programas de formación y entrenamientos personalizados para niños, adolescentes y adultos."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="deporte, patinaje de velocidad, entrenamiento para niños, patinaje, entrenamiento personalizado, programas de formación"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://goskatingperu.com/logo512.png"
        />
        <meta
          property="og:title"
          content="Go Skating - Patinaje de velocidad - Programas de formación y entrenamientos personalizados para niños, adolescentes y adultos."
        />
        <meta
          property="og:description"
          content="Descubre Go Skating - Patinaje de velocidad - Programas de formación y entrenamientos personalizados para niños, adolescentes y adultos."
        />
        <meta
          property="og:image"
          content="https://goskatingperu.com/logo512.png"
        />
        <meta property="og:url" content="https://goskatingperu.com.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://goskatingperu.com.com" />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Hero id="hero" />
            <Nosotros id="nosotros" />
            <Planes id="planes" />
            <Productos id="productos" />
            <Contacto id="contacto" />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}

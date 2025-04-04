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
          Quesada Coach App - Planes de entrenamiento y nutrición personalizados
          creados por expertos
        </title>
        <meta
          name="description"
          content="Descubre Quesada Coach App, Planes de entrenamiento y nutrición personalizados creados por
            expertos, diseñados para transformar tu cuerpo y tu vida"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="fitness, Quesada Coach, alimentación saludalbe, bienestar, entrenamiento personalizado"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://quesadacoach.com/logo512.png"
        />
        <meta
          property="og:title"
          content="Quesada Coach App - Planes de entrenamiento y nutrición personalizados
          creados por expertos"
        />
        <meta
          property="og:description"
          content="Descubre Quesada Coach App, Planes de entrenamiento y nutrición personalizados creados por
            expertos, diseñados para transformar tu cuerpo y tu vida."
        />
        <meta
          property="og:image"
          content="https://quesadacoach.com/logo512.png"
        />
        <meta property="og:url" content="https://quesadacoach.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://quesadacoach.com" />
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

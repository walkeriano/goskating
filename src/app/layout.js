import localFont from "next/font/local";
import "./globals.css";

// Carga la fuente desde /public/font
const german = localFont({
  src: "../font/GERMAN-BEAUTY.ttf",
  variable: "--font-german", // Variable para usar en CSS
});

const airstrike = localFont({
  src: "../font/airstrikegrad.ttf",
  variable: "--font-airstrike",
});

export const metadata = {
  title: "Go Skating - Escuela de patinaje",
  description: "Programas de formación y entrenamientos personalizados en lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${german.variable} ${airstrike.variable}`}>
      <body>{children}</body>
    </html>
  );
}

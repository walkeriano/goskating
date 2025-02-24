import "./globals.css";



export const metadata = {
  title: "Go Skating - Escuela de patinaje",
  description: "Programas de formación y entrenamientos personalizados en lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

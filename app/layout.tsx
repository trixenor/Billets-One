// On importe le type Metadata pour décrire le titre, la description, etc.
import type { Metadata } from "next";

// On importe deux polices depuis Google grâce à Next.js
import { Geist, Geist_Mono } from "next/font/google";

// On importe le fichier global CSS (tailwind inclus)
import "./globals.css";

// On configure la première police (Geist Sans)
// "variable" : permet de l'utiliser comme une variable CSS
// "subsets" : quelles lettres la police doit inclure (latin)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// On configure la police monospace
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// On définit les métadonnées globales du site
export const metadata: Metadata = {
  title: "Billets One",
  description: "",
};

// RootLayout est la structure de base de ton site.
// Tout ton site passe dans {children}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // On définit la langue de la page
    <html lang="fr">
      {/* Le body, c’est là où tout ton site s'affiche */}
      <body
        className={`
          ${geistSans.variable}  // active la police Geist Sans
          ${geistMono.variable}  // active la police Geist Mono
          antialiased            // améliore la qualité du texte
          bg-black               // ✔️ met un fond NOIR à tout le site
          text-white             // ✔️ met le texte en BLANC (important)
        `}
      >
        {/* Tout ton site s'affiche ici */}
        {children}
      </body>
    </html>
  );
}

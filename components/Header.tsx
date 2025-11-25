"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER STYLE APPLE */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white px-6 py-3 border-b border-white/10">
        <div className="relative flex items-center justify-between max-w-6xl mx-auto">

          {/* BOUTON BURGER MOBILE */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
          >
            <FiMenu />
          </button>

          {/* LOGO CENTRÉ ●●● STYLE APPLE */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-billets-one.png"
                width={38}
                height={38}
                alt="Logo"
                className="select-none"
              />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-sm opacity-90">
            <Link href="/">Accueil</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">À propos</Link>
          </nav>

          {/* ICONES A DROITE */}
          <div className="flex items-center gap-6 text-xl">
            <FiSearch className="cursor-pointer" />
            <FiUser className="cursor-pointer" />
          </div>
        </div>
      </header>

      {/* MENU MOBILE (SLIDE + FADE) */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-black/95 text-white text-2xl gap-10 
        transition-all duration-300 ease-out z-50
        ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}
        `}
      >
        {/* BOUTON FERMER */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        <Link href="/" onClick={() => setOpen(false)}>Accueil</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        <Link href="/about" onClick={() => setOpen(false)}>À propos</Link>

        <div className="pt-6 flex flex-col gap-4 text-xl">
          <button className="border border-white px-6 py-2 rounded-full">
            Se connecter
          </button>
          <button className="bg-white text-black px-6 py-2 rounded-full">
            Créer un compte
          </button>
        </div>
      </div>
    </>
  );
}

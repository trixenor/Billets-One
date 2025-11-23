"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="flex items-center justify-between px-6 py-4 bg-black text-white fixed w-full top-0 left-0 z-50">

        {/* LEFT (mobile : menu burger) */}
        <button 
          className="md:hidden text-2xl" 
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>

        {/* LOGO centré mobile / à gauche desktop */}
        <Link href="/" className="flex items-center gap-2 mx-auto md:mx-0">
          <Image
            src="/logo-billets-one.png"
            width={40}
            height={40}
            alt="Logo"
          />
          <span className="text-lg font-semibold hidden md:inline">
            Billet One
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">À propos</Link>
        </nav>

        {/* ICONES À DROITE */}
        <div className="flex items-center gap-6 text-xl">
          <FiSearch className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>
      </header>


      {/* MENU MOBILE FULLSCREEN */}
      <div 
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center text-2xl gap-10 transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Fermeture */}
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

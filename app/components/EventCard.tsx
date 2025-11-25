"use client";

import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa"; // On utilise FontAwesome pour le look

interface EventCardProps {
  title: string;
  location: string;
  price: string; // ex: "4k"
  imageSrc: string;
}

export default function EventCard({ title, location, price, imageSrc }: EventCardProps) {
  return (
    <div className="relative bg-[#2C2C2E] p-4 rounded-[32px] w-full max-w-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
      
      {/* IMAGE */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[24px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* TEXTE */}
      <div className="px-1 mb-5">
        <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
        <div className="flex items-center text-gray-300 text-sm gap-1.5">
          <FaMapMarkerAlt className="text-white" /> {/* Icone Localisation */}
          <span>{location}</span>
        </div>
      </div>

      {/* BOUTONS BAS */}
      <div className="flex items-center justify-between gap-3">
        
        {/* Bouton Acheter */}
        <button className="flex-1 bg-white text-black font-bold py-3.5 px-6 rounded-full hover:bg-gray-200 transition text-sm sm:text-base">
          Achète un billet
        </button>

        {/* Prix + Note */}
        <div className="flex items-center gap-2 bg-black px-5 py-3.5 rounded-full text-white font-bold">
          <span>{price}</span>
          <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(250,204,21,0.6)]">
             <FaStar className="text-black text-[10px]" />
          </div>
        </div>

      </div>
    </div>
  );
}
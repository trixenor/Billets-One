"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

interface EventCardProps {
  eventId: number;
  title: string;
  location: string;
  initialLikes: number; // Doit être un nombre !
  imageSrc: string;
}

// Fonction pour formater les likes (ex: 4000 devient 4k)
const formatLikes = (count: number | undefined) => {
    // CORRECTION : On vérifie si count est bien un nombre, sinon on retourne '0' pour éviter le crash.
    if (typeof count !== 'number' || isNaN(count)) {
        return '0';
    }

    if (count >= 1000) {
        // toFixed(0) pour ne pas avoir de décimales comme 4.0k
        return `${(count / 1000).toFixed(0)}k`; 
    }
    return count.toString();
};


export default function EventCard({ eventId, title, location, initialLikes, imageSrc }: EventCardProps) {
  
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false); // État pour l'utilisateur

  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche la navigation vers la page de détails
    
    // Logique de like simple (in-memory)
    if (liked) {
        setLikes(likes - 1);
    } else {
        setLikes(likes + 1);
    }
    setLiked(!liked);
    // TODO: Envoyer l'info au backend ici 
  };
  
  return (
    // Le Link permet de rendre toute la carte cliquable vers la page de détails
    <Link href={`/events/${eventId}`} passHref legacyBehavior>
      <div className="relative bg-[#2C2C2E] p-4 rounded-[32px] w-full max-w-sm shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        
        {/* IMAGE */}
        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-[24px]">
          {/* NOTE: N'oublie pas de mettre les images dans le dossier public/ */}
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
            <FaMapMarkerAlt className="text-white" />
            <span>{location}</span>
          </div>
        </div>

        {/* BOUTONS BAS */}
        <div className="flex items-center justify-between gap-3">
          
          {/* Bouton Acheter (Mène à la page de détails via le Link parent) */}
          <div className="flex-1">
            <button className="w-full bg-white text-black font-bold py-3.5 px-6 rounded-full hover:bg-gray-200 transition text-sm sm:text-base">
              Achète un billet
            </button>
          </div>

          {/* Bouton Like / Compteur */}
          <button 
            className={`flex items-center gap-2 px-5 py-3.5 rounded-full font-bold transition-colors ${
              liked ? 'bg-red-600 text-white' : 'bg-black text-white hover:bg-gray-900'
            }`}
            onClick={handleLikeClick}
          >
            <span>{formatLikes(likes)}</span>
            <FaStar className={`text-base ${liked ? 'text-white' : 'text-yellow-400'}`} />
          </button>

        </div>
      </div>
    </Link>
  );
}
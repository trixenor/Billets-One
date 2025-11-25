// app/events/[eventId]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

// app/events/[eventId]/page.tsx

// REMPLACEZ LES CHEMINS RELATIFS par les ALIAS (@/)
import { getEventById } from '@/lib/mock-data'; 
import TicketSelector from '@/components/TicketSelector'; 

// TypeScript pour récupérer l'ID dans l'URL
interface EventPageProps {
  params: {
    eventId: string;
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  // 1. On récupère l'ID et l'événement
  const id = Number(params.eventId);
  const event = getEventById(id);

  if (!event) {
    notFound(); 
  }

  return (
    <main className="min-h-screen">
      
      {/* BANNIÈRE IMAGE */}
      <div className="relative h-[40vh] w-full mb-10">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-brightness-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 -mt-20 relative z-10">
        
        {/* COLONNE 1 & 2 : INFOS & DESCRIPTION */}
        <div className="lg:col-span-2 bg-[#1E1E1E] p-8 rounded-xl shadow-2xl">
          <h1 className="text-5xl font-extrabold mb-4 text-white">{event.title}</h1>
          
          {/* Métadonnées (Date, Lieu) */}
          <div className="flex flex-wrap gap-6 mb-8 text-lg">
            <div className="flex items-center gap-3 text-gray-300">
              <FaCalendarAlt className="text-red-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaClock className="text-red-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <FaMapMarkerAlt className="text-red-500" />
              <span>{event.location}</span>
            </div>
          </div>
          
          {/* Description */}
          <h2 className='text-3xl font-bold mb-4 text-white mt-10'>Description</h2>
          <p className="text-gray-400 leading-relaxed text-lg">{event.description}</p>
        </div>

        {/* COLONNE 3 : SÉLECTEUR DE BILLETS */}
        <div className="lg:col-span-1">
          <TicketSelector tickets={event.ticketTypes} />
        </div>
      </div>
    </main>
  );
}
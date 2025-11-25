// components/TicketSelector.tsx
"use client";

import { useState } from 'react';
// 💡 CORRECTION : Utilisation des aliases @/
import { TicketType } from '@/lib/mock-data'; 
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';

interface TicketSelectorProps {
  tickets: TicketType[];
}

interface Selection {
    [ticketTypeId: number]: number; 
}

export default function TicketSelector({ tickets }: TicketSelectorProps) {
  const [selections, setSelections] = useState<Selection>({});

  const handleQuantityChange = (ticketId: number, delta: 1 | -1) => {
    setSelections(prev => {
      const currentQuantity = prev[ticketId] || 0;
      const newQuantity = Math.max(0, currentQuantity + delta);
      
      if (newQuantity === 0) {
        const { [ticketId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [ticketId]: newQuantity };
    });
  };

  const totalPrice = Object.entries(selections).reduce((acc, [ticketId, quantity]) => {
    const ticket = tickets.find(t => t.id === Number(ticketId));
    if (ticket) {
      return acc + (ticket.price * quantity);
    }
    return acc;
  }, 0);

  const totalItems = Object.values(selections).reduce((acc, q) => acc + q, 0);

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-white">Sélectionnez vos billets</h3>
      
      {/* Liste des types de billets */}
      <div className="space-y-4 mb-6">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
            
            {/* Infos Billet */}
            <div className='flex flex-col'>
                <span className="text-lg font-semibold text-white">{ticket.name}</span>
                <span className="text-sm text-gray-400">{ticket.description}</span>
                <span className={`text-base font-bold ${ticket.id === 103 ? 'text-red-500 line-through' : 'text-green-400'}`}>
                    {ticket.price.toLocaleString('fr-FR')} FCFA
                </span>
            </div>
            
            {/* Contrôleur de quantité */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleQuantityChange(ticket.id, -1)}
                disabled={selections[ticket.id] === undefined || selections[ticket.id] === 0}
                className="p-2 rounded-full bg-black text-white disabled:opacity-50"
              >
                <FiMinus />
              </button>
              <span className="text-xl w-6 text-center text-white">
                {selections[ticket.id] || 0}
              </span>
              <button 
                onClick={() => handleQuantityChange(ticket.id, 1)}
                className="p-2 rounded-full bg-black text-white"
              >
                <FiPlus />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER et Total */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-700">
        <div className='flex flex-col'>
            <span className="text-2xl font-extrabold text-white">Total :</span>
            <span className="text-3xl font-extrabold text-green-400">
                {totalPrice.toLocaleString('fr-FR')} FCFA
            </span>
        </div>
        
        <button
          disabled={totalItems === 0}
          className="flex items-center gap-3 bg-red-600 text-white text-lg font-bold py-3 px-8 rounded-full disabled:bg-gray-700 disabled:cursor-not-allowed transition hover:bg-red-700"
        >
          <FiShoppingCart /> 
          Payer ({totalItems})
        </button>
      </div>
    </div>
  );
}
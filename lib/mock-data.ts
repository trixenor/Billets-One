// lib/mock-data.ts

export interface TicketType {
  id: number;
  name: string;
  price: number; // Prix en FCFA
  description: string;
}

export interface EventDetails {
    id: number;
    title: string;
    location: string;
    date: string;
    time: string;
    description: string;
    image: string;
    ticketTypes: TicketType[];
}

// Fonction qui simule la récupération d'un événement par ID
export function getEventById(id: number): EventDetails | undefined {
    // Liste de billets pour l'exemple
    const mockTickets: TicketType[] = [
        { id: 101, name: "Billet Standard", price: 5000, description: "Accès général au concert." },
        { id: 102, name: "Billet VIP", price: 15000, description: "Accès en zone réservée et coupe-file." },
        { id: 103, name: "Early Bird (Épuisé)", price: 3000, description: "Tarif spécial limité aux 100 premiers." },
    ];
    
    // Notre événement "Gareth Emery"
    if (id === 1 || id === 4) { // On ajoute l'ID 4 pour le test
        return {
            id: id,
            title: "Dj Gareth Emery Live - Spécial Toure F",
            location: "Plateau, Tour F, Abidjan",
            date: "Samedi 28 Septembre 2025",
            time: "22h00",
            description: "Le DJ star mondial Gareth Emery est de retour pour une nuit inoubliable de Trance et d'Electro. Ne manquez pas le show lumière ! Les places sont limitées.",
            image: "/dj-image-banner.jpg", 
            ticketTypes: mockTickets,
        };
    }
    return undefined;
}
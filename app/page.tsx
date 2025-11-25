// app/page.tsx

import EventCard from "../components/EventCard";

export default function Home() {
  // Fausses données pour tester la grille et le composant
  const events = [
    {
      id: 1,
      title: "Dj Gareth Emery",
      location: "Plateau, Toure F",
      initialLikes: 4123, // 👈 Doit être un nombre !
      image: "/dj-image.jpg",
    },
    {
      id: 2,
      title: "Concert Magic System",
      location: "Palais de la Culture",
      initialLikes: 10000,
      image: "/concert-image.jpg",
    },
    {
      id: 3,
      title: "Didi B en Live",
      location: "Sofitel Ivoire",
      initialLikes: 1550,
      image: "/didib.jpg",
    },
    {
        id: 4,
        title: "Spectacle Tonton Zela",
        location: "Abidjan Mall",
        initialLikes: 980, // Moins de 1k pour tester le format
        image: "/zela.jpg",
    },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      
      {/* TITRE SECTION */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Bienvenue sur Billets-One
        </h1>
        {/* Correction text-gray-400 pour lisibilité sur fond noir */}
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Découvrez les meilleurs événements à Abidjan et réservez votre place en un clic.
        </p>
      </section>

      {/* GRILLE D'ÉVÉNEMENTS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            eventId={event.id}
            title={event.title}
            location={event.location}
            initialLikes={event.initialLikes}
            imageSrc={event.image}
          />
        ))}
      </section>

    </main>
  );
}
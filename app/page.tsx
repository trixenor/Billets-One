import EventCard from "./components/EventCard";

export default function Home() {
  // Fausses données pour tester
  const events = [
    {
      id: 1,
      title: "Dj Gareth Emery",
      location: "Plateau, Toure F",
      price: "4k",
      image: "/dj-image.jpg", // Assure-toi d'avoir une image ici ou mets une URL web
    },
    {
      id: 2,
      title: "Concert Magic System",
      location: "Palais de la Culture",
      price: "10k",
      image: "/concert-image.jpg",
    },
    {
      id: 3,
      title: "Didi B en Live",
      location: "Sofitel Ivoire",
      price: "15k",
      image: "/didib.jpg",
    },
  ];

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-7xl mx-auto">
      
      {/* TITRE SECTION */}
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Bienvenue sur Billets-One
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Découvrez les meilleurs événements à Abidjan et réservez votre place en un clic.
        </p>
      </section>

      {/* GRILLE D'ÉVÉNEMENTS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {events.map((event) => (
          <EventCard
            key={event.id}
            title={event.title}
            location={event.location}
            price={event.price}
            imageSrc={event.image}
          />
        ))}
      </section>

    </main>
  );
}
import Image from "next/image";

export default function Header () {
    return (
        <header className="flex justify-between items-center p-5">

            {/* Groupe gauche : Logo + Menu */}
            <div className="flex items-center gap-5">

                {/* Logo responsive */}
                <Image
                    src="/logo-billets-one.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="md:w-[80px] md:h-[80px]"
                />

                {/* Menu responsive */}
                <nav className="flex gap-3 md:gap-7 text-sm md:text-base">
                    <a href="#">Accueil</a>
                    <a href="#">Contact</a>
                    <a href="#">A propos</a>
                </nav>
            </div>

            {/* Groupe droite : Boutons */}
            <div className="flex items-center gap-3 md:gap-5">
                <button className="border-white border-2 rounded-full px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
                    Se connecter
                </button>

                <button className="bg-white text-black rounded-full px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
                    Créer un compte
                </button>
            </div>

        </header>
    );
}

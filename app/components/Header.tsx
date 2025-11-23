import Image from "next/image";
export default function Header () {
    return (
        <header className="flex justify-between p-10">

            {/* Groupe de droite */}

            <div className="flflex gap-4 text-sm md:text-base text-white">
                <div>
                    <Image src="/logo-billets-one.png" alt="Logo" width={80} height={80} />
                </div>

                <nav className="flex gap-5 text-white">
                    <a href="#">Accueil</a>
                    <a href="#">Contact</a>
                    <a href="#">A propos</a>
                </nav>
            </div>

             {/* Groupe de droite */}
            
            <div className="flex gap-4 text-sm md:text-base text-white">
                <button className="border-white border-2 rounded-full px-4 py-2 ">
                    Se connecter
                </button>
                
                <button className="border-2 rounded-full px-3 py-1 text-sm md:px-4 md:py-2 md:text-base">
                    Créer un compte
                </button>
            </div>

        </header>
    );
}
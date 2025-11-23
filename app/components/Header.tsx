import Image from "next/image";
export default function Header () {
    return (
        <header className="flex justify-between p-10">

            {/* Groupe de droite */}

            <div className="flex items-center gap-10">
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
            
            <div className="flex items-center gap-5">
                <button className="border-white border-2 rounded-full px-4 py-2 ">
                    Se connecter
                </button>
                
                <button className="bg-white text-black rounded-full px-4 py-2">
                    Créer un compte
                </button>
            </div>

        </header>
    );
}
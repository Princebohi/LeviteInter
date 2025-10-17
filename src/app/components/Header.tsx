"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartIcon, Menu, X } from "lucide-react"; // Importez Menu et X (pour fermer)
import { useState } from "react"; // Importez useState

export default function Header(){
    // État pour gérer l'ouverture et la fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Accueil", href: "/" },
        { name: "La Lutte", href: "/Lutte" },
        { name: "Nos Actions", href: "/Actions" },
        { name: "Initiateurs", href: "/Initiateurs" },
        { name: "Evènements", href: "/Evènements" },
        { name: "Blog", href: "/Blog" },
        { name: "Contact", href: "/Contact" },
    ];

    const [ActiveLink, setActiveLink] = useState("Accueil")

    return(
        <header className="flex items-center justify-between px-4 sm:px-8 lg:px-40 py-4 bg-white shadow-md relative">
            
            {/* Logo */}
            <div className="flex gap-2 items-center z-20">
                <HeartIcon className="h-7 w-7 text-blue-600" /> 
                <p className="text-blue-400 font-bold text-lg whitespace-nowrap">Fondation Lévites Inter</p>
            </div>
            
            {/* Navigation (Desktop) - Masquée sur mobile */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                href={item.href} 
                                className={`text-blue-800 hover:text-blue-500 font-medium ${ActiveLink === item.name ? "text-blue-200" : ""}`}
                                onClick={() => {setActiveLink(item.name)}}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bouton "Faire un don" (Desktop) - Masqué sur mobile */}
            <Button className="hidden lg:block bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Faire un don
            </Button>

            {/* Bouton du Menu Hamburger (Mobile) - Visible sur mobile */}
            <Button 
                className="lg:hidden z-20 bg-transparent hover:bg-transparent" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                
            >
                {isMenuOpen ? (
                    <X className="h-10 w-10 text-blue-800 " /> // Icône de fermeture (X)
                ) : (
                    <Menu className=" text-blue-800" /> // Icône Hamburger
                )}
            </Button>

            {/* Menu Mobile (S'affiche conditionnellement) */}
            {isMenuOpen && (
                <div 
                    className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center pt-24 pb-8 z-10 shadow-lg lg:hidden"
                >
                    <nav className="flex flex-col items-center gap-6 mb-8">
                        {navItems.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href} 
                                className="text-blue-800 text-xl font-semibold hover:text-gray-600 transition duration-150"
                                onClick={() => setIsMenuOpen(false)} // Ferme le menu au clic
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Bouton "Faire un don" (Mobile) */}
                    <Button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded text-lg">
                        Faire un don
                    </Button>
                </div>
            )}
        </header>
    )
}
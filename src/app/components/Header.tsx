"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ActiveLink, setActiveLink] = useState("Accueil");

    const navItems = [
        { name: "Accueil", href: "/" },
        { name: "La Lutte", href: "/Lutte" },
        { name: "Nos Actions", href: "/Actions" },
        { name: "Initiateurs", href: "/Initiateurs" },
        { name: "Evènements", href: "/Evenements" },
        { name: "Blog", href: "/Blog" },
        { name: "Contact", href: "/Contact" },
    ];

    const handleLinkClick = (itemName: string) => {
        setActiveLink(itemName);
        setIsMenuOpen(false);
    };

    return(
        <header className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-40 py-3 md:py-4 bg-white shadow-md relative">
            
            {/* Logo */}
            <div className="flex gap-2 items-center z-20">
                <HeartIcon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" /> 
                <p className="text-blue-400 font-bold text-base sm:text-lg whitespace-nowrap">
                    <span className="hidden sm:inline">Fondation Lévites Inter</span>
                    <span className="sm:hidden">FL Inter</span>
                </p>
            </div>
            
            {/* Navigation (Desktop) */}
            <nav className="hidden lg:block">
                <ul className="flex items-center gap-4 xl:gap-6">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                href={item.href} 
                                className={`text-blue-800 hover:text-blue-500 font-medium text-sm xl:text-base transition duration-150 ${
                                    ActiveLink === item.name ? "text-blue-500 underline underline-offset-4" : ""
                                }`}
                                onClick={() => handleLinkClick(item.name)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Bouton "Faire un don" (Desktop) */}
            <Button className="hidden lg:block bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-3 xl:px-4 rounded text-sm xl:text-base transition duration-150">
                Faire un don
            </Button>

            {/* Bouton Menu Hamburger (Mobile/Tablet) */}
            <Button 
                className="lg:hidden z-20 bg-transparent hover:bg-gray-100 p-2" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="h-7 w-7 sm:h-8 sm:w-8 text-blue-800" />
                ) : (
                    <Menu className="h-7 w-7 sm:h-8 sm:w-8 text-blue-800" />
                )}
            </Button>

            {/* Menu Mobile avec transition */}
            <div 
                className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center pt-20 pb-8 z-10 shadow-lg lg:hidden transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <nav className="flex flex-col items-center gap-6 sm:gap-8 mb-8">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name}
                            href={item.href} 
                            className={`text-blue-800 text-lg sm:text-xl font-semibold hover:text-blue-500 transition duration-150 ${
                                ActiveLink === item.name ? "text-blue-500" : ""
                            }`}
                            onClick={() => handleLinkClick(item.name)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Bouton "Faire un don" (Mobile) */}
                <Button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 sm:px-10 rounded text-base sm:text-lg transition duration-150">
                    Faire un don
                </Button>
            </div>

            {/* Overlay pour fermer le menu en cliquant à l'extérieur */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-0 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    )
}
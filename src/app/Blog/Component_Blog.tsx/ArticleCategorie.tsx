"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Stethoscope, BookOpenIcon, Search, Award, TrendingUp } from "lucide-react" 

// Définition des catégories pour simplifier le code
const categories = [
    { name: "Tous", value: "Tous", Icon: BookOpenIcon },
    { name: "Prévention", value: "Prévention", Icon: Stethoscope },
    { name: "Success Story", value: "SuccessStory", Icon: Award },
    { name: "Actualités Médicales", value: "Actualites", Icon: TrendingUp },
    { name: "Témoignages", value: "Temoignages", Icon: Users },
];

export default function ArtCategorie(){
    // Utiliser la valeur de la catégorie active
    const [activeCategory, setActiveCategory] = useState("Tous");
    
    // Classes de couleur pour l'état actif
    const activeBtnClasses = "bg-blue-700 text-white hover:bg-blue-800 hover:text-white border-blue-700 shadow-md";
    const inactiveBtnClasses = "bg-white text-gray-700 hover:bg-gray-50 border-gray-300";

    return(
        <div className="w-full">
            {/* Conteneur principal centré */}
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                
                
                {/* Filtres de catégories (avec défilement horizontal) */}
                <div className="flex space-x-3 overflow-x-auto whitespace-nowrap py-1">
                    <div className="relative w-full min-w-50 max-w-xs mb-4">
                        <input 
                            type="text"
                            placeholder="Rechercher un article..."
                            className="w-full pl-10 pr-4 py-1 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                        />
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                    {categories.map((category) => {
                        const isActive = activeCategory === category.value;
                        const btnClass = isActive ? activeBtnClasses : inactiveBtnClasses;
                        const textIconColorClass = isActive ? "text-white" : "text-blue-800";
                        
                        // Détermine le style de bordure (à ajuster selon votre design)
                        const borderClass = isActive ? "" : "border";

                        return (
                            <Button 
                                key={category.value}
                                onClick={() => setActiveCategory(category.value)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${btnClass} ${borderClass}`}
                                variant="outline"
                            >
                                {/* Icône : change de couleur selon l'état */}
                                <category.Icon className={`h-5 w-5 ${textIconColorClass}`} strokeWidth={2.5} />
                                
                                {/* Texte : change de couleur selon l'état */}
                                <span className={`font-medium ${textIconColorClass}`}>
                                    {category.name}
                                </span>
                            </Button>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
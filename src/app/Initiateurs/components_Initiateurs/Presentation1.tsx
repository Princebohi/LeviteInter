import P1Card from "./Presentation1Card";
import { MusicIcon, HeartIcon, UsersIcon, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Presen1() {
  return (
    <div className="flex flex-col md:flex-row py-10 px-4 lg:px-20 gap-10 relative">
      
      {/* Partie texte et cartes */}
      <div className="flex flex-col gap-5 flex-1 items-start justify-center">
        <span className="bg-orange-100 text-orange-400 border border-orange-200 py-2 px-4 rounded-md text-sm font-semibold">
          Les Initiateurs
        </span>
        <h2 className="text-2xl sm:text-3xl text-blue-900 font-bold">Lévites Inter</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl">
          Fondé en 2010, Lévites Inter est un groupe gospel ivoirien reconnu pour ses messages d&apos;espoir et d&apos;amour, inspirés par leur foi, ils ont décidé d&apos;aller au-delà de la musique pour servir leur communauté.
        </p>

        {/* Cartes */}
        <div className="flex flex-col gap-4">
          <P1Card
            icon={<MusicIcon className="text-yellow-500 h-4 w-4" strokeWidth={2.5} />}
            circlecolor={"bg-yellow-100/80"}
            title={"Mission Artistique"}
            description={"Propager l'amour de Dieu à travers la musique gospel et toucher les coeurs par des mélodies inspirantes."}
          />
          <P1Card
            icon={<HeartIcon className="text-blue-500 h-4 w-4" strokeWidth={3} />}
            circlecolor={"bg-blue-100"}
            title={"Engagement Social"}
            description={"Utiliser leur notoriété et leurs concerts pour sensibiliser et collecter des fonds pour des causes humanitaires."}
          />
          <P1Card
            icon={<UsersIcon className="text-green-500 h-4 w-4" strokeWidth={2.5} />}
            circlecolor={"bg-green-100"}
            title={"Impact Communautaire"}
            description={"Mobiliser les communautés chrétiennes et au-delà pour participer activement à la lutte contre les hépatites."}
          />
        </div>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4">
          <Button className="hover:bg-yellow-700 rounded-md bg-yellow-600 text-black w-full sm:w-auto">
            Ecouter leur musique
          </Button>
          <Button className="hover:bg-yellow-600 rounded-md border-2 border-yellow-500 bg-white text-yellow-500 w-full sm:w-auto">
            Voir leurs concerts
          </Button>
        </div>
      </div>

      {/* Partie image */}
      <div className="flex-1 flex relative justify-center items-center">
        {/* Badge "14 ans d’existence" */}
        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 md:top-4 md:right-4 z-10 bg-yellow-600 text-center rounded-md py-1 sm:py-2 px-2 sm:px-4">
          <span className="font-semibold text-sm sm:text-base md:text-lg block">14 ans</span>
          <span className="text-xs sm:text-sm md:text-xs block">d&apos;existence</span>
        </div>

        {/* Image container */}
        <div className="bg-gray-200 w-full h-80 sm:h-96 rounded-lg shadow-xl flex items-center justify-center relative">
          <div className="absolute border border-gray-100 bg-white w-12 h-12 flex items-center justify-center rounded-full">
            <ImageIcon className="text-gray-500 h-6 w-6" strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
}

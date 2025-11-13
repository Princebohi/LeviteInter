import P1Card from "./Presentation1Card";
import { TargetIcon, HeartIcon, ShieldIcon, ImageIcon } from "lucide-react";

export default function Presen2() {
  return (
    <div className="flex flex-col-reverse md:flex-row py-12 px-4 lg:px-20 gap-10 bg-gray-50 relative">

      {/* Partie image */}
      <div className="flex-1 flex relative justify-center items-center">
        {/* Badge "2020 Création" */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-4 md:left-4 bg-blue-700 text-white text-center rounded-md z-10 py-1 sm:py-2 px-2 sm:px-4">
          <span className="font-semibold text-sm sm:text-base md:text-lg block">2020</span>
          <span className="text-xs sm:text-sm md:text-xs block">Création</span>
        </div>

        {/* Image container */}
        <div className="bg-gray-200 shadow-xl rounded-lg w-full h-80 sm:h-96 flex items-center justify-center relative mt-4">
          <div className="absolute border border-gray-100 bg-white w-12 h-12 flex items-center justify-center rounded-full">
            <ImageIcon className="text-gray-500 h-6 w-6" strokeWidth={1} />
          </div>
        </div>
      </div>

      {/* Partie texte et cartes */}
      <div className="flex-1 flex flex-col gap-5 py-6 items-start justify-center">
        <span className="bg-blue-100 text-blue-600 border border-blue-200 px-2 rounded-sm text-sm font-semibold">
          Fondation
        </span>
        <h2 className="text-2xl sm:text-3xl text-blue-900 font-bold">Fondation Lévites Inter</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-xl">
          Créée en 2020, la Fondation Lévites Inter est l&apos;extension caritative du groupe gospel. Elle matérialise leur engagement social en se concentrant sur la lutte contre les hépatites virales.
        </p>

        {/* Cartes */}
        <div className="flex flex-col gap-4 w-full">
          <P1Card
            icon={<TargetIcon className="text-blue-500 h-4 w-4" strokeWidth={2.5} />}
            circlecolor={"bg-blue-100"}
            title={"Vision"}
            description={"Une Côte d'Ivoire sans hépatites, où chaque citoyen a accès au dépistage et aux soins de qualité."}
          />
          <P1Card
            icon={<HeartIcon className="text-green-500 h-4 w-4" strokeWidth={3} />}
            circlecolor={"bg-green-100"}
            title={"Mission"}
            description={"Sensibiliser, dépister et accompagner les populations dans la prévention et le traitement des hépatites."}
          />
          <P1Card
            icon={<ShieldIcon className="text-yellow-500 h-4 w-4" strokeWidth={2.5} />}
            circlecolor={"bg-yellow-100"}
            title={"Valeurs"}
            description={"Compassion, intégrité, excellence et service désintéressé guidés par les principes chrétiens."}
          />
        </div>
      </div>

    </div>
  );
}

import { UsersIcon, HeartIcon, CalendarIcon } from "lucide-react";
import StatCard from "../Lutte/components/StatCard";

export default function Stat() {
  return (
    <section className="flex flex-col justify-between px-6 sm:px-10 md:px-20 lg:px-40 py-10 space-y-10">
      
      {/* --- Statistiques principales --- */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <p className="font-bold text-xl sm:text-2xl">
          50 000+ <br /> <span className="text-gray-600 text-sm sm:text-base">personnes dépistées</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          30 <br /> <span className="text-gray-600 text-sm sm:text-base">concerts caritatifs</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          80+ <br /> <span className="text-gray-600 text-sm sm:text-base">villes et villages</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          5M <br /> <span className="text-gray-600 text-sm sm:text-base">CFA récoltés</span>
        </p>
      </div>

      {/* --- Titre et sous-texte --- */}
        <div>
            <div className="text-center space-y-2">
              <h2 className="text-blue-800 font-bold text-2xl sm:text-3xl">Notre Mission</h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Trois piliers fondamentaux guident notre action pour éradiquer les hépatites en <br className="hidden sm:block" /> 
                Côte d&apos;Ivoire.
              </p>
            </div>

                {/* --- Sections de mission --- */}
        
            {/* Sensibilisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 ">
                <StatCard
                    icon={<UsersIcon className="text-blue-700"/>}
                    chiffre={"Sensibilisation"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-blue-100"}
                    description={"Eduquer les population sur les risques des hépatites et l'importance du dépistage précoce."}
                    bgColor={"bg-blue-100"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            
                <StatCard
                    icon={<HeartIcon className="text-green-700"/>}
                    chiffre={"Dépistage Gratuit"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-green-100"}
                    description={"Organiser des campagnes de dépistage gratuit dans toute la Côte d'Ivoire."}
                    bgColor={"bg-green-600/20"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />

                <StatCard
                    icon={<CalendarIcon className="text-orange-400"/>}
                    chiffre={"Concerts Caritatifs"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-orange-100"}
                    description={"Mobiliser à travers la musique gospel pour financer nos actions de santé publique."}
                    bgColor={"bg-orange-100/70"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            </div>
        </div>
    </section>
  );
}

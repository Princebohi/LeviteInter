import AllCard from "./AllArtCard"
import { TrendingUpIcon, UsersIcon, StethoscopeIcon } from "lucide-react"

export default function AllArt() {
    return (
        <div className="flex flex-col items-center px-10 sm:px-6 lg:px-20 pt-16 sm:pt-20 pb-10 gap-6">
            {/* Titre */}
            <div className="text-center">
                <p className="text-blue-900 font-bold text-2xl sm:text-3xl lg:text-4xl">Tous les Articles</p>
                <p className="text-gray-600 text-sm sm:text-base mt-1">8 articles trouvés</p>
            </div>

            {/* Grille responsive */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl
                            grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <AllCard
                    tbicon={<TrendingUpIcon className="text-white h-3 w-3 sm:h-4 sm:w-4" />}
                    imagesrc={""}
                    title={"Nouveaux traitements contre l'hépatite C: espoir pour tous"}
                    description={"Les dernières avancées thérapeutiques offrent un taux de guérison de 95% pour l'hépatite C."}
                    bluetext={"Actualités Médicales"}
                    user={"Dr. Jean Kouadio"}
                    date={"15/11/2024"}
                    time={"7 min"}
                    view={"3200"}
                />
            
                <AllCard
                    tbicon={<UsersIcon className="text-white h-3 w-3 sm:h-4 sm:w-4" />}
                    imagesrc={""}
                    title={"Témoignage: 'Le dépistage m'a sauvé la vie'"}
                    description={"Aya Traoré raconte comment le dépistage gratuit de la fondation lui a permis de découvrir son hépatite B."}
                    bluetext={"Témoignages"}
                    user={"Aya Traoré"}
                    date={"12/11/2024"}
                    time={"4 min"}
                    view={"1650"}
                />

                <AllCard
                    tbicon={<StethoscopeIcon className="text-white h-3 w-3 sm:h-4 sm:w-4" />}
                    imagesrc={""}
                    title={"Prévention: Comment protéger sa famille des hépatites"}
                    description={"Guide complet des mesures préventives pour éviter la transmission des hépatites virales."}
                    bluetext={"Prévention"}
                    user={"Dr. Marie Bamba"}
                    date={"10/11/2024"}
                    time={"6 min"}
                    view={"2800"}
                />
            </div>
        </div>
    )
}

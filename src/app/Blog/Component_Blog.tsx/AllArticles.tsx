import AllCard from "./AllArtCard"
import { TrendingUpIcon, UsersIcon, StethoscopeIcon } from "lucide-react"

export default function AllArt(){
    return(
        <div className="flex gap-3 flex-col items-center px-4 pt-20 pb-10 justify-center">
            <div className="text-center ">
                <p className="text-blue-900 font-bold text-3xl">Tous les Articles</p>
                <p className="text-gray-600">8 articles trouvés</p>
            </div>
            <div className="grid gap-3 max-w-5xl py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <AllCard
                    tbicon={<TrendingUpIcon className="text-white h-3 w-3"/>}
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
                    tbicon={<UsersIcon className="text-white h-3 w-3"/>}
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
                    tbicon={<StethoscopeIcon className="text-white h-3 w-3"/>}
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
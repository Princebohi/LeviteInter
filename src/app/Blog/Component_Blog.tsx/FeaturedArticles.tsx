import FeaturedCard from "./FeatArtCard"
import { StethoscopeIcon, AwardIcon } from "lucide-react"


export default function FeaturedArt(){
    return(
        <div className="flex gap-3 px-4 flex-col items-center pt-20 pb-10 justify-center">
            <div className="text-center">
                <p className="text-blue-900 font-bold text-3xl">Articles à la Une</p>
                <p className="text-gray-600">Les contenus les plus importants du moment</p>
            </div>
            <div className="grid gap-3  max-w-5xl py-5 grid-cols-1 lg:grid-cols-2">
                <FeaturedCard
                    tbicon={<StethoscopeIcon className="text-white h-3 w-3"/>}
                    imagesrc={""}
                    title={"Hépatite B:5 signes qui doivent vous alerter"}
                    description={"Découvrez les symptômes précoces de l'hépatite B qui nécessitent une consultation médicale immédiate."}
                    bluetext={"Prévention"}
                    user={"Dr. Marie Bamba"}
                    date={"20/11/2024"}
                    time={"5 min"}
                    view={"2450"}
                />

                <FeaturedCard
                tbicon={<AwardIcon className="text-white h-3 w-3"/>}
                    imagesrc={""}
                    title={"Success Story: La caravane de Bouaké sauve 15 vies"}
                    description={"Retour sur notre campagne de dépistage à Bouaké qui a permis de détecter 15 cas d'hépatite B et C"}
                    bluetext={"Success Story"}
                    user={"Équipe Fondation"}
                    date={"18/11/2024"}
                    time={"3 min"}
                    view={"1890"}
                />
            </div>
        </div>
    )
}
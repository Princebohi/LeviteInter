import StatCard from "@/app/Lutte/components/StatCard";
import { StethoscopeIcon, AwardIcon, TrendingUpIcon, Users } from "lucide-react";

export default function OurCategories(){
    return(
        <div className="px-20 py-5">
            <div className="flex flex-col text-center gap-3 pb-1 pt-10">
                <h2 className="text-4xl font-bold text-blue-900">Types d&apos;Événements</h2>
                <p className="text-gray-600 ">Découvrez nos différentes activités et leur impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 ">
                <StatCard
                    icon={<StethoscopeIcon className="text-blue-700"/>}
                    chiffre={"Prévention"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-blue-100"}
                    description={"Conseils et guides pour prévenir les hépatites"}
                    bgColor={"bg-blue-200"}
                    stat={"3"}
                    statcolor={"text-blue-600"}
                    textstat={"articles"}
                />
            
                <StatCard
                    icon={<AwardIcon className="text-green-700"/>}
                    chiffre={"Success Stories"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-green-100"}
                    description={"Retours sur nos campagnes réussies"}
                    bgColor={"bg-green-800/15"}
                    stat={"2"}
                    statcolor={"text-green-700"}
                    textstat={"articles"}
                />

                <StatCard
                    icon={<TrendingUpIcon className="text-orange-300"/>}
                    chiffre={"Actualités Médicales"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-orange-100"}
                    description={"Dernières avancées scientifiques"}
                    bgColor={"bg-yellow-600/10"}
                    stat={"5"}
                    statcolor={"text-yellow-500"}
                    textstat={"articles"}
                />

                <StatCard
                    icon={<Users className="text-red-600"/>}
                    chiffre={"Formations"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-red-200"}
                    description={"Histoires inspirantes de nos bénéficiaires"}
                    bgColor={"bg-red-100"}
                    stat={"1"}
                    statcolor={"text-red-600"}
                    textstat={"articles"}
                />
            </div>
        </div>
    )
}
import StatCard from "@/app/Lutte/components/StatCard"
import { StethoscopeIcon, GlobeIcon, TruckIcon, MusicIcon } from "lucide-react"

export default function KindEvents(){
    return(
        <div className="px-10 py-5">
            <div className="flex flex-col text-center gap-3 pb-1 pt-10">
                <h2 className="text-4xl font-bold text-blue-900">Types d&apos;Événements</h2>
                <p className="text-gray-600 ">Découvrez nos différentes activités et leur impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 ">
                <StatCard
                    icon={<MusicIcon className="text-orange-300"/>}
                    chiffre={"Concerts Caritatifs"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-orange-100"}
                    description={"Spectacles gospel du groupe Lévites Inter pour collecter des fonds"}
                    bgColor={"bg-orange-300/20"}
                    stat={"25"}
                    statcolor={"text-orange-300"}
                    textstat={"Concerts Organisés"}
                />
            
                <StatCard
                    icon={<TruckIcon className="text-blue-700"/>}
                    chiffre={"Caravanes"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-blue-100"}
                    description={"Tournées de sensibilisation dans toute la Côte d'Ivoire"}
                    bgColor={"bg-blue-100"}
                    stat={"100+"}
                    statcolor={"text-blue-600"}
                    textstat={"Villes visitées"}
                />

                <StatCard
                    icon={<GlobeIcon className="text-green-700"/>}
                    chiffre={"Journées Mondiales"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-green-100"}
                    description={"Mobilisations nationales pour les journées de santé"}
                    bgColor={"bg-green-600/10"}
                    stat={"5"}
                    statcolor={"text-green-700"}
                    textstat={"Évènements majeurs"}
                />

                <StatCard
                    icon={<StethoscopeIcon className="text-red-600"/>}
                    chiffre={"Formations"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-red-200"}
                    description={"Capacitation des agents de santé et bénévoles"}
                    bgColor={"bg-red-100"}
                    stat={"50+"}
                    statcolor={"text-red-600"}
                    textstat={"Sessions Organisées"}
                />
            </div>
        </div>
    )
}
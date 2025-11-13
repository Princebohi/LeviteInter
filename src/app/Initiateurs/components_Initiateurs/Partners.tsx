import StatCard from "@/app/Lutte/components/StatCard"
import { GlobeIcon,HandshakeIcon,AwardIcon } from "lucide-react"

export default function Partners(){
    return(
            <div className="flex flex-col gap-10 px-10 lg:px-30">
                <div className="text-center">
                    <h2 className="text-blue-900 text-3xl pb-2 font-bold">Nos Partenaires</h2>
                    <p className="text-gray-700">Ensemble, nous sommes plus forts dans la lutte contre les hépatites.</p>
                </div>
                <div className=" flex flex-col text-center">
                    <h2 className="text-blue-900 text-2xl font-bold">Partenaires Institutionnels</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 ">
                        <StatCard
                            icon={<GlobeIcon className="text-blue-900"/>}
                            chiffre={"Ministère de la Santé"}
                            textcolor={"text-blue-900"}
                            bordercolor={"border-blue-100"}
                            description={"Partenariat officiel pour les campagnes nationales de dépistage"}
                            bgColor={"bg-blue-100"}
                            stat={""}
                            statcolor={""}
                            textstat={""}
                        />

                        <StatCard
                            icon={<AwardIcon className="text-green-600"/>}
                            chiffre={"OMS Côte d'Ivoire"}
                            textcolor={"text-blue-900"}
                            bordercolor={"border-blue-100"}
                            description={"Support technique et validation des protocoles de dépistage"}
                            bgColor={"bg-green-500/10"}
                            stat={""}
                            statcolor={""}
                            textstat={""}
                        />

                        <StatCard
                            icon={<HandshakeIcon className="text-orange-300"/>}
                            chiffre={"PNLH"}
                            textcolor={"text-blue-900"}
                            bordercolor={"border-blue-100"}
                            description={"Programme National de Lutte contre les Hépatites-collaboration stratégique"}
                            bgColor={"bg-orange-100"}
                            stat={""}
                            statcolor={""}
                            textstat={""}
                        />
                    </div>
                    <hr className="w-full border-gray-400" />
                </div>

                <div className=" flex flex-col text-center">
                    <h2 className="text-blue-900 text-2xl font-bold">Partenaires Santé</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 ">
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">CHU de Cocody</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Hôpital Général de Bingerville</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Centre de Santé de Yopougon</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Clinique Internationnale</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Laboratoire CERBA</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Centre Médical Saint-Joseph</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Polyclinique Saint-Anne-Marie</p>
                        <p className="bg-blue-50 border-2 max-w-sm border-gray-200 rounded-lg py-2">Hôpital Méthodiste de Dabou</p>
                    </div>
                    <hr className="w-full border-gray-400" />
                </div>

                <div className=" flex flex-col text-center">
                    <h2 className="text-blue-900 text-2xl font-bold">Partenaires Santé</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 ">
                        <div className="bg-blue-50  border-2 px-3 border-gray-200 rounded-lg py-2">
                            <h3 className="text-blue-900 font-bold">Fondation Orange CI</h3>
                            <p className="text-gray-600">Financement des campagnes de sensibilisation</p>
                        </div>

                        <div className="bg-blue-50  border-2 px-3 border-gray-200 rounded-lg py-2">
                            <h3 className="text-blue-900 font-bold">Banque Atlantique</h3>
                            <p className="text-gray-600">Financement des campagnes de sensibilisation</p>
                        </div>
                        
                        <div className="bg-blue-50   border-2 px-3 border-gray-200 rounded-lg py-2">
                            <h3 className="text-blue-900 font-bold">Communauté Chrétienne</h3>
                            <p className="text-gray-600">Financement des campagnes de sensibilisation</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
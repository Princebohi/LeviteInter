import StatCard from "./StatCard";
import { UsersIcon, AlertTriangleIcon, ActivityIcon, ShieldIcon } from 'lucide-react';

export default function Stats(){
    return(
        <div>
            <div className="flex flex-col text-center gap-3 pb-1 pt-10">
                <h2 className="text-4xl font-bold">La réalité en chiffres</h2>
                <p className="font-bold ">Données OMS et Ministère de la Santé de Côte d&apos;Ivoire</p>
            </div>
            <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 ">
                <StatCard
                    icon={<UsersIcon className="text-blue-500"/>}
                    chiffre={"2.5M"}
                    textcolor={"text-blue-500"}
                    bordercolor={"border-blue-100"}
                    description={"Personnes infectées par l'hépatite B"}
                    bgColor={"bg-blue-50"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            
                <StatCard
                    icon={<AlertTriangleIcon className="text-green-500"/>}
                    chiffre={"800k"}
                    textcolor={"text-green-500"}
                    bordercolor={"border-green-100"}
                    description={"Personnes infectées par l'hépatite C"}
                    bgColor={"bg-green-50"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />

                <StatCard
                    icon={<ActivityIcon className="text-red-500"/>}
                    chiffre={"85%"}
                    textcolor={"text-red-500"}
                    bordercolor={"border-red-100"}
                    description={"Ne connaissent pas leur statut"}
                    bgColor={"bg-red-50"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />

                <StatCard
                    icon={<ShieldIcon className="text-yellow-500"/>}
                    chiffre={"95%"}
                    textcolor={"text-yellow-500"}
                    bordercolor={"border-yellow-100"}
                    description={"Guérissables si détectées tôt"}
                    bgColor={"bg-yellow-50"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            </div>
        </div>
    )
}
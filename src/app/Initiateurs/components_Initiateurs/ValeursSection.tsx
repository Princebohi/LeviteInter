import StatCard from '@/app/Lutte/components/StatCard';
import { UsersIcon, StarIcon, HeartIcon, ShieldIcon } from 'lucide-react';

export default function Valor(){
    return(
        <div className=" px-10 lg:px-30">
            <div className="flex flex-col text-center  gap-3 pb-1 pt-10">
                <h2 className="text-4xl font-bold text-blue-900">Nos valeurs Fondamentales</h2>
                <p className="text-gray-600 ">Les principes qui guident chacune de nos ations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-8 ">
                <StatCard
                    icon={<HeartIcon className="text-blue-500"/>}
                    chiffre={"Compassion"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-blue-100"}
                    description={"Nous agissons avec empathieet bienveillance envers tous ceux qui souffrent."}
                    bgColor={"bg-blue-100"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            
                <StatCard
                    icon={<ShieldIcon className="text-green-500"/>}
                    chiffre={"Intégrité"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-green-100"}
                    description={"Transparence totale dans la gestion des dons et léxécution de nos programmes."}
                    bgColor={"bg-green-100"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />

                <StatCard
                    icon={<StarIcon className="text-orange-300"/>}
                    chiffre={"Excellence"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-orange-100"}
                    description={"Nous visons la qualité dans tous nos services et programmes et santé."}
                    bgColor={"bg-orange-100"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />

                <StatCard
                    icon={<UsersIcon className="text-blue-500"/>}
                    chiffre={"Service"}
                    textcolor={"text-blue-900"}
                    bordercolor={"border-blue-100"}
                    description={"Dévouement total au service des communautés les plus vulnérables."}
                    bgColor={"bg-blue-100"}
                    stat={""}
                    statcolor={""}
                    textstat={""}
                />
            </div>
            
        </div>
    )
}
import ImpCard from "./ImpactCard"

export default function Impact(){
    return(
        <div className="flex flex-col gap-8 text-center items-center py-10 justify-center ">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-900">Notre Impact en Chiffres</h2>
                <p className="text-gray-600">Des résultat concrets grâce à vos dons et notre engagement</p>
            </div>
            <div className="flex text-center gap-20 items-center justify-center">
                <ImpCard
                    Stat={"1.5M"}
                    StatColor={"text-blue-700"}
                    Description={"Personnes sensibilisées"}
                />
                <ImpCard
                    Stat={"50K"}
                    StatColor={"text-green-700"}
                    Description={"Dépistages réalisés"}
                />
                <ImpCard
                    Stat={"2,500"}
                    StatColor={"text-yellow-500"}
                    Description={"Cas détextés"}
                />
                <ImpCard
                    Stat={"95%"}
                    StatColor={"text-blue-700"}
                    Description={"Mis sous traitement"}
                />
            </div>
        </div>
    )
}
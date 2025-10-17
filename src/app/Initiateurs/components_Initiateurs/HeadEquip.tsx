import HeadCard from './HeadCard';

export default function HeadEquip(){
    return(
        <div className="flex flex-col bg-blue-50  items-center justify-center">
            <div className="flex flex-col text-center gap-3 pb-1 pt-10">
                <h2 className="text-4xl font-bold text-blue-900">Nos valeurs Fondamentales</h2>
                <p className="text-gray-600 ">Les principes qui guident chacune de nos ations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 py-8 ">
                <HeadCard
                    imagesrc={""}
                    name={"Pasteur Jean-Claude KOUASSI"}
                    djob={"Président Fondateur"}
                    description={"Leader spirituel et visionnaire, initiateur du projet de lutte contre les hépatites."}
                />
            
                <HeadCard
                    imagesrc={""}
                    name={"Dr. Marie BAMBA"}
                    djob={"Directrice Médicale"}
                    description={"Spécialiste en hépatologie, supervise tous les programmes de dépistage et de soins."}
                />

                <HeadCard
                    imagesrc={""}
                    name={"Emmanuel TRAORE"}
                    djob={"Directeur Exécutif"}
                    description={"Coordonne les opérations et assure la mise en oeuvre des programmes sur le terrain."}
                />
            </div>
        </div>
    )
}
export default function ActionHero(){
    return(
        <div className="flex flex-col bg-blue-50 items-center justify-center text-center gap-8 px-[10%] lg:px-[27%] py-20">
            <span className="bg-green-50  text-green-600 border border-green-400 py-1 px-2 rounded-md text-sm font-semibold">Comprendre la Maladie</span>
            <h1>
                <span className="text-blue-900 text-5xl font-bold">Nos </span>
                <span className="text-green-600 text-5xl">Actions </span>
                <span className="text-blue-900 text-5xl font-bold">Sur le terrain</span>
            </h1>
            <p className="text-gray-600 text-xl">Découvrez comment nous agissons concrètement pour lutter contre les hépatites en Côte d&apos;Ivoire : caravanes de sensibilisation, dépistage gratuits et concerts caritatifs.</p>
        </div>
    )
}
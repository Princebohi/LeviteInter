import VideoCard from "./VideoCard"

export default function Video(){
    return(
        <section className="bg-blue-50 flex flex-col gap-5 py-5">
            <div className="flex flex-col gap-3 text-center ">
                <h2 className="text-3xl font-bold text-blue-900">Vidéos Explicatives</h2>
                <p className="text-gray-600 ">Comprendre les hépatites en quelques minutes avec nos experts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-auto gap-8 justify-items-center">
                <VideoCard
                    imagesrc=""
                    title="Comment se protéger des hépatites ?"
                    description="Les gestes simples pour éviter la contamination et protéger sa famille."
                    videoSrc=""
                />

                <VideoCard
                    imagesrc=""
                    title="Témoignage : 'J'ai vaincu l'hépatite B'"
                    description="L'histoire inspirante de Kouadio, guéri grâce au dépistage précoce."
                    videoSrc=""
                />

                <VideoCard
                    imagesrc=""
                    title="Prévention et vaccination"
                    description="Tout savoir sur les vaccins et les mesures de prévention efficaces."
                    videoSrc=""
                />
            </div>
        </section>
    )
}


export default function HeroBlog(){
    return(
        <div className="flex flex-col  bg-gradient-to-r from-yellow-50 to-blue-50 items-center justify-center text-center gap-8 py-20">
            <span className="bg-orange-100  text-orange-400 border border-1 border-orange-200 py-2 px-5 rounded-md text-sm font-semibold">Blog et actualités</span>
            <h1>
                <span className="text-blue-600 text-5xl font-semibold">Informations  </span>
                <span className="text-blue-950 font-extrabold text-4xl">& </span>
                <span className="text-green-700 text-5xl font-semibold">Témoignages</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Découvrez nos articles de prévention, les dérnières actualités médicales, et les success stories de nos campagnes de lutte contre les hépatites.</p>
        </div>
    )
}
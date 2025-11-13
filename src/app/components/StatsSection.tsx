export default function Stat() {
  return (
    <section className="flex flex-col justify-between px-6 sm:px-10 md:px-20 lg:px-40 py-10 space-y-10">
      
      {/* --- Statistiques principales --- */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <p className="font-bold text-xl sm:text-2xl">
          50 000+ <br /> <span className="text-gray-600 text-sm sm:text-base">personnes dépistées</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          30 <br /> <span className="text-gray-600 text-sm sm:text-base">concerts caritatifs</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          80+ <br /> <span className="text-gray-600 text-sm sm:text-base">villes et villages</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl">
          5M <br /> <span className="text-gray-600 text-sm sm:text-base">CFA récoltés</span>
        </p>
      </div>

      {/* --- Titre et sous-texte --- */}
      <div className="text-center space-y-2">
        <h2 className="text-blue-800 font-bold text-2xl sm:text-3xl">Notre Mission</h2>
        <p className="text-gray-500 text-sm sm:text-base">
          Trois piliers fondamentaux guident notre action pour éradiquer les hépatites en <br className="hidden sm:block" /> 
          Côte d&apos;Ivoire.
        </p>
      </div>

      {/* --- Sections de mission --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Sensibilisation */}
        <section className="flex flex-col items-center border border-blue-100 rounded-md bg-blue-50 gap-2 py-10 px-5 text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38...Z" />
            </svg>
          </div>
          <h3 className="text-blue-900 font-bold text-xl sm:text-2xl">Sensibilisation</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Éduquer les populations sur les risques des hépatites et l&apos;importance du dépistage précoce.
          </p>
        </section>

        {/* Dépistage gratuit */}
        <section className="flex flex-col items-center border border-green-100 rounded-md bg-blue-50 gap-2 py-10 px-5 text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485...Z" />
            </svg>
          </div>
          <h3 className="text-blue-900 font-bold text-xl sm:text-2xl">Dépistage Gratuit</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Organiser des campagnes de dépistage gratuit dans toute la Côte d&apos;Ivoire.
          </p>
        </section>

        {/* Concerts caritatifs */}
        <section className="flex flex-col items-center border border-orange-100 rounded-md bg-blue-50 gap-2 py-10 px-5 text-center shadow-sm hover:shadow-md transition">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25...Z" />
            </svg>
          </div>
          <h3 className="text-blue-900 font-bold text-xl sm:text-2xl">Concerts Caritatifs</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Mobiliser à travers la musique gospel pour financer nos actions de santé publique.
          </p>
        </section>
      </div>
    </section>
  );
}

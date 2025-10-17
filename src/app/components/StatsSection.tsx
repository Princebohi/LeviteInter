
export default function Stat(){
    return(
        <div className="flex flex-col  justify-between">
            <div className="flex justify-between px-40 py-10">
                <p className="font-bold text-2xl text-center">50000+ <br /> personnes dépistées</p>
                <p className="font-bold text-2xl text-center">30 <br /> concerts caritatifs</p>
                <p className="font-bold text-2xl text-center">80+ <br /> villes et villages visités</p>
                <p className="font-bold text-2xl text-center">5M <br /> CFA récollectés</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-blue-800 font-bold text-3xl text-center">Notre Mission</h2>
                <p className="text-center text-gray-500">Trois piliers fondamentaux guident notre action pour éradiquer les hépatites en <br /> Côte d&apos;Ivoire</p>
            </div>
            <div className="flex justify-between items-center py-10 pr-40 pl-20 gap-[5vw]">
                <section className="flex flex-col items-center border border-1 border-blue-100 rounded-md bg-blue-50 gap-2 py-10 px-5 w-1/3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="blue" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                    </div>
                    <h3 className="text-blue-900 font-bold text-2xl">Sensibilisation</h3>
                    <p className="text-center">Eduquer les populations sur les risques des hépatites et l&apos;importance du dépistage précose</p>
                </section>

                <section className="flex flex-col items-center border border-1 border-green-100 rounded-md bg-blue-50 gap-2 px-5 py-10 w-1/3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </div>
                    <h3 className="text-blue-900 font-bold text-2xl">Dépistage Gratuit</h3>
                    <p className="text-center">Organiser des campagnes de dépistage gratuit dans toute la Côte d&apos;Ivoire</p>
                </section>

                <section className="flex flex-col items-center border border-1 border-orange-50 rounded-md bg-blue-50 gap-2 px-5 py-10 w-1/3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </div>
                    <h3 className="text-blue-900 font-bold text-2xl">Concerts Caritatifs</h3>
                    <p className="text-center">Mobiliser à travers la musique gospel pour financer nos actions de santé publique</p>
                </section>
            </div>
        </div>
    )
}
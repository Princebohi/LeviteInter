import Link from "next/link"

export default function Footer(){
    return(
        <div>
            <div className="flex flex-col md:flex-row px-6 md:px-[10%] gap-8 md:gap-[5%] pt-8 md:pt-[3%] bg-gray-300">
                <section className="flex flex-col flex-1 gap-3">
                    <div className="flex space-x-2 items-center">
                        <span className="text-blue-600 text-3xl">♡</span>
                        <h2 className="text-blue-400 font-bold text-base md:text-lg">Fondation Lévites Inter</h2>
                    </div>
                    <p className="text-sm md:text-base">Ensemble contre les hépatites et le cancer du foie en Côte d&apos;Ivoire.</p>
                </section>

                <section className="flex flex-col flex-1 gap-3">
                    <h3 className="text-blue-900 text-base md:text-lg font-bold">Navigation</h3>
                    <nav>
                         <ul className="space-y-1">
                            <li>
                                <Link href={"/Lutte"} className="hover:text-gray-600 font-medium text-sm md:text-base">La Lutte</Link>
                            </li>
                            <li>
                                <Link href={"/Actions"} className="hover:text-gray-600 font-medium text-sm md:text-base">Nos Actions</Link>
                            </li>
                            <li>
                                <Link href={"/Initiateurs"} className="hover:text-gray-600 font-medium text-sm md:text-base">Initiateurs</Link>
                            </li>
                            <li>
                                <Link href={"/Evènements"} className="hover:text-gray-600 font-medium text-sm md:text-base">Evènements</Link>
                            </li>
                        </ul>
                    </nav>
                </section>

                <section className="flex flex-col flex-1 gap-3">
                    <h3 className="text-blue-900 text-base md:text-lg font-bold">Souvenir</h3>
                    <div className="flex flex-col space-y-1">
                        <Link className="hover:text-green-500 text-sm md:text-base" href={""}>Faire un don</Link>
                        <Link className="hover:text-green-500 text-sm md:text-base" href={""}>Bénévolat</Link>
                        <Link className="hover:text-green-500 text-sm md:text-base" href={""}>Partenariat</Link>
                    </div>
                </section>

                <section className="flex flex-col justify-start flex-1 gap-3">
                    <h3 className="text-blue-900 text-base md:text-lg font-bold">Contact</h3>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm md:text-base">Abidjan, Côte d&apos;Ivoire</p>
                        <p className="text-sm md:text-base">+225 xx xx xx xx xx</p>
                        <Link href={""} className="text-sm md:text-base hover:text-blue-600">contact@fondation-levites.org</Link>
                    </div>
                </section>
            </div>

            <div className="flex flex-col pb-7 items-center px-4">
                <hr className="border-t-1 w-full md:w-[70%] border-black my-3"/>
                <p className="text-sm md:text-xl font-bold text-center">&copy; 2025 Fondation Lévites Inter. Tous droits réservés.</p>
            </div>
        </div>
    )
}
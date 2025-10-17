import Link from "next/link"
// import { Button } from "./ui/button"

export default function Footer(){
    return(
        <div>
            <div className="flex px-[10%] gap-[5%] pt-[3%] bg-gray-300">
                <section className="flex flex-col flex-1 gap-3">
                    <div className="flex  space-x-2 items-center">
                        <span className="text-blue-600 text-3xl">♡</span>

                        <h2 className="text-blue-400 font-bold text-lg">Fondation Lévites Inter</h2>
                    </div>
                    <p>Ensemble contre les hépatites et le cancer du foie en Côte d&apos;Ivoire.</p>
                </section>

                <section className="flex flex-col flex-1 gap-3">
                    <h3 className="text-blue-900 text-lg font-bold">Navigation</h3>
                    <nav>
                         <ul>
                            <li>
                                <Link href={"/Lutte"} className=" hover:text-gray-600 font-midium">La Lutte</Link>
                            </li>
                            <li>
                                <Link href={"/Actions"} className=" hover:text-gray-600 font-midium">Nos Actions</Link>
                            </li>
                            <li>
                                <Link href={"/Initiateurs"} className=" hover:text-gray-600 font-midium">Initiateurs</Link>
                            </li>
                            <li>
                                <Link href={"/Evènements"} className=" hover:text-gray-600 font-midium">Evènements</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </section>

                <section className="flex flex-col flex-1 gap-3">
                    <h3 className="text-blue-900 text-lg font-bold">Souvenir</h3>
                    <div className="flex flex-col">
                        {/* <Button className="hover:text-green-500 rounded-transparent  bg-transparent text-gray-600">Faire un don</Button>
                        <Button className="hover:text-green-500 rounded-none  bg-transparent text-gray-600">Bénévolat</Button>
                        <Button className="hover:text-green-500 rounded-none  bg-transparent text-gray-600">Partenariat</Button> */}
                        <Link className="hover:text-green-500" href={""}>Faire un don</Link>
                        <Link className="hover:text-green-500" href={""}>Bénévolat</Link>
                        <Link className="hover:text-green-500" href={""}>Partenariat</Link>
                    </div>
                </section>

                <section className="flex flex-col justify-start flex-1 gap-3">
                    <h3 className="text-blue-900 text-lg font-bold">Contact</h3>
                    <div className="flex flex-col ">
                        <p>Abidjan, Côte d&apos;Ivoire</p>
                        <p>+225 xx xx xx xx xx</p>
                        <Link href={""}>contact@fondation-levites.org</Link>
                    </div>
                </section>
                
            </div>

            <div className="flex flex-col pb-7 items-center">
                <hr className="border-t-1 w-[70%] border-black my-3"/>
                <p className="text-xl font-bold">&copy; 2025 Fondation Lévites Inter. Tous droits réservés.</p>
            </div>
        </div>
    )
}
import { Button } from "@/components/ui/button"

export default function Call(){
    return(
        <div>
            <section className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500 gap-5 px-[23%] py-12">
                    <h2 className="text-white font-bold text-2xl">Ensemble, Stoppons les Hépatites</h2>
                    <p className="text-center text-gray-100">Chaque jour compte. Chaque dépistage sauve des vies. Rejoigne notre combat pour une Côte d&apos;Ivoire sans hépatites.</p>
                    <div className="flex">
                        <Button className="hover:bg-green-200 rounded-md  bg-white text-blue-600">
                                Faire un don maintenant 
                        </Button>
                        <Button className="hover:bg-blue-300 ml-5 rounded-md border-1 border-white bg-transparent text-white">Découvrir nos actions</Button>
                    </div>
            </section>
        </div>
    )
}
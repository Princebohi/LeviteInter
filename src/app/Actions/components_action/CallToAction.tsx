import { Button } from "@/components/ui/button"

export default function Call(){
    return(
            <section className="flex flex-col px-5 items-center bg-gradient-to-r from-green-800 to-blue-700 gap-5 py-12">
                    <h2 className="text-white font-bold text-2xl">Ensemble, Stoppons les Hépatites</h2>
                    <p className="text-center  text-gray-100">Que vous souhaiter faire un don, devenir bénévole ou organiser un évènement, chaque contribution compte dans notre lutte contre les hépatites.</p>
                    <div className="flex  flex-col gap-3 md:gap-0 md:flex-row ">
                        <Button className="hover:bg-green-200 rounded-md  bg-white text-blue-600">
                                Faire un don 
                        </Button>
                        <Button className="hover:bg-blue-300 md:ml-5 rounded-md border-1 border-white bg-transparent text-white">Devenir bébévole</Button>
                        <Button className="hover:bg-blue-300 md:ml-5 rounded-md border-1 border-white bg-transparent text-white">Organiser un évènement</Button>
                    </div>
            </section>
    )
}
import { Button } from "@/components/ui/button"

export default function Join(){
    return(
        <section className="flex px-5 flex-col items-center bg-gradient-to-r from-yellow-600 to-blue-700 gap-5 py-12">
                    <h2 className="text-white font-bold text-2xl">Rejoignez Notre Mission</h2>
                    <p className="max-w-3xl text-center text-gray-100">Inspirés par la foi et guidés par l&apos;amour, nous vous invitons à participer à cette noble cause. Ensemble, nous pouvons éradiquer les hépatites en Côte d&apos;Ivoire.</p>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 ">
                        <Button className="hover:bg-green-200 rounded-sm  bg-white text-blue-600">
                                Soutenir Financièrement 
                        </Button>
                        <Button className="hover:bg-blue-300 md:ml-5 rounded-sm border-1 border-white bg-transparent text-white">Devenir partenaire</Button>
                        <Button className="hover:bg-blue-300 md:ml-5 rounded-sm border-1 border-white bg-transparent text-white">Nous contacter</Button>
                    </div>
            </section>
    )
}
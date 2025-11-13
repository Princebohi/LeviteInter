import { Button } from "@/components/ui/button"
import { DownloadIcon,CalendarIcon } from "lucide-react"

export default function HeroEvent(){
    return(
        <div className="flex flex-col  bg-gradient-to-r from-blue-50 to-yellow-50 items-center justify-center text-center px-10 gap-8 py-20">
            <span className="bg-blue-100  text-blue-600 border border-blue-300 py-2 px-5 rounded-md text-sm font-semibold">Agenda</span>
            <h1>
                <span className="text-blue-950 font-bold text-5xl">Nos </span>
                <span className="text-blue-700 text-5xl font-semibold">Événements</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">Découvrez tous nos événements: concerts caritatifs, caravanes de sensibilisation, journées mondiales et formations. Rejoignez-nous dans notre mission !</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-700 rounded-sm border-blue-500 hover:bg-blue-500">
                    <CalendarIcon className="text-white" strokeWidth={2.5}/>
                    <p className="text-white">Voir le calendrier complet</p>
                </Button>

                <Button className="bg-white rounded-sm  border-2 border-green-600 hover:bg-green-300">
                    <DownloadIcon className="text-green-500" strokeWidth={2.5}/>
                    <p className="text-green-600">Exporter en PDF</p>
                </Button>
            </div>
        </div>
    )
}
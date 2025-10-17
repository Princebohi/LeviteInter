import { Button } from "@/components/ui/button"
import { CalendarIcon, UserPlusIcon } from "lucide-react"

export default function TakePart(){
    return(
        <div>
            <section className="flex flex-col items-center bg-gradient-to-r from-blue-800/90 to-green-800/90 gap-5 px-[23%] py-12">
                    <h2 className="text-white font-bold text-2xl">Participez à Nos Événements</h2>
                    <p className="text-center max-w-2xl text-gray-100">Chaque évènement est une opportunité de sauver des vies. Rejoignez-nous lors de nos proches activités et faites partie du changement.</p>
                    <div className="flex gap-4">
                        <Button className="bg-white rounded-sm border-blue-500 hover:bg-blue-300">
                            <UserPlusIcon className="text-blue-600" strokeWidth={2.5}/>
                            <p className="text-blue-600">S&apos;inscrire aux évènements</p>
                        </Button>
                    
                        <Button className="bg-transparent rounded-sm border border-2 border-white hover:bg-green-500">
                            <CalendarIcon className="text-white" strokeWidth={2.5}/>
                            <p className="text-white">Ajouter à mon calendrier</p>
                        </Button>
                    </div>
            </section>
        </div>
    )
}
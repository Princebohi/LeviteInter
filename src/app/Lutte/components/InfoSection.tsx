import Point from "./ThreePoint"
import { CircleIcon } from "lucide-react"
import Image from "next/image"

export default function Info(){
    return(
        <div className="flex px-10 py-12  items-start justify-start gap-30">
            <div className="flex flex-col flex-1 gap-10 ">
                <div>
                    <span className="bg-green-50 text-green-600 border border-1 border-green-400 py-1 px-2 rounded-md text-sm font-semibold">Comprendre la Maladie</span>
                    <h2 className="text-3xl pt-3 pb-5 font-bold  text-blue-900">Qu&apos;est-ce que les Hépatites Virales ?</h2>
                    <p className="text-xl text-gray-500">Les hépatites B et C sont des infections virales qui attaquent le foie. Elles se transmettrent par le sang, les relations sexuelles non protégées, et de la mère à l&apos;enfant lors de l&apos;accouchement.</p>
                </div>
                <div className="flex flex-col gap-5 justify-start items-start">
                    <Point
                        icon={<CircleIcon className="text-blue-500 h-3 w-3" fill="currentColor"/>}
                        circlecolor={"bg-blue-50"}
                        title={"Phase silencieuse"}
                        description={"Pendant des années, les hépatites évoluent sans symptômes visibles, endommageant progressivement le foie."}
                    />

                    <Point
                        icon={<CircleIcon className="text-green-500 h-3 w-3" fill="currentColor"/>}
                        circlecolor={"bg-green-50"}
                        title={"Complications Graves"}
                        description={"Sans traitement, elles évoluent vers la cirrhose puis le cancer du foie, souvent fatal."}
                    />

                    <Point
                        icon={<CircleIcon className="text-yellow-500 h-3 w-3" fill="currentColor"/>}
                        circlecolor={"bg-yellow-50"}
                        title={"Traitement Efficace"}
                        description={"Détectés tôt, les hépatites se soignent très bien avec les traitements modernes."}
                    />     
                </div>
            </div>
            <div className="flex-1  flex  "> 
                <Image
                    src="/virus.png" 
                    alt="Image du virus" 
                    width={700}
                    height={700}
                    className="rounded-xl " 
                />
            </div>
        </div>
    )
}
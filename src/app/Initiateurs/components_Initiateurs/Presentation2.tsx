import P1Card from "./Presentation1Card"
import { TargetIcon } from "lucide-react"
import { HeartIcon } from "lucide-react"
import { ShieldIcon } from "lucide-react"
import { ImageIcon } from "lucide-react"

export default function Presen2(){
    return(
        <div className="flex py-12 relative bg-gray-50 px-20 gap-10">
            <div className="flex-1 ml-10 flex"> 
                <div className="flex flex-col bg-blue-700 text-white justify-center items-center text-center h-15 w-15 absolute top-7 left-25 rounded-md">
                    <span className="font-semibold text-lg">2020 </span>
                    <span className="text-xs">Création</span>
                </div>
                {/* <span className="bg-yellow-600 h-15 w-30 text-black absolute bottom- right-2 py-2 px-5 rounded-md text-sm font-semibold">14 ans d&apos;existence</span> */}
                <div className="bg-gray-200 shadow-xl rounded-lg w-full h-full mt-2  flex items-center justify-center">
                    <div className="flex absolute border border-1 border-gray-100 bg-white w-12 h-12 items-center justify-center rounded-full">
                        <ImageIcon className="text-gray-500 h-8 w-8" strokeWidth={1} />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-5 py-10 mr-20 items-start justify-center">
                <span className="bg-blue-100  text-blue-600 border border-1 border-blue-200 px-1 rounded-sm text-sm font-semibold">Fondation</span>
                <h2 className="text-2xl text-blue-900 font-bold">Fondation Lévites Inter</h2>
                <p className="text-gray-600">Créée en 2020, la Fondation Lévites Inter est l&apos;extension caritative du groupe gospel. Elle matérialise leur engagement social en se concentrant sur la lutte contre les hépatites virales.</p>
                <P1Card
                    icon={<TargetIcon className="text-blue-500 h-3 w-3" strokeWidth={2.5}/>}
                    circlecolor={"bg-blue-100"}
                    title={"Vision"}
                    description={"Une Côte d'Ivoire san hépatites, où chaque citoyen a accès au dépistage et aux soins de qualités."}
                />
                <P1Card
                    icon={<HeartIcon className="text-green-500 h-3 w-3" strokeWidth={3}/>}
                    circlecolor={"bg-green-100"}
                    title={"Mission"}
                    description={"Sensibiliser, dépister et accompagner les populations dans la prévention et le traitement des hépatites."}
                />
                <P1Card
                    icon={<ShieldIcon className="text-yellow-500 h-3 w-3" strokeWidth={2.5}/>}
                    circlecolor={"bg-yellow-100"}
                    title={"Valeurs"}
                    description={"Compassion, intégrité, excellence et service désintéressé guidés par les principes chrétiens."}
                />
                
            </div>
        </div>
    )
}
import P1Card from "./Presentation1Card"
import { MusicIcon } from "lucide-react"
import { HeartIcon } from "lucide-react"
import { UsersIcon } from "lucide-react"
import { ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Presen1(){
    return(
        <div className="flex py-10 relative px-20 gap-10">
            <div className="flex flex-col gap-5 py-10 ml-20 flex-1 items-start justify-center">
                <span className="bg-orange-100  text-orange-400 border border-1 border-orange-200 py-2 px-5 rounded-md text-sm font-semibold">Les Initiateurs</span>
                <h2 className="text-2xl text-blue-900 font-bold">Lévites Inter</h2>
                <p className="text-gray-600">Fondé en 2010, Lévites Inter est un groupe gospel ivoirien reconnu pour ses messages d&apos;espoir et d&apos;amour, inspirés par leur foi, ils ont décidé d&apos;aller au-delà de la musique pour servir leur communauté.</p>
                <P1Card
                    icon={<MusicIcon className="text-yellow-500 h-3 w-3" strokeWidth={2.5}/>}
                    circlecolor={"bg-yellow-100/80"}
                    title={"Mission Artistique"}
                    description={"Propager l'amour de Dieu à travers la musique gospel et toucher les coeurs par des mélodies inspirantes."}
                />
                <P1Card
                    icon={<HeartIcon className="text-blue-500 h-3 w-3" strokeWidth={3}/>}
                    circlecolor={"bg-blue-100"}
                    title={"Engagement Social"}
                    description={"Utiliser leur notoriété et leurs concerts pour sensibiliser et collecter des fonds pour des causes humanitaires."}
                />
                <P1Card
                    icon={<UsersIcon className="text-green-500 h-3 w-3" strokeWidth={2.5}/>}
                    circlecolor={"bg-green-100"}
                    title={"Impact Communautaire"}
                    description={"Mobiliser les communautés chrétiennes et au-delà pour participer activement à la lutte contre les hépatites."}
                />
                <div className="flex">
                    <Button className="hover:bg-yellow-700 rounded-md bg-yellow-600 text-black">Ecouter leur musique</Button>
                    <Button className="hover:bg-yellow-600 ml-5 rounded-md border-2 border-yellow-500 bg-white text-yellow-500">Voir leurs concerts</Button>
                </div>
            </div>
            <div className="flex-1 mr-10 flex"> 
                <div className="flex flex-col bg-yellow-600 justify-center items-center text-center h-16 w-20 absolute bottom-2 right-20 rounded-md">
                    <span className="font-semibold text-lg">14 ans </span>
                    <span className="text-xs">d&apos;existence</span>
                </div>
                {/* <span className="bg-yellow-600 h-15 w-30 text-black absolute bottom-2 right-2 py-2 px-5 rounded-md text-sm font-semibold">14 ans d&apos;existence</span> */}
                <div className="bg-gray-200 w-full h-full mt-2 shadow-xl rounded-lg  flex items-center justify-center">
                    <div className="flex absolute border border-1 border-gray-100 bg-white w-12 h-12 items-center justify-center rounded-full">
                        <ImageIcon className="text-gray-500 h-8 w-8" strokeWidth={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}
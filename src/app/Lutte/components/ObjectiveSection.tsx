import Progress from "./ProgressBar"
import { TargetIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MoveRightIcon } from "lucide-react"

export default function Objective(){
    return(
        <div className="flex items-center justify-center py-15">
            <section className="flex flex-col px-7 gap-7 bg-blue-50 py-5 h-auto w-200 border border-1 rounded-lg text-center items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center h-10 w-10 rounded-full justify-center bg-blue-100 ">
                        <TargetIcon className="text-blue-500"/>
                    </div>
                    <h2 className="text-blue-800 text-3xl font-semibold">Notre Objectif Ambitieux</h2>
                    <p className="text-gray-700">D&apos;ici 2030, sensibiliser et dépister 10 millions d&apos;Ivoiriens pour éradiquer les hépatites</p>
                </div>
                <div className="flex flex-col gap-7">
                    <div className="flex gap-7 items-center justify-center">
                        <Progress
                        chiffre={"10M"}
                        chiffrecolor={"text-blue-500"}
                        objectivetext={"Personnes à senbiliser"}
                        wpercentage={"w-10"}
                        alreadydonetext={"1.5M déjà sensibilisées"}
                        />

                        <Progress
                        chiffre={"5M"}
                        chiffrecolor={"text-green-600"}
                        objectivetext={"Dépistages gratuits"}
                        wpercentage={"w-1"}
                        alreadydonetext={"50K déjà dépistées"}
                        />

                        <Progress
                        chiffre={"100%"}
                        chiffrecolor={"text-yellow-500"}
                        objectivetext={"Couverture nationale"}
                        wpercentage={"w-20"}
                        alreadydonetext={"25 régions visités"}
                        />
                    </div>

                    <p className="text-gray-700">Avec votre soutien, nous pouvons faire de la Côte d&apos;Ivoire le premier pays d&apos;Afrique de l&apos;Ouest à éliminer les hépatites comme problème de santé publique.</p>

                    <div className="flex gap-5 items-center justify-center">
                        <Button className="hover:bg-blue-900 rounded-md  bg-blue-600 text-white">Soutenir la mission <MoveRightIcon/></Button>
                        <Button className="hover:bg-green-100 ml-5 border-2 border-green-600 bg-white text-green-600">Devenir ambassadeur</Button>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}
import Progress from "./ProgressBar"
import { TargetIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MoveRightIcon } from "lucide-react"

export default function Objective(){
    return(
        <div className="flex justify-center py-16 px-4">
    <section className="flex flex-col gap-8 bg-blue-50 rounded-lg p-8 max-w-6xl w-full text-center items-center">
        
        {/* Titre et description */}
        <div className="flex flex-col items-center gap-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100">
                <TargetIcon className="text-blue-500 w-6 h-6"/>
            </div>
            <h2 className="text-blue-800 text-3xl sm:text-4xl font-semibold">Notre Objectif Ambitieux</h2>
            <p className="text-gray-700 max-w-2xl">
                D&apos;ici 2030, sensibiliser et dépister 10 millions d&apos;Ivoiriens pour éradiquer les hépatites
            </p>
        </div>

        {/* Progress bars */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
            <Progress
                chiffre={"10M"}
                chiffrecolor={"text-blue-500"}
                objectivetext={"Personnes à sensibiliser"}
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
                alreadydonetext={"25 régions visitées"}
            />
        </div>

        {/* Texte explicatif */}
        <p className="text-gray-700 max-w-3xl">
            Avec votre soutien, nous pouvons faire de la Côte d&apos;Ivoire le premier pays d&apos;Afrique de l&apos;Ouest à éliminer les hépatites comme problème de santé publique.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Button className="hover:bg-blue-900 rounded-md bg-blue-600 text-white flex items-center justify-center gap-2">
                Soutenir la mission <MoveRightIcon className="w-5 h-5"/>
            </Button>
            <Button className="hover:bg-green-100 border-2 border-green-600 bg-white text-green-600 rounded-md">
                Devenir ambassadeur
            </Button>
        </div>

    </section>
</div>

    )
}
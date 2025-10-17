import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero(){
    return(
        <div className="bg-green-50 flex justify-between flex-wrap items-center pl-40  h-[70vh]">
            <div className="flex flex-col gap-5 space-y-2 w-1/2" >
                <h1>
                    <span className="text-blue-900 text-5xl font-black">Ensemble contre les </span> 
                    <span className="text-blue-700 text-5xl"> hépatites </span> 
                    <span className="text-blue-900 text-5xl font-black">et le </span> 
                    <span className="text-green-600 text-5xl"> cancer du foie</span>
                </h1>
                <p>
                    La Fondation Lévites mobilise la Côte d&apos;Ivoirepour sensibiliser, dépister et lutter contre les hépatites virales, première cause du cancer fu foie.
                </p>
                <div className="flex space-x-4">
                    <Button className="hover:bg-blue-500 bg-blue-700 ">Faire un don maintenant</Button>
                    <Button className="hover:bg-green-700 ml-5 border-2 border-green-600 bg-white-700 text-green-600">Découvrir nos actions</Button>
                </div>
            </div>
            <div className=" w-1/2 relative h-full flex justify-end items-center " >
                <Image  src="/dames.png" alt="image des deux dames" fill className="object-cover "/>
            </div>
        </div>
    )
}
//w-1/2 relative h-full flex justify-end 
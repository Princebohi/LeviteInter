import { Button } from "@/components/ui/button";

export default function Hero(){
    return(
        <div className="flex px-5 flex-col items-center gap-5 pt-25 pb-10 text-center bg-blue-50">
            <h1 className="text-4xl font-bold">Les hépatites virales première cause du cancer du foie</h1>
            <p className="font-bold">En Côte d&apos;Ivoire, les hépatites B et C touchent des millions de personnes, souvent sans qu&apos;elles le sachent. Ces infections silencieuses évoluent vers des complications graves: cirrhose et cancer du foie.</p>
            <Button className="hover:bg-blue-900 rounded-none  bg-blue-500 text-white">Télécharger le guide</Button>
        </div>
    )
}
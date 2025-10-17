import { Button } from "@/components/ui/button";
import { BookOpenIcon } from "lucide-react";
import { ArrowRightIcon } from "lucide-react";

export default function StayInformed(){
    return(
        <div className="flex pb-10 items-center justify-center">
            <section className="flex flex-col p-15 max-w-3xl gap-4 border border-1 text-center border-blue-300 rounded-lg items-center justify-center bg-gradient-to-r from-blue-200/90 to-green-100/90">
                <div className="flex bg-blue-200 w-9 h-9 items-center justify-center rounded-full">
                    <BookOpenIcon className="text-blue-700"/>
                </div>
                <h2 className="font-bold text-blue-900 text-xl">Restez Informé de Nos Actualités</h2>
                <p>Recevez nos derniers articles, témoignages et actualités médicales directement dans votre boîte mail. Pas de spam, que du contenu utile pour votre santé.</p>
                <div className="flex gap-3">
                    <input 
                        type="text"
                        placeholder="Votre adresse email"
                        className="w-full pl-2 pr-20 py-1 border-2 border-white rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                    />
                    <Button className="rounded-md bg-blue-700 hover:bg-blue-900">
                        <p>S&apos;abonner</p>
                        <ArrowRightIcon/>
                    </Button>
                </div>
                <p className="text-xs text-gray-600">En vous abonnant, vous accepter de recevoir nos newsletters. Vous pouvez vous désabonner à tout moment.</p>
            </section>
        </div>
    )
}
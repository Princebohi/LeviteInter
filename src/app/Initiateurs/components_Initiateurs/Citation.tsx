import { QuoteIcon } from "lucide-react"

export default function Citation(){
    return(
        <div className="flex flex-col gap-5 items-center justify-center text-center py-12 bg-gradient-to-r from-blue-100 to-green-50">
            <QuoteIcon className="text-blue-800 h-8 w-8"/>
            <p className="max-w-xl text-center text-xl text-blue-950 font-semibold">&quot;Notre foi nous appelle à servir. Quand nous avons découvert l&apos;ampleur des hépatites en Côte d&apos;Ivoire, nous avons su que Dieu nos appelait à agir. Chaque vie sauvée est une victoire de l&apos;amour sur la maladie.&quot;</p>
            <h4 className="text-blue-900 font-semibold">Pasteur Jean-Claude KOUASSI</h4>
            <p className="text-gray-600">Président Fondateur, Fondation Lévites Inter</p>
        </div>
    )
}
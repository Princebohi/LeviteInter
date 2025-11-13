import { ImageIcon } from "lucide-react"
import Image from "next/image"

interface Head {
  imagesrc: string
  name: string
  djob: string
  description: string
}

export default function HeadCard({imagesrc, name, djob, description}: Head){
    return(
        <section className={`flex flex-col items-center justify-center w-75 h-70 bg-orange-50/40 px-4 rounded-lg  border-2 shadow-md py-5 text-center`}>
            {imagesrc ? (
                <Image
                    src={imagesrc}
                    alt={`photo de ${name}`}
                    fill
                    className="object-cover"
                />
            ) : (
                    <div className="flex overflow-hidden bg-gray-200 mb-2 w-12 h-12 items-center justify-center rounded-full">
                        <ImageIcon className="text-gray-500 h-3 w-3" strokeWidth={1} />
                    </div>
            )}
            
            <h3 className={`text-xl font-bold  text-blue-900`}>{name}</h3>
            <h4 className="text-blue-500 font-semibold">{djob}</h4>
            <p className="text-gray-600 mt-2">{description}</p>
        </section>
    )
}
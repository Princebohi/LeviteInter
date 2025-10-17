"use client"
import Image from "next/image"
import { ImageIcon } from "lucide-react";
interface photo{
    imagesrc : string;
    title: string
    description: string
    bluetext : string
}

export default function GPhoto({imagesrc, title, description, bluetext} : photo){
    return(
        <div className="relative shadow-lg text-center w-80 bg-blue-50 cursor-pointer pt-5 border border-2 rounded-md">
            <span className="absolute top-7 left-2 bg-blue-500 text-white text-xs py-1 font-semibold px-3  rounded-sm z-10">
                {bluetext}
            </span>

            <div className="relative h-80 w-full flex justify-center items-center">
                    {/* Affiche l'image si elle est fournie, sinon un fond gris */}
                {imagesrc ? (
                    <Image
                        src={imagesrc}
                        alt={`Vignette de la vidéo ${title}`}
                        fill
                        className="object-cover"
                    />
                ) : (
                    // <div className="bg-gray-200 w-full h-full" />
                    
                <div className="bg-gray-200 w-full h-full mt-2  flex items-center justify-center">
                    <div className="flex absolute border border-1 border-gray-100 bg-white w-8 h-8 items-center justify-center rounded-full">
                        <ImageIcon className="text-gray-500 h-5 w-5" strokeWidth={1} />
                    </div>
                </div>
                )}

            </div>
            <div className="flex flex-col items-start py-10 px-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}
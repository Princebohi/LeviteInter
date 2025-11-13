"use client"
import { PlayIcon } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Gallery{
    imagesrc? : string|StaticImport
    videosrc? : string|StaticImport
    title: string
    description: string
    bluetext : string
}

export default function GVideo({imagesrc, videosrc, title, description, bluetext} : Gallery){
    const [isPlaying, setIsPlaying] = useState(false)

    const handleTogglePlay = () => {
            setIsPlaying(!isPlaying)
    }
       
    return(
        <div className="relative shadow-lg text-center w-80 bg-blue-50 cursor-pointer pt-5  border-2 rounded-md">
            {/* Si c'est une vidéo et qu'elle ne joue pas... */}
            <span className="absolute top-7 left-2 bg-blue-500 text-white text-xs py-1 font-semibold px-3  rounded-sm z-10">
                {bluetext}
            </span>
            {!isPlaying  ? (
                <div 
                    className="relative h-80 w-full flex justify-center items-center"
                    onClick={handleTogglePlay}
                >
                    {/* Affiche l'image si elle est fournie, sinon un fond gris */}
                    {imagesrc ? (
                        <Image
                            src={imagesrc}
                            alt={`Vignette de la photo ${title}`}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="bg-gray-200 w-full h-full" />
                    )}

                    {/* Le bouton Play superposé sur le fond gris ou l'image de fond */}
                    <div className="absolute  flex items-center justify-center z-10">
                        <div className="flex bg-blue-500 w-12 h-12 items-center justify-center rounded-full">
                            <PlayIcon className="text-white h-6 w-6" strokeWidth={1} />
                        </div>
                    </div>
                </div>
            ) : (
                // ... Si c'est une vidéo et qu'elle joue, on affiche le lecteur
                <div>
                    <video
                        src={typeof videosrc === 'string' ? videosrc : ''}
                        className="w-full h-80"
                        autoPlay
                        controls
                        onEnded={() => setIsPlaying(false)}
                        onClick={handleTogglePlay}
                    />
                </div>
            ) }
            <div className="flex flex-col items-start py-10 px-5">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}
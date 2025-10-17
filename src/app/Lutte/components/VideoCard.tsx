
"use client";
import { useState } from "react"
import Image from "next/image"
import { PlayIcon } from "lucide-react"

interface CardProps{
    imagesrc: string;
    title: string;
    description: string;
    videoSrc: string;
}

export default function VideoCard({imagesrc, title, description, videoSrc}: CardProps){
    const [isPlaying, setIsPlaying] = useState(false)

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    }
    
    return(
        <div className="relative text-center w-80 bg-gray-150 cursor-pointer pt-5 border border-2 rounded-md">
            {!isPlaying ? (
                <div className="bg-gray-200 h-80 flex justify-center items-center">
                    {/* <Image src={imagesrc} alt={title} fill className="object-over"/>  */}
                    <div className="flex bg-blue-500  w-10 h-10 items-center justify-center  rounded-full" >
                        <PlayIcon className="text-white h-5 w-5" strokeWidth={1} fill="#3b82f6" onClick={handleTogglePlay}/>
                    </div>
                </div>
            ) : (
                <div>
                    <video
                    src={videoSrc}
                    className="w-full h-80"
                    autoPlay
                    controls // Affiche les contrôles de lecture (play, pause, volume, etc.)
                    onEnded={() => setIsPlaying(false)} // Remet la miniature à la fin de la vidéo
                    onClick={handleTogglePlay}
                />
                </div>
            )}

            <div className="flex flex-col py-10 px-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}
"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PlayIcon } from "lucide-react"

interface CardProps {
  imagesrc: string
  title: string
  description: string
  videoSrc: string
}

export default function VideoCard({ imagesrc, title, description, videoSrc }: CardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative text-center w-80 bg-gray-100 cursor-pointer pt-5 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Zone vidéo ou image */}
      {!isPlaying ? (
        <div
          className="relative bg-gray-200 h-56 sm:h-64 md:h-72 flex justify-center items-center"
        >
          {/* Si tu veux une image de fond à la place du gris, décommente ceci 👇 */}
          {/* <Image src={imagesrc} alt={title} fill className="object-cover rounded-t-lg" /> */}

          <Button
            onClick={handleTogglePlay}
            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 
                       w-12 h-12 sm:w-14 sm:h-14 rounded-full transition-colors duration-300"
          >
            <PlayIcon className="text-white h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1} />
          </Button>
        </div>
      ) : (
        <div className="relative">
          <video
            src={videoSrc}
            className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-t-lg"
            autoPlay
            controls
            onEnded={() => setIsPlaying(false)}
          />
        </div>
      )}

      {/* Contenu texte */}
      <div className="flex flex-col py-6 px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

"use client"
import Image from "next/image"
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserIcon, CalendarIcon, Clock3Icon, EyeIcon, Share2Icon } from "lucide-react";

interface All {
    tbicon: React.ReactNode
    imagesrc: string
    title: string
    description: string
    bluetext: string
    user: string
    date: string
    time: string
    view: string
}

export default function AllCard({ tbicon, imagesrc, title, description, bluetext, user, date, time, view }: All) {
    return (
        <div className="relative shadow-lg bg-blue-50 cursor-pointer pt-5 border-2 rounded-md w-full sm:w-96 md:w-full lg:w-80">
            
            {/* Badge bleu */}
            <div className="flex gap-1 py-1 absolute top-2 sm:top-3 left-2 bg-blue-500 text-white text-xs sm:text-sm justify-center items-center font-semibold px-2 sm:px-3 rounded-sm z-10">
                {tbicon}
                {bluetext}
            </div>

            {/* Image */}
            <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 w-full flex justify-center items-center">
                {imagesrc ? (
                    <Image
                        src={imagesrc}
                        alt={`Vignette de la vidéo ${title}`}
                        fill
                        className="object-cover rounded-t-md"
                    />
                ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-t-md">
                        <div className="absolute border border-gray-100 bg-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full">
                            <ImageIcon className="text-gray-500 h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1} />
                        </div>
                    </div>
                )}
            </div>

            {/* Contenu texte */}
            <div className="flex flex-col gap-3 items-start py-4 px-3 sm:py-6 sm:px-5">
                <h3 className="text-sm sm:text-md md:text-lg font-bold text-blue-900">{title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">{description}</p>

                {/* Infos utilisateurs/date */}
                <div className="flex flex-col gap-3 text-xs sm:text-sm w-full justify-between text-gray-500">
                    <div className="flex gap-3 justify-between w-full">
                        <div className="flex gap-1 items-center">
                            <UserIcon className="w-3 h-3 sm:w-4 sm:h-4"/>
                            <p>{user}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4"/>
                            <p>{date}</p>
                        </div>
                    </div>

                    <div className="flex justify-between w-full">
                        <div className="flex gap-3">
                            <div className="flex gap-1 items-center">
                                <Clock3Icon className="w-3 h-3 sm:w-4 sm:h-4"/>
                                <p>{time}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <EyeIcon className="w-3 h-3 sm:w-4 sm:h-4"/>
                                <p>{view}</p>
                            </div>
                        </div>

                        <Button className="bg-transparent hover:bg-transparent p-1">
                            <Share2Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-900" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

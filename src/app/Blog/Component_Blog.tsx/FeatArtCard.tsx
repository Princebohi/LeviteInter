"use client"
import Image from "next/image"
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserIcon, CalendarIcon, Clock3Icon, EyeIcon, ArrowRightIcon } from "lucide-react";

interface Featured{
    tbicon: React.ReactNode
    imagesrc: string;
    title: string
    description: string
    bluetext: string
    user: string
    date: string
    time: string
    view: string
}

export default function FeaturedCard({tbicon, imagesrc, title, description, bluetext, user, date, time, view} : Featured){
    return(
        <div className="relative w-full shadow-lg bg-blue-50 cursor-pointer pt-5 border rounded-md">

            {/* Badge bleu */}
            <div className="flex gap-1 absolute top-4 left-2 sm:top-5 bg-blue-500 text-white text-xs sm:text-sm justify-center items-center font-semibold px-3 py-1 rounded-sm z-10">
                {tbicon}
                {bluetext}
            </div>

            {/* Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 flex justify-center items-center">
                {imagesrc ? (
                    <Image
                        src={imagesrc}
                        alt={`Vignette de la vidéo ${title}`}
                        fill
                        className="object-cover rounded-t-md"
                    />
                ) : (
                    <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-t-md">
                        <div className="flex border border-gray-100 bg-white w-10 h-10 items-center justify-center rounded-full">
                            <ImageIcon className="text-gray-500 h-5 w-5" strokeWidth={1} />
                        </div>
                    </div>
                )}
            </div>

            {/* Contenu texte */}
            <div className="flex flex-col gap-3 items-start py-5 px-4 sm:py-6 sm:px-5">
                <h3 className="text-md sm:text-lg md:text-xl font-bold text-blue-900">{title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{description}</p>

                {/* Infos */}
                <div className="flex flex-col sm:flex-row justify-between w-full text-gray-500 text-xs sm:text-sm mt-2 gap-2 sm:gap-4">
                    <div className="flex gap-3">
                        <div className="flex gap-1 items-center">
                            <UserIcon className="w-3 h-3 sm:w-4 sm:h-4"/>
                            <p>{user}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4"/>
                            <p>{date}</p>
                        </div>
                    </div>
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
                </div>

                {/* Bouton */}
                <Button className="mt-3 w-full sm:w-auto bg-blue-700 hover:bg-blue-900 flex justify-center items-center gap-2">
                    <span>Lire l&apos;article</span>
                    <ArrowRightIcon className="w-4 h-4"/>
                </Button>
            </div>
        </div>
    )
}

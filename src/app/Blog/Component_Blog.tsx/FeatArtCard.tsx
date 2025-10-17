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
        <div className="relative shadow-lg  bg-blue-50 cursor-pointer pt-5 border border-2 rounded-md">
            <div className="flex gap-1 absolute top-10 py-1 left-2 bg-blue-500 text-white text-xs justify-center items-center font-semibold px-3  rounded-sm z-10">
                {tbicon}
                {bluetext}
            </div>

            <div className="relative h-110 w-full flex justify-center items-center">
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
            <div className="flex flex-col gap-3 items-start py-10 px-5">
                <h3 className="text-lg font-bold text-blue-900">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="flex text-xs w-full justify-between text-gray-500">
                    <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center items-center">
                            <UserIcon className="w-3 h-3"/>
                            <p>{user}</p>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <CalendarIcon className="w-3 h-3"/>
                            <p>{date}</p>
                        </div>
                    </div>

                    <div className="flex gap-3 ">
                        <div className="flex gap-1 justify-center items-center">
                            <Clock3Icon className="w-3 h-3"/>
                            <p>{time}</p>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <EyeIcon className="w-3 h-3"/>
                            <p>{view}</p>
                        </div>
                    </div>
                </div>
                <Button className="w-full bg-blue-700 hover:bg-blue-900">
                    <p>Lire l&apos;article</p>
                    <ArrowRightIcon/>
                </Button>
            </div>
        </div>
    )
}
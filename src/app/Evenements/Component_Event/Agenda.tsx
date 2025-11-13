"use client"
import { Button } from "@/components/ui/button";
import { DownloadIcon, ExternalLinkIcon, UserPlusIcon, CalendarIcon, CircleIcon, MusicIcon, TruckIcon, GlobeIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import EventCard from "./EventCard";

export default function Agenda(){

    const [date, setDate] = useState(new Date())
    const [Bouttoncolor, setBouttoncolor] = useState("FuturEvents")

    return(

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 py-6 lg:py-10 justify-center items-start px-10 sm:px-6 lg:px-10 xl:px-20">
            {/* Sidebar gauche - Calendrier et Actions */}
            <div className="flex flex-col gap-5 items-center justify-center w-full lg:w-96 mx-auto lg:mx-0">
                {/* Section Calendrier */}
                <section className="flex flex-col w-full items-start px-4 sm:px-5 py-5 gap-4 bg-blue-50 rounded-md border-2 border-gray-300">
                    <div className="flex gap-2 justify-center items-center">
                        <CalendarIcon className="text-blue-600 w-5 h-5" strokeWidth={2.5}/>
                        <h4 className="text-blue-900 font-bold text-sm sm:text-base">Calendrier</h4>
                    </div>
                    
                    <div className="w-full flex justify-center">
                        <Calendar
                            mode="single" 
                            selected={date} 
                            onSelect={setDate} 
                            required={true}
                            className="rounded-md text-blue-900 font-semibold bg-transparent border-2 border-gray-200"
                        />
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <h4 className="text-blue-900 font-bold text-sm sm:text-base">Légende</h4>
                        <div className="flex flex-col items-start gap-1.5 sm:gap-2">
                            <div className="flex justify-start items-center gap-2">
                                <CircleIcon className="text-yellow-500 w-3 h-3 flex-shrink-0" fill="currentcolor"/>
                                <p className="text-gray-600 text-xs sm:text-sm">Concerts</p>
                            </div>

                            <div className="flex justify-start items-center gap-2">
                                <CircleIcon className="text-blue-600 w-3 h-3 flex-shrink-0" fill="currentcolor"/>
                                <p className="text-gray-600 text-xs sm:text-sm">Caravanes</p>
                            </div>

                            <div className="flex justify-start items-center gap-2">
                                <CircleIcon className="text-green-600 w-3 h-3 flex-shrink-0" fill="currentcolor"/>
                                <p className="text-gray-600 text-xs sm:text-sm">Journées mondiales</p>
                            </div>

                            <div className="flex justify-start items-center gap-2">
                                <CircleIcon className="text-red-700 w-3 h-3 flex-shrink-0" fill="currentcolor"/>
                                <p className="text-gray-600 text-xs sm:text-sm">Formations</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Actions Rapides */}
                <section className="flex flex-col px-4 sm:px-5 py-5 gap-4 bg-blue-50 rounded-md w-full border-2 border-gray-300">
                    <h4 className="text-blue-900 font-bold text-sm sm:text-base">Actions Rapides</h4>
                    <div className="flex flex-col gap-3">
                        <Button className="bg-blue-700 rounded-sm hover:bg-blue-600 transition duration-150 w-full text-xs sm:text-sm">
                            <ExternalLinkIcon className="text-white w-4 h-4" strokeWidth={2.5}/>
                            <p className="text-white">Ajouter à Google Calendar</p>
                        </Button>

                        <Button className="bg-transparent rounded-sm border border-gray-300 hover:bg-blue-100 transition duration-150 w-full text-xs sm:text-sm">
                            <UserPlusIcon className="text-blue-800 w-4 h-4" strokeWidth={2.5}/>
                            <p className="text-blue-900">S&apos;inscrire à la newsletter</p>
                        </Button>

                        <Button className="bg-transparent rounded-sm border border-gray-300 hover:bg-blue-100 transition duration-150 w-full text-xs sm:text-sm">
                            <DownloadIcon className="text-blue-800 w-4 h-4" strokeWidth={2.5}/>
                            <p className="text-blue-900">Télécharger le programme</p>
                        </Button>
                    </div>
                </section>
            </div>

            {/* Section droite - Liste des événements */}
            <div className="flex flex-col gap-6 lg:gap-8 justify-start items-start w-full lg:flex-1">
                {/* Toggle entre événements à venir et passés */}
                <div className="flex bg-blue-50 w-full rounded-lg p-1">
                    <Button 
                        className={`bg-blue-50 w-1/2 hover:bg-white transition duration-150 text-xs sm:text-sm ${Bouttoncolor === "FuturEvents" ? "bg-white shadow-sm" : ""}`} 
                        onClick={() => {setBouttoncolor("FuturEvents")}}
                    >
                        <p className="text-blue-800 font-medium">Événements à venir</p>
                    </Button>
                    <Button 
                        className={`bg-blue-50 w-1/2 hover:bg-white transition duration-150 text-xs sm:text-sm ${Bouttoncolor === "PastEvents" ? "bg-white shadow-sm" : ""}`} 
                        onClick={() => {setBouttoncolor("PastEvents")}}
                    >
                        <p className="text-blue-800 font-medium">Événements passés</p>
                    </Button>
                </div>

                {/* Liste des événements */}
                <div className="flex flex-col gap-4 sm:gap-5 w-full">

                    <EventCard
                        Linecolor={"bg-yellow-500"}
                        Icon={<MusicIcon className="w-4 h-4 text-blue-900" strokeWidth={2.5}/>}
                        Iconbg={"bg-orange-100"}
                        Eventname={"Concert Caritatif-Palais de la Culture"}
                        SpanEvent={"Concert"}
                        Date={"15"}
                        DateMonth={"déc."}
                        Description={"Grand concert gospel avec Lévites Inter pour collecter des fonds pour les dépistages gratuits."}
                        Jour={"dimanche 15 décembre 2024"}
                        Heure={"19:30"}
                        Lieu={"Palais de la Culture, Abidjan"}
                        Inscrit={"1250/2000 inscrits"}
                        Pourcentage={"63% complet"}
                    />
                    <EventCard
                        Linecolor={"bg-blue-700"}
                        Icon={<TruckIcon className="w-4 h-4 text-blue-900" strokeWidth={2.5}/>}
                        Iconbg={"bg-blue-100"}
                        Eventname={"Caravane Stop Cancer du Foie-Bouaké"}
                        SpanEvent={"Caravane"}
                        Date={"20"}
                        DateMonth={"déc."}
                        Description={"Campagne de sensibilisationet dépistage gratuit des hépatites B et C."}
                        Jour={"vendredi 20 décembre 2024"}
                        Heure={"08:00"}
                        Lieu={"Place de la paix, Bouaké"}
                        Inscrit={"120/500 inscrits"}
                        Pourcentage={"24% complet"}
                    />
                    <EventCard
                        Linecolor={"bg-green-700"}
                        Icon={<GlobeIcon className="w-4 h-4 text-blue-900" strokeWidth={2.5}/>}
                        Iconbg={"bg-green-100"}
                        Eventname={"Journée Mondiale contre l'Hépatite"}
                        SpanEvent={"Journée"}
                        Date={"28"}
                        DateMonth={"juil."}
                        Description={"Grande mobilisation nationale avec dépistages, concerts et conférences."}
                        Jour={"lundi 28 juillet 2025"}
                        Heure={"09:00"}
                        Lieu={"Stade Félix Houphouët-Boigny, Abidjan"}
                        Inscrit={"2500/10000 inscrits"}
                        Pourcentage={"25% complet"}
                    />

                </div>
            </div>
        </div>
    )
}
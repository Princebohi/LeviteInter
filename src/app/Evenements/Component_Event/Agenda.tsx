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

        <div className="flex flex-col lg:flex-row lg:w-auto  gap-8 py-10 justify-center items-start lg:px-50">
            <div className="flex flex-col gap-5 items-center justify-center w-110 mx-auto">
                <section className="flex flex-col w-full items-start pl-5 pr-20 py-5 gap-4 bg-blue-50 rounded-md h-auto border border-2 border-gray-300">
                    <div className="flex gap-2 justify-center items-center">
                        <CalendarIcon className="text-blue-600 w-5 h-5" strokeWidth={2.5}/>
                        <h4 className="text-blue-900 font-bold">Calendrier</h4>
                    </div>
                    {/*Marquer une date avec la couleur de l'evenement */}
                    <Calendar
                        mode="single" selected={date} onSelect={setDate} required={true}
                        className="rounded-md text-blue-900 font-semibold bg-transparent border border-2 border-gray-200"
                    />

                    <div className="flex flex-col gap-4">
                        <h4 className="text-blue-900 font-bold">Légende</h4>
                        <div className="flex flex-col items-start gap-1">
                            <div className="flex justify-center items-center gap-2">
                                <CircleIcon className="text-yellow-500 w-3 h-3" fill="currentcolor"/>
                                <p className="text-gray-600">Concerts</p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <CircleIcon className="text-blue-600 w-3 h-3" fill="currentcolor"/>
                                <p className="text-gray-600">Caravanes</p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <CircleIcon className="text-green-600 w-3 h-3" fill="currentcolor"/>
                                <p className="text-gray-600">Journées mondiales</p>
                            </div>

                            <div className="flex justify-center items-center gap-2">
                                <CircleIcon className="text-red-700 w-3 h-3" fill="currentcolor"/>
                                <p className="text-gray-600">Formations</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col px-5 py-5 gap-4 bg-blue-50 rounded-md  w-full h-auto border border-2 border-gray-300">
                    <h4 className="text-blue-900 font-bold">Actions Rapides</h4>
                    <div className="flex flex-col gap-3">
                        <Button className="bg-blue-700 rounded-sm hover:bg-blue-300">
                            <ExternalLinkIcon className="text-white" strokeWidth={2.5}/>
                            <p className="text-white">Ajouter à Google Calendar</p>
                        </Button>

                        <Button className="bg-transparent rounded-sm border border-1 border-gray-300 hover:bg-blue-300">
                            <UserPlusIcon className="text-blue-800" strokeWidth={2.5}/>
                            <p className="text-blue-900">S&apos;inscrire à la newsletter</p>
                        </Button>

                        <Button className="bg-transparent rounded-sm border border-1 border-gray-300 hover:bg-blue-300">
                            <DownloadIcon className="text-blue-800" strokeWidth={2.5}/>
                            <p className="text-blue-900">Télécharger le programme</p>
                        </Button>
                    </div>
                </section>
            </div>

            <div className="flex flex-col gap-8 justify-start items-start w-full">
                <div className="flex bg-blue-50 w-full rounded-lg p-1">
                    <Button className={`bg-blue-50 w-1/2 hover:bg-white ${Bouttoncolor === "FuturEvents" ? "bg-white" : ""}`} onClick={() => {setBouttoncolor("FuturEvents")}} >
                        <p className="text-blue-800">Événements à venir</p>
                    </Button>
                    <Button className={`bg-blue-50 w-1/2 hover:bg-white ${Bouttoncolor === "PastEvents" ? "bg-white" : ""}`} onClick={() => {setBouttoncolor("PastEvents")}}>
                        <p className="text-blue-800">Événements passés</p>
                    </Button>
                </div>

                <div className="flex flex-col gap-4 w-full">

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
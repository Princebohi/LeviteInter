import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, CalendarIcon, UserPlusIcon, MapPinIcon, Clock4Icon, UsersIcon  } from "lucide-react"

interface Event{
    Linecolor:string
    Icon:React.ReactNode
    Iconbg:string
    Eventname:string
    SpanEvent:string
    Date:string
    DateMonth:string
    Description:string
    Jour:string
    Heure:string
    Lieu:string
    Inscrit:string
    Pourcentage:string
}

export default function EventCard({Linecolor, Icon, Iconbg, Eventname, SpanEvent, Date, DateMonth, Description, Jour, Heure, Lieu, Inscrit, Pourcentage}:Event){
    return(
        <div className="flex bg-blue-50 border border-2 items-center py-5 rounded-lg justify-start">
            <div className={`h-60 w-1.5 ${Linecolor}`}></div>
            <div className="flex w-full flex-col gap-3 px-5 py-5">
                <div className="flex justify-between">
                    <div className="flex items-center justify-center gap-2">
                        <div className={`flex w-8 h-8 items-center justify-center rounded-full ${Iconbg}`}>
                            {Icon}
                        </div>
                        <div className="flex flex-col items-start justify-center text-center">
                            <h3 className="text-blue-900 font-bold text-xl">{Eventname}</h3>
                            <span className="bg-blue-50  text-blue-900 border border-1 border-blue-300 px-2 rounded-md text-sm font-semibold">{SpanEvent}</span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="text-blue-800 font-bold text-lg">{Date}</span>
                        <span className="text-sm">{DateMonth}</span>
                    </div>
                </div>

                <p className="text-gray-700 text-sm pr-55">{Description}</p>

                <div className="flex gap-40">
                    <div className="flex flex-col gap-3 items-start">

                        <div className="flex gap-1 justify-center items-center">
                            <CalendarIcon className="w-3 h-3 text-gray-600"/>
                            <p className="text-gray-700 text-sm">{Jour}</p>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <MapPinIcon className="w-3 h-3 text-gray-600"/>
                            <p className="text-gray-700 text-sm">{Lieu}</p>
                        </div>

                    </div>

                    <div className="flex flex-col gap-3 items-start">

                        <div className="flex gap-1 justify-center items-center">
                            <Clock4Icon className="w-3 h-3 text-gray-600"/>
                            <p className="text-gray-700 text-sm">{Heure}</p>
                        </div>
                        <div className="flex gap-1 justify-center items-center">
                            <UsersIcon className="w-3 h-3 text-gray-600"/>
                            <p className="text-gray-700 text-sm">{Inscrit}</p>
                        </div>

                    </div>
                </div>

                <div className="flex justify-between items-start text-center">
                    <div className="flex gap-3">
                        <span className="bg-green-100  text-green-600 border border-1 border-green-400 px-2 rounded-md text-sm font-semibold">Gratuit</span>
                        <p className="text-sm">{Pourcentage}</p>
                    </div>

                    <div className="flex gap-2">
                        <Button className="bg-white h-7 border border-1 rounded-sm hover:bg-blue-300">
                            <ExternalLinkIcon className="text-blue-900" strokeWidth={2.5}/>
                            <p className="text-blue-900">Détails</p>
                        </Button>

                        <Button className="bg-blue-700 h-7 rounded-sm border border-1 border-gray-300 hover:bg-blue-300">
                            <UserPlusIcon className="text-white" strokeWidth={1.5}/>
                            <p className="text-white">S&apos;inscrire</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
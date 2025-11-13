import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, CalendarIcon, UserPlusIcon, MapPinIcon, Clock4Icon, UsersIcon } from "lucide-react"

interface Event {
  Linecolor: string
  Icon: React.ReactNode
  Iconbg: string
  Eventname: string
  SpanEvent: string
  Date: string
  DateMonth: string
  Description: string
  Jour: string
  Heure: string
  Lieu: string
  Inscrit: string
  Pourcentage: string
}

export default function EventCard({
  Linecolor,
  Icon,
  Iconbg,
  Eventname,
  SpanEvent,
  Date,
  DateMonth,
  Description,
  Jour,
  Heure,
  Lieu,
  Inscrit,
  Pourcentage
}: Event) {
  return (
    <div className="flex flex-col sm:flex-row bg-blue-50 border-2  sm:py-5 rounded-lg justify-start w-full overflow-hidden">
      {/* Ligne colorée à gauche */}
      <div className={`sm:h-auto sm:w-1.5 h-1.5 w-full ${Linecolor}`}></div>

      {/* Contenu principal */}
      <div className="flex flex-col w-full gap-4 px-5 py-5">
        {/* En-tête */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <div className={`flex w-8 h-8 items-center justify-center rounded-full ${Iconbg}`}>
              {Icon}
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-blue-900 font-bold text-lg sm:text-xl">{Eventname}</h3>
              <span className="bg-blue-50 text-blue-900 border border-blue-300 px-2 rounded-md text-xs sm:text-sm font-semibold">
                {SpanEvent}
              </span>
            </div>
          </div>

          <div className="flex flex-col text-right">
            <span className="text-blue-800 font-bold text-base sm:text-lg">{Date}</span>
            <span className="text-sm text-gray-600">{DateMonth}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
          {Description}
        </p>

        {/* Infos principales */}
        <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-10">
          {/* Colonne 1 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <CalendarIcon className="w-4 h-4 text-gray-600" />
              <p className="text-gray-700 text-sm">{Jour}</p>
            </div>
            <div className="flex gap-2 items-center">
              <MapPinIcon className="w-4 h-4 text-gray-600" />
              <p className="text-gray-700 text-sm">{Lieu}</p>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-2 items-center">
              <Clock4Icon className="w-4 h-4 text-gray-600" />
              <p className="text-gray-700 text-sm">{Heure}</p>
            </div>
            <div className="flex gap-2 items-center">
              <UsersIcon className="w-4 h-4 text-gray-600" />
              <p className="text-gray-700 text-sm">{Inscrit}</p>
            </div>
          </div>
        </div>

        {/* Pied de carte */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Statut et pourcentage */}
          <div className="flex gap-3 items-center">
            <span className="bg-green-100 text-green-600 border border-green-400 px-2 rounded-md text-xs sm:text-sm font-semibold">
              Gratuit
            </span>
            <p className="text-sm">{Pourcentage}</p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Button className="bg-white h-8 border rounded-sm hover:bg-blue-100 flex justify-center items-center gap-2">
              <ExternalLinkIcon className="text-blue-900" strokeWidth={2.5} />
              <p className="text-blue-900 text-sm font-medium">Détails</p>
            </Button>

            <Button className="bg-blue-700 h-8 rounded-sm border border-gray-300 hover:bg-blue-800 flex justify-center items-center gap-2">
              <UserPlusIcon className="text-white" strokeWidth={1.5} />
              <p className="text-white text-sm font-medium">S&apos;inscrire</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

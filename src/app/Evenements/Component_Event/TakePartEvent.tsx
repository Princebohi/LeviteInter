import { Button } from "@/components/ui/button"
import { CalendarIcon, UserPlusIcon } from "lucide-react"

export default function TakePart() {
  return (
    <section className="flex flex-col items-center text-center bg-gradient-to-r from-blue-800/90 to-green-800/90 gap-5 px-6 sm:px-12 md:px-20 lg:px-[23%] py-12">
      {/* Titre */}
      <h2 className="text-white font-bold text-2xl sm:text-3xl">
        Participez à Nos Événements
      </h2>

      {/* Description */}
      <p className="text-gray-100 text-sm sm:text-base md:text-lg max-w-2xl">
        Chaque évènement est une opportunité de sauver des vies. Rejoignez-nous lors de nos prochaines activités et faites partie du changement.
      </p>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center items-center">
        {/* Bouton s'inscrire */}
        <Button className="w-full sm:w-auto bg-white rounded-sm border border-blue-500 hover:bg-blue-300 flex items-center justify-center gap-2">
          <UserPlusIcon className="text-blue-600" strokeWidth={2.5} />
          <p className="text-blue-600 font-medium text-sm sm:text-base">
            S&apos;inscrire aux évènements
          </p>
        </Button>

        {/* Bouton calendrier */}
        <Button className="w-full sm:w-auto bg-transparent rounded-sm border-2 border-white hover:bg-green-500 flex items-center justify-center gap-2">
          <CalendarIcon className="text-white" strokeWidth={2.5} />
          <p className="text-white font-medium text-sm sm:text-base">
            Ajouter à mon calendrier
          </p>
        </Button>
      </div>
    </section>
  )
}

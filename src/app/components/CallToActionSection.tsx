import { Button } from "@/components/ui/button"

export default function Rejoindre() {
  return (
    <section className="flex flex-col items-center text-center bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mx-6 sm:mx-[10%] my-10 gap-5 px-6 sm:px-[10%] md:px-[20%] py-8">
      <h2 className="text-white font-bold text-2xl sm:text-3xl">Rejoignez notre combat</h2>

      <p className="text-white text-sm sm:text-base leading-relaxed">
        Chaque don compte, chaque partage sauve des vies. <br className="hidden sm:block" />
        Ensemble, nous pouvons éradiquer les hépatites en Côte d&apos;Ivoire.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {/* --- Bouton Faire un don --- */}
        <Button className="hover:bg-green-200 rounded-none bg-white text-green-600 w-full sm:w-auto">
          <div className="flex items-center justify-center px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="green"
              className="mr-2 size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5
                   -1.935 0-3.597 1.126-4.312 2.733
                   -.715-1.607-2.377-2.733-4.313-2.733
                   C5.1 3.75 3 5.765 3 8.25
                   c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
            <p>Faire un don</p>
          </div>
        </Button>

        {/* --- Bouton Découvrir nos actions --- */}
        <Button className="hover:bg-blue-300 border-2 border-white bg-transparent text-white w-full sm:w-auto">
          Découvrir nos actions
        </Button>
      </div>
    </section>
  )
}

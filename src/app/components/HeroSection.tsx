import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-green-50 gap-5 flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 lg:px-40 py-10 md:h-[70vh]">
      
      {/* Texte à gauche */}
      <div className="flex flex-col gap-5 w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-900 leading-relaxed">
          Ensemble contre les{" "}
          <span className="text-blue-700">hépatites</span>{" "}
          et le{" "}
          <span className="text-green-600">cancer du foie</span>
        </h1>

        <p className="text-gray-700 text-sm sm:text-base">
          La Fondation Lévites mobilise la Côte d&apos;Ivoire pour sensibiliser,
          dépister et lutter contre les hépatites virales, première cause du
          cancer du foie.
        </p>

        <div className="flex flex-col xl:flex-row justify-center md:justify-start gap-4 mt-4">
          <Button className="bg-blue-700 hover:bg-blue-500 text-white px-6 py-3 text-sm sm:text-base">
            Faire un don maintenant
          </Button>

          <Button className="border-2 border-green-600 text-green-600 bg-white hover:bg-green-50 px-6 py-3 text-sm sm:text-base">
            Découvrir nos actions
          </Button>
        </div>
      </div>

      {/* Image à droite */}
      <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-full flex justify-center md:justify-end items-center">
        <Image
          src="/dames.png"
          alt="Image des deux dames"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

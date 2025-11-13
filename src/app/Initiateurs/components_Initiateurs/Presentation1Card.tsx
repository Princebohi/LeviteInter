interface Presentation1Card {
  icon: React.ReactNode;
  circlecolor: string;
  title: string;
  description: string;
}

export default function P1Card({ icon, circlecolor, title, description }: Presentation1Card) {
  return (
    <div className="flex gap-3 items-start">
      {/* Icône circulaire */}
      <div className={`flex items-center justify-center h-10 w-10 rounded-full ${circlecolor} flex-shrink-0`}>
        {icon}
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-1">
        <h3 className="text-blue-800 font-semibold text-sm sm:text-base">{title}</h3>
        <p className="text-gray-600 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
}

interface PointProps {
  icon: React.ReactNode
  circlecolor: string
  title: string
  description: string
}

export default function Point({ icon, circlecolor, title, description }: PointProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
      
      {/* Icône */}
      <div className={`flex items-center justify-center h-8 w-8 sm:h-7 sm:w-7 rounded-full ${circlecolor}`}>
        {icon}
      </div>

      {/* Texte */}
      <div className="flex flex-col gap-1 max-w-md">
        <h3 className="text-blue-800 font-bold text-base sm:text-lg">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

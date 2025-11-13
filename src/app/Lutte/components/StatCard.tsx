interface StatCardProps {
  icon: React.ReactNode
  chiffre: string
  description: string
  bgColor: string
  textcolor: string
  bordercolor: string
  stat:string
  statcolor:string
  textstat:string

}

export default function StatCard({bordercolor, bgColor, icon, textcolor, chiffre, description, stat, statcolor, textstat}: StatCardProps){
    return(
        <section className={` bg-gray-100 px-10 rounded-lg border ${bordercolor} shadow-md py-11 text-center`}>
            <div className={`flex items-center justify-center h-16 w-16 mx-auto rounded-full ${bgColor} mb-4`}>
                {icon}
            </div>
            <h3 className={`text-xl font-bold mb-2 ${textcolor}`}>{chiffre}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="pt-3">
                <span className={`font-bold text-xl ${statcolor}`}>{stat}</span>
                <p className="text-sm text-gray-600">{textstat}</p>
            </div>
        </section>
    )
}
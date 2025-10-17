
interface ImpactCard{
    Stat: string
    StatColor: string
    Description: string
}

export default function ImpCard({Stat, StatColor, Description} : ImpactCard){
    return(
        <div>
            <h2 className={`${StatColor} font-semibold text-3xl`}>{Stat}</h2>
            <p className="text-gray-600">{Description}</p>
        </div>
    )
}
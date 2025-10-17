interface Presentation1Card{
    icon: React.ReactNode
    circlecolor: string
    title: string
    description: string
}

export default function P1Card({icon, circlecolor, title, description}: Presentation1Card){
    return(
        <div className="flex gap-2 justify-start items-start">
                <div className={`flex p-1 items-center justify-center h-5 w-5 rounded-full ${circlecolor} mb-4`}>
                    {icon}
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-blue-800 font-bold">{title}</h3>
                    <p className="text-md text-gray-600">{description}</p>
                </div>
        </div>
    )
}
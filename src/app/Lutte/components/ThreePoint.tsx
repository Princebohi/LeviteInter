interface PointProps{
    icon: React.ReactNode;
    circlecolor: string;
    title: string;
    description: string;
}

export default function Point({icon, circlecolor, title, description}: PointProps){
    return(
        <div className="flex gap-2">
                <div className={`flex items-center justify-center h-7 w-7 mx-auto rounded-full ${circlecolor} mb-4`}>
                    {icon}
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-blue-800 font-bold">{title}</h3>
                    <p className="text-lg">{description}</p>
                </div>
        </div>
    )
}
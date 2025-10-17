interface ProgressBarProps{
    chiffre: string;
    chiffrecolor: string;
    objectivetext: string;
    wpercentage: string;
    alreadydonetext: string;
}

export default function Progress({chiffre, chiffrecolor, objectivetext, wpercentage, alreadydonetext}:ProgressBarProps){
    return(
        <div className="flex flex-col gap-2">
            <h3 className={`text-blue-600 text-2xl font-semibold ${chiffrecolor}`}>{chiffre}</h3>
            <p className="text-gray-700">{objectivetext}</p>
            <div className="w-full bg-blue-100 rounded-full h-1.5">
                <div
                    className={`bg-blue-700 ${wpercentage} h-1.5 rounded-full`}
                    // style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <p className="text-gray-700">{alreadydonetext}</p>
        </div>
    )
}
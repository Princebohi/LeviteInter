import { Button } from "@/components/ui/button";

interface ThreeActions{
    icon : React.ReactNode;
    circlecolor : string;
    title : string;
    text : string;
    firsticon : React.ReactNode;
    secondicon : React.ReactNode;
    thirdicon : React.ReactNode;
    firsticontext : string;
    secondicontext : string;
    thirdicontext : string;
    butontext : string;
    butontextcolor : string;
    butoncolor : string;
    bordercolor : string;
}
export default function ActionC({icon, circlecolor, title, text, firsticon, secondicon, thirdicon, firsticontext, secondicontext, thirdicontext, butontext, butontextcolor, butoncolor, bordercolor}:ThreeActions){
    return(
        <div className={`flex  flex-col py-5 px-5 bg-gray-100 gap-5 border-2 rounded-lg  ${bordercolor}`}>
            <div className={`flex items-center justify-center h-10 w-10  rounded-full ${circlecolor} `}>
                {icon}
            </div>
            <h3 className="text-2xl text-blue-800 font-semibold">{title}</h3>
            <p className="text-md text-gray-600">{text}</p>
            <div className="flex flex-col gap-5">
                <div className="flex gap-3">
                    {firsticon}
                    <p className="text-md text-gray-600">{firsticontext}</p>
                </div>
                <div className="flex gap-3">
                    {secondicon}
                    <p className="text-md text-gray-600">{secondicontext}</p>
                </div>
                <div className="flex gap-3">
                    {thirdicon}
                    <p className="text-md text-gray-600">{thirdicontext}</p>
                </div>
            </div>
            <Button className={`hover:bg-blue-900 px-10 rounded-md  ${butoncolor} ${butontextcolor}`}>{butontext}</Button>         
        </div>
    )
}
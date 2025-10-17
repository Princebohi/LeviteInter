import ActionC from "./ActionCard";
import { TruckIcon, StethoscopeIcon, MusicIcon, MicIcon, HeartIcon, MapPinIcon, CalendarIcon, UsersIcon} from "lucide-react";

export default function ActionSection(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-30 pt-5 pb-10 gap-5">
            <ActionC
            icon={<TruckIcon className="text-blue-600"/>}
            circlecolor={"bg-blue-100"}
            title={"Caravane Nationale"}
            text={'Notre caravane "Stop au Cancer du Foie" sillonne la Côte d\'Ivoire pour sensibiliser les populations.'}
            firsticon={<MapPinIcon className="text-blue-600"/>}
            secondicon={<UsersIcon className="text-blue-600"/>}
            thirdicon={<CalendarIcon className="text-blue-600"/>}
            firsticontext={"100+ viles visitées"}
            secondicontext={"1.5M personnes sensibilisées"}
            thirdicontext={"Tournée permanente"}
            butontext={"Voir le calendrier"}
            butontextcolor={"text-white"}
            butoncolor={"bg-blue-700 hover:bg-blue-500"}
            bordercolor={"border-blue-100"}
            />

            <ActionC
            icon={<StethoscopeIcon className="text-green-500"/>}
            circlecolor={"bg-green-100"}
            title={"Dépistages Gratuits"}
            text={"Tests rapides et gratuits des hépatites B et C dans les communautés et centres de santé."}
            firsticon={<UsersIcon className="text-green-600"/>}
            secondicon={<MapPinIcon className="text-green-600"/>}
            thirdicon={<CalendarIcon className="text-green-600"/>}
            firsticontext={"50,000+ personnes dépistées"}
            secondicontext={"25 régions couvertes"}
            thirdicontext={"Chaque weekend"}
            butontext={"Organiser un dépistage"}
            butontextcolor={"text-white"}
            butoncolor={"bg-green-600 hover:bg-green-500"}
            bordercolor={"border-green-100"}
            />

            <ActionC
            icon={<MusicIcon className="text-yellow-500"/>}
            circlecolor={"bg-yellow-600/10"}
            title={"Concerts Caritatifs"}
            text={"Le groupe Lévites Inter organise des concerts gospel pour financer nos actions de santé publique"}
            firsticon={<MicIcon className="text-yellow-400"/>}
            secondicon={<UsersIcon className="text-yellow-400"/>}
            thirdicon={<HeartIcon className="text-yellow-400"/>}
            firsticontext={"25 concerts organisés"}
            secondicontext={"100,000+ spectateurs"}
            thirdicontext={"5m CFA récoltés"}
            butontext={"Prochains concerts"}
            butontextcolor={"text-white"}
            butoncolor={"bg-yellow-400 hover:bg-yellow-300"}
            bordercolor={"border-yellow-100"}
            />
        </div>
    )
}
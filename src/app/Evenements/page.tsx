import HeroEvent from "./Component_Event/HeroEvent"
import Agenda from "./Component_Event/Agenda"
import KindEvents from "./Component_Event/EventsKind"
import TakePart from "./Component_Event/TakePartEvent"

export default function Event(){
    return(
        <div>
            <HeroEvent/>
            <Agenda/>
            <KindEvents/>
            <TakePart/>
        </div>
    )
}
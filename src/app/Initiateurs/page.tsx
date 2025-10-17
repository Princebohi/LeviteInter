import HeroIni from "./components_Initiateurs/HeroSection"
import Presen1 from "./components_Initiateurs/Presentation1"
import Presen2 from "./components_Initiateurs/Presentation2"
import Valor from "./components_Initiateurs/ValeursSection"
import HeadEquip from "./components_Initiateurs/HeadEquip"
import Partners from "./components_Initiateurs/Partners"
import Citation from "./components_Initiateurs/Citation"
import Join from "./components_Initiateurs/JoinUs"

export default function Initiator(){
    return(
        <div>
            <HeroIni/>
            <Presen1/>
            <Presen2/>
            <Valor/>
            <HeadEquip/>
            <Partners/>
            <Citation/>
            <Join/>
        </div>
    )
}
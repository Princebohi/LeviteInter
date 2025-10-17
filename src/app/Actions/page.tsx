import ActionHero from "./components_action/OurActions"
import ActionSection from "./components_action/Actions"
import Gallery from "./components_action/Galerie"
import Impact from "./components_action/ImpactSection"
import Call from "./components_action/CallToAction"

export default function Action(){
    return(
        <div>
            <ActionHero/>
            <ActionSection/>
            <Gallery/> 
            <Impact/>
            <Call/>
        </div>
    )
}
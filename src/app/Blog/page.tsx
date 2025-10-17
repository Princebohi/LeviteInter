import HeroBlog from "./Component_Blog.tsx/HeroBlog"
import Article from "./Component_Blog.tsx/ArticleSection"
import StayInformed from "./Component_Blog.tsx/StayInformed"
import OurCategories from "./Component_Blog.tsx/NosCatégories"

export default function Blog(){
    return(
        <div>
            <HeroBlog/>
            <Article/>
            <StayInformed/>
            <OurCategories/>
        </div>
    )
}
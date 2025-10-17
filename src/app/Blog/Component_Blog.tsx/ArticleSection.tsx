import ArtCategorie from "./ArticleCategorie"
import FeaturedArt from "./FeaturedArticles"
import AllArt from "./AllArticles"

export default function Article(){
    return(
        <div>
            <ArtCategorie/>
            <FeaturedArt/>
            <AllArt/>
        </div>
    )
}
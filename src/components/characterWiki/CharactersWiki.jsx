import "./CharactersWiki.css"
import comicsLeftImg from "../../assets/new-comics-block-left.png"
import comicsRightImg from "../../assets/new-comics-block-right.png"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const CharactersWiki = () => {
    const characters = useSelector((state) => state.characters)
    const { id } = useParams()
    const wikiCharacter = characters.find(item => item.id === +id)


    return(
        <div className="characters-wiki">
            <div className="new-comics-block">
                <div className="main">
                    <div className="left"><img src={comicsLeftImg} alt="" /></div>
                    <div className="center">New comics every week! Stay tuned!</div>
                </div>
                <div className="right"><img src={comicsRightImg} alt="" /></div>
            </div>
                {wikiCharacter.name &&
                <div className="wiki-main">
                    <div className="wiki-img"><img src={`${wikiCharacter.thumbnail?.path}.${wikiCharacter.thumbnail?.extension}`} alt=""/></div>
                    <div className="wiki-content">
                        <div className="wiki-header">{wikiCharacter.name}</div>
                        <div className="wiki-description">{wikiCharacter.description}</div>
                    </div>
                </div>
                }
        </div>
    )
}

export default CharactersWiki
import './Characters.css'
import tryItImg from "../../assets/try-it-img.png"
import absoluteBottomImg from "../../assets/absolute-bottom.png"
import { useState, useEffect } from 'react'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const getCharacters = async () => {
        let response = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=03891c9ea8eb59750631df56a7174cff&hash=c6449aa86f89f33c8908bc7e2be24ca9&limit=99`)
        let data = await response.json()
        setCharacters(data.data.results)
    }

    const [count, setCount] = useState(9)

    useEffect(() => {
        getCharacters()
    }, [])

    return(
        <div className="characters">
            <div className="random-character">
                <div className="left-side">
                    <img src="" alt=""/>
                    <div className="left-side-content"></div>
                </div>
                <div className="right-side">
                    <div className="first-word">Random character for today!<br/>Do you want to get to know him better?</div>
                    <div className="second-word">Or choose another one</div>
                    <div className="try-it">TRY IT</div>
                    <div className="try-it-img"><img src={tryItImg} alt="" /></div>
                </div>
            </div>
            <div className="main">
                <div className="main-left">
                    <div className="characters-list">
                        {characters.slice(0, count).map(item => {
                            return(
                                <div className="characters-item" key={item.id}>
                                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                                    <div className="characters-name">{item.name}</div>
                                </div>
                            )
                        })}
                    </div>
                <div className="comics-load-more" onClick={() => setCount(count + 9)}>LOAD MORE</div>
                </div>
                <div className="main-right">
                </div>
            </div>
            <img src={absoluteBottomImg} alt="" className="absolute-bottom-img"/>
        </div>
    )
}

export default Characters
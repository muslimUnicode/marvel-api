import './Characters.css'
import tryItImg from "../../assets/try-it-img.png"
import absoluteBottomImg from "../../assets/absolute-bottom.png"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Characters = () => {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters)
    const randomCharacter = useSelector((state) => state.randomCharacter)
    const selectedCharacter = useSelector((state) => state.selectedCharacter)

    const getCharacters = async () => {
        const res = await fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=03891c9ea8eb59750631df56a7174cff&hash=c6449aa86f89f33c8908bc7e2be24ca9&limit=99`)
        const data = await res.json()
        
        dispatch({
            type: "get-characters",
            payload: data.data.results
        })
    }

    const getRandomCharacter = () => {
        dispatch({
            type: "get-random-character"
        })
    }

    const selectCharacter = (id) => {
        dispatch({
            type: "select-character",
            payload: id
        })
    }

    const [count, setCount] = useState(9)

    useEffect(() => {
        getCharacters()
    }, [])

    return(
        <div className="characters">
            <div className="random-character">
                <div className="left-side">
                    {randomCharacter.name  &&
                    <div className="random-inner">
                        <img src={`${randomCharacter.thumbnail?.path}.${randomCharacter.thumbnail?.extension}`} alt=""/>
                        <div className="left-side-content">
                            <div className="header">{randomCharacter.name}</div>
                            <div className="text">{randomCharacter.description}</div>
                            <div className="buttons">
                                <Link className="homepage" to={`${randomCharacter?.urls[0]?.url}`}>HOMEPAGE</Link>
                                <Link className="wiki" to={`/characters-wiki/${randomCharacter.id}`}>WIKI</Link>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className="right-side">
                    <div className="first-word">Random character for today!<br/>Do you want to get to know him better?</div>
                    <div className="second-word">Or choose another one</div>
                    <div className="try-it" onClick={getRandomCharacter}>TRY IT</div>
                    <div className="try-it-img"><img src={tryItImg} alt=""/></div>
                </div>
            </div>
            <div className="main">
                <div className="main-left">
                    <div className="characters-list">
                        {characters.slice(0, count).map((item, index) => {
                            return(
                                <div className="characters-item" key={item.id} onClick={() => selectCharacter(index)}>
                                    <img src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} alt=""/>
                                    <div className="characters-name">{item.name}</div>
                                </div>
                            )
                        })}
                    </div>
                <div className="comics-load-more" onClick={() => setCount(count + 9)}>LOAD MORE</div>
                </div>
                <div className="main-right">
                    {selectedCharacter.name &&
                    <div className="selected-character">
                        <div className="selected-upper">
                            <div className="selected-img"><img src={`${selectedCharacter.thumbnail?.path}.${selectedCharacter.thumbnail?.extension}`} alt=""/></div>
                            <div className="name-and-buttons">
                                <div className="selected-name">{selectedCharacter.name}</div>
                                <div className="selected-buttons">
                                    <Link className="selected-homepage" to={`${selectedCharacter.urls[0]?.url}`}>HOMEPAGE</Link>
                                    <Link className="selected-wiki" to={`/characters-wiki/${selectedCharacter.id}`}>WIKI</Link>
                                </div>
                            </div>
                        </div>
                        <div className="selected-description">{selectedCharacter.description}</div>
                    </div>
                    }
                </div>
            </div>
            <img src={absoluteBottomImg} alt="" className="absolute-bottom-img"/>
        </div>
    )
}

export default Characters
import './Comics.css'
import comicsLeftImg from "../../assets/new-comics-block-left.png"
import comicsRightImg from "../../assets/new-comics-block-right.png"
import comicsImg from "../../assets/comics-img.png"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Comics = () => {
    const dispatch = useDispatch()
    const comics = useSelector((state) => state.comics)

    const getComics = async () => {
        const response = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=03891c9ea8eb59750631df56a7174cff&hash=c6449aa86f89f33c8908bc7e2be24ca9&limit=100`)
        const data = await response.json()
        
        dispatch({
            type: "get-comics",
            payload: data.data.results
        })
    }

    const [count, setCount] = useState(8)

    useEffect(() => {
        getComics()
    }, [])

    return(
        <div className="comics">
            <div className="new-comics-block">
                <div className="main">
                    <div className="left"><img src={comicsLeftImg} alt="" /></div>
                    <div className="center">New comics every week! Stay tuned!</div>
                </div>
                <div className="right"><img src={comicsRightImg} alt="" /></div>
            </div>
            <div className="comics-list">
                {comics.slice(0, count).map((item) => {
                    let path = ""
                    item.images.length !== 0
                        ? path = `${item.images[0].path}.${item.images[0].extension}`
                        : path = comicsImg
                    return(
                        <div className="comics-item" key={item.id}>
                            <img src={path} alt=""/>
                            <div className="comics-name">{item.title}</div>
                            <div className="comics-price">{item.prices[0].price !== 0 ? `${item.prices[0].price}$` : "NOT AVAILABLE"}</div>
                        </div>
                    )
                })}
            </div>
            <div className="comics-load-more" onClick={() => setCount(count + 8)}>LOAD MORE</div>
        </div>
    )
}

export default Comics
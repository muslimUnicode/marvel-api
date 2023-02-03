import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import comicsLeftImg from "../../assets/new-comics-block-left.png"
import comicsRightImg from "../../assets/new-comics-block-right.png"
import comicsImg from "../../assets/comics-img.png"
import { Link } from "react-router-dom"
import "./ComicsAbout.css"

const ComicsAbout = () => {
    const comics = useSelector((state) => state.comics)
    const { id } = useParams()
    const aboutComics = comics.find(item => item.id === +id)
    let path = ""
    aboutComics.images.length !== 0
                    ? path = `${aboutComics.images[0].path}.${aboutComics.images[0].extension}`
                    : path = comicsImg

    return(
        <div className="comics-about">
            <div className="new-comics-block">
                <div className="main">
                    <div className="left"><img src={comicsLeftImg} alt="" /></div>
                    <div className="center">New comics every week! Stay tuned!</div>
                </div>
                <div className="right"><img src={comicsRightImg} alt="" /></div>
            </div>
            {aboutComics &&
            <div className="comics-about-main">
                <div className="comics-about-img"><img src={path} alt=""/></div>
                <div className="comics-about-content">
                    <div className="comics-about-header">
                        <div className="comics-about-name">{aboutComics.title}</div>
                        <Link className="back-to-all" to='/comics'>Back to all</Link>
                    </div>
                    <div className="about-comics-description">{aboutComics.description}</div>
                    <div className="about-comics-page-count">{aboutComics.pageCount + ' pages'}</div>
                    <div className="about-comics-language">{'Language: ' + aboutComics.textObjects && aboutComics.textObjects.language}</div>
                    <div className="about-comics-price">{aboutComics.prices[0].price !== 0 ? `${aboutComics.prices[0].price}$` : "NOT AVAILABLE"}</div>
                </div>
            </div>
            }
        </div>
    )
}

export default ComicsAbout
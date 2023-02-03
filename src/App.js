import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Characters from "./components/characters/Characters";
import Comics from "./components/comics/Comics";
import CharactersWiki from "./components/characterWiki/CharactersWiki";
import ComicsAbout from "./components/comicsAbout/ComicsAbout";

function App() {    
    return(
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/comics' element={<Comics/>}/>
                <Route path='/characters-wiki/:id' element={<CharactersWiki/>}/>
                <Route path='/comics/comics-about/:id' element={<ComicsAbout/>}/>
            </Routes>
        </div>
    )
}

export default App;

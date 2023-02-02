import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Characters from "./components/characters/Characters";
import Comics from "./components/comics/Comics";

function App() {    
    return(
        <div className="app">
            <Navbar/>
            <Routes>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='/comics' element={<Comics/>}/>
            </Routes>
        </div>
    )
}

export default App;

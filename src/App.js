import './App.css';
import './media.css';
import logo from "./components/logo.svg"
import Navigation from "./components/Navigation"
import Quotes from "./components/Quotes"
import data from './data'
import {Route, Routes, useParams} from "react-router-dom"
import { Page } from './Page'
import {AnimatePresence, motion} from "framer-motion"

function App() {
  
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <Navigation />
      <Quotes />
      <div className="page">
        {useParams() === {} &&<p>Pick a category</p>}
        <AnimatePresence>
        <Routes>
            <Route path="/:pageId" element={<Page />}/>
            <Route path="/" element={<h2 className="pick">Pick a category!</h2>}/>
        </Routes>
        </AnimatePresence>

      </div>

    </div>
  );
}

export default App;

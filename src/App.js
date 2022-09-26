import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Busquedas from "./Components/Busquedas/Busquedas";
import Home from "./Components/Home/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busquedas" element={<Busquedas/>}/>
      </Routes>
    </Router>
  )
}

export default App;

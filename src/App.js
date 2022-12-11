import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Busquedas from "./Components/Busquedas/Busquedas";
import Empresas from "./Components/Empresas/Empresas";
import Home from "./Components/Home/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busquedas" element={<Busquedas/>}/>
        <Route path="/empresas" element={<Empresas/>}/>
      </Routes>
    </Router>
  )
}

export default App;

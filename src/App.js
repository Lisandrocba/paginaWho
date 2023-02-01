import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation 
} from "react-router-dom";
import Busquedas from "./Components/Busquedas/Busquedas";
import Empresas from "./Components/Empresas/Empresas";
import Historia from "./Components/Historia/Historia";
import Home from "./Components/Home/Home";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/busquedas" element={<Busquedas/>}/>
        <Route path="/empresas" element={<Empresas/>}/>
        <Route path="/historia" element={<Historia/>}/>
      </Routes>
    </Router>
  )
}

export default App;

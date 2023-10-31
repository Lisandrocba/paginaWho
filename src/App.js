import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation 
} from "react-router-dom";
import Empresas from "./Components/Empresas/Empresas";
import Historia from "./Components/Historia/Historia";
import Home from "./Components/Home/Home";
import Recluting from "./Components/Recluting/Recluting";

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
        <Route path="/recluting" element={<Recluting/>}/>
        <Route path="/empresas" element={<Empresas/>}/>
        <Route path="/historia" element={<Historia/>}/>
      </Routes>
    </Router>
  )
}

export default App;

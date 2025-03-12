import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Importa tus componentes
import Home from "./pages/Home";
import Team from "./components/Team"
import TemplatesProjects from "./components/TemplatesProjects"
import Header from "./components/Header"
import Footer from "./components/Footer"

import "./styles/app.css"

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<TemplatesProjects />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

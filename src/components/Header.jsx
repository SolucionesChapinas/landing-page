"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import "./styles/Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("precios");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            Soluciones Chapinas
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="" className="nav-link">
            Inicio
          </a>
          <a href="#projects" className="nav-link">
            Plantillas
          </a>
          <a href="#team" className="nav-link">
            Equipo
          </a>
          <button onClick={scrollToContact} className="button">Cotizar Ahora</button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}>
          {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-items">
          <a href="" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Plantillas
          </a>
          <a href="#team" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
            Equipo
          </a>
          <button className="button full-width" onClick={() => setIsMenuOpen(false)}>
            Cotizar Ahora
          </button>
        </div>
      </div>
    </header>
  );
};

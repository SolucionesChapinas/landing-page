import { ArrowRight } from "lucide-react";
import "./styles/Hero.css";

export default function Hero() {
  const landingpage = "/components/landingpage.webp";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Soluciones Tecnológicas para Empresas Guatemaltecas</h1>
              <p className="hero-description">
                Transformamos negocios a través de la tecnología con asesorías, consultorías, desarrollo web y software
                a medida para empresas en Guatemala.
              </p>
              <div className="hero-insight">
                <h3 className="insight-title">¿Por qué digitalizar tu negocio?</h3>
                <p className="insight-text">
                Las redes sociales atraen clientes, pero una página web fortalece su confianza y mejora su experiencia. 
                Digitalizar tu negocio mejora el acceso a tus productos o servicios y refuerza tu marca.
                </p>
              </div>
            </div>

            <div className="hero-buttons">
              <a onClick={scrollToContact} className="button primary">
                Contáctanos <ArrowRight className="icon" />
              </a>
              <a href="#projects" className="button outline">
                Ver Plantillas
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image" style={{ backgroundImage: `url(${landingpage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="hero-image-overlay">
                <div className="product-info">
                  <h3 className="product-title">Mi Sitio GT</h3>
                  <p className="product-subtitle">Nuestro producto estrella próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

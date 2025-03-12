import { ArrowRight } from "lucide-react";
import "./styles/Hero.css";

export default function Hero() {
  const landingpage = "/landing-page/components/landingpage.webp";

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
                  Las redes sociales son excelentes para atraer nuevos clientes, pero digitalizar tus servicios mediante
                  páginas web y software a medida es la clave para retenerlos y fidelizarlos a largo plazo.
                </p>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="" className="button primary">
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
                  <p className="product-subtitle">Nuestro producto estrella</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

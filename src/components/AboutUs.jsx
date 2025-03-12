import { CheckCircle } from "lucide-react";
import "./styles/AboutUs.css";

export default function AboutUs() {
  const aboutUs = "/landing-page/components/aboutUs.webp";

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Sobre Nosotros</div>
          <h2 className="section-title">Soluciones Chapinas</h2>
          <p className="section-description">
            Somos una empresa guatemalteca dedicada a brindar soluciones tecnológicas innovadoras para empresas de todos
            los tamaños.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-features">
            <ul className="feature-list">
              <li className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h3 className="feature-title">Experiencia Local</h3>
                  <p className="feature-desc">
                    Entendemos las necesidades específicas del mercado guatemalteco y ofrecemos soluciones adaptadas a
                    nuestra realidad.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h3 className="feature-title">Innovación Constante</h3>
                  <p className="feature-desc">
                    Nos mantenemos actualizados con las últimas tendencias tecnológicas para ofrecer soluciones de
                    vanguardia.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <CheckCircle className="feature-icon" />
                <div>
                  <h3 className="feature-title">Compromiso con el Cliente</h3>
                  <p className="feature-desc">
                    Trabajamos de la mano con nuestros clientes para asegurar que cada solución cumpla y supere sus
                    expectativas.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-image-container">
            <div className="about-image" style={{ backgroundImage: `url(${aboutUs})`, backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="about-image-overlay">
                <div className="about-image-content">
                  <h3 className="about-image-title">Impulsando el Crecimiento Digital</h3>
                  <p className="about-image-subtitle">Desde 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

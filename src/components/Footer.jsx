import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import "./styles/Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-title">Soluciones Chapinas</h3>
            <p className="footer-description">
              Transformando negocios guatemaltecos a través de soluciones tecnológicas innovadoras.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <Linkedin className="social-icon" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <ul className="footer-nav">
              <li>
                <a href="" className="footer-nav-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#projects" className="footer-nav-link">
                  Plantillas
                </a>
              </li>
              <li>
                <a href="#team" className="footer-nav-link">
                  Equipo
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-services">
            <h3 className="footer-title">Servicios</h3>
            <ul className="footer-nav">
              <li>
                <a href="#" className="footer-nav-link">
                  Asesorías y consultas
                </a>
              </li>
              <li>
                <a href="#" className="footer-nav-link">
                  Páginas web
                </a>
              </li>
              <li>
                <a href="#" className="footer-nav-link">
                  Software a la medida
                </a>
              </li>
              <li>
                <a href="#" className="footer-nav-link">
                  Catálogos web
                </a>
              </li>
              <li>
                <a href="#" className="footer-nav-link">
                  Mi Sitio GT
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3 className="footer-title">Contacto</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <span className="footer-contact-text">solucioneschapinasgt@gmail.com</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-contact-text">Quetzaltenango, Guatemala</span>
              </li>
              <li className="footer-contact-item">
                <Phone className="footer-contact-icon" />
                <span className="footer-contact-text">+502 2222-3333</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Soluciones Chapinas GT. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">
              Términos y Condiciones
            </a>
            <a href="#" className="footer-legal-link">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

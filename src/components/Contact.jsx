import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  LinkedinIcon as LinkedIn,
  PhoneIcon as WhatsApp,
} from "lucide-react"
import "./styles/Contact.css"

export default function Contact() {
  // Información de contacto
  const contactInfo = {
    phone: "+502 5159-3189",
    whatsapp: "+502 5159-3189",
    email: "solucioneschapinasgt@gmail.com",
    address: "Quetzaltenango, Guatemala"
  };

  // Redes sociales
  const socialMedia = [
    {
      name: "Facebook",
      icon: <Facebook className="social-icon" />,
      url: "https://facebook.com/solucioneschapinas",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <Instagram className="social-icon" />,
      url: "https://instagram.com/solucioneschapinas.gt",
      color: "#E4405F",
    },
    {
      name: "Twitter",
      icon: <Twitter className="social-icon" />,
      url: "https://twitter.com/solchapinas",
      color: "#1DA1F2",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn className="social-icon" />,
      url: "https://linkedin.com/company/soluciones-chapinas",
      color: "#0A66C2",
    },
    {
      name: "WhatsApp",
      icon: <WhatsApp className="social-icon" />,
      url: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`,
      color: "#25D366",
    },
  ];

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Contáctanos</div>
          <h2 className="section-title">¿Listo para impulsar tu negocio?</h2>
          <p className="section-description">
            Estamos aquí para ayudarte. Contáctanos hoy y descubre cómo mejorar tu presencia digital.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info-card">
            <div className="card-header">
              <h3 className="card-title">Información de Contacto</h3>
              <p className="card-description">Encuentra distintas formas de contactarnos</p>
            </div>

            <div className="card-content">
              <div className="info-item">
                <a href={`tel:${contactInfo.phone.replace(/\D/g, "")}`} className="info-link">
                  <Phone className="info-icon" />
                  <div>
                    <h3 className="info-title">Teléfono</h3>
                    <p className="info-text">{contactInfo.phone}</p>
                  </div>
                </a>
              </div>
              <div className="info-item">
                <a href={`mailto:${contactInfo.email}`} className="info-link">
                  <Mail className="info-icon" />
                  <div>
                    <h3 className="info-title">Correo Electrónico</h3>
                    <p className="info-text">{contactInfo.email}</p>
                  </div>
                </a>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h3 className="info-title">Dirección</h3>
                  <p className="info-text">{contactInfo.address}</p>
                </div>
              </div>
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h3 className="info-title">Horario de Atención</h3>
                  <p className="info-text">
                    Lunes a Viernes: 8:00 AM - 5:00 PM
                    <br />
                    Sábado: 9:00 AM - 12:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-media-card">
            <div className="card-header">
              <h3 className="card-title">Redes Sociales</h3>
              <p className="card-description">Síguenos en nuestras redes sociales</p>
            </div>
            <div className="card-content">
              <ul className="social-list">
                {socialMedia.map((social, index) => (
                  <li key={index} className="social-item">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ "--social-color": social.color }}
                    >
                      {social.icon}
                      <span className="social-name">{social.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

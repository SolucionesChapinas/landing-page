import { Code, Palette, Lightbulb, LineChart, Smartphone, Globe, Store } from "lucide-react"
import "./styles/Services.css"

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="service-icon" />,
      title: "Asesorías y Consultorías",
      description: "Orientación estratégica para implementar soluciones tecnológicas que impulsen tu negocio.",
    },
    {
      icon: <Globe className="service-icon" />,
      title: "Desarrollo de Páginas Web",
      description: "Diseño y desarrollo de páginas web, desde plantillas hasta soluciones personalizadas, incluyendo catálogos interactivos.",
    },
    {
      icon: <Palette className="service-icon" />,
      title: "Diseño y Branding",
      description: "Diseño, renovación y digitalización de logotipos, identidad visual y material publicitario.",
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Gestión de Redes Sociales",
      description: "Administración de perfiles, creación de contenido y campañas publicitarias para aumentar la visibilidad de tu marca.",
    },
    {
      icon: <Store className="service-icon" />,
      title: "Comercio en Línea",
      description: "Creamos tiendas en línea personalizadas y optimizadas para impulsar tu negocio y mejorar tu presencia digital.",
    },
    {
      icon: <Code className="service-icon" />,
      title: "Desarrollo de Software",
      description: "Aplicaciones y sistemas diseñados para optimizar procesos y mejorar la eficiencia de tu negocio.",
    },
    {
      icon: <LineChart className="service-icon" />,
      title: "Mi Sitio GT",
      description: "Nuestro producto estrella que ofrece ser una solución digital para negocios guatemaltecos que buscan presencia en línea.",
    }
  ];
  
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nuestros Servicios</div>
          <h2 className="section-title">Soluciones Tecnológicas Completas</h2>
          <p className="section-description">
            Ofrecemos una amplia gama de servicios tecnológicos para ayudar a su empresa a crecer y destacarse en el
            mercado digital.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-container">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

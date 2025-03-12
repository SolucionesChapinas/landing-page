import { Code, LayoutTemplate, Lightbulb, LineChart, Smartphone, Globe } from "lucide-react"
import "./styles/Services.css"

export default function Services() {
  const services = [
    {
      icon: <Lightbulb className="service-icon" />,
      title: "Asesorías y Consultorías",
      description: "Orientación estratégica para implementar soluciones tecnológicas que impulsen su negocio.",
    },
    {
      icon: <LayoutTemplate className="service-icon" />,
      title: "Páginas Web con Plantillas",
      description: "Sitios web profesionales y económicos utilizando plantillas personalizadas para su negocio.",
    },
    {
      icon: <Globe className="service-icon" />,
      title: "Páginas Web a Medida",
      description: "Desarrollo de sitios web completamente personalizados según sus necesidades específicas.",
    },
    {
      icon: <Code className="service-icon" />,
      title: "Software a Medida",
      description: "Aplicaciones y sistemas desarrollados específicamente para resolver sus desafíos empresariales.",
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Catálogos Web",
      description: "Exhiba sus productos en línea con catálogos web interactivos y fáciles de actualizar.",
    },
    {
      icon: <LineChart className="service-icon" />,
      title: "Mi Sitio GT",
      description: "Nuestra solución integral para negocios guatemaltecos que buscan establecer presencia digital.",
    },
  ]

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
  )
}


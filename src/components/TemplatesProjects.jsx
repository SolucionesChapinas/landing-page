"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import "./styles/TemplatesProjects.css"

// Datos de plantillas disponibles
const templates = [
  {
    id: 1,
    title: "Bufete de Abogados",
    category: "servicios",
    image: "/images/Plantillas/abogados-t-1.png?height=300&width=400",
    description: "Plantilla ideal para bufete de abogados y servicios legales.",
    price: "Q1,500",
    link: "https://solucioneschapinas.github.io/abogados-t-1/",
  },
  {
    id: 2,
    title: "Restaurante",
    category: "restaurante",
    image: "/images/Plantillas/restaurante-t-1.png?height=300&width=400",
    description: "Plantilla moderna para restaurantes con menú digital.",
    price: "Q2,500",
    link: "https://solucioneschapinas.github.io/restaurante-t-1/"
  },
  {
    id: 3,
    title: "Consultorio Médico",
    category: "salud",
    image: "/images/Plantillas/clinica-t-1.png?height=300&width=400",
    description: "Plantilla profesional para médicos y clínicas.",
    price: "Q1,300",
    link: "https://solucioneschapinas.github.io/clinica-medica-t-1/"
  },
  {
    id: 4,
    title: "Abogado",
    category: "servicios",
    image: "/images/Plantillas/abogados-g-1.png?height=300&width=400",
    description: "Plantilla web profesional para un abogado, ideal para mostrar servicios legales, perfil profesional y datos de contacto de forma clara y elegante.",
    price: "Q750",
    link: "https://solucioneschapinas.github.io/abogado-g-1/"
  },
];

// Datos de proyectos realizados
const projects = [
  
];

// Categorías para filtrado
const categories = [
  { value: "all", label: "Todas las categorías" },
  { value: "restaurante", label: "Restaurantes" },
  { value: "salud", label: "Salud y Bienestar" },
  { value: "servicios", label: "Servicios Profesionales" },
  { value: "turismo", label: "Turismo y Hospitalidad" },
];

export default function TemplatesProjects() {
  const [activeTab, setActiveTab] = useState("templates")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Filtrar plantillas o proyectos según la búsqueda y categoría
  const filterItems = (items) => {
    return items.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }

  const filteredTemplates = filterItems(templates)
  const filteredProjects = filterItems(projects)

  return (
    <section id="templates" className="templates-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nuestro Catálogo</div>
          <h2 className="section-title">Plantillas y Proyectos</h2>
          <p className="section-description">
            Explore nuestra colección de plantillas web y proyectos realizados
          </p>
        </div>

        <div className="templates-container">
          <div className="tabs">
            <div className="tabs-header">
              <div className="tabs-list">
                <button
                  className={`tab-button ${activeTab === "templates" ? "active" : ""}`}
                  onClick={() => setActiveTab("templates")}
                >
                  Plantillas Disponibles
                </button>
                <button
                  className={`tab-button ${activeTab === "projects" ? "active" : ""}`}
                  onClick={() => setActiveTab("projects")}
                >
                  Proyectos Realizados
                </button>
              </div>

              <div className="filters">
                <div className="search-container">
                  <Search className="search-icon" />
                  <input
                    type="search"
                    placeholder="Buscar..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="category-filter">
                  <select
                    className="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="tab-content">
              {activeTab === "templates" && (
                <>
                  {filteredTemplates.length > 0 ? (
                    <div className="templates-grid">
                      {filteredTemplates.map((template) => (
                        <div key={template.id} className="template-card">
                          <div className="card-image">
                            <img
                              src={template.image || "/placeholder.svg"}
                              alt={template.title}
                              className="card-image-img"
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-header">
                              <h3 className="card-title">{template.title}</h3>
                              <span className="card-badge">
                                {categories.find((c) => c.value === template.category)?.label || template.category}
                              </span>
                            </div>
                            <p className="card-description">{template.description}</p>
                            <p className="card-price">{template.price}</p>
                          </div>
                          <div className="card-footer">
                            <button
                              className="button outline sm"
                              onClick={() => window.open(template.link, '_blank')}
                            >
                              Ver Demo
                            </button>
                            <button className="button default sm">Más Información</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-results">
                      <p>No se encontraron plantillas que coincidan con tu búsqueda</p>
                    </div>
                  )}
                </>
              )}

              {activeTab === "projects" && (
                <>
                  {filteredProjects.length > 0 ? (
                    <div className="templates-grid">
                      {filteredProjects.map((project) => (
                        <div key={project.id} className="template-card">
                          <div className="card-image">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="card-image-img"
                            />
                          </div>
                          <div className="card-content">
                            <div className="card-header">
                              <h3 className="card-title">{project.title}</h3>
                              <span className="card-badge">
                                {categories.find((c) => c.value === project.category)?.label || project.category}
                              </span>
                            </div>
                            <p className="card-description">{project.description}</p>
                            <p className="card-client">
                              <span className="font-medium">Cliente:</span> {project.client}
                            </p>
                          </div>
                          <div className="card-footer">
                            <button className="button default full-width">Ver Proyecto</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-results">
                      <p>No se encontraron proyectos que coincidan con tu búsqueda</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

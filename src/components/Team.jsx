import "./styles/Team.css"

export default function Team() {
  const engineers = [
    {
      id: 1,
      name: "Ing. Gerson Pérez",
      role: "Cofundador de SCGT",
      image: "/thomas.JPG?height=300&width=300",
      description:
        "Especialista en arquitectura de software con más de 10 años de experiencia en desarrollo de soluciones empresariales.",
      skills: ["Desarrollo Web", "Arquitectura de Software", "Gestión de Proyectos"],
    },
    {
      id: 2,
      name: "Ing. Thomas Bollen",
      role: "Cofundador de SCGT",
      image: "/team/Thomas.JPG?height=300&width=300",
      description:
        "Experto en tecnologías web modernas y desarrollo de aplicaciones móviles con enfoque en experiencia de usuario.",
      skills: ["React", "Node.js", "UX/UI"],
    },
    {
      id: 3,
      name: "Ing. Alexander Bollen",
      role: "Cofundador de SCGT",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Administrador de bases de datos con amplia experiencia en optimización y seguridad de información empresarial.",
      skills: ["SQL", "MongoDB", "Seguridad de Datos"],
    },
    {
      id: 4,
      name: "Ing. José Az",
      role: "Cofundador de SCGT",
      image: "/team/jose-az.jpg?height=300&width=300",
      description:
        "Especialista en implementación de infraestructura y automatización de procesos de desarrollo y despliegue.",
      skills: ["AWS", "Docker", "CI/CD"],
    },
    {
      id: 5,
      name: "Arq. Adbeel Villegas",
      role: "Diseñador visual",
      image: "/team/adbeel.jpg?height=300&width=300",
      description:
        "Especialista en implementación de infraestructura y automatización de procesos de desarrollo y despliegue.",
      skills: ["AWS", "Docker", "CI/CD"],
    },
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nuestro Equipo</div>
          <h2 className="section-title">Ingenieros Expertos</h2>
          <p className="section-description">
            Contamos con un equipo de profesionales altamente calificados, comprometidos con ofrecer soluciones
            tecnológicas innovadoras y de calidad para empresas guatemaltecas.
          </p>
        </div>

        <div className="team-grid">
          {engineers.map((engineer) => (
            <div key={engineer.id} className="team-card">
              <div className="team-image-container">
                <img src={engineer.image || "/placeholder.svg"} alt={engineer.name} className="team-image" />
              </div>
              <div className="team-content">
                <h3 className="team-name">{engineer.name}</h3>
                <p className="team-role">{engineer.role}</p>
                <p className="team-description">{engineer.description}</p>
                <div className="team-skills">
                  {engineer.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

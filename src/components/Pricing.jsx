import { Check, ArrowRight, Star, Settings } from "lucide-react"
import "./styles/Pricing.css"

export default function Pricing() {
    // Datos de los planes
    const plans = [
        {
            id: "basic",
            name: "Plan Básico",
            price: "Q750",
            period: "/ año",
            description: "Ideal para pequeños negocios que buscan establecer su presencia en línea",
            features: [
                "Diseño responsivo básico",
                "Dominio por 1 año",
                "Hosting incluido",
                "Integración con redes sociales",
                "Formulario de contacto simple"
            ],
            cta: "Elegir Plan Básico",
            recommended: false,
        },
        {
            id: "premium",
            name: "Plan Premium",
            price: "Q1,500",
            period: "/ año",
            description: "Perfecto para empresas que buscan destacar con un diseño moderno y funcionalidades avanzadas",
            features: [
                "Diseño premium y moderno",
                "Dominio por 1 año",
                "Hosting de alta velocidad",
                "Integración avanzada con redes sociales",
                "Formulario de contacto personalizado"
            ],
            cta: "Elegir Plan Premium",
            recommended: true,
        },
        {
            id: "custom",
            name: "Plan Personalizado",
            price: null,
            period: "",
            description: "Solución a medida para empresas con necesidades específicas",
            features: [
                "Diseño totalmente personalizado",
                "Dominio personalizado por 1 año",
                "Hosting de alta velocidad",
                "Integraciones avanzadas",
                "Funcionalidades a medida"
            ],
            cta: "Solicitar Cotización",
            recommended: false,
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById("contacto");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="precios" className="pricing-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Nuestros Planes</div>
                    <h2 className="section-title">Elija el plan perfecto para tu negocio</h2>
                    <p className="section-description">
                        Ofrecemos soluciones a precios competitivos para empresas de todos los tamaños
                        <br />
                        Todos nuestros planes incluyen soporte técnico
                    </p>
                </div>

                <div className="pricing-container">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`pricing-card ${plan.recommended ? "recommended" : ""} ${plan.id === "custom" ? "custom" : ""}`}
                        >
                            {plan.recommended && (
                                <div className="pricing-badge recommended-badge">
                                    <Star className="badge-icon" />
                                    <span>Recomendado</span>
                                </div>
                            )}

                            {plan.id === "custom" && (
                                <div className="pricing-badge custom-badge">
                                    <Settings className="badge-icon" />
                                    <span>Personalizable</span>
                                </div>
                            )}

                            <div className="pricing-header">
                                <h3 className="pricing-name">{plan.name}</h3>
                                <div className="pricing-amount">
                                    {plan.price ? (
                                        <>
                                            <div className="starting-price">
                                                <span>Desde</span>
                                            </div>
                                            <span className="amount">{plan.price}</span>
                                            <span className="period">{plan.period}</span>
                                        </>
                                    ) : (
                                        <span className="custom-price">Precio personalizado</span>
                                    )}
                                </div>
                                <p className="pricing-description">{plan.description}</p>
                            </div>

                            <div className="pricing-features">
                                <h4 className="features-title">Características incluidas:</h4>
                                <ul className="feature-list">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="feature-item">
                                            <Check className="feature-icon" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pricing-actions">
                                {plan.id === "custom" ? (
                                    <a onClick={scrollToContact} className="button custom full-width">
                                        {plan.cta}
                                        <ArrowRight className="button-icon" />
                                    </a>
                                ) : (
                                    <>
                                        <a href="#projects" className="button outline-prices full-width">
                                            Más información
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

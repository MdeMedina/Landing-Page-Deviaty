"use client";

import { motion } from "framer-motion";
import styles from "./Features.module.css";
import { MessageSquare, CalendarCheck, Sparkles, Filter, Workflow, Stethoscope } from "lucide-react";

const features = [
    {
        icon: <MessageSquare size={28} />,
        title: "Omnicanalidad nativa",
        description: "Conecta la IA con WhatsApp, Instagram, Facebook y Web en un solo lugar. Nunca más dejes un mensaje en visto.",
        status: "Live 24/7"
    },
    {
        icon: <CalendarCheck size={28} />,
        title: "Agendamiento Inteligente",
        description: "El agente consulta en tiempo real tu disponibilidad y reserva las citas sin colisiones en tu software actual.",
        status: "Sync"
    },
    {
        icon: <Filter size={28} />,
        title: "Calificación de Leads",
        description: "Detecta pacientes de alto valor y urgencias, priorizando su atención para maximizar los ingresos de la clínica.",
        status: "AI Powered"
    },
    {
        icon: <Sparkles size={28} />,
        title: "Campañas de Recuperación",
        description: "Reactiva tu base de datos automatizando mensajes personalizados para recordatorios de higiene y controles anuales."
    },
    {
        icon: <Stethoscope size={28} />,
        title: "Conocimiento Médico",
        description: "Nuestros agentes entienden terminología odontológica, explicando de forma precisa pero amigable los tratamientos a los pacientes."
    },
    {
        icon: <Workflow size={28} />,
        title: "Sincronización Total",
        description: "Integraciones listas con los principales sistemas de gestión de agendas médicas y odontológicas.",
        status: "Cloud"
    }
];

export default function FeaturesGrid() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-2">
                        Cómo logramos hacerte crecer con <span className="text-gradient">soluciones diseñadas para tu clínica.</span>
                    </h2>
                    <p className="text-lead">
                        Funcionalidades diseñadas específicamente para el ecosistema de las clínicas dentales modernas.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <motion.div
                                    className={styles.iconBox}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                >
                                    {feature.icon}
                                </motion.div>
                                {feature.status && (
                                    <span className={styles.statusBadge}>
                                        <span className={styles.statusDot} />
                                        {feature.status}
                                    </span>
                                )}
                            </div>
                            <h3 className="heading-3">{feature.title}</h3>
                            <p className={styles.description}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

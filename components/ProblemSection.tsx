"use client";

import { motion } from "framer-motion";
import styles from "./Problem.module.css";
import { PhoneOff, CalendarX, TrendingDown } from "lucide-react";

const problems = [
    {
        icon: <PhoneOff size={32} />,
        title: "Pacientes sin respuesta",
        description: "El 40% de los leads que contactan fuera del horario comercial nunca reciben respuesta, perdiéndose para siempre."
    },
    {
        icon: <CalendarX size={32} />,
        title: "Agendas mal gestionadas",
        description: "Citas canceladas a última hora que no se logran re-agendar, dejando sillones vacíos y perdiendo dinero."
    },
    {
        icon: <TrendingDown size={32} />,
        title: "Pérdida de pacientes inactivos",
        description: "Pacientes antiguos que no regresan para sus limpiezas o controles porque nadie les hace seguimiento automatizado."
    }
];

export default function ProblemSection() {
    return (
        <section className="section-padding" id="problema">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-2">
                        ¿Pierdes oportunidades por <span className="text-gradient">falta de seguimiento?</span>
                    </h2>
                    <p className="text-lead">
                        La gestión manual en las clínicas dentales limita tu crecimiento. Tu equipo no puede estar disponible 24/7 para responder dudas, agendar y confirmar citas.
                    </p>
                </div>

                <div className={styles.grid}>
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {prob.icon}
                            </div>
                            <h3 className="heading-3">{prob.title}</h3>
                            <p className={styles.description}>{prob.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import styles from "./ProductExplanation.module.css";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Responde dudas sobre limpiezas, evaluaciones y tratamientos y más",
    "Detecta pacientes que quieren agendar una hora",
    "Gestiona solicitudes de cita automáticamente",
    "Deriva consultas clínicas al equipo humano",
];

export default function ProductExplanation() {
    return (
        <section className={`section-padding bg-gradient-soft`} id="beneficios">
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Abstract representation of the AI Agent working */}
                    <div className={styles.agentCard}>
                        <div className={styles.agentHeader}>
                            <div className={styles.avatar}>D</div>
                            <div>
                                <h4 className={styles.agentName}>Deviaty AI</h4>
                                <p className={styles.agentStatus}>En línea y atendiendo pacientes</p>
                            </div>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>&lt;5s</span>
                                <span className={styles.statLabel}>Tiempo Rpta.</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>24/7</span>
                                <span className={styles.statLabel}>Atención</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>&infin;</span>
                                <span className={styles.statLabel}>Pacientes</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div>
                        <span className="eyebrow" style={{ display: "inline-block", marginBottom: "1rem", color: "var(--color-accent)", fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>AGENTE IA PARA CLÍNICAS</span>
                        <h2 className="heading-2">
                            Automatiza la <span className={styles.highlight}>atención de pacientes</span> en tu clínica
                        </h2>
                    </div>
                    <p className="text-lead" style={{ maxWidth: "600px", color: "var(--color-text-muted)" }}>
                        Un agente de inteligencia artificial entrenado para responder pacientes, resolver dudas sobre tratamientos y ayudar a gestionar citas en clínicas dentales.
                    </p>

                    <ul className={styles.list}>
                        {benefits.map((benefit, index) => (
                            <li key={index} className={styles.listItem}>
                                <CheckCircle2 className={styles.checkIcon} size={28} />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

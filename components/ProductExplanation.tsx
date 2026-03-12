"use client";

import { motion } from "framer-motion";
import styles from "./ProductExplanation.module.css";
import { CheckCircle2 } from "lucide-react";

const benefits = [
    "Respuestas instantáneas 24/7 en WhatsApp e Instagram.",
    "Integración profunda con tu software de gestión actual.",
    "Reactivación proactiva de bases de datos antiguas.",
    "Agendamiento automático sin intervención humana.",
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
                    <div className={`glass-card ${styles.agentCard}`}>
                        <div className={styles.agentHeader}>
                            <div className={styles.avatar}>D</div>
                            <div>
                                <h4 className={styles.agentName}>IA Deviaty</h4>
                                <p className={styles.agentStatus}>En línea y convirtiendo leads</p>
                            </div>
                        </div>
                        <div className={styles.statsGrid}>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>+45%</span>
                                <span className={styles.statLabel}>Conversión</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>1m</span>
                                <span className={styles.statLabel}>Tiempo Rpta.</span>
                            </div>
                            <div className={styles.statBox}>
                                <span className={styles.statValue}>24/7</span>
                                <span className={styles.statLabel}>Atención</span>
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
                    <h2 className="heading-2">
                        La solución definitiva para <span className="text-gradient">la atención al paciente</span>
                    </h2>
                    <p className="text-lead">
                        Nuestros agentes de Inteligencia Artificial están entrenados específicamente para el sector odontológico. Entienden los tratamientos, responden dudas frecuentes y guían al paciente hasta confirmar su cita.
                    </p>

                    <ul className={styles.list}>
                        {benefits.map((benefit, index) => (
                            <li key={index} className={styles.listItem}>
                                <CheckCircle2 className={styles.checkIcon} size={24} />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}

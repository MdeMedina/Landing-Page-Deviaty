"use client";

import { motion } from "framer-motion";
import styles from "./ProductExplanation.module.css";
import { CheckCircle2, Zap, Clock, Infinity as InfinityIcon } from "lucide-react";

const benefits = [
    "Responde dudas sobre limpiezas, evaluaciones y tratamientos y más",
    "Detecta pacientes que quieren agendar una hora",
    "Gestiona solicitudes de cita automáticamente",
    "Deriva consultas clínicas al equipo humano",
];

export default function ProductExplanation() {
    return (
        <section className={styles.section} id="beneficios">
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.glow} aria-hidden="true" />
                    {/* Abstract representation of the AI Agent working */}
                    <div className={styles.agentCard}>
                        <div className={styles.agentHeader}>
                            <div className={styles.avatar}>D</div>
                            <div>
                                <h4 className={styles.agentName}>Deviaty AI</h4>
                                <p className={styles.agentStatus}>En línea y atendiendo pacientes</p>
                            </div>
                        </div>

                        <div className={styles.agentStatusBlock}>
                            <h5 className={styles.statusTitle}>Estado del agente</h5>
                            <div className={styles.statusGrid}>
                                {[
                                    "IA activa",
                                    "Agenda conectada",
                                    "Derivación a humano habilitada"
                                ].map((status, i) => (
                                    <div key={i} className={styles.statusItem}>
                                        <div className={styles.statusCheckDot} />
                                        <span>{status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.separator} />

                        <div className={styles.agentCapabilities}>
                            <h5 className={styles.capTitle}>Capacidades del agente</h5>

                            <div className={styles.capList}>
                                <div className={styles.capItem}>
                                    <div className={styles.capIconWrapper}>
                                        <Zap size={20} className={styles.capIcon} />
                                    </div>
                                    <div className={styles.capContent}>
                                        <span className={styles.capLabel}>Respuesta instantánea</span>
                                        <span className={styles.capValue}>&lt;5 segundos</span>
                                    </div>
                                </div>

                                <div className={styles.capItem}>
                                    <div className={styles.capIconWrapper}>
                                        <Clock size={20} className={styles.capIcon} />
                                    </div>
                                    <div className={styles.capContent}>
                                        <span className={styles.capLabel}>Atención continua</span>
                                        <span className={styles.capValue}>Disponible 24/7</span>
                                    </div>
                                </div>

                                <div className={styles.capItem}>
                                    <div className={styles.capIconWrapper}>
                                        <InfinityIcon size={20} className={styles.capIcon} />
                                    </div>
                                    <div className={styles.capContent}>
                                        <span className={styles.capLabel}>Atención simultánea</span>
                                        <span className={styles.capValue}>Múltiples pacientes</span>
                                    </div>
                                </div>
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
                            Automatiza la <span className={styles.highlight}>atención de pacientes en tu clínica</span>
                        </h2>
                    </div>
                    <p className="text-lead" style={{ maxWidth: "600px", color: "var(--color-text-muted)" }}>
                        Un agente de inteligencia artificial entrenado para responder a tus pacientes, resolver dudas sobre tratamientos y ayudar a gestionar citas en clínicas dentales.
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

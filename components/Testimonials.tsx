"use client";

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="section-padding" id="testimonios">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-2">
                        Resultados comprobados en <span className="text-gradient">Clínicas Piloto</span>
                    </h2>
                    <p className="text-lead">
                        No solo vendemos software, entregamos pacientes en tu sillón dental.
                    </p>
                </div>

                <div className={styles.grid}>
                    <motion.div
                        className={`glass-card ${styles.card}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={20} fill="var(--color-accent)" color="var(--color-accent)" />
                            ))}
                        </div>
                        <p className={styles.quote}>
                            "Antes perdíamos decenas de pacientes los fines de semana porque nadie respondía el WhatsApp. Desde que instalamos Deviaty, el agente agenda citas automáticamente el domingo en la noche. Hemos aumentado nuestra facturación un 30%."
                        </p>
                        <div className={styles.author}>
                            <div className={styles.avatarWrapper}>
                                <div className={styles.avatar}>D</div>
                            </div>
                            <div className={styles.authorInfo}>
                                <strong>Dra. María Fernández</strong>
                                <span>Directora, Clínica OdontoSalud</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results Card */}
                    <motion.div
                        className={`glass-card ${styles.resultsCard}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="heading-3">Impacto Promedio en 30 Días</h3>
                        <div className={styles.statsList}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>-85%</span>
                                <span className={styles.statText}>Tiempo de respuesta a leads</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+40%</span>
                                <span className={styles.statText}>Citas confirmadas mensualmente</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>15hr</span>
                                <span className={styles.statText}>Ahorradas por semana en tareas manuales</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";

export default function Hero() {
    return (
        <section className={`${styles.hero} ${styles.sectionPadding}`} id="inicio">
            <div className={`container ${styles.container}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className={styles.badge}>
                        <Bot size={18} className={styles.badgeIcon} />
                        <span>IA especializada para clínicas dentales</span>
                    </div>

                    <h1 className="heading-1">
                        Agentes de IA diseñados para <span className="text-gradient">escalar tu Clínica Dental</span>
                    </h1>

                    <p className="text-lead">
                        Automatiza tu atención al paciente. Convierte más leads, recupera pacientes inactivos y optimiza tu agenda 24/7 sin esfuerzo humano adicional.
                    </p>

                    <div className={styles.actions}>
                        <Link href="#demo" className={`btn btn-primary ${styles.ctaPrimary}`}>
                            Agenda una Demo <ArrowRight size={20} />
                        </Link>
                        <Link href="#como-funciona" className={`btn ${styles.ctaSecondary}`}>
                            Ver Cómo Funciona
                        </Link>
                    </div>
                </motion.div>

                {/* We can place an abstract illustrative graphic or a mockup image here */}
                <motion.div
                    className={styles.visuals}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="glass-card">
                        <div className={styles.mockupHeader}>
                            <div className={styles.dot} style={{ background: '#ff5f56' }} />
                            <div className={styles.dot} style={{ background: '#ffbd2e' }} />
                            <div className={styles.dot} style={{ background: '#27c93f' }} />
                            <div className={styles.mockupTitle}>Deviaty Agent v1.0</div>
                        </div>
                        <div className={styles.mockupBody}>
                            <div className={styles.chatMessage}>
                                <strong>Paciente:</strong> Hola, quiero agendar una limpieza para esta semana.
                            </div>
                            <div className={`${styles.chatMessage} ${styles.chatAgent}`}>
                                <div className={styles.agentInfo}>
                                    <strong>Agente Deviaty</strong>
                                    <span className={styles.aiBadge}>IA</span>
                                </div>
                                ¡Hola! Claro, tengo disponibilidad el Jueves a las 10:00 AM o a las 16:00 PM. ¿Cuál prefieres?
                            </div>
                            <div className={styles.chatMessage}>
                                <strong>Paciente:</strong> El jueves a las 16:00 PM me va perfecto.
                            </div>
                            <div className={`${styles.chatMessage} ${styles.chatSystem}`}>
                                Confirmando con el sistema de la clínica...
                            </div>
                            <motion.div
                                className={`${styles.chatMessage} ${styles.chatAgent}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                            >
                                ¡Listo! Cita agendada para el Jueves 14 a las 16:00 PM. Te enviamos el recordatorio por WhatsApp.
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className={styles.backgroundBlur}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";
import { Settings, BrainCircuit, Bot, CalendarCheck } from "lucide-react";

const steps = [
    {
        icon: <Settings size={28} strokeWidth={1.5} />,
        title: "Configuración de la clínica",
        description: "Se cargan horarios, tratamientos y reglas de atención."
    },
    {
        icon: <BrainCircuit size={28} strokeWidth={1.5} />,
        title: "Entrenamiento del agente",
        description: "El sistema aprende cómo responde la clínica a sus pacientes."
    },
    {
        icon: <Bot size={28} strokeWidth={1.5} />,
        title: "Atención automática",
        description: "El agente responde consultas y detecta intención de agendamiento."
    },
    {
        icon: <CalendarCheck size={28} strokeWidth={1.5} />,
        title: "Agenda y seguimiento",
        description: "Las citas se registran y el sistema puede enviar recordatorios o contactar pacientes."
    }
];

export default function HowItWorks() {
    return (
        <section className={`section-padding ${styles.section}`} id="como-funciona">
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className="heading-2">
                        Implementación simple. <span className={styles.titleGradient}>Resultados inmediatos.</span>
                    </h2>
                    <p className={`text-lead ${styles.subtitle}`}>
                        Conectamos el agente a tu clínica y comienza a atender pacientes automáticamente.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.iconContainer}>
                                {step.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.description}>{step.description}</p>
                            </div>
                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div className={styles.connector}></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

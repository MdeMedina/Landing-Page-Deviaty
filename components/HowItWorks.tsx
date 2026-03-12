"use client";

import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";
import { UserPlus, Bot, Calendar, HeartPulse } from "lucide-react";

const steps = [
    {
        icon: <UserPlus size={24} />,
        title: "1. El paciente contacta",
        description: "Un nuevo paciente o lead escribe por WhatsApp, Instagram, o tu sitio web buscando información."
    },
    {
        icon: <Bot size={24} />,
        title: "2. Deviaty responde",
        description: "En menos de 1 minuto, nuestra IA perfila sus intenciones, resuelve dudas y le ofrece horarios."
    },
    {
        icon: <Calendar size={24} />,
        title: "3. Cita confirmada",
        description: "La IA agenda directamente en tu software actual y envía recordatorios antes de la visita."
    },
    {
        icon: <HeartPulse size={24} />,
        title: "4. Fidelización",
        description: "A los 6 meses, la IA proactivamente contacta al paciente para su chequeo o limpieza regular."
    }
];

export default function HowItWorks() {
    return (
        <section className="section-padding bg-gradient-soft" id="como-funciona">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-2">
                        El flujo perfecto de <span className="text-gradient">adquisición y retención</span>
                    </h2>
                    <p className="text-lead">
                        Automatizamos todo el viaje del paciente, desde que pregunta hasta que regresa el próximo año.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className={styles.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className={styles.iconContainer}>
                                {step.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className="heading-3">{step.title}</h3>
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

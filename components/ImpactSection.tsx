"use client";

import { motion } from "framer-motion";
import styles from "./ImpactSection.module.css";
import Link from "next/link";
import { TrendingUp, UserCheck, CalendarDays, Rocket } from "lucide-react";

const metrics = [
    {
        value: "100%",
        title: "Captura de Pacientes",
        description: "AmalIA atrapa y agenda a todos los pacientes que escriben fuera de horario o en fines de semana.",
        icon: <UserCheck size={24} />
    },
    {
        value: "-50.7%",
        title: "Inasistencias",
        description: "Caída radical en los 'no-shows' mediante predicción y reasignación dinámica de sillones vacíos.",
        icon: <CalendarDays size={24} />
    },
    {
        value: "+25%",
        title: "Conversiones",
        description: "Incremento directo en el cierre de tratamientos al identificar la intención de compra real.",
        icon: <TrendingUp size={24} />
    },
    {
        value: "10x",
        title: "Retorno (ROI)",
        description: "Por cada dólar invertivo, la clínica obtiene diez dólares en valor de tratamientos agendados.",
        icon: <Rocket size={24} />
    }
];

export default function ImpactSection() {
    return (
        <section className="section-padding" id="impacto">
            <div className="container">
                <div className={styles.header}>
                    <h2 className="heading-2">
                        Deja de perder dinero por <span className="text-gradient">inasistencias o mala gestión</span>
                    </h2>
                    <p className="text-lead">
                        AmalIA optimiza tu flujo de caja automatizando la captura de leads y el agendamiento inteligente 24/7.
                    </p>
                </div>

                <div className={styles.grid}>
                    {metrics.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card ${styles.card}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>{item.icon}</div>
                            </div>
                            <div className={styles.value}>{item.value}</div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>

                            {/* Subtle background glow for the number */}
                            <div className={styles.numberGlow} />
                        </motion.div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <Link href="#demo" className={`btn btn-primary ${styles.ctaButton}`}>
                        Calcular mi ROI / Solicitar Demostración
                    </Link>
                </div>
            </div>
        </section>
    );
}

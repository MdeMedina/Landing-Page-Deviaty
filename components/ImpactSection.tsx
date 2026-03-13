"use client";

import { motion } from "framer-motion";
import styles from "./ImpactSection.module.css";
import Link from "next/link";
import { TrendingUp, UserCheck, CalendarDays, Rocket } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ value, duration = 2 }: { value: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract number and suffix (e.g., "100" and "%", "-50.7" and "%")
    const numericPart = parseFloat(value.replace(/[^0-9.-]/g, ""));
    const suffix = value.replace(/[0-9.-]/g, "");
    const prefix = value.startsWith("-") ? "-" : value.startsWith("+") ? "+" : "";
    const absoluteValue = Math.abs(numericPart);

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = absoluteValue;
            const totalSteps = 60;
            const increment = end / totalSteps;
            const stepTime = (duration * 1000) / totalSteps;

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, absoluteValue, duration]);

    const displayValue = Number.isInteger(absoluteValue) ? Math.floor(count) : count.toFixed(1);

    return (
        <span ref={ref}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}

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
        description: "Por cada dólar invertido, la clínica obtiene diez dólares en valor de tratamientos agendados.",
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
                            <div className={`text-gradient ${styles.value}`}>
                                <Counter value={item.value} />
                            </div>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>

                            <motion.div
                                className={styles.numberGlow}
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.08, 0.12, 0.08]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                className={styles.backgroundBlur}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
        </section>
    );
}

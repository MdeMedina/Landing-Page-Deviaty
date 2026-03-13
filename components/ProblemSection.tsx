"use client";

import { motion } from "framer-motion";
import styles from "./Problem.module.css";
import { MessageSquareOff, Users, CalendarClock, UserMinus } from "lucide-react";

const problems = [
    {
        icon: <MessageSquareOff size={32} strokeWidth={1.5} />,
        title: "Pacientes sin respuesta",
        description: "Pacientes que escriben fuera de horario o en momentos de alta demanda no reciben respuesta."
    },
    {
        icon: <Users size={32} strokeWidth={1.5} />,
        title: "Recepción saturada",
        description: "El equipo debe atender pacientes en sala, responder llamadas y revisar mensajes al mismo tiempo."
    },
    {
        icon: <CalendarClock size={32} strokeWidth={1.5} />,
        title: "Citas sin seguimiento",
        description: "Cancelaciones y solicitudes pendientes no siempre se retoman a tiempo."
    },
    {
        icon: <UserMinus size={32} strokeWidth={1.5} />,
        title: "Pacientes inactivos",
        description: "Pacientes antiguos no vuelven para controles o limpiezas porque no existe seguimiento automatizado."
    }
];

export default function ProblemSection() {
    return (
        <section className="section-padding" id="problema">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={`heading-2 ${styles.title}`}>
                        Las clínicas pierden pacientes cuando no responden <span className={styles.highlight}>a tiempo</span>
                    </h2>
                    <p className={`text-lead ${styles.subtitle}`}>
                        La gestión manual dificulta responder consultas, dar seguimiento a pacientes y recuperar citas perdidas.
                    </p>
                </div>

                <div className={styles.grid}>
                    {problems.map((prob, index) => (
                        <motion.div
                            key={index}
                            className={styles.listItem}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                {prob.icon}
                            </div>
                            <div className={styles.contentWrapper}>
                                <h3 className={styles.itemTitle}>{prob.title}</h3>
                                <p className={styles.itemDescription}>{prob.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

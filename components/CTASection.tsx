"use client";

import { motion } from "framer-motion";
import styles from "./CTASection.module.css";
import Link from "next/link";
import { CalendarClock } from "lucide-react";

export default function CTASection() {
    return (
        <section className={`section-padding ${styles.ctaSection}`} id="demo">
            <div className="container">
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.iconWrapper}>
                        <CalendarClock size={40} />
                    </div>
                    <h2 className="heading-2" style={{ color: 'white' }}>
                        Transforma la atención de tu clínica hoy
                    </h2>
                    <p className={styles.leadText}>
                        Comienza a convertir más pacientes, automatizar tu agenda y liberar tiempo para tu equipo. Agenda una demostración de 15 minutos con nuestros especialistas.
                    </p>
                    <Link href="mailto:contacto@deviaty.com" className={`btn ${styles.ctaButton}`}>
                        Reservar Reunión / Demo
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import styles from "./CTASection.module.css";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className={`section-padding ${styles.ctaSection}`} id="demo">
            <div className="container">
                <div className={styles.glowBackground}></div>
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badge}>AGENTE IA PARA CLÍNICAS</span>
                    <h2 className={`heading-2 ${styles.title}`}>
                        Haz que tu clínica responda<br />incluso cuando está cerrada
                    </h2>
                    <p className={styles.leadText}>
                        Descubre cómo Deviaty puede responder consultas, gestionar citas y aliviar la carga de tu recepción en una demostración de 15 minutos.
                    </p>
                    <div className={styles.actionWrapper}>
                        <Link href="mailto:contacto@deviaty.com" className={`btn ${styles.ctaButton}`}>
                            Probar ahora
                        </Link>
                        <p className={styles.trustLine}>
                            Implementación simple · Adaptado a tu clínica · Sin conocimientos técnicos
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

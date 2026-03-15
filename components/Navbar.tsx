"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Navbar() {
    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className={`container ${styles.navbar}`}>
                {/* Lado Izquierdo: Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoContainer}>
                        <Image 
                            src="/logo.png" 
                            alt="Deviaty Logo" 
                            width={140} 
                            height={40} 
                            className={styles.logoImage}
                            // Adding a fallback if image fails to load
                            onError={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    const fallback = parent.querySelector(`.${styles.logoFallback}`);
                                    if (fallback) (fallback as HTMLElement).style.display = 'block';
                                }
                            }}
                        />
                        <div className={styles.logoFallback} style={{ display: 'none' }}>
                            <span className={styles.logotextMain}>De</span>
                            <span className={styles.logotextAccent}>Viaty</span>
                        </div>
                    </div>
                </Link>

                {/* Centro: Enlaces de Navegación */}
                <nav className={styles.nav}>
                    <Link href="#beneficios" className={styles.navlink}>
                        Funcionalidades
                    </Link>
                    <Link href="#como-funciona" className={styles.navlink}>
                        Implementación
                    </Link>
                    <Link href="#impacto" className={styles.navlink}>
                        Beneficios
                    </Link>
                    <Link href="#faq" className={styles.navlink}>
                        FAQ
                    </Link>
                    <Link href="#demo" className={styles.navlink}>
                        Demo
                    </Link>
                </nav>

                {/* Lado Derecho: Redes y Botón */}
                <div className={styles.rightSection}>
                    <div className={styles.socialLinks}>
                        <Link href="#" className={styles.socialIcon} aria-label="Instagram">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="WhatsApp">
                            <MessageCircle size={18} />
                        </Link>
                    </div>
                    <Link href="#demo" className={`btn btn-primary ${styles.cta}`}>
                        Probar
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}

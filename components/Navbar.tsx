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
                        <Link href="https://www.instagram.com/deviaty_ai/" className={styles.socialIcon} aria-label="Instagram">
                            <Instagram size={18} />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </Link>
                        <Link href="#" className={styles.socialIcon} aria-label="WhatsApp">
                            <svg
                                viewBox="0 0 24 24"
                                width="18"
                                height="18"
                                style={{ display: 'block' }}
                            >
                                <path
                                    fill="white"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.9 4.1C17.8 2 15 .9 12 .9 5.8.9.8 5.9.8 12.1c0 2 .5 3.9 1.5 5.6L.8 23.2l5.7-1.5c1.7.9 3.5 1.4 5.5 1.4 6.2 0 11.2-5 11.2-11.2 0-3-1.2-5.8-3.3-7.8z"
                                />
                                <path
                                    fill="currentColor"
                                    stroke="none"
                                    d="M16.75 13.96c-.25-.13-1.5-.74-1.73-.82-.23-.08-.4-.13-.57.13-.17.26-.65.82-.8.99-.15.17-.3.19-.55.06-1.54-.74-2.77-1.59-4.04-3.08-.28-.33-.03-.31.22-.81.12-.24.25-.5.37-.76.12-.26.06-.5-.06-.75-.12-.25-.57-1.39-.78-1.9-.2-.5-.41-.43-.57-.44-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.19 1.95 3.1 4.75 4.19 1.95.76 2.63.84 3.32.74.8-.12 1.5-.61 1.72-1.2.22-.59.22-1.1.15-1.2-.07-.1-.23-.15-.48-.28z"
                                />
                            </svg>
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

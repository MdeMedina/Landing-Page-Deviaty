"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <Link href="/" className={styles.logoLink} aria-label="Volver al inicio">
                        <div className={styles.logoContainer}>
                            <Image
                                src="/logo.png"
                                alt="Deviaty Logo"
                                width={140}
                                height={40}
                                className={styles.logoImage}
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
                    <p className={styles.description}>
                        Agentes de Inteligencia Artificial especializados en automatizar y escalar clínicas dentales. Entregamos pacientes listos en tu sillón.
                    </p>
                    <div className={styles.social}>
                        <Link href="#" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                <div className={styles.linksBlock}>
                    <h4 className={styles.heading}>Producto</h4>
                    <ul className={styles.list}>
                        <li><Link href="#beneficios">Funcionalidades</Link></li>
                        <li><Link href="#como-funciona">Implementación</Link></li>
                        <li><Link href="#impacto">Beneficios</Link></li>
                        <li><Link href="#faq">FAQ</Link></li>
                        <li><Link href="#demo">Demo</Link></li>
                    </ul>
                </div>

                <div className={styles.linksBlock}>
                    <h4 className={styles.heading}>Empresa</h4>
                    <ul className={styles.list}>
                        <li><Link href="#">Sobre Nosotros</Link></li>
                        <li><Link href="#">Términos y Condiciones</Link></li>
                        <li><Link href="#">Política de Privacidad</Link></li>
                    </ul>
                </div>

                <div className={styles.linksBlock}>
                    <h4 className={styles.heading}>Contacto</h4>
                    <ul className={styles.list}>
                        <li className={styles.contactItem}><Mail size={16} /> deviaty.tech@gmail.com</li>
                        <li className={styles.contactItem}><MapPin size={16} /> Providencia, Santiago, Chile</li>
                        {/* Can remove location if it's worldwide but it adds trust */}
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className="container" style={{ textAlign: "center", color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
                    <p>&copy; {new Date().getFullYear()} Deviaty AI. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

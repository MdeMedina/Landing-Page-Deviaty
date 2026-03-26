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
                        <Link href="https://www.instagram.com/deviaty_ai/" aria-label="Instagram">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="#" aria-label="WhatsApp">
                            <svg
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
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

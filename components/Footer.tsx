import Link from "next/link";
import styles from "./Footer.module.css";
import { Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <div className={styles.logo}>Deviaty</div>
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
                        <li><Link href="#como-funciona">Cómo Funciona</Link></li>
                        <li><Link href="#beneficios">Beneficios</Link></li>
                        <li><Link href="#testimonios">Casos de Éxito</Link></li>
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
                        <li className={styles.contactItem}><Mail size={16} /> contacto@deviaty.com</li>
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

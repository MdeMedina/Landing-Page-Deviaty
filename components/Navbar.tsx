"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
    return (
        <motion.header
            className={styles.header}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <div className={`container ${styles.navbar}`}>
                <Link href="/" className={styles.logo}>
                    {/* We'll use absolute path assuming logo is in public folder or just text if not available */}
                    <span className={styles.logotext}>Deviaty</span>
                </Link>
                <nav className={styles.nav}>
                    <Link href="#como-funciona" className={styles.navlink}>
                        Cómo Funciona
                    </Link>
                    <Link href="#beneficios" className={styles.navlink}>
                        Beneficios
                    </Link>
                </nav>
                <Link href="#demo" className={`btn btn-primary ${styles.cta}`}>
                    Agenda una Demo
                </Link>
            </div>
        </motion.header>
    );
}

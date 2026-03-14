"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./FAQSection.module.css";

const faqs = [
    {
        question: "¿Es difícil de instalar?",
        answer: "No. La implementación es muy sencilla. Nuestro equipo se encarga de configurar el agente, conectarlo a tus canales y adaptarlo al flujo de tu clínica sin necesidad de conocimientos técnicos."
    },
    {
        question: "¿Se puede adaptar a mi clínica?",
        answer: "Sí. El agente se entrena con los horarios, tratamientos, reglas de atención y forma de trabajo de tu clínica para responder de manera coherente con tu operación real."
    },
    {
        question: "¿Qué pasa si el paciente hace una pregunta compleja?",
        answer: "Cuando una consulta requiere intervención humana o criterio clínico, el sistema deriva la conversación al equipo de la clínica para que continúe la atención."
    },
    {
        question: "¿El sistema reemplaza a la recepción?",
        answer: "No. Deviaty no reemplaza a la recepción; la potencia. Se encarga de consultas repetitivas y tareas automatizables para que tu equipo se enfoque en la atención presencial y en los casos que requieren criterio humano."
    },
    {
        question: "¿Cómo se entrena el agente?",
        answer: "El agente se configura con la información clave de la clínica, como horarios, tratamientos, reglas de atención y preguntas frecuentes. A partir de eso, se ajusta para responder con coherencia y alineado a la operación real."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`section-padding ${styles.section}`} id="faq">
            <div className={styles.backgroundBlob} />
            <div className="container">
                <div className={styles.header}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.eyebrow}>ANTES DE PROBARLO</span>
                        <h2 className={`heading-2 ${styles.title}`}>
                            Preguntas <span className="text-gradient">Frecuentes</span>
                        </h2>
                        <p className={`text-lead ${styles.subtitle}`}>
                            Todo lo que necesitas saber antes de implementar Deviaty en tu clínica.
                        </p>
                    </motion.div>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={styles.faqItem}
                                data-open={isOpen}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <button
                                    className={styles.faqQuestion}
                                    onClick={() => toggleFaq(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <div className={styles.iconWrapper}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className={styles.faqAnswerContent}>
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

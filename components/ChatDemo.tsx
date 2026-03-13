"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "./ChatDemo.module.css";
import { Send, User, ChevronRight, MessageSquareCheck } from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "ai";
    time: string;
}

const QUICK_ACTIONS = [
    "Agendar limpieza dental",
    "Cancelar mi cita de mañana",
    "Consultar por ortodoncia"
];

const INITIAL_MESSAGES: Message[] = [
    {
        id: 1,
        text: "¡Hola! Soy AmalIA, tu asistente dental inteligente. ¿En qué puedo ayudarte hoy?",
        sender: "ai",
        time: "10:00 AM"
    }
];

export default function ChatDemo() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulated AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: Date.now() + 1,
                text: getAIResponse(text),
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getAIResponse = (input: string): string => {
        const lowInput = input.toLowerCase();
        if (lowInput.includes("limpieza")) return "¡Claro! Tengo disponibilidad para una limpieza dental este jueves a las 15:00 o el viernes a las 10:00. ¿Cuál te queda mejor?";
        if (lowInput.includes("cancelar")) return "Entiendo. He localizado tu cita para mañana a las 11:00. ¿Deseas cancelarla o prefieres reasociarla para la próxima semana?";
        if (lowInput.includes("ortodoncia")) return "La ortodoncia es una excelente inversión. Para darte un presupuesto exacto necesitemos una evaluación. ¿Te gustaría agendar una cita de valoración gratuita?";
        return "Entiendo perfectamente. Déjame consultar la agenda de la clínica para darte la mejor opción. ¿Te gustaría dejar tu número para que un especialista te contacte?";
    };

    return (
        <section className="section-padding" id="demo-interactiva">
            <div className="container">
                <div className={styles.wrapper}>
                    {/* Column Left: Content */}
                    <div className={styles.content}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-2">
                                Experimenta el futuro con <span className="text-gradient">nuestro Chat de Prueba</span>
                            </h2>
                            <p className="text-lead">
                                AmalIA no es un chatbot básico. Entiende el contexto médico, agenda citas y resuelve dudas complejas al instante. Pruébalo tú mismo.
                            </p>

                            <div className={styles.quickActions}>
                                <p className={styles.actionLabel}>Haz clic en un ejemplo:</p>
                                <div className={styles.pillsContainer}>
                                    {QUICK_ACTIONS.map((action, idx) => (
                                        <button
                                            key={idx}
                                            className={styles.pill}
                                            onClick={() => handleSend(action)}
                                        >
                                            {action}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Column Right: Smartphone Mockup */}
                    <div className={styles.mockupColumn}>
                        <motion.div
                            className={styles.phoneFrame}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            {/* Phone Header */}
                            <div className={styles.phoneHeader}>
                                <div className={styles.avatar}>A</div>
                                <div className={styles.statusInfo}>
                                    <strong>AmalIA</strong>
                                    <span className={styles.onlineStatus}>
                                        <span className={styles.dot} /> En línea
                                    </span>
                                </div>
                            </div>

                            {/* Chat Body */}
                            <div className={styles.chatBody}>
                                <AnimatePresence initial={false}>
                                    {messages.map((msg) => (
                                        <motion.div
                                            key={msg.id}
                                            className={`${styles.message} ${styles[msg.sender]}`}
                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className={styles.messageBubble}>
                                                {msg.text}
                                                <span className={styles.time}>{msg.time}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isTyping && (
                                        <motion.div
                                            className={`${styles.message} ${styles.ai}`}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <div className={styles.typingIndicator}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div ref={chatEndRef} />
                            </div>

                            {/* Chat Input */}
                            <form
                                className={styles.chatFooter}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSend(inputValue);
                                }}
                            >
                                <input
                                    type="text"
                                    placeholder="Escribe un mensaje..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className={styles.input}
                                />
                                <button type="submit" className={styles.sendButton}>
                                    <Send size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

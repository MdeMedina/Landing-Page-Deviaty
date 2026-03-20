"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "./ChatDemo.module.css";
import { Send, User, ChevronRight, MessageSquareCheck } from "lucide-react";
import { io, Socket } from "socket.io-client";

interface Message {
    id: string | number;
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

const SOCKET_SERVER_URL = process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || "http://localhost:3001";

export default function ChatDemo() {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);
    const socketRef = useRef<Socket | null>(null);

    const scrollToBottom = () => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        // Initialize Socket.io connection
        const socket = io(SOCKET_SERVER_URL);
        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("Connected to Chat Backend");
        });

        socket.on("receiveMessage", (data: { sessionId: string; replyText: string; intent?: string }) => {
            setSessionId(data.sessionId);
            setIsTyping(false);
            
            const aiResponse: Message = {
                id: Date.now(),
                text: data.replyText,
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiResponse]);
        });

        socket.on("error", (err: { message: string }) => {
            console.error("Socket error:", err.message);
            setIsTyping(false);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from Chat Backend");
        });

        return () => {
            socket.disconnect();
        };
    }, []);

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

        // Send message via Socket.io
        if (socketRef.current) {
            socketRef.current.emit("sendMessage", {
                message: text,
                userId: "demo-user",
                sessionId: sessionId
            });
        }
    };

    return (
        <section className={styles.sectionPadding} id="demo-interactiva">
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
                                            type="button"
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
                            <div className={styles.chatBody} ref={chatBodyRef}>
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
                                                <div className={styles.messageMeta}>
                                                    <span className={styles.time}>{msg.time}</span>
                                                    {msg.sender === "user" && (
                                                        <MessageSquareCheck
                                                            size={14}
                                                            className={styles.receipt}
                                                        />
                                                    )}
                                                </div>
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

            {/* Background dynamic depth */}
            <motion.div
                className={styles.backgroundBlur}
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.05, 0.08, 0.05],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
        </section>
    );
}

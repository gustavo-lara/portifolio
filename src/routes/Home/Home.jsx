import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma, SiCanva, SiVercel } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaBriefcase } from 'react-icons/fa';
import React from 'react';
import { FaCode, FaDesktop, FaRobot } from "react-icons/fa";

import HeroSection from './../../components/HeroSection/HeroSection.jsx';

function Home() {
    // Ref para a seção de tecnologias
    const techSectionRef = useRef(null);

    // Animações
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">

            <HeroSection />
            {/* Tecnologias Section */}
            <section id="tecnologias" ref={techSectionRef} className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-light text-center mb-16 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Tecnologias Utilizadas
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <FaCode className="text-2xl" />, name: "C#" },
                            { icon: <FaReact className="text-2xl" />, name: "React" },
                            { icon: <FaJs className="text-2xl" />, name: "JavaScript" },
                            { icon: <FaHtml5 className="text-2xl" />, name: "HTML5" },
                            { icon: <FaCss3Alt className="text-2xl" />, name: "CSS3" },
                            { icon: <SiTailwindcss className="text-2xl" />, name: "Tailwind" },
                            { icon: <SiVite className="text-2xl" />, name: "Vite" },
                            { icon: <FaBootstrap className="text-2xl" />, name: "Bootstrap" },
                            { icon: <FaGithub className="text-2xl" />, name: "GitHub" },
                            { icon: <FaDatabase className="text-2xl" />, name: "SQL Server" }
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 border border-gray-800 rounded-lg hover:border-gray-600 transition-all duration-300 hover:scale-105"
                                variants={itemVariants}
                            >
                                <div className="text-gray-300 mb-2">{tech.icon}</div>
                                <span className="text-gray-400 text-sm">{tech.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Ferramentas Section */}
            <section className="py-20 px-4 bg-gray-900 bg-opacity-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-light text-center mb-16 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Ferramentas de Trabalho
                    </motion.h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {[
                            { icon: <SiFigma className="text-3xl" />, name: "Figma" },
                            { icon: <SiCanva className="text-3xl" />, name: "Canva" },
                            { icon: <SiVercel className="text-3xl" />, name: "Vercel" },
                            { icon: <FaCode className="text-3xl" />, name: "VSCode" },
                            { icon: <FaDesktop className="text-3xl" />, name: "Visual Studio" },
                            { icon: <FaRobot className="text-3xl" />, name: "ChatGPT" }
                        ].map((tool, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center p-8 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300"
                                variants={itemVariants}
                            >
                                <div className="text-gray-300 mb-4">{tool.icon}</div>
                                <span className="text-gray-400 text-lg">{tool.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Formação Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-light text-center mb-16 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Formação Acadêmica e Certificações
                    </motion.h2>

                    <motion.div
                        className="space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="border-l-2 border-gray-700 pl-6 py-1">
                            <h3 className="text-xl text-white mb-2">Formação Acadêmica</h3>
                            <p className="text-gray-400">SENAI - Técnico Análise e Desenvolvimento de Sistemas 2022 - 2024</p>
                            <p className="text-gray-400">FATEC - Gestão da Tecnologia da Infomaçãoo - Em andamento</p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="border-l-2 border-gray-700 pl-6 py-1">
                            <h3 className="text-xl text-white mb-2">Certificações</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>Microsoft AI-900: Microsoft Azure AI Fundamentals</li>
                                <li>Microsoft AZ-900: Microsoft Azure Fundamentals</li>
                                <li>Modelagem de Dados (Bradesco)</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 px-4 bg-gray-900 bg-opacity-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-light text-center mb-16 text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Soft & Hard Skills
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl text-white mb-6 pb-2 border-b border-gray-700">Hard Skills</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>C#</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>React.js</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>JavaScript</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Integração de APIs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>HTML5/CSS3</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl text-white mb-6 pb-2 border-b border-gray-700">Soft Skills</h3>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Trabalho em equipe</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Aprendizado contínuo</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Atenção aos detalhes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Foco na experiência do usuário</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-500 mr-2">•</span>
                                    <span>Responsabilidade</span>
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}

export default Home;
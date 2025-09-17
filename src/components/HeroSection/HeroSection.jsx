import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaCode, FaInstagram } from 'react-icons/fa';
import { FaThreads } from "react-icons/fa6";
import fotoPerfil from "./../../img/perfilGustavo.jpeg"

const HeroSection = () => {
    // Animações para o fundo
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

    // Elementos animados no fundo
    const BackgroundElements = () => (
        <>
            {/* Piscas no fundo */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-1 h-1 bg-gray-700 rounded-full"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-600 rounded-full"
                animate={{ opacity: [0.3, 0.9, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-gray-500 rounded-full"
                animate={{ opacity: [0.1, 0.7, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
                className="absolute top-2/3 right-1/4 w-1 h-1 bg-gray-600 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />



            {/* Círculos decorativos */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-gray-800 opacity-20"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full border border-gray-800 opacity-15"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
        </>
    );

    return (
        <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
            {/* Fundo animado */}
            <BackgroundElements />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Foto de Perfil */}
                <motion.div
                    className="flex justify-center lg:justify-end"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        {/* Efeito de brilho sutil */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-transparent opacity-30 blur-xl"
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Círculo de destaque */}
                        <div className="absolute inset-0 rounded-full border-2 border-gray-700 transform translate-x-4 translate-y-4"></div>

                        {/* Foto de perfil */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                            <img
                                src={fotoPerfil}
                                alt="Gustavo Lara"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Elemento decorativo animado */}
                        <motion.div
                            className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center"
                            animate={{
                                rotate: [0, 10, 0, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FaCode className="text-gray-400 text-xl" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Conteúdo Texto */}
                <motion.div
                    className="text-center lg:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-light text-white mb-4 tracking-tight"
                        variants={itemVariants}
                    >
                        Gustavo Lara
                    </motion.h1>

                    <motion.div
                        className="inline-block mb-6 px-4 py-1 border border-gray-700 rounded-full"
                        variants={itemVariants}
                    >
                        <h2 className="text-lg md:text-xl text-gray-400 font-light tracking-wide">
                            Desenvolvedor Full Stack
                        </h2>
                    </motion.div>

                    <motion.p
                        className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"
                        variants={itemVariants}
                    >
                        C# | React | JavaScript — criando soluções com simplicidade e propósito.
                    </motion.p>

                    {/* Redes Sociais */}
                    <motion.div
                        className="flex justify-center lg:justify-start space-x-6"
                        variants={itemVariants}
                    >
                        <a href="https://github.com/gustavo-lara" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/gustavo-lara-26102006www/" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://www.threads.com/@_gustavolara_" className="text-gray-400 hover:text-white transition-colors duration-300">
                            <FaThreads size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
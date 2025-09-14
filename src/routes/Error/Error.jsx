import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle, FaCode } from 'react-icons/fa';

const Error = () => {
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

      {/* Linhas sutis no fundo */}
      <motion.div
        className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-800 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
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

      {/* Elementos de erro animados */}
      <motion.div
        className="absolute top-1/5 left-1/5 text-6xl text-gray-800 opacity-20"
        animate={{
          rotate: [0, 5, 0, -5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        404
      </motion.div>

      <motion.div
        className="absolute bottom-1/5 right-1/5 text-6xl text-gray-800 opacity-20"
        animate={{
          rotate: [0, -5, 0, 5, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        404
      </motion.div>
    </>
  );

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Fundo animado */}
      <BackgroundElements />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Ícone de erro animado */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
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
            <div className="w-24 h-24 rounded-full border-2 border-gray-700 flex items-center justify-center">
              <FaExclamationTriangle className="text-gray-400 text-4xl" />
            </div>
          </motion.div>

          {/* Código do erro */}
          <motion.h1
            className="text-8xl md:text-9xl font-light text-white mb-4 tracking-tight"
            variants={itemVariants}
          >
            404
          </motion.h1>

          {/* Título */}
          <motion.h2
            className="text-3xl md:text-4xl font-light text-gray-300 mb-6 tracking-wide"
            variants={itemVariants}
          >
            Página não encontrada
          </motion.h2>

          {/* Descrição */}
          <motion.p
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Parece que você se perdeu no código. A página que você está procurando não existe ou foi movida para outro repositório.
          </motion.p>

          {/* Botão de ação */}
          <motion.div variants={itemVariants}>
            <Link
              to="/"
              className="inline-flex items-center text-white text-sm md:text-base px-8 py-3 border border-gray-700 hover:border-gray-500 transition-colors duration-300 tracking-wider uppercase"
            >
              <FaHome className="mr-2" />
              Voltar ao início
            </Link>
          </motion.div>

          {/* Elemento decorativo */}
          <motion.div
            className="mt-16 flex items-center justify-center text-gray-700"
            variants={itemVariants}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <FaCode className="text-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Error;
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import DevFlix from "./../../img/devflix.png"
import Mercedes from "./../../img/mercedes-dev.png"
import DevList from "./../../img/devlist.png"
import CoffeShop from "./../../img/CoffeeShop.png"
import Calc from "./../../img/Calculadora.png"
import Petshop from "./../../img/PetShop.png"

const Projetos = () => {
  // Estado para filtro de projetos
  const [filter, setFilter] = useState('todos');

  // Dados dos projetos
  const projetos = [
    {
      id: 1,
      titulo: "DevFlix",
      descricao: "Plataforma de streaming desenvolvida com React e Node.js, com sistema de vizualização de catálogo de filmes.",
      tecnologias: ["React"],
      imagem: DevFlix,
      github: "https://github.com/gustavo-lara/DEVFLIX",
      demo: "https://devflix-chi-opal.vercel.app/",
      categoria: "web"
    },
    {
      id: 2,
      titulo: "MercedesDev",
      descricao: "Website para concessionária Mercedes-Benz.",
      tecnologias: ["React"],
      imagem: Mercedes,
      github: "https://github.com/gustavo-lara/mercedes-dev",
      demo: "https://mercedes-dev.vercel.app/",
      categoria: "web"
    },
    {
      id: 3,
      titulo: "DevList",
      descricao: "Website para organização de tarefas com armazenamento em navegador.",
      tecnologias: ["React"],
      imagem: DevList,
      github: "https://github.com",
      demo: "https://devlist-xi.vercel.app/",
      categoria: "web"
    },
    {
      id: 4,
      titulo: "CoffeeShop",
      descricao: "Sistema para gerenciar de forma eficiente todas as operações de uma cafeteria.",
      tecnologias: ["C#", ".NET", "ASP.NET", "MVC"],
      imagem: CoffeShop,
      github: "https://github.com/gustavo-lara/CoffeeShop-MVC",
      demo: "https://www.linkedin.com/posts/gustavo-menegassi-lara-2950a32b3_gerenciamento-de-cafeteria-projeto-em-activity-7269687867650539520--H5a",
      categoria: "desktop"
    },
    {
      id: 5,
      titulo: "CalculadoraApp",
      descricao: "App de calculadora comum.",
      tecnologias: ["C#", ".NET", "MAUI"],
      imagem: Calc,
      github: "https://github.com/gustavo-lara/CalculadoraApp",
      demo: "https://github.com/gustavo-lara/CalculadoraApp",
      categoria: "mobile"
    },
    {
      id: 6,
      titulo: "API PetShop",
      descricao: "API completa para gerenciamento de um Pet Shop.",
      tecnologias: ["C#", ".NET", "Swagger"],
      imagem: Petshop,
      github: "https://github.com/gustavo-lara/PetShopApi",
      demo: "https://github.com/gustavo-lara/PetShopApi",
      categoria: "api"
    }
  ];

  // Filtrar projetos baseado na categoria selecionada
  const projetosFiltrados = filter === 'todos'
    ? projetos
    : projetos.filter(projeto => projeto.categoria === filter); // Correção aqui

  // Categorias para filtro
  const categorias = [
    { id: 'todos', nome: 'Todos' },
    { id: 'web', nome: 'Web' },
    { id: 'mobile', nome: 'Mobile' },
    { id: 'desktop', nome: 'Desktop' },
    { id: 'api', nome: 'API' }
  ];

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

  // Componente para cada card de projeto
  const ProjetoCard = ({ projeto }) => (
    <motion.div
      className="bg-gray-900 bg-opacity-50 border border-gray-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-gray-700 transition-all duration-300 flex flex-col h-full"
      variants={itemVariants}
      whileHover={{ y: -10 }}
    >
      {/* Imagem do projeto */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

        {/* Badge de categoria */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gray-800 bg-opacity-70 rounded-full text-xs text-gray-300 uppercase tracking-wider">
          {projeto.categoria}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-light text-white mb-2">{projeto.titulo}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">{projeto.descricao}</p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projeto.tecnologias.map((tech, index) => (
            <span key={index} className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Fixados na parte inferior */}
        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <a
              href={projeto.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub className="mr-2" />
              <span className="text-sm">Código</span>
            </a>

            <a
              href={projeto.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm mr-2">Demo</span>
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projetos" className="min-h-screen bg-black text-white px-4 py-20 relative overflow-hidden">
      {/* Fundo animado */}
      <BackgroundElements />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Cabeçalho */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meus Projetos
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gray-700 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          />

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Explore meus trabalhos mais recentes, desenvolvidos com diversas tecnologias e focados em resolver problemas reais.
          </motion.p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {categorias.map((categoria) => (
            <button
              key={categoria.id}
              onClick={() => setFilter(categoria.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${filter === categoria.id
                ? 'bg-gray-800 text-white'
                : 'bg-gray-900 bg-opacity-50 text-gray-400 hover:text-white border border-gray-800'
                }`}
            >
              {categoria.nome}
            </button>
          ))}
        </motion.div>

        {/* Grid de projetos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projetosFiltrados.map((projeto) => (
            <ProjetoCard key={projeto.id} projeto={projeto} />
          ))}
        </motion.div>

        {/* Botão para ver mais */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a
            href="https://github.com/gustavo-lara?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors duration-300 tracking-wider"
          >
            <FaGithub className="mr-2" />
            Ver mais no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projetos;
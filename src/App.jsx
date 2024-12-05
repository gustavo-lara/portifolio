import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiDotnet, SiMysql, SiVite, SiFigma, SiCanva, SiVercel } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import "./App.css"

import devflix from "./img/devflix.png";
import mercedes from "./img/mercedes-dev.png";
import devlist from "./img/devlist.png"
import devsteam from "./img/devsteam.png"
import reactlinks from "./img/reactlinks.png"

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navegarPara = (id) => {
    setIsMenuOpen(false);
  };

  const [firstLineText, setFirstLineText] = useState("");  // Texto para "Desenvolvedor"
  const [secondLineText, setSecondLineText] = useState("");  // Texto para "Full Stack"
  const firstLine = "Deesenvolvedor";
  const secondLine = "Fuull Stack.";
  const firstLineIndexRef = useRef(0); // Para controlar o índice da primeira linha
  const secondLineIndexRef = useRef(0); // Para controlar o índice da segunda linha

  useEffect(() => {
    const interval = setInterval(() => {
      if (firstLineIndexRef.current < firstLine.length) {
        setFirstLineText(prevText => prevText + firstLine.charAt(firstLineIndexRef.current));
        firstLineIndexRef.current++;
      } else if (secondLineIndexRef.current < secondLine.length) {
        setSecondLineText(prevText => prevText + secondLine.charAt(secondLineIndexRef.current));
        secondLineIndexRef.current++;
      } else {
        clearInterval(interval); // Para o intervalo quando os dois textos forem exibidos
      }
    }, 150); // Ajuste a velocidade da digitação

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);



  return (
    <div className="bg-[#1e1939] min-h-screen">

      {/* Header Fixo */}

      <header className="fixed top-0 left-0 right-0 bg-[#1e1939]/90 backdrop-blur-sm z-50 border-b border-[#15F5BA]/10">
        <motion.div
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[#15F5BA] text-2xl font-vt323 tracking-widest">Gustavo Lara</h1>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8 font-vt323">
            {['home', 'sobre', 'tecnologias', 'projetos', 'contato'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                className={`capitalize cursor-pointer ${activeSection === item
                  ? 'text-[#15F5BA]'
                  : 'text-[#15F5BA]/60 hover:text-[#15F5BA]'
                  } transition-colors`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Menu Mobile Expandido */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white font-vt323 border-b border-[#15F5BA]/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4 font-vt323">
              {['home', 'sobre', 'tecnologias', 'projetos', 'contato'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsMenuOpen(false)}
                  className={`capitalize text-left ${activeSection === item
                    ? 'text-[#15F5BA]'
                    : 'text-[#15F5BA]/60'
                    }`}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </header>



      {/* Conteúdo Principal */}
      < main className="pt-20">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center bg-animated border-b border-[#15F5BA]/10 overflow-hidden"
        >
          {/* Animações e conteúdo */}
          <motion.div
            className="container mx-auto px-6 relative z-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-9xl text-[#15F5BA] mb-6 font-vt323">
              <span>{firstLineText}</span>
              <br />
              <span>{secondLineText}</span>
            </h1>
            <p className="text-xl text-[#F0F3FF]/60 max-w-xl">
              Criando experiências digitais únicas e memoráveis através de código limpo e design intuitivo.
            </p>
          </motion.div>
        </section>



        {/* Sobre */}
        <section id="sobre" className="py-24 border-b border-[#15F5BA]/10">
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // Executa a animação apenas na primeira vez que entra na tela
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-[#15F5BA] mb-6 font-vt323">Sobre Mim</h2>
                <p className="text-lg text-[#F0F3FF]/80 leading-relaxed">
                  Olá, sou Gustavo Lara, um entusiasta da tecnologia e estudante dedicado, apaixonado por desenvolvimento e inovação. Meu objetivo é aprimorar minhas habilidades e expandir meu conhecimento diariamente para criar soluções que façam a diferença.
                  Como desenvolvedor júnior, tenho experiência prática com JavaScript, React, SQL Server, .NET e C#. Estou focado em desenvolver aplicações eficientes, explorar novas tecnologias e contribuir para projetos que impactem positivamente o mundo da tecnologia.
                  Estou sempre em busca de novos desafios, aprendizado contínuo e oportunidades de colaborar com profissionais inspiradores. Vamos juntos construir soluções inovadoras e transformar ideias em realidade! 🚀
                </p>
              </div>
              <div className="bg-[#3825a4]/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#15F5BA] mb-4 font-vt323">Certificados</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "Análise e Desenvolvimento de Sistemas",
                      org: "SENAI",
                      year: "2024"
                    },
                    {
                      title: "Microsoft AI-900",
                      org: "MICROSOFT",
                      year: "2023"
                    },
                    {
                      title: "Microsoft AZ-900",
                      org: "MICROSOFT",
                      year: "2023"
                    },
                    {
                      title: "Modelagem de Dados",
                      org: "FUNDAÇÃO BRADESCO",
                      year: "2023"
                    }
                  ].map((cert) => (
                    <div key={cert.title} className="flex justify-between items-start">
                      <div>
                        <h2 className="text-4xl md:text-6xl lg:text-3xl text-[#15F5BA] font-vt323">{cert.title}</h2>
                        <p className="text-sm text-[#15F5BA]/60">{cert.org}</p>
                      </div>
                      <span className="text-sm text-[#15F5BA]/60 font-vt323">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tecnologias */}
        <section id="tecnologias" className="py-24 border-b border-[#15F5BA]/10">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-[#15F5BA] mb-12 font-vt323"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Tecnologias
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-vt323">
              {[
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "C#", icon: <FaCode /> },
                { name: "React Vite", icon: <SiVite /> },
                { name: "Bootstrap", icon: <FaBootstrap /> },
                { name: ".NET", icon: <SiDotnet /> },
                { name: "SQL Server", icon: <FaDatabase /> },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="p-6 bg-[#3825a4]/10 rounded-lg hover:bg-[#3153cb]/20 
          transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-[#15F5BA] text-2xl">{tech.icon}</div>
                    <p className="text-lg font-medium text-[#15F5BA] group-hover:translate-x-2 transition-transform">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ferramentas */}
        <section id="ferramentas" className="py-24 border-b border-[#15F5BA]/10">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-[#15F5BA] mb-12 font-vt323"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ferramentas
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-vt323">
              {[
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Figma", icon: <SiFigma /> },
                { name: "Canva", icon: <SiCanva /> },
              ].map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="p-6 bg-[#3825a4]/10 rounded-lg hover:bg-[#3153cb]/20 
          transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-[#15F5BA] text-2xl">{tool.icon}</div>
                    <p className="text-lg font-medium text-[#15F5BA] group-hover:translate-x-2 transition-transform">
                      {tool.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projetos */}

        <section id="projetos" className="py-24 border-b border-[#15F5BA]/10">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-[#15F5BA] mb-12 font-vt323"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Projetos
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Mercedes-dev",
                  desc: "Pequeno projeto com o objetivo de ampliar meu portfólio. O projeto é baseado no site mercedes.com.",
                  tech: ["React", "JavaScript", "Bootstrap"],
                  url: "https://mercedes-dev.vercel.app/",
                  image: mercedes
                },
                {
                  title: "DevFlix",
                  desc: "Este site é um exemplo de plataforma de streaming. Um dos meus projetos educacionais.",
                  tech: ["React", "JavaScript", "API"],
                  url: "https://devflix-chi-opal.vercel.app/",
                  image: devflix
                },
                {
                  title: "DevList",
                  desc: "Este site é um exemplo de lista de tarefas. Um dos meus projetos educacionais.",
                  tech: ["React", "JavaScript"],
                  url: "https://devlist-xi.vercel.app/",
                  image: devlist
                },
                {
                  title: "DevSteam",
                  desc: "Este site foi feito baseado na Steam. Um dos meus projetos educacionais.",
                  tech: ["React", "JavaScript"],
                  url: "https://dev-steam-v2.vercel.app/",
                  image: devsteam
                },
                {
                  title: "ReactLinks",
                  desc: "Este site foi feito baseado no Linktree. Um dos meus projetos educacionais.",
                  tech: ["React", "JavaScript"],
                  url: "https://dev-links-react.vercel.app/",
                  image: reactlinks
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-video bg-[#F0F3FF]/10 rounded-lg mb-4 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h3 className="text-xl font-medium text-[#15F5BA] mb-2 flex items-center gap-2 font-vt323">
                      {project.title}
                      <ArrowUpRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                  </a>
                  <p className="text-[#F0F3FF]/60 mb-4">{project.desc}</p>
                  <div className="flex gap-2 font-vt323">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-sm bg-[#F0F3FF]/20 rounded-full text-[#15F5BA]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* Contato */}

        <section
          id="contato"
          className="py-24 relative"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-[#15F5BA] mb-6 font-vt323"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Vamos Conversar?
              </motion.h2>
              <motion.p
                className="text-lg text-[#F0F3FF]/60 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Estou disponível para novos projetos e oportunidades.
              </motion.p>
              <motion.div
                className="flex justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://github.com/gustavo-lara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#15F5BA]/60 hover:text-[#15F5BA] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/gustavo-lara-2950a32b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#15F5BA]/60 hover:text-[#15F5BA] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:gustavolara63719@gmail.com"
                  className="p-3 text-[#15F5BA]/60 hover:text-[#15F5BA] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Mail size={24} />
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>


      </main >
    </div >
  );
};

export default App;
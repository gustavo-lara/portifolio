import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import devflix from "./img/devflix.png"
import mercedes from "./img/mercedes-dev.png"


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


  return (
    <div className="bg-white min-h-screen">
      {/* Header Fixo */}


      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-[#3C2A21]/10">
        <motion.div
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[#3C2A21] text-xl font-bold">Gustavo Lara</h1>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8">
            {['home', 'sobre', 'tecnologias', 'projetos', 'contato'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                className={`capitalize cursor-pointer ${activeSection === item
                  ? 'text-[#3C2A21]'
                  : 'text-[#3C2A21]/60 hover:text-[#3C2A21]'
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
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#3C2A21]/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['home', 'sobre', 'tecnologias', 'projetos', 'contato'].map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setIsMenuOpen(false)}
                  className={`capitalize text-left ${activeSection === item
                    ? 'text-[#3C2A21]'
                    : 'text-[#3C2A21]/60'
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
      < main className="pt-20" >
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center border-b border-[#3C2A21]/10">
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-[#3C2A21] mb-6">
              Desenvolvedor<br />Full Stack
            </h1>
            <p className="text-xl text-[#3C2A21]/60 max-w-xl">
              Criando experiências digitais únicas e memoráveis através de código limpo e design intuitivo.
            </p>
          </motion.div>
        </section>


        {/* Sobre */}
        <section id="sobre" className="py-24 border-b border-[#3C2A21]/10">
          <motion.div
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }} // Executa a animação apenas na primeira vez que entra na tela
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold text-[#3C2A21] mb-6">Sobre Mim</h2>
                <p className="text-lg text-[#3C2A21]/80 leading-relaxed">
                  Olá, sou Gustavo Lara, um entusiasta da tecnologia e estudante dedicado, apaixonado por desenvolvimento e inovação. Meu objetivo é aprimorar minhas habilidades e expandir meu conhecimento diariamente para criar soluções que façam a diferença.
                  Como desenvolvedor júnior, tenho experiência prática com JavaScript, React, SQL Server, .NET e C#. Estou focado em desenvolver aplicações eficientes, explorar novas tecnologias e contribuir para projetos que impactem positivamente o mundo da tecnologia.
                  Estou sempre em busca de novos desafios, aprendizado contínuo e oportunidades de colaborar com profissionais inspiradores. Vamos juntos construir soluções inovadoras e transformar ideias em realidade! 🚀
                </p>
              </div>
              <div className="bg-[#D5CEA3]/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#3C2A21] mb-4">Certificações</h3>
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
                        <h4 className="font-medium text-[#3C2A21]">{cert.title}</h4>
                        <p className="text-sm text-[#3C2A21]/60">{cert.org}</p>
                      </div>
                      <span className="text-sm text-[#3C2A21]/60">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Tecnologias */}

        <section id="tecnologias" className="py-24 border-b border-[#3C2A21]/10">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-[#3C2A21] mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Stack Tecnológico
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "HTML" },
                { name: "CSS" },
                { name: "JavaScript" },
                { name: "C#" },
                { name: "React Vite" },
                { name: "Tailwind" },
                { name: "Bootstrap" },
                { name: ".NET" },
                { name: "SQL Server" },
                { name: "Git" },
                { name: "GitHub" },
                { name: "Vercel" },
                { name: "Figma" },
                { name: "Canva" },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="p-6 bg-[#D5CEA3]/10 rounded-lg hover:bg-[#D5CEA3]/20 
            transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <p className="text-lg font-medium text-[#3C2A21] group-hover:translate-x-2 transition-transform">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* Projetos */}

        <section id="projetos" className="py-24 border-b border-[#3C2A21]/10">
          <div className="container mx-auto px-6">
            <motion.h2
              className="text-4xl font-bold text-[#3C2A21] mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Projetos Selecionados
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Mercedes-dev",
                  desc: "Pequeno projeto com o objetivo de ampliar meu portfólio. O projeto é baseado no site mercedes.com.",
                  tech: ["React"],
                  url: "https://mercedes-dev.vercel.app/",
                  image: mercedes
                },
                {
                  title: "DevFlix",
                  desc: "Este site é um exemplo de plataforma de streaming. Um dos meus projetos educacionais.",
                  tech: ["React", "API"],
                  url: "https://devflix-chi-opal.vercel.app/",
                  image: devflix
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
                    <div className="aspect-video bg-[#D5CEA3]/10 rounded-lg mb-4 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <h3 className="text-xl font-medium text-[#3C2A21] mb-2 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight
                        size={20}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </h3>
                  </a>
                  <p className="text-[#3C2A21]/60 mb-4">{project.desc}</p>
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-sm bg-[#D5CEA3]/20 rounded-full text-[#3C2A21]"
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

        <section id="contato" className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-[#3C2A21] mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Vamos Conversar?
              </motion.h2>
              <motion.p
                className="text-lg text-[#3C2A21]/60 mb-8"
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
                  className="p-3 text-[#3C2A21]/60 hover:text-[#3C2A21] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/gustavo-lara-2950a32b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#3C2A21]/60 hover:text-[#3C2A21] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:gustavolara63719@gmail.com"
                  className="p-3 text-[#3C2A21]/60 hover:text-[#3C2A21] transition-colors"
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
import { Github, Linkedin } from 'lucide-react';
import { FaThreads } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="py-10 px-4 border-t border-gray-800">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Gustavo Lara. Todos os direitos reservados.
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/gustavo-lara" className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="www.linkedin.com/in/gustavo-menegassi-lara-2950a32b3" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.threads.net/@_gustavolara_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaThreads size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
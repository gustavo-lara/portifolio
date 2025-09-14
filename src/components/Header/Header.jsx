import { Link } from "react-router-dom";
import React from "react";

const navigation = [
  { path: "/", name: "Home" },
  { path: "/projetos", name: "Projetos" },
];

export default function Header() {
  return (
    <header className="w-full bg-neutral-950 border-b border-neutral-800 mb-8">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between h-20">
        
        {/* Nome */}
        <h1 className="text-white font-light text-xl tracking-wide cursor-default">
          Gustavo Lara
        </h1>

        {/* Navegação */}
        <nav className="flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-light tracking-wider"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

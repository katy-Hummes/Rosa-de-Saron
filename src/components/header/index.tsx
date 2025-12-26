'use client';

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 px-8 lg:px-12 py-5 bg-linear-to-r from-pink-400 to-gray-950">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="dark:invert text-2xl font-bold text-white tracking-wider flex items-center gap-3">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={50}
            height={10}
            priority
          />
          Rosa de Saron
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10">
          <li>
            <a
              href="#blog"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#servicos"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Servicos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="text-white font-medium text-sm tracking-wider hover:text-pink-400 transition-colors relative group pb-5"
            >
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        {/* Hamburguer Button - Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none z-50"
          aria-label="Abrir menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-950/95 backdrop-blur-sm md:hidden z-40">
            <ul className="flex flex-col items-center justify-center h-full gap-12 text-2xl">
              <li>
                <a
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium tracking-wider hover:text-pink-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium tracking-wider hover:text-pink-400 transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-medium tracking-wider hover:text-pink-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null);
  const animateRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [form, setForm] = useState({
    nome: '',
    servico: '',
  });

  const servicos = [
    { id: '01', title: 'Manicure Clássica', price: 'R$ 65', desc: 'Tratamento completo...' },
    { id: '02', title: 'Pedicure Premium', price: 'R$ 85', desc: 'Cuidado especializado...' },
    { id: '03', title: 'Spa dos Pés', price: 'R$ 180', desc: 'Ritual completo...' },
    { id: '04', title: 'Esmaltação em Gel', price: 'A partir de R$ 120', desc: 'Design exclusivo...' },
    { id: '05', title: 'Alongamento em Gel', price: 'R$ 220', desc: 'Extensão natural...' },
    { id: '06', title: 'Combo VIP', price: 'R$ 130', desc: 'Experiência completa...' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Em breve entraremos em contato.');
    setForm({ nome: '', servico: '' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        if (window.scrollY > 100) {
          navbarRef.current.classList.add('bg-dark', 'bg-opacity-95', 'shadow-2xl', 'py-5');
        } else {
          navbarRef.current.classList.remove('bg-dark', 'bg-opacity-95', 'shadow-2xl', 'py-5');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('style', 'opacity: 1; transform: translateY(0);');
          }
        });
      },
      { threshold: 0.1 }
    );

    animateRefs.current.forEach((el) => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s';
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="h-screen relative flex items-center justify-center bg-linear-to-br from-pink-300 via-pink-400 to-pink-300 overflow-hidden">
        <div className="text-center z-10 px-5">
          <div className="dark:invert text-2xl font-bold text-white tracking-wider">
            <h1 className="flex text-5xl md:text-7xl lg:text-8xl font-bold  mb-5">
              <Image
                src="/next.svg"
                alt="Next.js logo"
                width={150}
                height={1}
                priority
              /> Rosa
            </h1>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-5">
              de Saron
            </h1>
          </div>
          <p className="dark:invert text-white text-xl md:text-2xl tracking-widest mb-10">
            Manicure & Pedicure de Luxo
          </p>
          <a href="#contato"
            className="inline-block px-12 py-4 font-semibold border-2 border-pink-400 hover:bg-black transition-all duration-600">
            AGENDAR HORÁRIO
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 lg:py-32 px-5 lg:px-12 max-w-7xl mx-auto">
        <h2 className="font-playfair text-5xl text-center mb-5 font-bold">Nossos Serviços</h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20">
          Experiências exclusivas de cuidado e beleza...
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {servicos.map((serv) => (
            <div key={serv.id}
              ref={(el) => {
                if (el && !animateRefs.current.includes(el)) {
                  animateRefs.current.push(el);
                }
              }}
              className="service-card bg-pink-400 p-12 border border-gray-200 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-full bg-pink-400 group-hover:w-full transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="font-playfair text-5xl text-pink-400mb-5 group-hover:text-white">
                  {serv.id}
                </div>
                <h3 className="font-playfair text-2xl mb-4 group-hover:text-white">{serv.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-white">{serv.desc}</p>
                <div className="text-2xl font-semibold text-pink-400group-hover:text-white">
                  {serv.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="py-20 lg:py-32 bg-gray-50 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="dark:invert font-playfair text-5xl mb-5 text-center font-bold">Blog</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-20">
            Uma seleção dos nossos trabalhos...
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el && !animateRefs.current.includes(el)) {
                    animateRefs.current.push(el);
                  }
                }}
                className="gallery-item aspect-square bg-linear-to-br from-pink-400 to-pink-600 relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-70 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 lg:py-32 bg-dark px-5 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-playfair text-5xl mb-5 font-bold">Agende sua Experiência</h2>
            <p className="text-gray-400 mb-10">Entre em contato...</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-pink-500 p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 my-10">
              <input
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Nome"
                required
                className="input m-3 p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:shadow-[0_0_15px_rgba(219,39,119,0.6)] transition-all duration-300"
              />
              <select
                value={form.servico}
                onChange={(e) => setForm({ ...form, servico: e.target.value })}
                className="input m-3 bg-pink-500 p-2 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:shadow-[0_0_15px_rgba(219,39,119,0.6)] transition-all duration-300"
              >
                <option value="">Serviços</option>
                {servicos.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 py-4 uppercase font-bold hover:bg-white hover:text-pink-400 transition focus:outline-none focus:ring-2 focus:ring-pink-900 focus:shadow-[0_0_15px_rgba(219,39,119,0.6)]">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-12">
        <p className="text-gray-500 text-sm">Rosa de Saron &copy; 2025</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(-50px, -50px) rotate(360deg);
          }
        }
        .animate-float {
          animation: float 20s linear infinite;
        }
        .input {
          @apply w-full mb-5 p-4 border border-pink-400 text-white;
        }
      `}</style>
    </>
  );
}

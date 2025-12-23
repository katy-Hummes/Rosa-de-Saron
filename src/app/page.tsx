'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const navbarRef = useRef<HTMLElement>(null);
  const animateRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [form, setForm] = useState({
    nome: '',
    tel: '',
    email: '',
    servico: '',
    msg: '',
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
    setForm({ nome: '', tel: '', email: '', servico: '', msg: '' });
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
      {/* Navbar (adicione se quiser, não estava no código original completo, mas referenciado) */}
      {/* <nav ref={navbarRef} className="fixed top-0 w-full z-50 transition-all duration-300">...</nav> */}

      {/* Hero */}
      <section className="h-screen relative flex items-center justify-center bg-gradient-to-br from-dark via-dark-gray to-primary-pink overflow-hidden">
        <div
          className="absolute w-full h-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(233,30,99,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>

        <div className="text-center z-10 px-5">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-5">
            🌹Rosa<br />de Saron
          </h1>
          <p className="text-xl md:text-2xl text-secondary-pink font-light tracking-widest uppercase mb-10">
            Manicure & Pedicure de Luxo
          </p>
          <a
            href="#contato"
            className="inline-block px-12 py-4 bg-primary-pink text-white font-semibold border-2 border-primary-pink hover:bg-white hover:text-primary-pink transition-all duration-300"
          >
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
            <div
              key={serv.id}
              ref={(el) => {
                if (el && !animateRefs.current.includes(el)) {
                  animateRefs.current.push(el);
                }
              }}
              className="service-card bg-white p-12 border border-gray-200 relative overflow-hidden group hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-0 h-full bg-primary-pink group-hover:w-full transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="font-playfair text-5xl text-primary-pink mb-5 group-hover:text-white">
                  {serv.id}
                </div>
                <h3 className="font-playfair text-2xl mb-4 group-hover:text-white">{serv.title}</h3>
                <p className="text-gray-600 mb-6 group-hover:text-white">{serv.desc}</p>
                <div className="text-2xl font-semibold text-primary-pink group-hover:text-white">
                  {serv.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-20 lg:py-32 bg-gray-50 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-5xl mb-5 text-center font-bold">Blog</h2>
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
                className="gallery-item aspect-square bg-linear-to-br from-primary-pink to-secondary-pink relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-70 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 lg:py-32 bg-dark text-white px-5 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-playfair text-5xl mb-5 font-bold">Agende sua Experiência</h2>
            <p className="text-gray-400 mb-10">Entre em contato...</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-dark-gray p-10">
            <input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              placeholder="Nome"
              required
              className="input"
            />
            <input
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
              placeholder="Telefone"
              required
              className="input"
            />
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Email"
              required
              className="input"
            />
            <select
              value={form.servico}
              onChange={(e) => setForm({ ...form, servico: e.target.value })}
              required
              className="input"
            >
              <option value="">Selecione</option>
              {servicos.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            <textarea
              value={form.msg}
              onChange={(e) => setForm({ ...form, msg: e.target.value })}
              placeholder="Mensagem"
              className="input h-32"
            />

            <button
              type="submit"
              className="w-full bg-primary-pink py-4 uppercase font-bold hover:bg-white hover:text-primary-pink transition"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-12">
        <p className="text-gray-500 text-sm">&copy; 2025 Glamour Studio</p>
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
          @apply w-full mb-5 p-4 bg-dark-gray border border-primary-pink text-white;
        }
      `}</style>
    </>
  );
}

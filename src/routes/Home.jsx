import React from 'react';

export const Home = () => {
  return (
    <section className="gradient-bg text-white py-24 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-green-500 mb-6 tracking-tight">AlertaCheia: Proteção contra Enchentes</h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          Sistema de monitoramento e alertas em tempo real para salvar vidas e proteger comunidades de alagamentos. Nosso objetivo é reduzir riscos e melhorar a gestão de crises em áreas suscetíveis a inundações.
        </p>
        <a
          href="/solucao"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 hover:font-semibold transition hover-scale"
        >
          Saiba Mais
        </a>
      </div>
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Home;
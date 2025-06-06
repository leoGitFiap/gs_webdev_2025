import React from 'react';

export const Sobre = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-10 text-green-500">Nossa Jornada</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          O AlertaCheia foi desenvolvido para proteger comunidades vulneráveis. Após pesquisas com especialistas em hidrologia, entrevistas com moradores de áreas de risco e testes de protótipos, criamos um sistema robusto e acessível, integrando tecnologia IoT com impacto social. Nossa equipe, composta por Leonardo Fernandes Mesquita, Marco Antônio Caires Freire e Guilherme Augusto Caseiro, trabalhou em papéis como Dev Backend, Frontend, IoT, UX/UI e Gerente de Projeto.
        </p>
      </div>
      <style jsx>{`
        .section-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e3a8a;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Sobre;
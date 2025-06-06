import React, { useState } from 'react';

export const Solucao = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { src: "./src/assets/solucao1.jpg", alt: "Sensor in Flooded Area" },
    { src: "./src/assets/solucao2.jpg", alt: "Dashboard with Real-Time Alerts" }
  ];

  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading mb-10 text-green-500">Nossa Solução</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              O <strong>AlertaCheia</strong> é um sistema de monitoramento de alagamentos que utiliza sensores pluviométricos conectados via IoT para medir o volume de chuva em tempo real. A plataforma gera alertas automáticos em três níveis:
            </p>
            <ul className="list-disc list-inside text-left mt-6 text-gray-700">
              <li><span className="text-green-500 font-semibold">Seguro (Verde)</span></li>
              <li><span className="text-yellow-500 font-semibold">Atenção (Amarelo)</span></li>
              <li><span className="text-red-500 font-semibold">Alerta (Vermelho)</span></li>
            </ul>
            <p className="mt-6 text-gray-700">
              Componentes técnicos incluem pluviômetros digitais, microcontroladores (ESP8266/ESP32), plataforma MQTT, banco de dados na nuvem (Firebase/AWS/Azure), e um dashboard web/mobile com notificações push, e-mails e WhatsApp.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="slideshow">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === slideIndex ? 'active' : ''}`}
                >
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
              <button className="slideshow-btn prev" onClick={() => changeSlide(-1)}>❮</button>
              <button className="slideshow-btn next" onClick={() => changeSlide(1)}>❯</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e3a8a;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }
        .slideshow {
          position: relative;
          max-width: 500px;
          margin: 0 auto;
        }
        .slide {
          display: none;
          width: 100%;
        }
        .slide.active {
          display: block;
        }
        .slide img {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .slideshow-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 1rem;
          cursor: pointer;
          font-size: 1.5rem;
        }
        .slideshow-btn.prev {
          left: 0;
        }
        .slideshow-btn.next {
          right: 0;
        }
        .slideshow-btn:hover {
          background: rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
};

export default Solucao;
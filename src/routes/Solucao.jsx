import React, { useState } from 'react';

const Solucao = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    { src: './src/assets/aparelho.jpg', alt: 'Sensor in Flooded Area' },
    { src: './src/assets/solucao.jpg', alt: 'Dashboard with Real-Time Alerts' },
  ];

  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex >= slides.length) newIndex = 0;
    if (newIndex < 0) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <section id="solucao" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-heading mb-10">Nossa Solução</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 p-6">
            <p className="text-lg leading-relaxed">
              O <strong>AlertaCheia</strong> é um sistema de monitoramento de alagamentos que utiliza sensores pluviométricos conectados via IoT para medir o volume de chuva, temperatura e umidade em tempo real. A plataforma gera alertas automáticos em três níveis:
            </p>
            <ul className="list-disc list-inside text-left mt-6 text-gray-700">
              <li><span className="text-green-500 font-semibold">Seguro (Verde)</span></li>
              <li><span className="text-yellow-500 font-semibold">Atenção (Amarelo)</span></li>
              <li><span className="text-red-500 font-semibold">Alerta (Vermelho)</span></li>
            </ul>
            <p className="mt-6">
              Componentes técnicos incluem pluviômetros digitais, sensores de temperatura e umidade, microcontroladores (ESP8266/ESP32), plataforma MQTT, banco de dados na nuvem (Firebase/AWS/Azure), e um dashboard web/mobile com notificações push. O sistema pode ser aplicado em sistemas pluviais em beira de rio e esgotos, entendendo o padrão de aumento conforme a chuva aumenta e prevendo enchentes.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              Nosso processo de monitoramento e prevenção de inundações funciona de forma integrada:
            </p>
            <ol className="list-decimal list-inside text-left mt-6">
              <li>
                <span className="font-semibold">Sensores instalados no leito do rio:</span> Sensores medem continuamente a pressão da coluna d'água e identificam alterações no nível do rio que podem indicar risco de alagamento.
              </li>
              <li>
                <span className="font-semibold">Conexão com placas embarcadas:</span> Cada sensor está conectado a uma placa embarcada na margem do rio, equipada com memória e processador para armazenar e processar os dados coletados.
              </li>
              <li>
                <span className="font-semibold">Comunicação via rede sem fio:</span> As placas se comunicam usando tecnologias como LoRa, Bluetooth ou Zigbee, com alcance de 50 metros a 3 quilômetros, transmitindo os dados de forma eficiente.
              </li>
              <li>
                <span className="font-semibold">Câmeras registrando o leito do rio:</span> Câmeras capturam imagens do rio a cada 5 minutos, registrando visualmente o nível das águas para complementar os dados dos sensores.
              </li>
              <li>
                <span className="font-semibold">Estação-base centralizando informações:</span> Uma estação-base coleta as imagens das câmeras e os dados dos sensores sobre o nível da água, centralizando as informações para análise.
              </li>
              <li>
                <span className="font-semibold">Envio para a nuvem e geração de alertas:</span> Os dados são enviados via sinal de celular para uma nuvem, onde são processados. A partir disso, são geradas previsões e alertas enviados à Defesa Civil e à população, ajudando a prevenir inundações.
              </li>
            </ol>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <div className="slideshow">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`slide ${index === slideIndex ? 'active' : ''}`}
                  aria-hidden={index !== slideIndex}
                >
                  <img src={slide.src} alt={slide.alt} className="w-full h-auto rounded-lg shadow-md" />
                </div>
              ))}
              <button
                className="slideshow-btn prev"
                onClick={() => changeSlide(-1)}
                aria-label="Previous slide"
              >
                ❮
              </button>
              <button
                className="slideshow-btn next"
                onClick={() => changeSlide(1)}
                aria-label="Next slide"
              >
                ❯
              </button>
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
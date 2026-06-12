import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Hero Section - Design: Minimalismo Romântico
 * - Foto principal ocupando quase toda a tela
 * - Nome do casal em destaque com fade-in
 * - Frase romântica impactante
 * - Indicador animado sugerindo scroll
 */

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-bottom"
        style={{
          backgroundImage: 'url(/assets/foto-capa.jpg)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Couple names */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Juliano & Maria
        </h1>

        {/* Romantic phrase */}
        <p
          className={`text-xl md:text-2xl text-white/90 font-light transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ fontFamily: "'Lora', serif" }}
        >
          Uma história de amor escrita em cada momento compartilhado
        </p>

        {/* Decorative line */}
        <div
          className={`w-16 h-1 mx-auto my-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
          style={{
            background: 'linear-gradient(to right, oklch(0.65 0.12 325), oklch(0.75 0.08 70), oklch(0.65 0.12 325))',
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-white/70 text-sm font-light">Deslize para descobrir</p>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/20 opacity-50" />
      <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full border border-white/10 opacity-30" />
    </section>
  );
}

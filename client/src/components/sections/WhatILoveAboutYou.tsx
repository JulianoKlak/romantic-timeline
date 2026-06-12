import { Sparkles } from 'lucide-react';

/**
 * What I Love About You - Design: Minimalismo Romântico
 * - Lista de qualidades
 * - Ícones delicados
 * - Layout emocional e bonito
 */

interface Quality {
  id: string;
  quality: string;
  description: string;
}

const QUALITIES: Quality[] = [
  {
    id: '1',
    quality: '... O Seu Sorriso',
    description: 'Que ilumina meus dias mais escuros',
  },
  {
    id: '2',
    quality: '... A Sua Gentileza',
    description: 'Que torna o mundo melhor ao seu redor',
  },
  {
    id: '3',
    quality: '...A Sua Inteligência',
    description: 'Que me inspira a ser melhor',
  },
  {
    id: '4',
    quality: '...O Seu Coração',
    description: 'Que é puro e generoso',
  },
  {
    id: '5',
    quality: '...O Seu Senso de Humor',
    description: 'Que ri das minhas piadas sem graça e me diverte fazendo eu rir sem parar',
  },
  {
    id: '6',
    quality: '...A Sua Lealdade',
    description: 'Que me faz sentir seguro e amado',
  },
];

export default function WhatILoveAboutYou() {
  return (
    <section className="w-full py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          O Que Eu Amo Em Você...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {QUALITIES.map((item, idx) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-6 rounded-lg transition-all duration-300 hover:shadow-md"
              style={{
                background: 'oklch(0.99 0.001 0)',
                border: '1px solid rgba(200, 162, 200, 0.2)',
                animationDelay: `${idx * 50}ms`,
              }}
            >
              {/* Icon */}
              <Sparkles
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: 'oklch(0.65 0.12 325)' }}
              />

              {/* Content */}
              <div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
                >
                  {item.quality}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div
          className="w-20 h-1 mx-auto mt-16"
          style={{
            background: 'linear-gradient(to right, oklch(0.65 0.12 325), oklch(0.75 0.08 70))',
          }}
        />
      </div>
    </section>
  );
}

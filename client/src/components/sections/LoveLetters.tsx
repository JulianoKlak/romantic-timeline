import { useState } from 'react';
import { Mail } from 'lucide-react';

/**
 * Love Letters - Design: Minimalismo Romântico
 * - Cartas de amor com aparência elegante
 * - Animação de abrir carta
 * - Mensagens personalizadas
 */

interface Letter {
  id: string;
  title: string;
  content: string;
}

const LETTERS: Letter[] = [
  {
    id: '1',
    title: 'Carta de Amor para você',
    content:
      'Desde o momento em que nos conhecemos, você trouxe uma luz especial à minha vida. Cada dia com você é um presente que eu não sabia que precisava. Eu sou encantado por você, pois minha vida ao seu lado é diferente de tudo que já vivi, conviver com você é um eterno aprendizado, sempre tenho novidades de você e isso me faz querer continuar.  Obrigado por ser exatamente quem você é.',
  },
  {
    id: '2',
    title: 'Sobre o Nosso Amor',
    content:
      'Meu amor, saiba que você é a minha melhor amiga, minha confidente, meu lar. Nos seus olhos encontro paz, nos seus abraços encontro força. Te amo mais a cada dia que passa.',
  },
  {
    id: '3',
    title: 'Promessas para o Futuro',
    content:
      'Eu prometo estar ao seu lado em todos os momentos. Vamos construir uma vida repleta de amor, risos e aventuras. Eu te garanto meu amor que o melhor ainda está por vir...',
  },
];

export default function LoveLetters() {
  const [openLetter, setOpenLetter] = useState<string | null>(null);

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          Cartas de Amor Para Você
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LETTERS.map((letter) => (
            <button
              key={letter.id}
              onClick={() => setOpenLetter(openLetter === letter.id ? null : letter.id)}
              className="group"
            >
              {/* Letter card */}
              <div
              className={`relative h-64 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between cursor-pointer transform group-hover:-translate-y-2 ${
                openLetter === letter.id ? 'ring-2' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, oklch(0.99 0.001 0) 0%, oklch(0.95 0.01 30) 100%)',
                outlineColor: 'oklch(0.65 0.12 325)',
              } as React.CSSProperties}
              >
                {/* Envelope icon */}
                <div className="flex justify-between items-start">
                  <h3
                    className="text-lg font-semibold flex-1 text-left"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
                  >
                    {letter.title}
                  </h3>
                  <Mail
                    className="w-6 h-6 flex-shrink-0 ml-2 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: 'oklch(0.65 0.12 325)' }}
                  />
                </div>

                {/* Content preview or full content */}
                <div className="text-left text-sm leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>
                  {openLetter === letter.id ? (
                    <p>{letter.content}</p>
                  ) : (
                    <p className="line-clamp-3">{letter.content}</p>
                  )}
                </div>

                {/* Read more indicator */}
                {openLetter !== letter.id && (
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mt-4"
                    style={{ color: 'oklch(0.65 0.12 325)' }}
                  >
                    Clique para ler
                  </p>
                )}
              </div>
            </button>
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

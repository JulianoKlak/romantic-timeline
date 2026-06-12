import { Star } from 'lucide-react';

/**
 * Future Timeline - Design: Minimalismo Romântico
 * - Timeline futura com sonhos e objetivos
 * - Layout elegante
 * - Animações ao scroll
 */

interface FutureDream {
  id: string;
  title: string;
  description: string;
}

const FUTURE_DREAMS: FutureDream[] = [
  {
    id: '1',
    title: 'As Próximas Viagens',
    description: 'Nós gostamos muito de explorar novos destinos e criar mais memórias juntos',
  },
  {
    id: '2',
    title: 'Morar Juntos',
    description: 'Construir um lar cheio de amor e segurança',
  },
  {
    id: '3',
    title: 'Casamento',
    description: 'Dizer sim e ficar para para sempre ao seu lado',
  },
  {
    id: '4',
    title: 'Filhos (Talvez kkkk)',
    description: 'Mas sempre sonho em criar uma família repleta de amor',
  },
  {
    id: '5',
    title: 'Envelhecer Juntos',
    description: 'Passar cada dia ao seu lado até o final',
  },
];

export default function FutureTimeline() {
  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          Nossos Sonhos
        </h2>

        <div className="space-y-6">
          {FUTURE_DREAMS.map((dream, idx) => (
            <div
              key={dream.id}
              className="flex items-start gap-6 p-6 rounded-lg hover:shadow-md transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, oklch(0.99 0.001 0) 0%, oklch(0.95 0.01 30) 100%)',
                border: '1px solid rgba(200, 162, 200, 0.2)',
              }}
            >
              {/* Number/Icon */}
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.65 0.12 325) 0%, oklch(0.75 0.08 70) 100%)',
                }}
              >
                <Star className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
                >
                  {dream.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>{dream.description}</p>
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

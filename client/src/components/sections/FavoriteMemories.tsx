import { Heart } from 'lucide-react';

/**
 * Favorite Memories - Design: Minimalismo Romântico
 * - Cards destacando memórias especiais
 * - Foto + descrição
 * - Animações suaves de aparecimento
 */

interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
}

const MEMORIES: Memory[] = [
  {
    id: '1',
    title: 'Estar juntos...',
    description: '...é uma das coisas que mais gostamos...',
    image: '/assets/foto-01.jpg',
  },
  {
    id: '2',
    title: 'Viagens',
    description: 'Gostamos de exploramos novos lugares, onde criamos memórias e nos aproximamos ainda mais....',
    image: '/assets/role-04.jpeg',
  },
  {
    id: '3',
    title: 'Curtir Shows em Noites Especiais',
    description: 'Conversas profundas, risos sinceros e momentos que nos fizeram conhecer melhor um ao outro.',
    image: '/assets/foto-03.jpg',
  },
];

export default function FavoriteMemories() {
  return (
    <section className="w-full py-15 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          Nossos Momentos Favoritos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MEMORIES.map((memory, idx) => (
            <div
              key={memory.id}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Image */}
              <div className="relative h-98 overflow-hidden">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div
                className="p-6"
                style={{
                  background: 'oklch(0.99 0.001 0)',
                  borderTop: '2px solid oklch(0.65 0.12 325)',
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Heart
                    className="w-5 h-5 flex-shrink-0 mt-1"
                    style={{ color: 'oklch(0.65 0.12 325)' }}
                    fill="currentColor"
                  />
                  <h3
                    className="text-lg font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
                  >
                    {memory.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>{memory.description}</p>
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

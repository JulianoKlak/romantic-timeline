import { useEffect, useState } from 'react';
import TimelineEvent from '@/components/TimelineEvent';

/**
 * Timeline - Design: Minimalismo Romântico
 * - Timeline vertical elegante com eventos alternando esquerda/direita
 * - Linhas delicadas conectando eventos
 * - Animações ao entrar na tela
 */

interface TimelineEventData {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
}

const TIMELINE_EVENTS: TimelineEventData[] = [
  {
    id: '1',
    date: '12 de Março de 2022',
    title: 'O dia em que nos vimos pela primeira vez',
    description: 'O dia que a menina franjudinha ficou me olhando durante o show dos cabeludos e o cara da camisa florida...',
    images: ['/src/assets/folder-02.png'],
  },
  {
    id: '2',
    date: '14 de Março de 2022',
    title: 'Dia que começamos nossas conversas no WhatsApp',
    description: 'Chamei aquela menina gata, começamos a conversar e descobrimos que tínhamos tantas coisas em comum...',
    images: ['/src/assets/gata-01.jpg'],
  },
  {
    id: '3',
    date: '1º de Abril de 2022',
    title: 'Nosso primeiro beijo',
    description: 'Depois de alguns dias conversando no WhatsApp, tivemos nossa primeira interação pessoal e desde então não nos deixamos mais...',
    images: ['/src/assets/folder-01.png'],
  },
  {
    id: '4',
    date: '22 de Maio de 2022',
    title: 'O dia que fomos na noite dos museus e curtimos o show dos Replicantes',
    description: 'Uma noite caótica em Porto Alegre, mas terminamos o dia bem...',
    images: ['/src/assets/role-03.jpg'],
  },
  {
    id: '5',
    date: '12 de Junho de 2022',
    title: 'Nosso primeiro dia dos namorados juntos',
    description: 'Rolê na redenção, bebemos vinho e aproveitamos o dia de sol juntos...',
    images: ['/src/assets/foto-capa.jpg'],
  },
  {
    id: '6',
    date: '...algum dia entre Junho e Julho de 2022',
    title: 'Uma lembrança dos nossos rolês',
    description: 'Esse dia estivemos num estúdio para gravar um podcast da Juna, foi um dia divertido',
    images: ['/src/assets/role-01.jpg'],
  },
  {
    id: '7',
    date: '20 de Agosto de 2022',
    title: 'Algum rolê que a gente fez nesse dia',
    description: 'Eu e a minha gostosa...',
    images: ['/src/assets/20-08-2022.jpg'],
  },
  {
    id: '8',
    date: '17 de Outubro de 2022',
    title: 'Primeira vez que te levei pra conhecer a vovó',
    description: 'Minha gata ruiva friolenta na praia...',
    images: ['/src/assets/tramanda-01.jpg'],
  },
  {
    id: '9',
    date: '25 de Dezembro de 2022',
    title: 'Nosso primeiro Natal Juntos',
    description: 'Eu e a minha ruiva gostosa...',
    images: ['/src/assets/natal-2022.jpg'],
  },
];

export default function Timeline() {
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = entry.target.getAttribute('data-event-id');
            if (eventId) {
              setVisibleEvents((prev) => new Set(prev).add(eventId));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('[data-event-id]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="w-full py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl text-center mb-20 text-charcoal"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nossa História
        </h2>

        {/* Timeline container */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, oklch(0.65 0.12 325), oklch(0.75 0.08 70), oklch(0.65 0.12 325))',
            }}
          />

          {/* Events */}
          <div className="space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                isVisible={visibleEvents.has(event.id)}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Add more events note */}
        <div className="text-center mt-16" style={{ color: 'rgba(21, 21, 21, 0.6)' }}>
          <p className="text-sm">
            Novas histórias em construção...
          </p>
        </div>
      </div>
    </section>
  );
}

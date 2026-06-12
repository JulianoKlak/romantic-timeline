import { useEffect, useState } from 'react';

/**
 * Time Counter - Design: Minimalismo Romântico
 * - Exibe anos, meses, dias e horas juntos
 * - Animação suave nos números (contagem)
 * - Layout minimalista com espaço generoso
 */

interface TimeData {
  years: number;
  months: number;
  days: number;
  hours: number;
}

function CountUpNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function TimeCounter() {
  const [timeData, setTimeData] = useState<TimeData>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // CONFIGURAR DATA AQUI: Altere para a data em que vocês começaram a namorar
    const startDate = new Date('2022-04-01T00:00:00');
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours();

    if (days < 0) {
      months--;
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setTimeData({ years, months, days, hours });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('time-counter');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="time-counter"
      className="w-full py-24 px-4 bg-gradient-to-b from-white to-cream"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          Contador do Tempo que estamos Juntos
        </h2>

        {/* Counter grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Years */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'oklch(0.65 0.12 325)' }}>
              {isVisible ? <CountUpNumber target={timeData.years} /> : '0'}
            </div>
            <p className="text-sm md:text-base" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>Anos</p>
          </div>

          {/* Months */}
          <div
            className={`text-center transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'oklch(0.75 0.08 70)' }}>
              {isVisible ? <CountUpNumber target={timeData.months} /> : '0'}
            </div>
            <p className="text-sm md:text-base" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>Meses</p>
          </div>

          {/* Days */}
          <div
            className={`text-center transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'oklch(0.65 0.12 325)' }}>
              {isVisible ? <CountUpNumber target={timeData.days} /> : '0'}
            </div>
            <p className="text-sm md:text-base" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>Dias</p>
          </div>

          {/* Hours */}
          <div
            className={`text-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="text-5xl md:text-6xl font-bold mb-2" style={{ color: 'oklch(0.75 0.08 70)' }}>
              {isVisible ? <CountUpNumber target={timeData.hours} /> : '0'}
            </div>
            <p className="text-sm md:text-base" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>Horas</p>
          </div>
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

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TimeCounter from '@/components/sections/TimeCounter';
import Timeline from '@/components/sections/Timeline';
import Gallery from '@/components/sections/Gallery';
import LoveLetters from '@/components/sections/LoveLetters';
import FavoriteMusic from '@/components/sections/FavoriteMusic';
import FavoriteMemories from '@/components/sections/FavoriteMemories';
import WhatILoveAboutYou from '@/components/sections/WhatILoveAboutYou';
import FutureTimeline from '@/components/sections/FutureTimeline';
import FinalMessage from '@/components/sections/FinalMessage';
import Closing from '@/components/sections/Closing';

/**
 * Design Philosophy: Minimalismo Romântico Contemporâneo
 * - Espaço negativo generoso
 * - Tipografia elegante (Playfair Display + Lora)
 * - Paleta restrita (branco, rosa dusty, ouro, charcoal)
 * - Animações sutis que sussurram
 * - Foco nas fotos e histórias
 */

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress(windowHeight > 0 ? scrolled / windowHeight : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-charcoal overflow-x-hidden">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-dusty via-gold-soft to-rose-dusty z-50"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Main content */}
      <main>
        <HeroSection />
        <TimeCounter />
        <Timeline />
        <Gallery />
        <LoveLetters />
        <FavoriteMusic />
        <FavoriteMemories />
        <WhatILoveAboutYou />
        <FutureTimeline />
        <FinalMessage />
        <Closing />
      </main>
    </div>
  );
}

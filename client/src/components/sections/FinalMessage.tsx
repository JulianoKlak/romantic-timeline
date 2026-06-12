/**
 * Final Message - Design: Minimalismo Romântico
 * - Grande declaração de amor
 * - Texto centralizado
 * - Foto especial ao fundo
 * - Animação suave
 */

export default function FinalMessage() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden"
      style={{
        backgroundImage:
          'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663095196285/baYFX7VUs84uiwBRx95nEf/love-letter-aesthetic-UFrjVr6wa8uiMHCRB7xrMe.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Você é meu maior amor
        </h2>

        <p
          className="text-xl md:text-2xl text-white/90 font-light leading-relaxed"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Cada momento com você é um presente. Cada dia é uma nova razão para te amar ainda mais. Você é minha
          melhor escolha, meu maior sonho realizado.
        </p>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mt-12">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: 'oklch(0.65 0.12 325)' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: 'oklch(0.75 0.08 70)' }}
          />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: 'oklch(0.65 0.12 325)' }}
          />
        </div>
      </div>
    </section>
  );
}

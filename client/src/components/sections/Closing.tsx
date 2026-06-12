/**
 * Closing - Design: Minimalismo Romântico
 * - Mensagem final de gratidão
 * - Nome do casal
 * - Data de criação do site
 */

export default function Closing() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="w-full py-24 px-4 bg-charcoal text-black">
      <div className="max-w-2xl mx-auto text-center">
        {/* Main message */}
        <h2
          className="text-4xl md:text-5xl font-bold mb-8 text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Eu Amo Muito Você Mariazinea!
        </h2>

        <p
          className="text-xl md:text-2xl mb-12 font-light leading-relaxed text-black/90"
          style={{ fontFamily: "'Lora', serif" }}
        >
          Obrigado por fazer parte da minha vida ❤️
        </p>

        {/* Couple names */}
        <div className="mb-12">
          <p className="text-lg" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>Juliano & Maria</p>
        </div>

        {/* Decorative line */}
        <div
          className="w-20 h-1 mx-auto mb-12"
          style={{
            background: 'linear-gradient(to right, oklch(0.65 0.12 325), oklch(0.75 0.08 70))',
          }}
        />

        {/* Date */}
        <p className="text-sm opacity-60">Dia 12 de Junho de 2026</p>

        {/* Heart decoration */}
        <div className="mt-8 text-3xl">❤️</div>
      </div>
    </section>
  );
}

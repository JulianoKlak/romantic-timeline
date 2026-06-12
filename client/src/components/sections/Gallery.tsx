import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Gallery - Design: Minimalismo Romântico
 * - Grid moderno de fotos
 * - Zoom elegante ao tocar
 * - Lightbox com transições suaves
 */

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/src/assets/foto-02.jpg',
    '/src/assets/role-02.jpg',
    '/src/assets/foto-04.jpg',
    '/src/assets/foto-05.jpg',
  ];

  return (
    <section className="w-full py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          Galeria de Momentos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="overflow-hidden rounded-lg group h-64 relative"
            >
              <img
                src={img}
                alt={`Momento ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-2xl max-h-[80vh] relative">
              <img
                src={selectedImage}
                alt="Expanded"
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

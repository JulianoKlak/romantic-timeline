import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface TimelineEventData {
  id: string;
  date: string;
  title: string;
  description: string;
  images: string[];
}

interface TimelineEventProps {
  event: TimelineEventData;
  isVisible: boolean;
  isLeft: boolean;
}

export default function TimelineEvent({ event, isVisible, isLeft }: TimelineEventProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div
      data-event-id={event.id}
      className={`flex items-center gap-8 md:gap-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content side */}
      <div
        className={`flex-1 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        {/* Card */}
        <div
          className="p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          style={{
            background: 'oklch(0.99 0.001 0)',
            border: '1px solid rgba(200, 162, 200, 0.2)',
          }}
        >
          {/* Date */}
          <p
            className="text-sm font-semibold mb-2 uppercase tracking-wider"
            style={{ color: 'oklch(0.65 0.12 325)' }}
          >
            {event.date}
          </p>

          {/* Title */}
          <h3
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
          >
            {event.title}
          </h3>

          {/* Description */}
          <p className="mb-6 leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.8)' }}>{event.description}</p>

          {/* Images gallery */}
          {event.images.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {event.images.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(image)}
                  className="relative overflow-hidden rounded-lg group"
                >
                  <img
                    src={image}
                    alt={`${event.title} - ${idx + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Timeline dot */}
      <div className="flex-shrink-0">
        <div
          className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
          style={{
            background: 'oklch(0.65 0.12 325)',
            boxShadow: '0 0 20px rgba(200, 162, 200, 0.4)',
          }}
        />
      </div>

      {/* Image side (empty for spacing) */}
      <div className="flex-1" />

      {/* Lightbox modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-2xl max-h-[80vh] relative">
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-300"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

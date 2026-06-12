import { Music } from 'lucide-react';

/**
 * Favorite Music - Design: Minimalismo Romântico
 * - Incorporação de músicas do Spotify/YouTube
 * - Visual elegante
 * - Frases relacionadas a cada música
 */

interface Song {
  id: string;
  title: string;
  artist: string;
  description: string;
  spotifyId?: string;
}

const SONGS: Song[] = [
  {
    id: '1',
    title: '...please, don´t strip my mind...',
    artist: 'Show das Manyacs e Show dos RHCP',
    description: 'Sempre que ouço essa música eu penso em você...',
    spotifyId: '0J3ytriezGZ3KCREfHKDOI',
  },
  {
    id: '2',
    title: 'O nome dela é Miss Lexotan 6mg garota...',
    artist: 'Maria é fã #1 Jupiter Apple',
    description: 'Aquela música que define a garota que eu conheci em 2022...',
    spotifyId: '01Dm5A6bxtcA1UPHeJh2lZ',
  },
  {
    id: '3',
    title: '"essa música me lembra as trilhas sonoras das novelas do Jorge Amado" - Oliveira, Maria',
    artist: 'MPB',
    description: 'Trilha sonora dos momentos culinários da Mariazinea',
    spotifyId: '2KIs0b240WWaiupuAEhbaZ',
  },
];

export default function FavoriteMusic() {
  return (
    <section className="w-full py-24 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl text-center mb-16"
          style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
        >
          As Músicas que me fazem lembrar de você...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SONGS.map((song) => (
            <div
              key={song.id}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              style={{
                background: 'oklch(0.99 0.001 0)',
                border: '1px solid rgba(200, 162, 200, 0.2)',
              }}
            >
              {/* Music icon placeholder */}
              {song.spotifyId ? (
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  allowFullScreen
                  title={`Spotify player - ${song.title}`}
                  style={{ borderRadius: 12 }}
                />
              ) : (
                <div
                  className="h-40 flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.65 0.12 325) 0%, oklch(0.75 0.08 70) 100%)',
                  }}
                >
                  <Music className="w-16 h-16 text-white opacity-80" />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", color: 'oklch(0.15 0.02 65)' }}
                >
                  {song.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(21, 21, 21, 0.6)' }}>{song.artist}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(21, 21, 21, 0.7)' }}>{song.description}</p>

                <p className="text-xs mt-4" style={{ color: 'rgba(21, 21, 21, 0.5)' }}>
                
                </p>
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


type DraftMovie = {
  title: string;
  tier: 'Blockbuster' | 'Strong' | 'Mid' | 'Sleeper';
  floor: number;
  release: string;
  owner: string | null;
  status: 'Available' | 'Drafted';
  poster: string;
};

const draftPool: DraftMovie[] = [
  {
    title: 'The Mandalorian & Grogu',
    tier: 'Blockbuster',
    floor: 100,
    release: '2026-05-22',
    owner: 'Opening Weekend Warriors',
    status: 'Drafted',
    poster: '/posters/mandalorian-grogu.jpg',
  },
  {
    title: 'Toy Story 5',
    tier: 'Blockbuster',
    floor: 100,
    release: '2026-06-19',
    owner: 'The Popcorn Picks',
    status: 'Drafted',
    poster: '/posters/toy-story-5.jpg',
  },
  {
    title: 'Supergirl',
    tier: 'Blockbuster',
    floor: 100,
    release: '2026-06-26',
    owner: null,
    status: 'Available',
    poster: '/posters/supergirl.jpg',
  },
  {
    title: 'Spider-Man: Brand New Day',
    tier: 'Blockbuster',
    floor: 100,
    release: '2026-07-24',
    owner: null,
    status: 'Available',
    poster: '/posters/spiderman-brand-new-day.jpg',
  },
  {
    title: 'Backrooms',
    tier: 'Sleeper',
    floor: 5,
    release: '2026-05-28',
    owner: null,
    status: 'Available',
    poster: '/posters/backrooms.jpg',
  },
  {
    title: 'Masters of the Universe',
    tier: 'Strong',
    floor: 50,
    release: '2026-06-05',
    owner: null,
    status: 'Available',
    poster: '/posters/masters-of-the-universe.jpg',
  },
  {
    title: 'Scary Movie 6',
    tier: 'Mid',
    floor: 20,
    release: '2026-06-12',
    owner: null,
    status: 'Available',
    poster: '/posters/scary-movie-6.jpg',
  },
  {
    title: 'The Odyssey',
    tier: 'Blockbuster',
    floor: 100,
    release: '2026-07-17',
    owner: null,
    status: 'Available',
    poster: '/posters/the-odyssey.jpg',
  },
  {
    title: 'Coyote vs. Acme',
    tier: 'Sleeper',
    floor: 5,
    release: '2026-08-28',
    owner: null,
    status: 'Available',
    poster: '/posters/coyote-vs-acme.jpg',
  },
];

function getTierColor(tier: DraftMovie['tier']) {
  if (tier === 'Blockbuster') return '#111827';
  if (tier === 'Strong') return '#1d4ed8';
  if (tier === 'Mid') return '#475569';
  return '#166534';
}

export default function DraftPage() {
  return (
    <main className="page">
      <div className="card" style={{ marginBottom: '20px' }}>
        <div className="hero-actions">
          <a className="button" href="/">Home</a>
          <a className="button button-outline" href="/#leaderboard">Leaderboard</a>
          <a className="button button-outline" href="/rules">Rules</a>
          <a className="button button-outline" href="/admin">Admin</a>
        </div>
      </div>

      <section className="card">
        <div className="badges">
          <span className="badge">Movie Fantasy League</span>
          <span className="badge badge-outline">Draft Room</span>
        </div>

        <h1 style={{ marginTop: '16px' }}>2026 Draft Board</h1>
        <p className="hero-copy" style={{ marginTop: '8px' }}>
          Track available movies, drafted picks, and starting bid floors.
        </p>
      </section>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {draftPool.map((movie) => (
          <div key={movie.title} className="card">
            <div
              style={{
                width: '100%',
                aspectRatio: '2 / 3',
                overflow: 'hidden',
                borderRadius: '16px',
                background: '#e2e8f0',
                marginBottom: '14px',
              }}
            >
              <img
                src={movie.poster}
                alt={`${movie.title} poster`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 10px',
                  borderRadius: '999px',
                  background: getTierColor(movie.tier),
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                {movie.tier}
              </span>

              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 10px',
                  borderRadius: '999px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12px',
                  fontWeight: 700,
                }}
              >
                ${movie.floor} floor
              </span>

              <span
                style={{
                  display: 'inline-block',
                  padding: '6px 10px',
                  borderRadius: '999px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12px',
                  fontWeight: 700,
                  background: movie.status === 'Drafted' ? '#f1f5f9' : 'white',
                }}
              >
                {movie.status}
              </span>
            </div>

            <h2 style={{ margin: '0 0 8px', fontSize: '20px' }}>{movie.title}</h2>

            <p className="muted" style={{ marginBottom: '6px' }}>
              Release: {movie.release}
            </p>

            <p className="muted" style={{ marginBottom: '14px' }}>
              Owner: {movie.owner ?? 'Available'}
            </p>

            {movie.status === 'Drafted' ? (
              <div className="note">
                <strong>Picked by:</strong> {movie.owner}
              </div>
            ) : (
              <div className="note">
                <strong>Open for bidding</strong>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

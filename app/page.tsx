const teams = [
  { id: 1, name: 'Reel Prophets', owner: 'Richard', points: 412, budgetLeft: 85, rank: 1, trend: '↑' },
  { id: 2, name: 'Box Office Baptists', owner: 'Amber', points: 401, budgetLeft: 40, rank: 2, trend: '↑' },
  { id: 3, name: 'Cinema Sleepers', owner: 'Marcus', points: 388, budgetLeft: 120, rank: 3, trend: '↓' },
  { id: 4, name: 'Opening Weekend Kings', owner: 'Jada', points: 360, budgetLeft: 200, rank: 4, trend: '↑' },
];

const movies = [
  { title: 'Toy Story 5', release: '2026-06-19', owner: 'Reel Prophets', opening: 132, rt: 88, imdb: 7.9, community: 4, total: 231, tier: 'Blockbuster' },
  { title: 'Supergirl', release: '2026-06-26', owner: 'Box Office Baptists', opening: 96, rt: 81, imdb: 7.1, community: 3, total: 187, tier: 'Blockbuster' },
  { title: 'Clayface', release: '2026-09-11', owner: 'Cinema Sleepers', opening: 44, rt: 74, imdb: 6.8, community: 5, total: 123, tier: 'Sleeper' },
  { title: 'The Mandalorian and Grogu', release: '2026-05-22', owner: 'Opening Weekend Kings', opening: 118, rt: 79, imdb: 7.3, community: 2, total: 206, tier: 'Blockbuster' },
];

const roster = [
  { title: 'Toy Story 5', price: 410, status: 'Released', score: 231 },
  { title: 'Coyote v. Acme', price: 95, status: 'Released', score: 134 },
  { title: 'Resident Evil', price: 180, status: 'Upcoming', score: 0 },
  { title: 'Backrooms', price: 55, status: 'Upcoming', score: 0 },
  { title: 'The Odyssey', price: 175, status: 'Upcoming', score: 0 },
];

function StatCard({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="card stat-card">
      <div>
        <div className="muted">{label}</div>
        <div className="stat">{value}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <div className="badges">
           <span className="badge">Movie Fantasy League</span>
<span className="badge badge-outline">2026 Beta Season</span>
          </div>
          <h1>Movie Fantasy League is where your movie picks become your season.</h1>
          <p className="hero-copy">
            Build your roster, follow opening weekend scores, and compete with friends all season from May through December.
          </p>
        </div>
       <div className="hero-actions">
  <a className="button" href="#leaderboard">View Standings</a>
  <a className="button button-outline" href="/rules">Rules</a>
</div>
      </section>

      <section className="grid-four">
        <StatCard label="Teams" value={8} />
        <StatCard label="Movies Drafted" value={40} />
        <StatCard label="Budget Per Team" value={1000} />
        <StatCard label="Season Window" value="May–Dec" />
      </section>

      <section className="content-grid">
        <div className="column-left">
          <div className="card" id="leaderboard">
            <div className="section-head">
              <h2>Live Standings</h2>
              <p className="muted">Updated after each scoring lock.</p>
            </div>
            <div className="stack">
              {teams.map((team) => (
                <div key={team.id} className="list-row">
                  <div className="row-left">
                    <div className="rank">#{team.rank}</div>
                    <div>
                      <div className="row-title">{team.name}</div>
                      <div className="muted">Owner: {team.owner}</div>
                    </div>
                  </div>
                  <div className="row-right">
                    <div><span className="muted">Points</span><strong>{team.points}</strong></div>
                    <div><span className="muted">Budget</span><strong>{team.budgetLeft}</strong></div>
                    <div><span className="muted">Trend</span><strong>{team.trend}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="section-head">
              <h2>Movie Performance</h2>
              <p className="muted">Opening box office + RT lock + IMDb lock + community bonus.</p>
            </div>
            <div className="stack">
              {movies.map((movie) => (
                <div key={movie.title} className="movie-card">
                  <div className="movie-top">
                    <div>
                      <div className="row-title">{movie.title}</div>
                      <div className="muted">Owned by {movie.owner} • Releases {movie.release}</div>
                    </div>
                    <div className="total-box">
                      <div className="muted">Total</div>
                      <strong>{movie.total}</strong>
                    </div>
                  </div>
                  <div className="grid-four inner-grid">
                    <div className="mini-box"><span className="muted">Opening</span><strong>{movie.opening}</strong></div>
                    <div className="mini-box"><span className="muted">RT Lock</span><strong>{movie.rt}</strong></div>
                    <div className="mini-box"><span className="muted">IMDb Lock</span><strong>{movie.imdb}</strong></div>
                    <div className="mini-box"><span className="muted">Community</span><strong>{movie.community}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="column-right">
          <div className="card">
            <div className="section-head">
              <h2>My Team</h2>
              <p className="muted">What a logged-in user would see first.</p>
            </div>
            <div className="team-box">
              <div className="team-top">
                <div>
                  <div className="row-title">Reel Prophets</div>
                  <div className="muted">Budget remaining: 85</div>
                </div>
                <span className="badge">#1 Overall</span>
              </div>
            </div>
            <div className="stack">
              {roster.map((item) => (
                <div key={item.title} className="list-row">
                  <div>
                    <div className="row-title">{item.title}</div>
                    <div className="muted">Auction price: {item.price} • {item.status}</div>
                  </div>
                  <div className="total-box">
                    <div className="muted">Score</div>
                    <strong>{item.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" id="rules">
            <div className="section-head">
              <h2>MVP Pages</h2>
              <p className="muted">What you should build first.</p>
            </div>
            <div className="stack">
              <div className="note"><strong>1. Home / Landing:</strong> explain the game, current standings, join button.</div>
              <div className="note"><strong>2. League Dashboard:</strong> leaderboard, movie scores, waiver claims.</div>
              <div className="note"><strong>3. Team Page:</strong> each player sees their roster, budget, total points.</div>
              <div className="note"><strong>4. Admin Panel:</strong> enter scores once per week and update standings.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

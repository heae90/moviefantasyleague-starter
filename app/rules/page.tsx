
export default function RulesPage() {
  return (
    <main className="page">
      <section className="card">
        <div className="badges">
          <span className="badge">Movie Fantasy League</span>
          <span className="badge badge-outline">Rules</span>
        </div>

        <h1 style={{ marginTop: '16px' }}>League Rules</h1>
        <p className="hero-copy" style={{ marginTop: '8px' }}>
          Here’s how the beta season works.
        </p>

        <div className="hero-actions" style={{ marginTop: '20px' }}>
          <a className="button" href="/">Home</a>
          <a className="button button-outline" href="/#leaderboard">Leaderboard</a>
        </div>
      </section>

      <section className="card" style={{ marginTop: '20px' }}>
        <h2>Season Format</h2>
        <ul>
          <li>Each player drafts 5 unreleased movies.</li>
          <li>The season runs from May through December.</li>
          <li>The league is a free-for-all leaderboard, not head-to-head.</li>
          <li>The team with the most points at the end of the season wins.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: '20px' }}>
        <h2>Scoring</h2>
        <ul>
          <li>Opening weekend domestic box office is the main scoring stat.</li>
          <li>Rotten Tomatoes score is locked on the Monday after opening weekend.</li>
          <li>IMDb rating is locked on the Monday after opening weekend.</li>
          <li>An optional community bonus may add or subtract a small number of points.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: '20px' }}>
        <h2>Waiver Rule</h2>
        <ul>
          <li>Each team gets 1 waiver move during the season.</li>
          <li>You can only add an undrafted movie before it releases.</li>
          <li>Waiver priority can go to the lowest-ranked team first.</li>
        </ul>
      </section>

      <section className="card" style={{ marginTop: '20px' }}>
        <h2>Beta Notes</h2>
        <ul>
          <li>This is the first test season of the league.</li>
          <li>Rules may be adjusted slightly before the full launch.</li>
          <li>The winner receives the season prize and bragging rights.</li>
        </ul>
      </section>
    </main>
  );
}


export default function AdminPage() {
  return (
    <main className="page">

      <div className="card">
        <h1>Admin Panel</h1>
        <p className="hero-copy">Enter movie scores here.</p>

        <div className="hero-actions" style={{ marginTop: '20px' }}>
          <a className="button" href="/">Home</a>
          <a className="button button-outline" href="/rules">Rules</a>
        </div>
      </div>

      <div className="card" style={{ marginTop: '20px' }}>
        <h2>Enter Movie Score</h2>

        <p>Movie: Toy Story 5</p>

        <label>Opening Weekend</label>
        <input type="text" placeholder="132" />

        <label>RT Score</label>
        <input type="text" placeholder="88" />

        <label>IMDb</label>
        <input type="text" placeholder="7.9" />

        <label>Community Bonus</label>
        <input type="text" placeholder="4" />

        <br /><br />

        <button>Save Score</button>
      </div>

    </main>
  );
}

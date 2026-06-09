export default function Home() {
  const standings = [
    ["1", "Reel Prophets", "Richard", "128"],
    ["2", "Box Office Baptists", "Carlos", "119"],
    ["3", "Cinema Sleepers", "Amber", "104"],
    ["4", "Opening Weekend Kings", "Marcus", "97"],
  ];

  const movies = [
    ["Avengers: Secret Wars", "Dec. 17, 2027"],
    ["Man of Tomorrow", "July 9, 2027"],
    ["The Batman Part II", "Oct. 1, 2027"],
  ];

  return (
    <main>
      <style>{`
        body { margin: 0; background: #0b0b10; color: white; font-family: Arial, sans-serif; }
        .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
        .hero { background: linear-gradient(135deg, #7f1d1d, #111827); padding: 50px 24px; }
        h1 { font-size: 48px; margin: 10px 0; }
        h2 { margin-top: 0; }
        .grid { display: grid; gap: 20px; }
        .cards { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }
        .two { grid-template-columns: 2fr 1fr; }
        .card { background: #18181b; border: 1px solid #27272a; border-radius: 18px; padding: 20px; box-shadow: 0 10px 30px #0004; }
        .stat { font-size: 32px; font-weight: 900; color: #f87171; }
        table { width: 100%; border-collapse: collapse; }
        th, td { padding: 12px; border-bottom: 1px solid #333; text-align: left; }
        th { color: #fca5a5; }
        .movies { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
        .poster { height: 300px; border-radius: 14px; background: linear-gradient(135deg, #991b1b, #1f2937); display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px; font-size: 28px; font-weight: 900; }
        .btn { display: inline-block; margin-top: 14px; background: #dc2626; color: white; padding: 12px 16px; border-radius: 12px; text-decoration: none; font-weight: 700; }
        .podcast { background: #111827; border-left: 5px solid #ef4444; }
        @media (max-width: 800px) { .two { grid-template-columns: 1fr; } h1 { font-size: 36px; } }
      `}</style>

      <section className="hero">
        <div className="wrap">
          <p>🎬 Movie Fantasy League</p>
          <h1>CineDraft League Hub</h1>
          <p>Your ESPN-style home for standings, movie predictions, podcast updates, and league trash talk.</p>
        </div>
      </section>

      <section className="wrap grid cards">
        <div className="card"><p>Current Leader</p><div className="stat">Richard</div></div>
        <div className="card"><p>League Members</p><div className="stat">8</div></div>
        <div className="card"><p>Official Movies</p><div className="stat">24</div></div>
        <div className="card"><p>Next Lock</p><div className="stat">Friday</div></div>
      </section>

      <section className="wrap grid two">
        <div className="card">
          <h2>Standings</h2>
          <table>
            <thead>
              <tr><th>Rank</th><th>Team</th><th>Owner</th><th>Pts</th></tr>
            </thead>
            <tbody>
              {standings.map((s) => (
                <tr key={s[0]}>
                  <td>#{s[0]}</td><td>{s[1]}</td><td>{s[2]}</td><td>{s[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card podcast">
          <h2>Latest Podcast Episode</h2>
          <p><b>Fresh Takes / CineDraft Corner</b></p>
          <p>Add your Spotify, Apple, YouTube, or Buzzsprout link here.</p>
          <a className="btn" href="#" target="_blank">Listen Now</a>
        </div>
      </section>

      <section className="wrap">
        <h2>Upcoming 2027 League Movies</h2>
        <div className="grid movies">
          {movies.map((m) => (
            <div className="card" key={m[0]}>
              <div className="poster">{m[0]}</div>
              <h2>{m[0]}</h2>
              <p>Release: {m[1]}</p>
              <a className="btn" href="https://boxofficecalls.com/" target="_blank">Make Prediction</a>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap grid two">
        <div className="card">
          <h2>League News</h2>
          <p>🔥 Richard holds first place.</p>
          <p>💀 Worst prediction earns the Box Office Bomb badge.</p>
          <p>🎙 Weekly standings get covered on the podcast.</p>
        </div>

        <div className="card">
          <h2>Discussion Board</h2>
          <p><b>Commissioner:</b> Only official league slate movies count.</p>
          <p><b>Richard:</b> Secret Wars might decide the whole season.</p>
        </div>
      </section>
    </main>
  );
}

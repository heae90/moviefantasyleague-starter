export default function Home() {
  const standings = [
    ["1", "Reel Prophets", "Richard", "2-0", "26"],
    ["2", "Box Office Baptists", "Carlos", "1-1", "19"],
    ["3", "Cinema Sleepers", "Amber", "0-2", "12"],
    ["4", "Opening Weekend Kings", "Marcus", "0-2", "8"],
  ];

  const movies = [
    {
      title: "Toy Story 5",
      date: "June 19, 2026",
      poster: "https://www.impawards.com/2026/posters/toy_story_five_ver2.jpg",
    },
    {
      title: "Supergirl",
      date: "June 26, 2026",
      poster: "https://image.tmdb.org/t/p/w500/7Gk8ZpFHbDPVQ4gD9ACtDnp1b6I.jpg",
    },
    {
      title: "The Odyssey",
      date: "July 17, 2026",
      poster: "https://www.impawards.com/2026/posters/odyssey_xxlg.jpg",
    },
  ];

  return (
    <main>
      <style>{`
        body {
          margin: 0;
          background: #050607;
          color: #f5f1e8;
          font-family: Georgia, 'Times New Roman', serif;
        }

        .hero {
          background:
            linear-gradient(rgba(0,0,0,.72), rgba(0,0,0,.85)),
            radial-gradient(circle at top, #1e3a5f, #050607 60%);
          border-bottom: 1px solid #d6b15e55;
          padding: 56px 24px;
        }

        .wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 24px;
        }

        .eyebrow {
          color: #d6b15e;
          letter-spacing: .22em;
          text-transform: uppercase;
          font-size: 13px;
          font-weight: bold;
        }

        h1 {
          font-size: 54px;
          margin: 10px 0;
          letter-spacing: -1px;
        }

        h2 {
          margin-top: 0;
          color: #f7d98b;
        }

        p {
          line-height: 1.5;
        }

        .grid {
          display: grid;
          gap: 20px;
        }

        .cards {
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
        }

        .two {
          grid-template-columns: 2fr 1fr;
        }

        .card {
          background: #111317;
          border: 1px solid #d6b15e33;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 16px 35px #0008;
        }

        .stat {
          font-size: 34px;
          font-weight: 900;
          color: #7db7ff;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 13px;
          border-bottom: 1px solid #ffffff18;
          text-align: left;
        }

        th {
          color: #d6b15e;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        .movies {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }

        .poster {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 14px;
          border: 1px solid #d6b15e55;
          background: #222;
        }

        .btn {
          display: inline-block;
          margin-top: 14px;
          background: #d6b15e;
          color: #050607;
          padding: 12px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 900;
        }

        .podcast {
          background: linear-gradient(135deg, #0d1b2a, #111317);
          border-left: 5px solid #7db7ff;
        }

        .rulebox {
          background: linear-gradient(135deg, #161616, #0d1b2a);
        }

        @media (max-width: 800px) {
          .two {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 38px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Movie Fantasy League</p>
          <h1>CineDraft League Hub</h1>
          <p>
            A vintage cinema-style home for standings, opening weekend predictions,
            podcast updates, league news, and friendly trash talk.
          </p>
        </div>
      </section>

      <section className="wrap grid cards">
        <div className="card"><p>Current Leader</p><div className="stat">Richard</div></div>
        <div className="card"><p>League Members</p><div className="stat">8</div></div>
        <div className="card"><p>Official Slate</p><div className="stat">24</div></div>
        <div className="card"><p>Next Lock</p><div className="stat">Friday</div></div>
      </section>

      <section className="wrap grid two">
        <div className="card">
          <h2>Standings</h2>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Owner</th>
                <th>Record</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((s) => (
                <tr key={s[0]}>
                  <td>#{s[0]}</td>
                  <td>{s[1]}</td>
                  <td>{s[2]}</td>
                  <td>{s[3]}</td>
                  <td>{s[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card podcast">
          <h2>Latest Podcast Episode</h2>
          <p><b>Fresh Takes / CineDraft Corner</b></p>
          <p>Drop your latest Spotify, Apple, YouTube, or Buzzsprout link here.</p>
          <a className="btn" href="#" target="_blank">Listen Now</a>
        </div>
      </section>

      <section className="wrap">
        <h2>Upcoming 2026 League Movies</h2>
        <div className="grid movies">
          {movies.map((m) => (
            <div className="card" key={m.title}>
              <img className="poster" src={m.poster} alt={m.title} />
              <h2>{m.title}</h2>
              <p>Release: {m.date}</p>
              <a className="btn" href="https://boxofficecalls.com/" target="_blank">Make Prediction</a>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap grid two">
        <div className="card rulebox">
          <h2>How Scoring Works</h2>
          <p><b>Everyone predicts opening weekend box office.</b></p>
          <p>Closest prediction: 10 pts + win.</p>
          <p>Second closest: 6 pts.</p>
          <p>Third closest: 3 pts.</p>
          <p>Within $1M of actual: +3 bonus.</p>
          <p>Worst miss earns the Box Office Bomb badge.</p>
        </div>

        <div className="card">
          <h2>Discussion Board</h2>
          <p><b>Commissioner:</b> Official league slate only.</p>
          <p><b>Richard:</b> The Odyssey might be the chaos movie.</p>
        </div>
      </section>
    </main>
  );
}

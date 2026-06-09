const standings = [
  { rank: 1, team: "Reel Prophets", owner: "Richard", pts: 128, record: "7-2" },
  { rank: 2, team: "Box Office Baptists", owner: "Carlos", pts: 119, record: "6-3" },
  { rank: 3, team: "Cinema Sleepers", owner: "Amber", pts: 104, record: "5-4" },
  { rank: 4, team: "Opening Weekend Kings", owner: "Marcus", pts: 97, record: "4-5" },
];

const movies = [
  {
    title: "Superman",
    date: "July 11, 2025",
    poster: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    lock: "Predictions lock Friday at noon",
  },
  {
    title: "The Fantastic Four: First Steps",
    date: "July 25, 2025",
    poster: "https://image.tmdb.org/t/p/w500/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
    lock: "Coming soon",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#101014] text-white">
      <section className="bg-gradient-to-r from-red-900 via-zinc-950 to-black px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-red-300">
            Movie Fantasy League
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight">
            CineDraft League Hub
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-300">
            The ESPN-style home for your movie prediction league. Track standings,
            upcoming movie calls, league news, and weekly trash talk.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-4">
        {[
          ["Current Leader", "Richard"],
          ["League Members", "8"],
          ["Official Movies", "24"],
          ["Next Lock", "Friday"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-zinc-900 p-5 shadow-lg">
            <p className="text-sm text-zinc-400">{label}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-10 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-black">Standings</h2>
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-left">
              <thead className="bg-zinc-800 text-sm text-zinc-300">
                <tr>
                  <th className="p-3">Rank</th>
                  <th className="p-3">Team</th>
                  <th className="p-3">Owner</th>
                  <th className="p-3">Record</th>
                  <th className="p-3">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => (
                  <tr key={row.team} className="border-t border-zinc-800">
                    <td className="p-3 font-bold">#{row.rank}</td>
                    <td className="p-3 font-bold text-red-300">{row.team}</td>
                    <td className="p-3">{row.owner}</td>
                    <td className="p-3">{row.record}</td>
                    <td className="p-3 font-black">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl bg-red-950 p-6 shadow-lg">
          <h2 className="text-2xl font-black">League Rule</h2>
          <p className="mt-3 text-zinc-200">
            Only movies from the official league slate count toward standings.
            Players can use Box Office Calls, but outside picks do not count.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h2 className="mb-4 text-2xl font-black">Upcoming Prediction Movies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {movies.map((movie) => (
            <div key={movie.title} className="flex gap-4 rounded-2xl bg-zinc-900 p-4 shadow-lg">
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-44 w-28 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-bold text-green-300">{movie.lock}</p>
                <h3 className="mt-2 text-2xl font-black">{movie.title}</h3>
                <p className="mt-1 text-zinc-400">Release: {movie.date}</p>
                <a
                  href="https://boxofficecalls.com/"
                  className="mt-5 inline-block rounded-xl bg-red-600 px-4 py-2 font-bold hover:bg-red-500"
                >
                  Make Prediction
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-14 lg:grid-cols-2">
        <div className="rounded-2xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-2xl font-black">League News</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>🔥 Richard holds first place after a strong opening weekend call.</li>
            <li>🎬 Superman is the next major league prediction.</li>
            <li>💀 Worst miss of the week earns the “Box Office Bomb” badge.</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-zinc-900 p-6 shadow-lg">
          <h2 className="text-2xl font-black">Discussion Board</h2>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl bg-zinc-800 p-4">
              <p className="font-bold text-red-300">Commissioner</p>
              <p className="text-zinc-300">Official slate only. No random outside picks.</p>
            </div>
            <div className="rounded-xl bg-zinc-800 p-4">
              <p className="font-bold text-red-300">Richard</p>
              <p className="text-zinc-300">Superman might decide the whole season.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

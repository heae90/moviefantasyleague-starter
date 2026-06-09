
"use client";

import { useState } from "react";

const teams = [
  { rank: 1, name: "Reel Prophets", owner: "Richard", points: 128, record: "7-2", trend: "🔥" },
  { rank: 2, name: "Box Office Baptists", owner: "Carlos", points: 119, record: "6-3", trend: "⬆️" },
  { rank: 3, name: "Cinema Sleepers", owner: "Amber", points: 104, record: "5-4", trend: "⬇️" },
  { rank: 4, name: "Opening Weekend Kings", owner: "Marcus", points: 97, record: "4-5", trend: "🎬" },
];

const leagueMovies = [
  {
    title: "Superman",
    release: "July 11, 2025",
    poster: "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
    status: "Prediction Open",
  },
  {
    title: "The Fantastic Four: First Steps",
    release: "July 25, 2025",
    poster: "https://image.tmdb.org/t/p/w500/x26MtUlwtWD26d0G0FXcppxCJio.jpg",
    status: "Coming Soon",
  },
];

const discussionsStart = [
  { name: "Commissioner", text: "Only official league slate movies count toward standings." },
  { name: "Richard", text: "Superman opening weekend is going to decide the league." },
];

export default function Page() {
  const [messages, setMessages] = useState(discussionsStart);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  function postMessage() {
    if (!name.trim() || !text.trim()) return;
    setMessages([{ name, text }, ...messages]);
    setText("");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-red-950 to-zinc-950 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">Movie Fantasy League</p>
          <h1 className="mt-3 text-4xl font-black md:text-6xl">CineDraft League Hub</h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            ESPN-style movie league dashboard powered by Box Office Calls predictions.
            Your site tracks the league slate, standings, trash talk, and weekly matchups.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-zinc-400">League Members</p>
          <h2 className="text-4xl font-bold">8</h2>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-zinc-400">Official Movie Slate</p>
          <h2 className="text-4xl font-bold">24</h2>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
          <p className="text-zinc-400">Next Lock</p>
          <h2 className="text-4xl font-bold">Friday</h2>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-10 lg:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">Standings</h2>
          <div className="overflow-hidden rounded-xl border border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-800 text-zinc-300">
                <tr>
                  <th className="p-3">Rank</th>
                  <th className="p-3">Team</th>
                  <th className="p-3">Owner</th>
                  <th className="p-3">Record</th>
                  <th className="p-3">Pts</th>
                  <th className="p-3">Trend</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team) => (
                  <tr key={team.name} className="border-t border-zinc-800">
                    <td className="p-3 font-bold">#{team.rank}</td>
                    <td className="p-3 text-red-300">{team.name}</td>
                    <td className="p-3">{team.owner}</td>
                    <td className="p-3">{team.record}</td>
                    <td className="p-3 font-bold">{team.points}</td>
                    <td className="p-3">{team.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-red-900 bg-red-950/30 p-6">
          <h2 className="text-2xl font-bold">Commissioner Note</h2>
          <p className="mt-3 text-zinc-300">
            Only predictions from the official league movie list count. Players can still use
            Box Office Calls freely, but outside picks do not affect league standings.
          </p>
          <button className="mt-5 rounded-xl bg-red-600 px-4 py-3 font-bold hover:bg-red-500">
            View Rules
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <h2 className="mb-4 text-2xl font-bold">Upcoming League Movies</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {leagueMovies.map((movie) => (
            <div key={movie.title} className="flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
              <img src={movie.poster} alt={movie.title} className="h-44 w-28 rounded-xl object-cover" />
              <div>
                <p className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                  {movie.status}
                </p>
                <h3 className="mt-3 text-2xl font-bold">{movie.title}</h3>
                <p className="text-zinc-400">Release: {movie.release}</p>
                <button className="mt-5 rounded-xl bg-white px-4 py-2 font-bold text-black">
                  Make Prediction
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-12 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">Discussion Board</h2>
          <div className="grid gap-3">
            <input
              className="rounded-xl bg-zinc-800 p-3 outline-none"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              className="rounded-xl bg-zinc-800 p-3 outline-none"
              placeholder="Talk your trash..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button onClick={postMessage} className="rounded-xl bg-red-600 p-3 font-bold hover:bg-red-500">
              Post Message
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className="rounded-xl bg-zinc-800 p-4">
                <p className="font-bold text-red-300">{msg.name}</p>
                <p className="text-zinc-300">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-4 text-2xl font-bold">Fun League Features</h2>
          <ul className="space-y-3 text-zinc-300">
            <li>🏆 Weekly winner badge</li>
            <li>💀 Worst prediction of the week</li>
            <li>🎬 Movie slate lock date</li>
            <li>🔥 Hot streak tracker</li>
            <li>📈 Biggest box office surprise</li>
            <li>🎙️ Podcast segment: CineDraft Corner</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

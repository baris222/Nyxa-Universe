export default function NyxasUniverseWebsite() {
  const artworks = [
    {
      title: "Nyxa – Signal Drifter",
      description: "She tunes into a frequency the world was never meant to hear.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+1",
    },
    {
      title: "Nyxa – Self Reflection Error",
      description: "Every captured moment reveals a version of herself slipping away.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+2",
    },
    {
      title: "Nyxa – Ignition Ritual",
      description: "A spark is enough to burn through one reality and awaken another.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+3",
    },
    {
      title: "Nyxa – Echo Line",
      description: "A voice returns from the void, but it no longer belongs to her.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+4",
    },
    {
      title: "Nyxa – Liquid Escape",
      description: "She sips from a universe where boundaries dissolve into color.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+5",
    },
    {
      title: "Nyxa – Edge of Desire",
      description: "Pleasure and danger collide at the sharpest point of longing.",
      image: "https://via.placeholder.com/400x500?text=Nyxa+6",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-10">
        <nav className="mb-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Nyxa's Universe</h1>
          <div className="flex gap-4 items-center">
            <a
              href="https://foundation.app/collection/nyxa"
              target="_blank"
              className="text-sm bg-cyan-400 text-black px-4 py-2 rounded-xl font-medium hover:opacity-90 transition duration-300 shadow-[0_0_10px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(34,211,238,1)]"
            >
              View Collection
            </a>
            <a
              href="https://x.com/b_karacaa"
              target="_blank"
              className="text-sm text-cyan-300 hover:underline"
            >
              X / Twitter
            </a>
          </div>
        </nav>

        <section className="mb-20">
          <h2 className="text-5xl font-bold mb-4">Enter Nyxa's Universe</h2>
          <p className="text-white/70 max-w-xl">
            A psychedelic journey through fractured realities, where Nyxa exists in every version of herself.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {artworks.map((art) => (
            <div key={art.title} className="bg-white/5 rounded-2xl overflow-hidden border border-white/10">
              <img src={art.image} alt={art.title} className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{art.title}</h3>
                <p className="text-sm text-white/60 mt-2">{art.description}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="mt-20 text-center text-white/40 text-sm">
          © Nyxa's Universe
        </footer>
      </main>
    </div>
  );
}

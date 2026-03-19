const videos = [
  {
    id: "0lfc3it4ipc",
    title: "Wedding Performance",
  },
  {
    id: "eWq4rpsgmr0",
    title: "Ceremony Song",
  },
  {
    id: "szMqypzyTVo",
    title: "Drinks Reception Set",
  },
  {
    id: "QpFyIJRPBR4",
    title: "Live Performance",
  },
  {
    id: "ECPd4LBicRI",
    title: "Acoustic Set",
  },
  {
    id: "PwrhoMe0cxA",
    title: "Wedding Highlights",
  },
  {
    id: "NvmNEAfTk2Y",
    title: "Reception Entertainment",
  },
  {
    id: "6xz9mic2SA4",
    title: "Live at Wedding",
  },
];

export default function YouTubeGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            See &amp; Hear Nicola in Action
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C]">
            A selection of videos from my YouTube channel
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="group">
              <div className="relative aspect-video bg-stone-200 rounded-lg overflow-hidden mb-3">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <h3 className="text-sm font-medium text-[#2C2C2C] group-hover:text-[#C4A882] transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

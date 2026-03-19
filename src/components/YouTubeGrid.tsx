const videos = [
  {
    id: "0lfc3it4ipc",
    title: "Don't Worry Be Happy - Bobby McFerrin at Atholl Palace Hotel",
  },
  {
    id: "eWq4rpsgmr0",
    title: "At Last by Etta James",
  },
  {
    id: "szMqypzyTVo",
    title: "Feels Like Home - Chantal Kreviazuk",
  },
  {
    id: "QpFyIJRPBR4",
    title: "I Can't Help Falling In Love - Elvis Presley at Pollokshields Burgh Hall",
  },
  {
    id: "ECPd4LBicRI",
    title: "True Colors - Cyndi Lauper",
  },
  {
    id: "PwrhoMe0cxA",
    title: "Glasgow No Place Like Home - Jessie Buckley at Oran Mor",
  },
  {
    id: "NvmNEAfTk2Y",
    title: "I Get To Love You - Ruelle at Dalziel Park",
  },
  {
    id: "6xz9mic2SA4",
    title: "At Last - Etta James at Coats Paisley",
  },
];

export default function YouTubeGrid() {
  return (
    <section className="py-12 md:py-24 px-6">
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

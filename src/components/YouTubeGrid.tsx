const videos = [
  {
    id: "0lfc3it4ipc",
    title: "Don't Worry Be Happy by Bobby McFerrin at Atholl Palace Hotel",
    description: "Watch Nicola Mason perform Don't Worry Be Happy at a Scottish wedding at Atholl Palace Hotel"
  },
  {
    id: "eWq4rpsgmr0",
    title: "At Last by Etta James",
    description: "Live wedding ceremony performance of At Last by professional female singer Nicola Mason"
  },
  {
    id: "szMqypzyTVo",
    title: "Feels Like Home by Chantal Kreviazuk",
    description: "Female vocalist performing Feels Like Home at a Scottish wedding ceremony"
  },
  {
    id: "QpFyIJRPBR4",
    title: "I Can't Help Falling In Love by Elvis Presley at Pollokshields Burgh Hall",
    description: "Elvis Presley classic performed live by female wedding singer at Glasgow wedding venue"
  },
  {
    id: "ECPd4LBicRI",
    title: "True Colors by Cyndi Lauper",
    description: "Live acoustic performance of True Colors by professional female wedding vocalist"
  },
  {
    id: "PwrhoMe0cxA",
    title: "Glasgow No Place Like Home by Jessie Buckley at Oran Mor",
    description: "Jessie Buckley song performed by female wedding singer at iconic Glasgow venue Oran Mor"
  },
  {
    id: "NvmNEAfTk2Y",
    title: "I Get To Love You by Ruelle at Dalziel Park",
    description: "Ruelle wedding song performed live by female vocalist at Dalziel Park wedding"
  },
  {
    id: "6xz9mic2SA4",
    title: "At Last by Etta James at Coats Paisley",
    description: "Classic wedding song performed by professional female singer at Coats Paisley venue"
  },
];

export default function YouTubeGrid() {
  const videoSchema = videos.map((video) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    "uploadDate": "2024-01-01T00:00:00Z",
    "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
    "embedUrl": `https://www.youtube.com/embed/${video.id}`,
    "publisher": {
      "@type": "Person",
      "name": "Nicola Mason"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <section id="videos" className="py-12 md:py-24 px-6 bg-[#FAF8F3]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
              See &amp; Hear Nicola in Action
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
              A Selection of Live Performance Clips
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
    </>
  );
}

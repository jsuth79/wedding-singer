"use client";

import { useState, useEffect } from "react";

const reviews = [
  {
    initials: "PR",
    name: "Patrick Rennie-Adams",
    date: "January 2026",
    package: "Drinks Reception",
    venue: "Balbirnie House",
    text: "We cannot say enough good things about Nicola Mason. We booked Nicola to sing during our afternoon drinks reception and she was an absolute highlight of the day. From the very beginning her communication was brilliant, quick responses, clear information, and such a warm, calming approach that instantly made us feel at ease. Planning a wedding comes with a million moving parts, and Nicola was one of those suppliers who made everything feel effortless. In the run-up to the wedding, Nicola got back in touch to confirm timings and details so she could deliver everything flawlessly. That level of organisation and care meant we didn't have to worry about a thing, we knew she had it all in hand. Then on the day… wow. Nicola is a phenomenal singer with a truly beautiful voice. She created the most gorgeous atmosphere for our drinks reception, elegant, uplifting, and the perfect backdrop for guests mingling and celebrating. We had so many people comment on how amazing she was. What made it even more special was how she tailored her set using little details she'd picked up from our messages over the months; it felt so personal and thoughtful, and it really elevated the experience for everyone. If you're looking for a wedding singer who is incredibly talented, professional, and genuinely lovely to work with, Nicola is the one. We honestly can't recommend her highly enough!",
  },
  {
    initials: "AM",
    name: "Amy D McFadyen",
    date: "October 2025",
    package: "Ceremony & Drinks Reception",
    venue: "Sloan's",
    text: "We booked Nicola for our ceremony and drinks reception! She was honestly amazing, nothing was too big an ask and even helped bring our ideas to life for the groom party walking in too. All our guests loved the entertainment during during drinks and would absolutely book again.",
  },
  {
    initials: "AMS",
    name: "Allan McGowan-Smith",
    date: "October 2025",
    package: "Ceremony & Drinks Reception",
    venue: "Blythswood Square Hotel",
    text: "Nicola is fantastic! We booked her for our wedding ceremony and drinks reception and our guests loved her. Her voice is phenomenal and effortless creating the perfect environment for our wedding. We asked for a couple of specific songs that linked to our ceremony and Nicola more than rose to the occasion - we were truly blown away. She has helped us create some very special memories.",
  },
  {
    initials: "LR",
    name: "Leila Rowland",
    date: "May 2025",
    package: "Surprise Singers",
    venue: "Lynnhurst Hotel",
    text: "What can I say but amazing. I hired Nicola yesterday for my son's wedding as a surprise and wow what a way to get the party started. I cannot recommend these wedding singers highly enough, if you're looking for a perfect day book Nicola xxx",
  },
  {
    initials: "JL",
    name: "Jane Lawson",
    date: "March 2025",
    package: "Ceremony & Drinks Reception",
    venue: "Coats Paisley",
    text: "Absolutely outstanding! Nicola was our ceremony and drinks reception singer in Coats. Paisley. She worked so hard putting together the song set and singing a Capella our aisle song. Helping us with song choices. Everyone loved it. Thank you so so much xx",
  },
  {
    initials: "AR",
    name: "Andrew Richmond",
    date: "March 2025",
    package: "Afternoon Tea",
    venue: "Bothwell Community Hub",
    text: "Each month the Bothwell Community Hub hosts a 'sell out' afternoon tea. As well as lovely food, our event showcases local singers. Nicola Mason is now a regular at our teas, with our guests loving Nicola's voice, choice of songs and incredibly warm personality. Our guests know a good thing when they see it and the applause that greets Nicola after every song is the clearest recognition that they will be welcoming back Nicola in the not too distant future.",
  },
  {
    initials: "JM",
    name: "Jack McCourt",
    date: "December 2024",
    text: "Nicola was singing at a wedding I was shooting photography for and she was absolutely fantastic and a really down to earth person. I would absolutely recommend her for any events.",
  },
  {
    initials: "HG",
    name: "Hayley Gillespie",
    date: "December 2024",
    package: "Drinks Reception",
    venue: "Inglewood House",
    text: "Nicola sung at the drinks reception at our wedding on 02/11/24, she was absolutely amazing and all our guests have complimented her. She really got the crowd going with singing and dancing. I would highly recommend her! Such a genuine lovely soul with an amazing voice 🥰",
  },
  {
    initials: "JM",
    name: "Joanne McGregor",
    date: "September 2024",
    package: "Wedding Ceremony",
    venue: "Carnoustie Golf Club",
    text: "We had Nicola sing for us at our wedding ceremony, she was outstanding we had so many lovely comments about her. I had lots of requests and questions on the run up and she was very accommodating and helpful. I couldn't recommend her highly enough.",
  },
  {
    initials: "PB",
    name: "Paddy Blah",
    date: "September 2024",
    package: "Ceremony & Drinks Reception",
    venue: "Dalziel Park",
    text: "On behalf of my wife and I. We would like to thank Nicola for creating an amazing atmosphere. We genuinely couldn't have asked for a better singer. Not only did Nicola entertain our guest she went above and beyond and learned our first dance not only did she learn this not very well known song Nicola went out her way to have the backing track created. Thank you so much Mr & Mrs Manson",
  },
  {
    initials: "LC",
    name: "Lorna Carbonatto",
    date: "April 2024",
    text: "Where to even begin! Nicola was everything we hoped for, for our wedding entertainment. With a quintessential, fun vibe - she guided us and matched what we had in mind for our special day. We had over half of our guests from America and got SO many compliments of her performance. It was truly perfect, and she put in so much effort to make it so. I would not hesitate for one second to recommend Nicola in ANY capacity as the entertainer for your event/wedding - she can do it all.",
  },
  {
    initials: "RM",
    name: "Robyn McCallum",
    date: "September 2024",
    text: "Met Nicola while she was performing at my venue at an open day just 1 week before my wedding and instantly fell in love with her voice and had to book her. My mum made that happen and she was the cherry on top of the cake on our wedding day. She really just made the day perfect and complete! Just a lovely women with a beautiful voice! Nicola also captured some behind the scenes before I walked down the aisle and kindly sent me them which I was so grateful for. Would recommend Nicola to anyone looking for a wedding singer or just something special to add to your day x",
  },
  {
    initials: "AY",
    name: "Anne Yuill",
    date: "September 2024",
    package: "Wedding Ceremony",
    venue: "St. Andrews Hospice",
    text: "Nicola sang at my recent wedding and her extraordinary efforts truly make our day exceptionally memorable. When I initially requested her to perform at our reception, little did I know the lengths to which she would go to ensure it was a day to remember. Upon discovering that the ceremony was taking place at a Hospice so that my niece and Goddaughter, Pami, could participate, Nicola selflessly volunteered to sing there as well. For the ceremony, Nicola had to learn three entirely new songs, a task she eagerly undertook. Additionally, she not only sang but also arranged for the music for our first dance, which was far from the traditional wedding song. Nicola's dedication and talent made our special day truly unique and unforgettable. Nicola's charming personality make her a wonderful choice for wedding events. We wholeheartedly endorse her for her ability to perform a diverse selection of songs spanning across decades.",
  },
  {
    initials: "LA",
    name: "Lynsey Archibald",
    date: "September 2024",
    text: "Nicola sang at our wedding last weekend and she was as fantastic. In the build up to the wedding she communicated well and provided lots of ideas. A very professional and personal service.",
  },
  {
    initials: "KK",
    name: "Katherine Kerr",
    date: "September 2024",
    package: "Surprise Singers",
    text: "WOW! AMAZING!!! Booked Nicola for my son's wedding as a surprise singing waiter. It made the day. Everyone absolutely loved it. Very professional from start to finish. I can't recommend enough. Thanks so much for a fantastic experience 5**********",
  },
  {
    initials: "HR",
    name: "Hugh R",
    date: "July 2022",
    package: "Ceremony & Drinks Reception",
    text: "Nicola is a delight. She has the most beautiful voice, but it's not just that … it's her delivery and her adaptability and her fun, engaging attitude that make all the difference. She has a pretty diverse repertoire but if she doesn't know it… she will make the effort to go learn it…. Just magic! We didn't want her to leave! All our guests were full of praise for Nicola. I could sit and listen to her all night. Such a beautiful voice! And a lovely person! Xxx",
  },
  {
    initials: "JM",
    name: "Jean McCallum",
    date: "September 2022",
    package: "Birthday Celebration",
    text: "Nicola sang at my husband's birthday celebration. She has a lovely voice and has a fantastic repertoire to suit all ages. Would definitely recommend her!",
  },
  {
    initials: "EP",
    name: "Elaine Pawley",
    date: "June 2022",
    package: "The Full Shebang",
    venue: "Dalziel Park",
    text: "Not only is Nicola the loveliest person to deal with she is an amazing vocalist who took time to learn our requested songs for both ceremony and first dances. We had Nicola as ceremony singer and back later for evening reception and wow she was amazing for both, the floor was filled all night for dancing and atmosphere amazing. I would say definitely choose Nicola there really isnt anyone better.",
  },
  {
    initials: "NR",
    name: "Nicole R",
    date: "June 2021",
    package: "Garden Birthday Party",
    text: "We hired Nicola at very short notice for a surprise 80th garden party Nicola came and blew us away with her talent .. her voice is beautiful. I would highly recommend Nicola not only does she have a beautiful voice but a genuinely lovely person thank you again ❤️ Had the pleasure again this weekend to have Nicola and also Gary singing at my grans 80th celebrations at Peebles Hydro second to none the both of them look forward to our next celebration to have yous back 🥂",
  },
  {
    initials: "NR2",
    name: "Nicola R",
    date: "June 2021",
    text: "Would like to thank Nicola for singing at our wedding. She really listened and understood what we wanted for our special day. She gave us such a beautiful performance that we will remember forever. Thank you for making our day perfect",
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  // Get visible reviews for the carousel
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  return (
    <section className="py-24 px-6 bg-[#F5F1EB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#C4A882] text-sm uppercase tracking-[0.2em] mb-4">
            Trusted By Couples Across Scotland
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a1a1a]">
            Kind Words from Recent Couples
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12 border-l-4 border-[#C4A882] pl-6">
          <p className="text-[#444444] text-base leading-relaxed italic">
            &ldquo;Couples mention the same things: a voice described as &lsquo;phenomenal&rsquo; and &lsquo;extraordinary&rsquo;; communication that&apos;s fast, warm and proactive; songs learned and sets tailored to the room. And the guest reaction — &lsquo;everyone loved her&rsquo;, &lsquo;so many comments&rsquo;, &lsquo;the floor was filled all night&rsquo;. The phrase that comes up most? &lsquo;One less thing to worry about.&rsquo;&rdquo;
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={`${review.initials}-${idx}`}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#C4A882] flex items-center justify-center text-white font-medium flex-shrink-0">
                    {review.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-[#2C2C2C]">
                      {review.name}
                    </h4>
                    <div className="text-sm text-[#888888]">{review.date}</div>
                    <div className="text-[#C4A882] text-sm mt-1">★★★★★</div>
                  </div>
                </div>
                <p className="text-[#444444] text-sm leading-relaxed line-clamp-6 cursor-help" title={review.text}>
                  {review.text}
                </p>
                {(review.package || review.venue) && (
                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2">
                    {review.package && (
                      <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                        {review.package}
                      </span>
                    )}
                    {review.venue && (
                      <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                        {review.venue}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet: 2 cards */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {getVisibleReviews()
              .slice(0, 2)
              .map((review, idx) => (
                <div
                  key={`${review.initials}-${idx}`}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#C4A882] flex items-center justify-center text-white font-medium flex-shrink-0">
                      {review.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-[#2C2C2C]">
                        {review.name}
                      </h4>
                      <div className="text-sm text-[#888888]">{review.date}</div>
                      <div className="text-[#C4A882] text-sm mt-1">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-[#444444] text-sm leading-relaxed line-clamp-6 cursor-help" title={review.text}>
                    {review.text}
                  </p>
                  {(review.package || review.venue) && (
                    <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2">
                      {review.package && (
                        <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                          {review.package}
                        </span>
                      )}
                      {review.venue && (
                        <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                          {review.venue}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Mobile: 1 card */}
        <div className="block md:hidden mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#C4A882] flex items-center justify-center text-white font-medium flex-shrink-0">
                {reviews[currentIndex].initials}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-[#2C2C2C]">
                  {reviews[currentIndex].name}
                </h4>
                <div className="text-sm text-[#888888]">
                  {reviews[currentIndex].date}
                </div>
                <div className="text-[#C4A882] text-sm mt-1">★★★★★</div>
              </div>
            </div>
            <p className="text-[#444444] text-sm leading-relaxed">
              {reviews[currentIndex].text}
            </p>
            {(reviews[currentIndex].package || reviews[currentIndex].venue) && (
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center gap-2">
                {reviews[currentIndex].package && (
                  <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                    {reviews[currentIndex].package}
                  </span>
                )}
                {reviews[currentIndex].venue && (
                  <span className="px-2.5 py-0.5 bg-[#C4A882]/15 text-[#C4A882] text-xs rounded-full border border-[#C4A882]/30 whitespace-nowrap">
                    {reviews[currentIndex].venue}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
            aria-label="Previous reviews"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-[#C4A882] w-8"
                    : "bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:border-[#C4A882] hover:text-[#C4A882] transition-colors"
            aria-label="Next reviews"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <p className="text-center text-[#888888] text-sm mt-8">
          5-star reviews on Google &amp; Facebook
        </p>
      </div>
    </section>
  );
}

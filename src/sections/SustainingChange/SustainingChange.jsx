const STORIES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',
    quote: 'Leveraging technology for sustainable development',
  },
  {
    id: 2,
    image: 'https://placehold.co/300x220/e8edf2/555555?text=Story+2',
    quote: 'Digitising civic services for better life',
  },
];

export function SustainingChange() {
  return (
    <section
      className="bg-white py-16"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <p className="text-[1.6rem] text-[#1a1a2e] font-normal leading-snug mb-1">
          20 years of reimagining for citizens and
        </p>
        <h2 className="text-[1.6rem] font-extrabold italic text-[#1a4f8a] leading-snug mb-6">
          sustaining change
        </h2>

        {/* Description */}
        <p className="text-[14px] text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the
          quality of life for every citizen. To have sustainable impact at scale, the collective energy of
          local networks to solve local problems needs to be tapped into. Our partners &amp; networks
          bring this collective energy to life. The ecosystem already exists; our task is to facilitate and
          amplify their efforts. For 20 years, we've been turning small steps into lasting, meaningful
          change, so that no citizen is left behind.
        </p>

        {/* Story cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="flex rounded-xl overflow-hidden border border-gray-200 shadow-sm h-[160px]"
            >
              {/* Left: quote area */}
              <div className="bg-[#eef4f8] flex flex-col justify-between p-4 w-[55%] relative">
                <p className="text-[12px] text-[#1a1a2e] font-semibold leading-snug text-left">
                  <span className="text-[#1a4f8a] text-[1.3rem] font-serif leading-none">" </span>
                  {story.quote}
                  <span className="text-[#1a4f8a] text-[1.1rem] font-serif leading-none"> "</span>
                </p>

                {/* Play button */}
                <button
                  aria-label="Play video"
                  className="absolute bottom-3 right-[-14px] z-10 w-8 h-8 rounded-full bg-[#f47920] flex items-center justify-center hover:bg-[#e06510] transition-colors shadow-md"
                >
                  <svg width="10" height="10" viewBox="0 0 24 24">
                    <polygon points="8,5 20,12 8,19" fill="white" />
                  </svg>
                </button>
              </div>

              {/* Right: image */}
              <div className="w-[45%] overflow-hidden">
                <img
                  src={story.image}
                  alt={story.quote}
                  className="w-full h-full object-cover object-top grayscale"
                />
              </div>
            </div>
          ))}
        </div>

        {/* About Us button */}
        <a
          href="#"
          className="inline-block px-8 py-2.5 rounded-full border border-gray-400 text-[14px] font-medium text-gray-700 hover:border-[#1a4f8a] hover:text-[#1a4f8a] transition-colors"
        >
          About Us
        </a>

      </div>
    </section>
  );
}

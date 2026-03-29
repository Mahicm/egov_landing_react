export function ProductCard({ product }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">

      {/* Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-[180px] object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#1a4f8a] text-white text-[11px] font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4 gap-2">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-[#1a4f8a] bg-[#eef4fb] px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-[14px] font-bold text-[#1a1a2e] leading-snug line-clamp-2 flex-1">
          {product.title}
        </h3>

        {/* Price */}
        <p className={`text-[13px] font-semibold ${product.price === 'Free' ? 'text-green-600' : 'text-[#f47920]'}`}>
          {product.price}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-1.5 text-[11px] text-gray-400 flex-wrap pt-1 border-t border-gray-100 mt-auto">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span>{product.author}</span>
          <span>·</span>
          <span>{product.date}</span>
          <span>·</span>
          <span>{product.readTime} read</span>
        </div>
      </div>
    </article>
  );
}

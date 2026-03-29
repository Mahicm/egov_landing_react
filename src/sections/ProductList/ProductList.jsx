import { useState } from 'react';
import { ProductCard } from '../../components/ui/ProductCard';
import { useProductFilter } from '../../hooks/useProductFilter';
import { CATEGORIES } from '../../constants/categories';
import { Search } from 'lucide-react';

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm animate-pulse">
      <div className="w-full h-[180px] bg-gray-200" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2 mt-2" />
      </div>
    </div>
  );
}

function EmptyState({ search, onReset }) {
  return (
    <div className="col-span-3 flex flex-col items-center gap-3 py-16 text-gray-400">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <p className="text-[14px] font-medium text-gray-500">
        {search ? `No results for "${search}"` : 'No articles in this category.'}
      </p>
      <button
        onClick={onReset}
        className="text-[13px] text-[#1a4f8a] underline hover:text-[#0d3060]"
      >
        Clear filters
      </button>
    </div>
  );
}

export function ProductList({ products }) {
  const [showAll, setShowAll] = useState(false);

  const {
    filtered, search, setSearch,
    activeCategory, setActiveCategory,
    loading, resetFilters,
  } = useProductFilter(products);

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section
      className="bg-[#f7fafc] py-14"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      id="latest"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-[1.8rem] font-bold text-[#1a1a2e]">
            Latest at <span className="text-[#1a4f8a]">eGov</span>
          </h2>

          {/* Search */}
          <div className="relative w-full md:w-[280px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles, topics..."
              className="w-full pl-9 pr-4 py-2 text-[13px] border border-gray-200 rounded-full bg-white shadow-sm outline-none focus:border-[#1a4f8a] transition-colors"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1.5 rounded-full text-[12px] font-medium border transition-colors ${
                activeCategory === cat
                  ? 'bg-[#1a4f8a] text-white border-[#1a4f8a]'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [1, 2, 3].map((n) => <SkeletonCard key={n} />)
          ) : filtered.length === 0 ? (
            <EmptyState search={search} onReset={() => { resetFilters(); setShowAll(false); }} />
          ) : (
            displayed.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>

        {/* See All / Show Less */}
        {!loading && filtered.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll((p) => !p)}
              className="px-8 py-2.5 rounded-full border border-[#1a4f8a] text-[#1a4f8a] text-[13px] font-semibold hover:bg-[#1a4f8a] hover:text-white transition-colors"
            >
              {showAll ? 'Show Less' : `See All (${filtered.length})`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

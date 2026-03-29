import { useState, useEffect, useMemo } from 'react';
import { filterProducts } from '../utils/filterProducts';
import { useDebounce } from './useDebounce';

/**
 * Encapsulates all filter/search/loading state for the product list.
 * Keeps ProductList.jsx clean — it only handles rendering.
 */
export function useProductFilter(products) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const debouncedSearch = useDebounce(search, 300);

  // Simulate async data fetching — reset loading on filter changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [activeCategory, debouncedSearch]);

  const filtered = useMemo(
    () => filterProducts(products, { category: activeCategory, query: debouncedSearch }),
    [products, activeCategory, debouncedSearch]
  );

  function resetFilters() {
    setSearch('');
    setActiveCategory('All');
  }

  return {
    filtered,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    loading,
    resetFilters,
  };
}

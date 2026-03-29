/**
 * Filters a list of products by category and search query.
 * Pure function — easy to unit test.
 */
export function filterProducts(products, { category = 'All', query = '' } = {}) {
  return products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const normalizedQuery = query.trim().toLowerCase();
    const matchesSearch =
      normalizedQuery === '' ||
      product.title.toLowerCase().includes(normalizedQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

    return matchesCategory && matchesSearch;
  });
}

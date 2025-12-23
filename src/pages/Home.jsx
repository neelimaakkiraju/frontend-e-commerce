import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadProducts, loadCategories } from '../store/productSlice';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

export default function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { list, categories, loading, error } = useSelector(s => s.products);
  const [q, setQ] = useState('');

  // Get category from URL (?cat=...)
  const getCatFromUrl = () => {
    const params = new URLSearchParams(location.search);
    return params.get('cat') || 'all';
  };
  const cat = getCatFromUrl();

  useEffect(() => {
    if (!list || list.length === 0) dispatch(loadProducts());
    if (!categories || categories.length === 0) dispatch(loadCategories());
  }, [dispatch, list, categories]);

  const filtered = useMemo(() => {
    let arr = list || [];
    if (cat !== 'all') arr = arr.filter(p => p.category === cat);
    if (q.trim()) arr = arr.filter(p => p.title.toLowerCase().includes(q.toLowerCase()));
    return arr;
  }, [list, q, cat]);

  if (loading) return <Loading />;
  if (error) return <div className="text-center text-red-600 font-semibold animate-fade-in">Error: {error}</div>;

  // When select changes, update URL
  const handleCatChange = (e) => {
    const value = e.target.value;
    navigate(value === 'all' ? '/' : `/?cat=${encodeURIComponent(value)}`);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/70 backdrop-blur-md border border-pink-100 rounded-2xl p-6 shadow-sm animate-fade-in-up">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-pink-600 font-semibold">Welcome</p>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-1">Discover your next favorite product</h1>
            <p className="text-gray-600 mt-2">Search, filter by category, and browse curated picks with an improved responsive layout.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search products"
              className="w-full sm:w-64 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 shadow-sm bg-white"
            />
            <select
              value={cat}
              onChange={handleCatChange}
              className="w-full sm:w-48 px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-200 shadow-sm bg-white"
            >
              <option value="all">All categories</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-600 flex items-center gap-2">
          <span className="px-2 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold text-xs">{filtered.length}</span>
          <span>{filtered.length === 1 ? 'item' : 'items'} found</span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center animate-fade-in">
          <p className="text-lg font-semibold text-gray-800 mb-2">No products match your filters</p>
          <p className="text-gray-500">Try removing filters or using a different search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      )}
    </div>
  );
}

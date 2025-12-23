import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadCategories } from '../store/productSlice';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const count = useSelector(s => s.cart.items.reduce((acc, i) => acc + i.qty, 0));
  const categories = useSelector(s => s.products.categories);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!categories || categories.length === 0) {
      dispatch(loadCategories());
    }
  }, [dispatch, categories]);

  // Helper to build category link
  const getCategoryLink = (cat) => {
    // Home page uses ?cat=category for filtering
    return cat === 'all' ? '/' : `/?cat=${encodeURIComponent(cat)}`;
  };

  const activeCat = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('cat') || 'all';
  }, [location.search]);

  const CategoryLinks = (
    <div className="flex flex-wrap gap-2">
      <Link
        to={getCategoryLink('all')}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${activeCat === 'all' ? 'bg-pink-100 text-pink-700' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-700'}`}
        onClick={() => setMenuOpen(false)}
      >
        All
      </Link>
      {categories && categories.map(cat => (
        <Link
          key={cat}
          to={getCategoryLink(cat)}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${activeCat === cat ? 'bg-pink-100 text-pink-700' : 'text-gray-700 hover:bg-pink-50 hover:text-pink-700'}`}
          onClick={() => setMenuOpen(false)}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="backdrop-blur-md bg-white/90 sticky top-0 z-20 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-indigo-500 text-white font-bold grid place-items-center shadow-md group-hover:scale-105 transition-transform">SS</div>
          <div className="leading-tight">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight group-hover:text-pink-700 transition-colors">SimpleStore</h2>
            <p className="text-xs text-gray-500 hidden sm:block">Curated products, fast checkout</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <button
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 bg-white shadow-sm hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          <Link
            to="/cart"
            className="relative inline-flex items-center px-4 py-2 rounded-lg text-gray-700 font-semibold bg-white border border-gray-200 hover:border-pink-300 hover:text-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            <span className="hidden sm:inline">Cart</span>
            <span className="sm:hidden">🛒</span>
            <span className="ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full bg-pink-600 text-white text-xs font-semibold animate-bounce-slow">{count}</span>
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 hidden sm:flex items-center justify-between">
          {CategoryLinks}
        </div>
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4 animate-fade-in">
            {CategoryLinks}
          </div>
        )}
      </div>
    </header>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ p }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition-all flex flex-col h-full animate-fade-in-up hover:-translate-y-1">
      <Link to={`/product/${p.id}`} className="block mb-3 group">
        <div className="relative mb-2">
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-44 object-contain rounded-lg bg-gray-50 transition-transform group-hover:scale-105"
          />
          {p.rating?.rate && (
            <span className="absolute top-2 right-2 px-2 py-1 rounded-full bg-white/90 border border-pink-100 text-xs font-semibold text-pink-700 shadow-sm">
              ★ {p.rating.rate}
            </span>
          )}
        </div>
        <h4 className="text-sm font-semibold min-h-[44px] text-gray-900 group-hover:text-pink-700 transition-colors line-clamp-2">{p.title}</h4>
      </Link>
      <div className="flex justify-between items-center mt-auto pt-2">
        <b className="text-pink-700 text-lg">₹{p.price}</b>
        <Link
          to={`/product/${p.id}`}
          className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-pink-600 to-indigo-500 text-white font-semibold shadow hover:opacity-90 transition-opacity text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          View
        </Link>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadProduct, clearSelected } from '../store/productSlice';
import { addToCart } from '../store/cartSlice';
import Loading from '../components/Loading';

export default function Product() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { selectedProduct: p, loading } = useSelector(s => s.products);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(loadProduct(id));
    return () => dispatch(clearSelected());
  }, [id, dispatch]);

  if (loading || !p) return <Loading />;
  return (
    <div className="space-y-4 animate-fade-in-up">
      <div className="text-sm text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:text-pink-700 font-medium">Home</Link>
        <span>›</span>
        <span className="capitalize">{p.category}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
        <div className="flex items-center justify-center">
          <img src={p.image} alt={p.title} className="w-full max-h-[420px] object-contain rounded-xl bg-gray-50 p-6 shadow-inner" />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3 text-sm text-pink-700 font-semibold">
            <span className="px-3 py-1 rounded-full bg-pink-100 capitalize">{p.category}</span>
            {p.rating?.rate && (
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800">★ {p.rating.rate} rating</span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{p.title}</h2>
          <p className="text-gray-600 leading-relaxed">{p.description}</p>
          <p className="text-2xl font-bold text-pink-700">₹{p.price}</p>

          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Qty</label>
            <select
              value={qty}
              onChange={e => setQty(Number(e.target.value))}
              className="px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all w-28"
            >
              {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                dispatch(addToCart({ product: p, qty }));
              }}
              className="px-6 py-3 rounded-lg border border-pink-200 text-pink-700 font-semibold hover:bg-pink-50 transition-colors"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                dispatch(addToCart({ product: p, qty }));
                navigate('/checkout');
              }}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 to-indigo-500 text-white font-semibold shadow hover:opacity-90 transition-opacity"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

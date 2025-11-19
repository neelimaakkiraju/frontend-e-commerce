import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const count = useSelector(s => s.cart.items.reduce((acc,i)=>acc+i.qty,0));
  return (
    <header style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1rem',borderBottom:'1px solid #eee'}}>
      <Link to="/"><h2>My E-Com</h2></Link>
      <nav>
        <Link to="/cart">Cart ({count})</Link>
      </nav>
    </header>
  );
}

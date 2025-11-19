import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({p}) {
  return (
    <div style={{border:'1px solid #ddd', padding: '0.7rem', borderRadius:6}}>
      <Link to={`/product/${p.id}`} style={{textDecoration:'none', color:'inherit'}}>
        <img src={p.image} alt={p.title} style={{width:'100%', height:180, objectFit:'contain'}} />
        <h4 style={{fontSize:14, minHeight:40}}>{p.title}</h4>
      </Link>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <b>₹{p.price}</b>
        <Link to={`/product/${p.id}`}>View</Link>
      </div>
    </div>
  );
}

import React from 'react';
import productList from '../productList';

export default function Home() {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from 'react';
import productList from '../data/productList';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!loggedIn) {
    return (
      <div style={{ padding: 20 }}>
        <h1>Login</h1>
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
        <button onClick={() => setLoggedIn(true)}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>MG Produce Product List</h1>
      <ul>
        {productList.map((item, idx) => (
          <li key={idx}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}

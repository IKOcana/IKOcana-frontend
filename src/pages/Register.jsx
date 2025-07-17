import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      alert('Registrierung erfolgreich!');
    } else {
      alert('Fehler bei Registrierung');
    }
  };

  return (
    <div>
      <h2>Registrieren</h2>
      <input type="email" placeholder="E-Mail" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Passwort" onChange={e => setPassword(e.target.value)} />
      <button onClick={register}>Registrieren</button>
    </div>
  );
}
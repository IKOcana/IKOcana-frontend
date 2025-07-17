import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Login</Link> | <Link to="/register">Registrieren</Link> |{" "}
        {token && <button onClick={handleLogout}>Logout</button>}
      </nav>
      <Routes>
        <Route path="/" element={!token ? <Login onLogin={setToken} /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={token ? <h2>Willkommen bei IKOcana!</h2> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/">Login</Link>
        <Link to="/register">Registrieren</Link>
        {token && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={handleLogout} className="ml-auto bg-red-500 px-3 py-1 rounded">Logout</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Login onLogin={setToken} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
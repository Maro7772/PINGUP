import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar(){
  const { user, logout } = useAuth();
  return (
    <nav className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to="/" className="font-bold">EventX</Link>
        <Link to="/" className="text-sm">Browse</Link>
        <Link to="/my-tickets" className="text-sm">My Tickets</Link>
        {user?.role === 'admin' && <Link to="/admin" className="text-sm">Admin</Link>}
      </div>
      <div className="space-x-3">
        {user ? (
          <>
            <span className="text-sm">Hi, {user.name}</span>
            <button onClick={logout} className="text-red-600 text-sm">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-sm">Login</Link>
            <Link to="/register" className="px-3 py-1 rounded bg-indigo-600 text-white text-sm">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

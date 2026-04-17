import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar({ solid = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [solid]);

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const cls = `navbar ${scrolled ? 'scrolled' : ''} ${solid ? 'solid' : ''}`;

  return (
    <nav className={cls}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="navbar-brand-icon">
            <Leaf size={20} />
          </div>
          <span>EcoVoyage</span>
        </Link>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-nav ${mobileOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className="navbar-link"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {user ? (
            <div className="navbar-user">
              <Link
                to="/dashboard"
                className="navbar-link"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </Link>
              <span className="navbar-username">{user.username}</span>
              <div className="navbar-avatar">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <button
                className="navbar-link"
                onClick={handleSignOut}
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link
              to="/signin"
              className="navbar-cta"
              onClick={() => setMobileOpen(false)}
            >
              Hotel Owner Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, LogIn } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import './AuthPages.css';

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signIn, signInDemo } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const result = signIn(username, password);
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar solid />
      <div className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-logo">
              <div className="auth-logo-icon">
                <Leaf size={22} />
              </div>
              EcoRank
            </div>
            <h1 className="auth-title">Welcome Back</h1>
            <p className="auth-subtitle">Sign in to manage your hotel listings</p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="auth-error">{error}</div>}

            <div className="form-group">
              <label className="form-label" htmlFor="signin-username">Username</label>
              <input
                id="signin-username"
                type="text"
                className="form-input"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-full">
              <LogIn size={18} />
              Sign In
            </button>

            <div style={{ margin: '16px 0', textAlign: 'center', color: '#9ca3af' }}>or</div>

            <button 
              type="button" 
              className="btn btn-secondary btn-lg w-full"
              style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0' }}
              onClick={() => {
                const result = signInDemo();
                if (result.success) navigate('/dashboard');
              }}
            >
              🚀 One-Click Demo Login
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{' '}
            <Link to="/register">Create one here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

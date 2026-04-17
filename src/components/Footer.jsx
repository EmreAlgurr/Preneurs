import { Link } from 'react-router-dom';
import { Leaf, Globe, MessageCircle, Share2, ExternalLink } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-brand">
              <div className="footer-brand-icon"><Leaf size={16} /></div>
              EcoVoyage
            </div>
            <p className="footer-description">
              Empowering travelers to make sustainable choices.
              Compare transport emissions, discover eco-certified hotels,
              and travel with a lighter footprint.
            </p>
          </div>

          <div className="footer-column">
            <h4>Platform</h4>
            <Link to="/">Home</Link>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#">Destinations</a>
          </div>

          <div className="footer-column">
            <h4>Hotel Owners</h4>
            <Link to="/signin">Sign In</Link>
            <Link to="/register">Create Account</Link>
            <Link to="/dashboard">Dashboard</Link>
            <a href="#">Support</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Our Mission</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EcoVoyage. All rights reserved.</span>
          <div className="footer-social">
            <a href="#" aria-label="Blog"><MessageCircle size={16} /></a>
            <a href="#" aria-label="Share"><Share2 size={16} /></a>
            <a href="#" aria-label="Website"><Globe size={16} /></a>
            <a href="#" aria-label="Links"><ExternalLink size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

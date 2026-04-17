import { Sparkles } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({ children }) {
  return (
    <section className="hero">
      <div className="hero-decor">
        <div className="hero-decor-circle" />
        <div className="hero-decor-circle" />
        <div className="hero-decor-circle" />
      </div>

      <div className="hero-content animate-fade-in-up">
        <div className="hero-badge">
          <Sparkles size={14} />
          Sustainable Travel Platform
        </div>
        <h1 className="hero-title">
          Discover{' '}
          <span className="hero-title-accent">Lower-Impact</span>
          <br />
          Travel Options
        </h1>
        <p className="hero-subtitle">
          Compare transport by CO₂ emissions. Find eco-certified stays.
          Make smarter travel decisions — without the compromise.
        </p>

        {children}

        <div className="hero-stats animate-fade-in-up stagger-3">
          <div className="hero-stat">
            <div className="hero-stat-value">50+</div>
            <div className="hero-stat-label">Eco-Certified Hotels</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">8</div>
            <div className="hero-stat-label">Destinations</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">40%</div>
            <div className="hero-stat-label">Avg. CO₂ Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
}

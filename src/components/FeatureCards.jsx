import { TrendingDown, Leaf, BarChart3, Search, ArrowRightLeft, Building2, Star } from 'lucide-react';
import './FeatureCards.css';

export function FeatureCards() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-fade-in-up">
            Travel Smarter, <span className="text-gradient">Travel Greener</span>
          </h2>
          <p className="section-subtitle animate-fade-in-up stagger-1">
            Our platform helps you make informed choices that reduce your environmental impact — without sacrificing comfort or convenience.
          </p>
        </div>
        <div className="features-grid">
          <div className="feature-card animate-fade-in-up stagger-2">
            <div className="feature-card-icon">
              <TrendingDown size={28} />
            </div>
            <h3 className="feature-card-title">Lower CO₂ Transport</h3>
            <p className="feature-card-text">
              Compare transport options by carbon emissions. See the environmental cost of each choice before you book.
            </p>
          </div>
          <div className="feature-card animate-fade-in-up stagger-3">
            <div className="feature-card-icon">
              <Leaf size={28} />
            </div>
            <h3 className="feature-card-title">Greener Stays</h3>
            <p className="feature-card-text">
              Discover eco-certified hotels ranked by their sustainability score. Support properties that care about the planet.
            </p>
          </div>
          <div className="feature-card animate-fade-in-up stagger-4">
            <div className="feature-card-icon">
              <BarChart3 size={28} />
            </div>
            <h3 className="feature-card-title">Smarter Decisions</h3>
            <p className="feature-card-text">
              AI-powered insights help you understand the full picture — ecological impact, comfort, and value — at a glance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Planning eco-friendly travel has never been easier.
          </p>
        </div>
        <div className="how-steps">
          <div className="how-step animate-fade-in-up stagger-1">
            <div className="how-step-number">1</div>
            <h4 className="how-step-title">Search Your Route</h4>
            <p className="how-step-text">Enter your origin, destination, and date to find available options.</p>
          </div>
          <div className="how-step animate-fade-in-up stagger-2">
            <div className="how-step-number">2</div>
            <h4 className="how-step-title">Compare Transport</h4>
            <p className="how-step-text">View all transport modes ranked by CO₂ emissions and price.</p>
          </div>
          <div className="how-step animate-fade-in-up stagger-3">
            <div className="how-step-number">3</div>
            <h4 className="how-step-title">Find Eco Hotels</h4>
            <p className="how-step-text">Browse accommodations sorted by sustainability score.</p>
          </div>
          <div className="how-step animate-fade-in-up stagger-4">
            <div className="how-step-number">4</div>
            <h4 className="how-step-title">Book & Travel</h4>
            <p className="how-step-text">Choose the greenest combination and enjoy guilt-free travel.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

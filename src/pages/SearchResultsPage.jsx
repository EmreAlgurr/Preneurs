import { useNavigate } from 'react-router-dom';
import { ArrowRight, Route, Building2, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import SearchPanel from '../components/SearchPanel';
import TransportCard from '../components/TransportCard';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';
import { useSearch } from '../context/SearchContext';
import './SearchResultsPage.css';

export default function SearchResultsPage() {
  const { searchParams, searchResults } = useSearch();
  const navigate = useNavigate();

  if (!searchResults || !searchResults.found) {
    return (
      <div className="page-wrapper">
        <Navbar solid />
        <div className="search-results-page">
          <div className="search-results-header">
            <div className="container">
              <SearchPanel compact />
            </div>
          </div>
          <div className="container">
            <div className="no-results">
              <div className="no-results-icon">🌍</div>
              <h2 className="no-results-title">Search for a route</h2>
              <p className="no-results-text">
                Enter your origin, destination, and travel date above to discover eco-friendly transport and accommodation options.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/')}>
                <ArrowLeft size={16} /> Back to Home
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { transport, hotels } = searchResults;

  return (
    <div className="page-wrapper">
      <Navbar solid />
      <div className="search-results-page">
        <div className="search-results-header">
          <div className="container">
            <SearchPanel compact />
            <div className="search-results-summary" style={{ marginTop: 'var(--space-4)' }}>
              <div className="search-results-route">
                {searchParams.from}
                <ArrowRight size={20} className="search-results-route-arrow" />
                {searchParams.to}
              </div>
              <span className="search-results-date">{searchParams.date}</span>
            </div>
          </div>
        </div>

        <div className="search-results-content container">
          {/* Transport Options */}
          <section className="results-section animate-fade-in-up">
            <div className="results-section-header">
              <div className="results-section-icon transport">
                <Route size={22} />
              </div>
              <div>
                <div className="results-section-title">Transport Options</div>
                <div className="results-section-count">
                  {transport.length} option{transport.length !== 1 ? 's' : ''} found — sorted by CO₂ emissions
                </div>
              </div>
            </div>
            <div className="transport-list">
              {transport.map((t, i) => (
                <div key={t.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}>
                  <TransportCard transport={t} />
                </div>
              ))}
            </div>
          </section>

          {/* Hotels */}
          <section className="results-section animate-fade-in-up">
            <div className="results-section-header">
              <div className="results-section-icon hotels">
                <Building2 size={22} />
              </div>
              <div>
                <div className="results-section-title">
                  Eco-Friendly Stays in {searchParams.to}
                </div>
                <div className="results-section-count">
                  {hotels.length} accommodation{hotels.length !== 1 ? 's' : ''} — sorted by ecological score
                </div>
              </div>
            </div>
            {hotels.length > 0 ? (
              <div className="hotels-grid">
                {hotels.map((h, i) => (
                  <div key={h.id} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)}`}>
                    <HotelCard hotel={h} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">🏨</div>
                <div className="empty-state-title">No hotels yet</div>
                <p className="empty-state-text">
                  No eco-certified accommodations are listed for {searchParams.to} yet.
                  Check back soon or explore other destinations.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

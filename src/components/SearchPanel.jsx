import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { performSearch } from '../services/searchService';
import { cities } from '../data/defaults';
import './SearchPanel.css';

export default function SearchPanel({ compact = false, onSearchComplete }) {
  const navigate = useNavigate();
  const { searchParams, updateSearch, setSearchResults } = useSearch();
  const [from, setFrom] = useState(searchParams.from);
  const [to, setTo] = useState(searchParams.to);
  const [date, setDate] = useState(searchParams.date);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!from || !to || !date) {
      setError('Please fill in all fields.');
      return;
    }
    if (from === to) {
      setError('Origin and destination cannot be the same.');
      return;
    }

    const results = performSearch(from, to, date);
    updateSearch({ from, to, date });
    setSearchResults(results);

    if (!results.found) {
      setError('No routes found for this trip. Try a different combination.');
      return;
    }

    if (onSearchComplete) {
      onSearchComplete(results);
    } else {
      navigate('/search');
    }
  };

  // Get today as minimum date
  const today = new Date().toISOString().split('T')[0];

  return (
    <form
      className={`search-panel ${compact ? 'compact' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="search-panel-title">Find Your Route</div>
      <div className="search-fields">
        <div className="search-field">
          <label className="search-field-label">From</label>
          <select
            className="search-field-input"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="">Select origin</option>
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label className="search-field-label">To</label>
          <select
            className="search-field-input"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="">Select destination</option>
            {cities
              .filter((c) => c !== from)
              .map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
          </select>
        </div>

        <div className="search-field">
          <label className="search-field-label">Date</label>
          <input
            type="date"
            className="search-field-input"
            value={date}
            min={today}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="search-btn">
          <Search size={18} />
          Search
        </button>
      </div>

      {error && <div className="search-error">{error}</div>}
    </form>
  );
}

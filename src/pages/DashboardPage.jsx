import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Building2, MapPin, Leaf, BarChart3, Trash2,
  Edit, ClipboardCheck, FileQuestion, TreePine,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { useAuth } from '../context/AuthContext';
import { getHotelsByOwner, deleteHotel } from '../services/hotelService';
import './DashboardPage.css';

export default function DashboardPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);

  const myHotels = getHotelsByOwner(user.id);

  const handleDelete = (hotelId) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      deleteHotel(hotelId);
      setRefresh((r) => r + 1);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar solid />
      <div className="dashboard-page">
        {/* Header */}
        <div className="dashboard-header">
          <div className="container">
            <h1 className="dashboard-welcome">
              Welcome back, {user.username} 👋
            </h1>
            <p className="dashboard-welcome-sub">
              Manage your hotel listings and sustainability profile from here.
            </p>
            <div className="dashboard-stats" style={{ marginTop: '24px' }}>
              <div className="dashboard-stat-card">
                <div className="dashboard-stat-value">{myHotels.length}</div>
                <div className="dashboard-stat-label">Listed Hotels</div>
              </div>
              <div className="dashboard-stat-card">
                <div className="dashboard-stat-value">
                  {myHotels.length > 0
                    ? Math.round(myHotels.reduce((a, h) => a + (h.ecoScore || 0), 0) / myHotels.length)
                    : '—'}
                </div>
                <div className="dashboard-stat-label">Avg. Eco Score</div>
              </div>
              <div className="dashboard-stat-card">
                <div className="dashboard-stat-value">
                  {new Set(myHotels.map((h) => h.city)).size || '—'}
                </div>
                <div className="dashboard-stat-label">Cities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container dashboard-content">
          {/* My Hotels */}
          <section className="dashboard-section animate-fade-in-up">
            <div className="dashboard-section-header">
              <h2 className="dashboard-section-title">
                <Building2 size={22} /> My Hotels
              </h2>
              <Link to="/dashboard/add-hotel" className="btn btn-primary">
                <Plus size={16} /> Add New Hotel
              </Link>
            </div>

            {myHotels.length > 0 ? (
              <div className="dashboard-hotels-grid">
                {myHotels.map((hotel) => (
                  <div key={hotel.id} className="dashboard-hotel-card">
                    <div className="dashboard-hotel-image">
                      {hotel.image ? (
                        <img src={hotel.image} alt={hotel.name} />
                      ) : (
                        <div className="dashboard-hotel-image-placeholder">
                          <Building2 size={32} />
                        </div>
                      )}
                    </div>
                    <div className="dashboard-hotel-body">
                      <div className="dashboard-hotel-name">{hotel.name}</div>
                      <div className="dashboard-hotel-location">
                        <MapPin size={13} />
                        {hotel.district}, {hotel.city}
                      </div>
                      <EcoScoreBadge score={hotel.ecoScore || 0} />
                      <div className="dashboard-hotel-meta">
                        <span style={{ fontSize: '14px', fontWeight: 600 }}>
                          ₺{hotel.price}/night
                        </span>
                        <div className="dashboard-hotel-actions">
                          <Link
                            to={`/hotel/${hotel.id}`}
                            className="btn btn-sm btn-secondary"
                          >
                            View
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(hotel.id)}
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <div className="empty-state-icon">🏨</div>
                <div className="empty-state-title">No hotels listed yet</div>
                <p className="empty-state-text">
                  Start by adding your first hotel property to the platform.
                </p>
                <Link to="/dashboard/add-hotel" className="btn btn-primary">
                  <Plus size={16} /> Add Your First Hotel
                </Link>
              </div>
            )}
          </section>

          {/* Sustainability Form Placeholder */}
          <section className="dashboard-section animate-fade-in-up stagger-2">
            <div className="sustainability-section">
              <div className="sustainability-icon">
                <TreePine size={32} />
              </div>
              <h3 className="sustainability-title">Sustainability Assessment</h3>
              <p className="sustainability-text">
                Measure and showcase your hotel's environmental impact.
                Complete the sustainability form to receive your official eco-score
                and attract environmentally conscious travelers.
              </p>
              <div className="sustainability-badges">
                <span className="badge badge-eco-best">
                  <Leaf size={12} /> Energy Efficiency
                </span>
                <span className="badge badge-eco-good">
                  <BarChart3 size={12} /> Water Management
                </span>
                <span className="badge badge-eco-best">
                  <ClipboardCheck size={12} /> Waste Reduction
                </span>
                <span className="badge badge-eco-good">
                  <FileQuestion size={12} /> Community Impact
                </span>
              </div>
              <button className="btn btn-outline btn-lg" style={{ marginRight: '12px' }}>
                <ClipboardCheck size={18} /> Create Sustainability Form
              </button>
              <button className="btn btn-secondary btn-lg">
                <BarChart3 size={18} /> Open CO₂ Scoring Form
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, MapPin, Building2, Sparkles, CheckCircle2,
  Wifi, Car, Waves, Wind, Phone, Mail, Globe,
  Clock, Users, BedDouble, UtensilsCrossed, Leaf, MapPinned,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EcoScoreBadge, EcoScoreRing } from '../components/EcoScoreBadge';
import { getHotelById } from '../services/hotelService';
import './HotelDetailPage.css';

export default function HotelDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const hotel = getHotelById(id);

  if (!hotel) {
    return (
      <div className="page-wrapper">
        <Navbar solid />
        <div className="hotel-detail-page">
          <div className="container" style={{ paddingTop: '120px', textAlign: 'center' }}>
            <h2>Hotel not found</h2>
            <p style={{ color: 'var(--color-text-secondary)', margin: '16px 0 24px' }}>
              The hotel you're looking for doesn't exist or has been removed.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <Navbar solid />
      <div className="hotel-detail-page">
        {/* Hero Image */}
        <div className="hotel-detail-hero">
          {hotel.image ? (
            <img src={hotel.image} alt={hotel.name} />
          ) : (
            <div className="hotel-detail-hero-placeholder">
              <Building2 size={48} />
              {hotel.name}
            </div>
          )}
          <div className="hotel-detail-hero-overlay">
            <div className="container hotel-detail-hero-content">
              <div>
                <h1 className="hotel-detail-name">{hotel.name}</h1>
                <div className="hotel-detail-location">
                  <MapPin size={16} />
                  {hotel.district}, {hotel.city}
                </div>
              </div>
              <EcoScoreBadge score={hotel.ecoScore} size="lg" />
            </div>
          </div>
        </div>

        <div className="container hotel-detail-content">
          <button className="hotel-detail-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} /> Back to results
          </button>

          <div className="hotel-detail-grid">
            {/* Main Content */}
            <div className="hotel-detail-main">
              {/* AI Overview */}
              <div className="hotel-detail-section animate-fade-in-up">
                <h2 className="hotel-detail-section-title">
                  <Sparkles size={20} /> AI Overview
                </h2>
                <p className="hotel-detail-overview">{hotel.aiOverview}</p>
              </div>

              {/* Amenities */}
              <div className="hotel-detail-section animate-fade-in-up stagger-1">
                <h2 className="hotel-detail-section-title">
                  <CheckCircle2 size={20} /> Amenities & Facilities
                </h2>
                <div className="hotel-detail-amenities-grid">
                  {hotel.amenities && hotel.amenities.map((a) => (
                    <div key={a} className="hotel-detail-amenity">
                      <CheckCircle2 size={16} /> {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotel Info */}
              <div className="hotel-detail-section animate-fade-in-up stagger-2">
                <h2 className="hotel-detail-section-title">
                  <Building2 size={20} /> Hotel Information
                </h2>
                <div className="hotel-detail-info-grid">
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Rooms</span>
                    <span className="hotel-detail-info-value">{hotel.roomCount} rooms</span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Beds</span>
                    <span className="hotel-detail-info-value">{hotel.bedCount} beds</span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Max Guests</span>
                    <span className="hotel-detail-info-value">{hotel.maxGuests} guests</span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Room Types</span>
                    <span className="hotel-detail-info-value">
                      {hotel.roomTypes ? hotel.roomTypes.join(', ') : '—'}
                    </span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Check-in</span>
                    <span className="hotel-detail-info-value">{hotel.checkIn}</span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Check-out</span>
                    <span className="hotel-detail-info-value">{hotel.checkOut}</span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Breakfast</span>
                    <span className="hotel-detail-info-value">
                      {hotel.breakfastIncluded ? '✓ Included' : '✗ Not included'}
                    </span>
                  </div>
                  <div className="hotel-detail-info-item">
                    <span className="hotel-detail-info-label">Meal Plan</span>
                    <span className="hotel-detail-info-value">{hotel.mealOptions || '—'}</span>
                  </div>
                </div>
              </div>

              {/* Transport Proximity */}
              {hotel.transportProximity && (
                <div className="hotel-detail-section animate-fade-in-up stagger-3">
                  <h2 className="hotel-detail-section-title">
                    <MapPinned size={20} /> Getting There
                  </h2>
                  <p className="hotel-detail-overview">{hotel.transportProximity}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="hotel-detail-sidebar">
              <div className="hotel-detail-booking-card animate-fade-in-up stagger-2">
                <div className="hotel-detail-price-display">
                  <div className="hotel-detail-price-big" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {hotel.ecoScore >= 80 ? (
                      <>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                          <span style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '20px', fontWeight: 'normal' }}>₺{hotel.price}</span>
                          <span style={{ color: '#16a34a' }}>₺{Math.round(hotel.price * 0.85)}</span>
                          <span style={{ fontSize: '16px', color: '#6b7280', fontWeight: 'normal' }}>/ night</span>
                        </div>
                        <div style={{ background: '#dcfce7', color: '#166534', padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                          🌿 15% Eco Reward Applied
                        </div>
                      </>
                    ) : (
                      <>
                        ₺{hotel.price} <span>/ night</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="hotel-detail-eco-display">
                  <EcoScoreRing score={hotel.ecoScore} size="lg" />
                  <EcoScoreBadge score={hotel.ecoScore} size="lg" />
                </div>

                <button 
                  className="btn btn-primary btn-lg w-full"
                  onClick={() => alert(`Demo Booking for ${hotel.name} confirmed! In a real app, this would route to a secure payment gateway.`)}
                >
                  Book Now (Demo)
                </button>

                <div className="divider" style={{ margin: '4px 0' }} />

                {hotel.phone && (
                  <div className="hotel-detail-contact-item">
                    <Phone size={16} /> {hotel.phone}
                  </div>
                )}
                {hotel.email && (
                  <div className="hotel-detail-contact-item">
                    <Mail size={16} /> {hotel.email}
                  </div>
                )}
                {hotel.website && (
                  <div className="hotel-detail-contact-item">
                    <Globe size={16} /> {hotel.website}
                  </div>
                )}

                {hotel.address && (
                  <>
                    <div className="divider" style={{ margin: '4px 0' }} />
                    <div className="hotel-detail-contact-item">
                      <MapPin size={16} /> {hotel.address}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

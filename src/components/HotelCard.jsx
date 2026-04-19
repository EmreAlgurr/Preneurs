import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Users, Building2 } from 'lucide-react';
import { EcoScoreBadge } from './EcoScoreBadge';
import './HotelCard.css';

export default function HotelCard({ hotel }) {
  const displayAmenities = hotel.amenities ? hotel.amenities.slice(0, 5) : [];

  return (
    <div className="hotel-card">
      <div className="hotel-card-image">
        {hotel.image ? (
          <img src={hotel.image} alt={hotel.name} loading="lazy" />
        ) : (
          <div className="hotel-card-image-placeholder">
            <Building2 size={32} />
            <span>{hotel.name}</span>
          </div>
        )}
        <div className="hotel-card-eco-badge">
          <EcoScoreBadge score={hotel.ecoScore} />
        </div>
      </div>

      <div className="hotel-card-body">
        <div>
          <div className="hotel-card-name">{hotel.name}</div>
          <div className="hotel-card-location">
            <MapPin size={13} />
            {hotel.district}, {hotel.city}
          </div>
        </div>

        <p className="hotel-card-overview">{hotel.aiOverview}</p>

        <div className="hotel-card-amenities">
          {displayAmenities.map((a) => (
            <span key={a} className="hotel-card-amenity">{a}</span>
          ))}
          {hotel.amenities && hotel.amenities.length > 5 && (
            <span className="hotel-card-amenity">+{hotel.amenities.length - 5} more</span>
          )}
        </div>

        <div className="hotel-card-footer">
          <div>
            <div className="hotel-card-price" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
              {hotel.ecoScore >= 80 ? (
                <>
                  <span style={{ textDecoration: 'line-through', color: '#9ca3af', fontSize: '0.85em' }}>₺{hotel.price}</span>
                  <span style={{ color: '#16a34a', fontWeight: 'bold' }}>₺{Math.round(hotel.price * 0.85)}</span>
                  <span style={{ fontSize: '12px', color: '#6b7280' }}>/ night</span>
                  <div style={{ width: '100%' }}></div>
                  <span style={{ background: '#dcfce7', color: '#166534', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    🌿 15% Eco Reward
                  </span>
                </>
              ) : (
                <>₺{hotel.price} <span>/ night</span></>
              )}
            </div>
            <div className="hotel-card-meta">
              <span className="hotel-card-meta-item">
                <BedDouble size={12} /> {hotel.bedCount} beds
              </span>
              <span className="hotel-card-meta-item">
                <Users size={12} /> up to {hotel.maxGuests}
              </span>
            </div>
          </div>
          <Link to={`/hotel/${hotel.id}`} className="btn btn-sm btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

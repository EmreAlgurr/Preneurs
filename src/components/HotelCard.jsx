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
            <div className="hotel-card-price">
              ₺{hotel.price} <span>/ night</span>
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

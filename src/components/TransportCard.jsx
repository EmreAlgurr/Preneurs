import { Plane, TrainFront, Bus, Car, Ship, Shuffle, ExternalLink } from 'lucide-react';
import './TransportCard.css';

const iconMap = {
  plane: Plane,
  train: TrainFront,
  bus: Bus,
  car: Car,
  ferry: Ship,
  mixed: Shuffle,
};

function getEcoLabelClass(label) {
  if (label === 'Best eco option') return 'eco-label-best';
  if (label === 'Lower emission') return 'eco-label-lower';
  return 'eco-label-higher';
}

export default function TransportCard({ transport }) {
  const Icon = iconMap[transport.type] || Bus;

  return (
    <div className="transport-card">
      <div className="transport-card-type">
        <div className="transport-card-type-icon">
          <Icon size={22} />
        </div>
        <span className="transport-card-type-label">{transport.type}</span>
      </div>

      <div className="transport-card-info">
        <div className="transport-card-provider">{transport.provider}</div>
        <div className="transport-card-schedule">
          <span>{transport.departure}</span>
          <span className="transport-card-schedule-dot" />
          <span className="transport-card-schedule-line" />
          <span className="transport-card-schedule-dot" />
          <span>{transport.arrival}</span>
        </div>
        <div className="transport-card-duration">{transport.duration}</div>
      </div>

      <div className="transport-card-eco">
        <div className="transport-card-co2">
          {transport.co2Emission} <span>kg CO₂</span>
        </div>
        <span className={`transport-card-eco-label ${getEcoLabelClass(transport.ecoLabel)}`}>
          {transport.ecoLabel}
        </span>
      </div>

      <div className="transport-card-price">
        <div className="transport-card-price-value">
          ₺{transport.price} <span>/ person</span>
        </div>
        <button className="btn btn-sm btn-outline">
          <ExternalLink size={12} />
          View Details
        </button>
      </div>
    </div>
  );
}

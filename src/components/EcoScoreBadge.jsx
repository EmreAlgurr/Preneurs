import { Leaf } from 'lucide-react';
import './EcoScoreBadge.css';

export function getEcoStatus(score) {
  if (score >= 90) return 'Excellent';
  if (score >= 80) return 'Very Good';
  if (score >= 70) return 'Good';
  if (score >= 60) return 'Average';
  return 'Poor';
}

function getScoreClass(score) {
  if (score >= 90) return 'excellent';
  if (score >= 80) return 'very-good';
  if (score >= 70) return 'good';
  if (score >= 60) return 'average';
  return 'poor';
}

export function EcoScoreBadge({ score, size = 'sm' }) {
  const cls = getScoreClass(score);
  return (
    <div className={`eco-score-badge score-${cls} ${size === 'lg' ? 'size-lg' : ''}`}>
      <span className="eco-score-icon">
        <Leaf size={size === 'lg' ? 16 : 12} />
      </span>
      <span>{score}/100 — {getEcoStatus(score)}</span>
    </div>
  );
}

export function EcoScoreRing({ score, size = 'sm' }) {
  const cls = getScoreClass(score);
  const dim = size === 'lg' ? 72 : 48;
  const strokeWidth = size === 'lg' ? 5 : 4;
  const radius = (dim - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const colors = {
    excellent: '#22C55E',
    'very-good': '#10B981',
    good: '#0EA5E9',
    average: '#F59E0B',
    poor: '#EF4444',
  };

  return (
    <div className={`eco-score-ring ${size === 'lg' ? 'size-lg' : ''}`}>
      <svg width={dim} height={dim}>
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={dim / 2}
          cy={dim / 2}
          r={radius}
          fill="none"
          stroke={colors[cls]}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="eco-score-ring-value">{score}</div>
    </div>
  );
}

import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Building2, MapPin, BedDouble, Clock,
  UtensilsCrossed, Wifi, Car as CarIcon, Waves, Wind,
  Phone, Mail, Globe, DollarSign, Sparkles, Leaf,
  Upload, Image, Save, MapPinned,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { EcoScoreBadge } from '../components/EcoScoreBadge';
import { useAuth } from '../context/AuthContext';
import { addHotel } from '../services/hotelService';
import { cities, amenitiesList, roomTypes as roomTypesList, mealOptionsList } from '../data/defaults';
import './HotelFormPage.css';

export default function HotelFormPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: '',
    city: '',
    district: '',
    address: '',
    description: '',
    image: '',
    ecoScore: 50,
    aiOverview: '',
    price: '',
    roomCount: '',
    bedCount: '',
    maxGuests: '',
    roomTypes: [],
    checkIn: '14:00',
    checkOut: '11:00',
    breakfastIncluded: false,
    mealOptions: '',
    wifi: false,
    parking: false,
    pool: false,
    airConditioning: false,
    phone: '',
    email: '',
    website: '',
    amenities: [],
    transportProximity: '',
  });

  const update = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const toggleArrayItem = (field, item) => {
    setForm((f) => {
      const arr = f[field] || [];
      if (arr.includes(item)) {
        return { ...f, [field]: arr.filter((i) => i !== item) };
      }
      return { ...f, [field]: [...arr, item] };
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      update('image', ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);

    const hotelData = {
      ...form,
      ownerId: user.id,
      price: Number(form.price) || 0,
      roomCount: Number(form.roomCount) || 0,
      bedCount: Number(form.bedCount) || 0,
      maxGuests: Number(form.maxGuests) || 0,
      ecoScore: Number(form.ecoScore) || 0,
    };

    addHotel(hotelData);
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <Navbar solid />
      <div className="hotel-form-page">
        <div className="hotel-form-header">
          <div className="container hotel-form-header-inner">
            <button className="hotel-form-back" onClick={() => navigate('/dashboard')}>
              <ArrowLeft size={18} />
            </button>
            <h1 className="hotel-form-page-title">Add New Hotel</h1>
          </div>
        </div>

        <div className="container hotel-form-content">
          {success && (
            <div className="hotel-form-success">
              ✓ Hotel added successfully! Redirecting to dashboard...
            </div>
          )}

          <form className="hotel-form" onSubmit={handleSubmit}>
            {/* Basic Info */}
            <div className="hotel-form-section animate-fade-in-up">
              <h2 className="hotel-form-section-title">
                <Building2 size={20} /> Basic Information
              </h2>
              <div className="hotel-form-grid">
                <div className="form-group full-width">
                  <label className="form-label">Hotel Name *</label>
                  <input
                    className="form-input"
                    placeholder="e.g., The Green Retreat"
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">City *</label>
                  <select
                    className="form-input form-select"
                    value={form.city}
                    onChange={(e) => update('city', e.target.value)}
                    required
                  >
                    <option value="">Select city</option>
                    {cities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">District</label>
                  <input
                    className="form-input"
                    placeholder="e.g., Kaleici"
                    value={form.district}
                    onChange={(e) => update('district', e.target.value)}
                  />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Full Address</label>
                  <input
                    className="form-input"
                    placeholder="Street address, postal code, city"
                    value={form.address}
                    onChange={(e) => update('address', e.target.value)}
                  />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Short Description</label>
                  <textarea
                    className="form-input form-textarea"
                    placeholder="Brief description of your hotel..."
                    value={form.description}
                    onChange={(e) => update('description', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="hotel-form-section animate-fade-in-up stagger-1">
              <h2 className="hotel-form-section-title">
                <Image size={20} /> Hotel Image
              </h2>
              <div className="hotel-form-image-upload">
                <div
                  className="hotel-form-image-dropzone"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="hotel-form-image-dropzone-icon">
                    <Upload size={32} />
                  </div>
                  <div className="hotel-form-image-dropzone-text">
                    Click to upload a hotel image
                  </div>
                  <div className="hotel-form-image-dropzone-hint">
                    JPG, PNG, or WebP — max 5MB
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
                {form.image && (
                  <div className="hotel-form-image-preview">
                    <img src={form.image} alt="Preview" />
                  </div>
                )}
              </div>
            </div>

            {/* Rooms & Capacity */}
            <div className="hotel-form-section animate-fade-in-up stagger-2">
              <h2 className="hotel-form-section-title">
                <BedDouble size={20} /> Rooms & Capacity
              </h2>
              <div className="hotel-form-grid">
                <div className="form-group">
                  <label className="form-label">Room Count</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 24"
                    value={form.roomCount}
                    onChange={(e) => update('roomCount', e.target.value)}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Bed Count</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 36"
                    value={form.bedCount}
                    onChange={(e) => update('bedCount', e.target.value)}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Max Guest Capacity</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 60"
                    value={form.maxGuests}
                    onChange={(e) => update('maxGuests', e.target.value)}
                    min="0"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Nightly Price (₺)</label>
                  <input
                    type="number"
                    className="form-input"
                    placeholder="e.g., 185"
                    value={form.price}
                    onChange={(e) => update('price', e.target.value)}
                    min="0"
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: '20px' }}>
                <label className="form-label">Room Types</label>
                <div className="hotel-form-toggles">
                  {roomTypesList.map((rt) => (
                    <div
                      key={rt}
                      className={`hotel-form-toggle-item ${form.roomTypes.includes(rt) ? 'active' : ''}`}
                      onClick={() => toggleArrayItem('roomTypes', rt)}
                    >
                      <div className={`toggle ${form.roomTypes.includes(rt) ? 'active' : ''}`} />
                      <span className="hotel-form-toggle-label">{rt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="hotel-form-section animate-fade-in-up stagger-3">
              <h2 className="hotel-form-section-title">
                <Clock size={20} /> Schedule & Meals
              </h2>
              <div className="hotel-form-grid">
                <div className="form-group">
                  <label className="form-label">Check-in Time</label>
                  <input
                    type="time"
                    className="form-input"
                    value={form.checkIn}
                    onChange={(e) => update('checkIn', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-out Time</label>
                  <input
                    type="time"
                    className="form-input"
                    value={form.checkOut}
                    onChange={(e) => update('checkOut', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Meal Plan</label>
                  <select
                    className="form-input form-select"
                    value={form.mealOptions}
                    onChange={(e) => update('mealOptions', e.target.value)}
                  >
                    <option value="">Select meal plan</option>
                    {mealOptionsList.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Breakfast</label>
                  <div
                    className={`hotel-form-toggle-item ${form.breakfastIncluded ? 'active' : ''}`}
                    onClick={() => update('breakfastIncluded', !form.breakfastIncluded)}
                    style={{ marginTop: '4px' }}
                  >
                    <div className={`toggle ${form.breakfastIncluded ? 'active' : ''}`} />
                    <span className="hotel-form-toggle-label">Breakfast Included</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="hotel-form-section animate-fade-in-up stagger-4">
              <h2 className="hotel-form-section-title">
                <Wifi size={20} /> Amenities & Facilities
              </h2>
              <div className="hotel-form-grid" style={{ marginBottom: '20px' }}>
                {[
                  { key: 'wifi', label: 'Free WiFi', icon: <Wifi size={16} /> },
                  { key: 'parking', label: 'Parking', icon: <CarIcon size={16} /> },
                  { key: 'pool', label: 'Swimming Pool', icon: <Waves size={16} /> },
                  { key: 'airConditioning', label: 'Air Conditioning', icon: <Wind size={16} /> },
                ].map((item) => (
                  <div
                    key={item.key}
                    className={`hotel-form-toggle-item ${form[item.key] ? 'active' : ''}`}
                    onClick={() => update(item.key, !form[item.key])}
                  >
                    <div className={`toggle ${form[item.key] ? 'active' : ''}`} />
                    <span className="hotel-form-toggle-label">{item.label}</span>
                  </div>
                ))}
              </div>

              <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>
                Additional Amenities
              </label>
              <div className="hotel-form-toggles">
                {amenitiesList.map((a) => (
                  <div
                    key={a}
                    className={`hotel-form-toggle-item ${form.amenities.includes(a) ? 'active' : ''}`}
                    onClick={() => toggleArrayItem('amenities', a)}
                  >
                    <div className={`toggle ${form.amenities.includes(a) ? 'active' : ''}`} />
                    <span className="hotel-form-toggle-label">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="hotel-form-section animate-fade-in-up stagger-5">
              <h2 className="hotel-form-section-title">
                <Phone size={20} /> Contact Information
              </h2>
              <div className="hotel-form-grid">
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    className="form-input"
                    placeholder="+90 xxx xxx xxxx"
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="info@yourhotel.com"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </div>
                <div className="form-group full-width">
                  <label className="form-label">Website</label>
                  <input
                    className="form-input"
                    placeholder="www.yourhotel.com"
                    value={form.website}
                    onChange={(e) => update('website', e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Eco & AI */}
            <div className="hotel-form-section animate-fade-in-up stagger-6">
              <h2 className="hotel-form-section-title">
                <Leaf size={20} /> Sustainability & AI Overview
              </h2>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label">
                  Ecological Score: {form.ecoScore}/100
                </label>
                <EcoScoreBadge score={form.ecoScore} />
                <div className="hotel-form-slider-wrapper" style={{ marginTop: '12px' }}>
                  <input
                    type="range"
                    className="hotel-form-slider"
                    min="0"
                    max="100"
                    value={form.ecoScore}
                    onChange={(e) => update('ecoScore', Number(e.target.value))}
                  />
                  <div className="hotel-form-slider-labels">
                    <span>0 — Needs Work</span>
                    <span>50 — Moderate</span>
                    <span>100 — Excellent</span>
                  </div>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label">AI Overview Text</label>
                <textarea
                  className="form-input form-textarea"
                  rows={5}
                  placeholder="Write a comprehensive AI-style overview of this hotel's sustainability practices, guest experience, and unique features..."
                  value={form.aiOverview}
                  onChange={(e) => update('aiOverview', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Transport Proximity Note</label>
                <textarea
                  className="form-input form-textarea"
                  rows={2}
                  placeholder="e.g., 15 min from Antalya Airport by shuttle. 5 min walk to tram station."
                  value={form.transportProximity}
                  onChange={(e) => update('transportProximity', e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="hotel-form-actions">
              <button type="submit" className="btn btn-primary btn-lg">
                <Save size={18} /> Save Hotel
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-lg"
                onClick={() => navigate('/dashboard')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

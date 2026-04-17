// Hotel service — manages owner-added hotels in localStorage
// Merges with seed data from data/hotels.js for display

import seedHotels from '../data/hotels';

const OWNER_HOTELS_KEY = 'ecovoyage_owner_hotels';

function getOwnerHotels() {
  try {
    return JSON.parse(localStorage.getItem(OWNER_HOTELS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveOwnerHotels(hotels) {
  localStorage.setItem(OWNER_HOTELS_KEY, JSON.stringify(hotels));
}

/**
 * Get all hotels (seed + owner-added), optionally filtered by city
 */
export function getAllHotels(city = null) {
  const ownerHotels = getOwnerHotels();
  let allHotels = [...seedHotels, ...ownerHotels];

  if (city) {
    allHotels = allHotels.filter(
      (h) => h.city.toLowerCase() === city.toLowerCase()
    );
  }

  // Sort by ecological score descending
  allHotels.sort((a, b) => (b.ecoScore || 0) - (a.ecoScore || 0));

  return allHotels;
}

/**
 * Get a single hotel by ID
 */
export function getHotelById(id) {
  const allHotels = [...seedHotels, ...getOwnerHotels()];
  return allHotels.find((h) => h.id === id) || null;
}

/**
 * Get hotels owned by a specific user
 */
export function getHotelsByOwner(ownerId) {
  const ownerHotels = getOwnerHotels();
  return ownerHotels.filter((h) => h.ownerId === ownerId);
}

/**
 * Add a new hotel (owner-created)
 */
export function addHotel(hotelData) {
  const ownerHotels = getOwnerHotels();

  const newHotel = {
    ...hotelData,
    id: 'h-owner-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
    createdAt: new Date().toISOString(),
  };

  ownerHotels.push(newHotel);
  saveOwnerHotels(ownerHotels);

  return newHotel;
}

/**
 * Update an existing owner hotel
 */
export function updateHotel(hotelId, hotelData) {
  const ownerHotels = getOwnerHotels();
  const index = ownerHotels.findIndex((h) => h.id === hotelId);

  if (index === -1) {
    return null;
  }

  ownerHotels[index] = { ...ownerHotels[index], ...hotelData };
  saveOwnerHotels(ownerHotels);

  return ownerHotels[index];
}

/**
 * Delete an owner hotel
 */
export function deleteHotel(hotelId) {
  const ownerHotels = getOwnerHotels();
  const filtered = ownerHotels.filter((h) => h.id !== hotelId);
  saveOwnerHotels(filtered);
}

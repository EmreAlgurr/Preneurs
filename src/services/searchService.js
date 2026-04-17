// Search service — looks up routes, transport, and hotels from manual data
// Designed as a clean abstraction layer for future API replacement

import routes from '../data/routes';
import transportData from '../data/transport';
import { getAllHotels } from './hotelService';

/**
 * Find a matching route for the given origin, destination, and date
 */
export function findRoute(from, to, date) {
  const route = routes.find(
    (r) =>
      r.from.toLowerCase() === from.toLowerCase() &&
      r.to.toLowerCase() === to.toLowerCase()
  );

  if (!route) return null;

  // For the demo, we accept any date even if not in our list
  // but still return whether the date is in the "available" list
  return {
    ...route,
    dateAvailable: route.availableDates.includes(date),
  };
}

/**
 * Get transport options for a given route
 */
export function getTransportOptions(routeId) {
  const options = transportData.filter((t) => t.routeId === routeId);
  // Sort by CO2 emission (lowest first)
  return options.sort((a, b) => a.co2Emission - b.co2Emission);
}

/**
 * Get hotels for a destination city, sorted by eco score
 */
export function getDestinationHotels(city) {
  return getAllHotels(city);
}

/**
 * Perform a full search — returns route, transport options, and destination hotels
 */
export function performSearch(from, to, date) {
  const route = findRoute(from, to, date);

  if (!route) {
    return {
      found: false,
      route: null,
      transport: [],
      hotels: [],
    };
  }

  const transport = getTransportOptions(route.id);
  const hotels = getDestinationHotels(to);

  return {
    found: true,
    route,
    transport,
    hotels,
  };
}

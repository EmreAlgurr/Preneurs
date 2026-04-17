// Manual hotel data — pre-seeded hotels for each destination
// Each hotel has a complete set of fields ready for display

const hotels = [
  // ===================== ISTANBUL HOTELS =====================
  {
    id: 'h-ist-1', ownerId: null, city: 'Istanbul', district: 'Besiktas',
    name: 'Bosphorus Suites', address: 'Bebek Sahil Yolu No:1, 34342 Besiktas/Istanbul',
    ecoScore: 96, price: 14000, roomCount: 40, bedCount: 60, maxGuests: 120,
    roomTypes: ['Suite', 'Standard'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: false, airConditioning: true,
    phone: '+90 212 555 1001', email: 'hello@bosphorussuites.demo', website: 'www.bosphorussuites.demo',
    amenities: ['Free WiFi', 'Sea View', 'Restaurant', 'Air Conditioning', 'Recycling Program'],
    aiOverview: 'Bosphorus Suites offers a luxurious stay directly on the strait, renowned for its commitment to energy efficiency and a zero-waste dining philosophy. It provides stunning views without compromising ecological standards.',
    transportProximity: '10 mins walk from Besiktas ferry.',
    image_url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ist-2', ownerId: null, city: 'Istanbul', district: 'Beyoglu',
    name: 'Galata Urban Hotel', address: 'Serdar-i Ekrem Cd. No:33, 34421 Beyoglu/Istanbul',
    ecoScore: 72, price: 11000, roomCount: 25, bedCount: 35, maxGuests: 70,
    roomTypes: ['Double', 'Single'], checkIn: '15:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: false, airConditioning: true,
    phone: '+90 212 555 1002', email: 'stay@galataurban.demo', website: 'www.galataurban.demo',
    amenities: ['Free WiFi', 'City View', 'Air Conditioning', 'Bicycle Rental', 'Organic Breakfast'],
    aiOverview: 'Nestled in the historic streets near the Galata Tower, this boutique hotel utilizes 100% renewable energy and provides guests with locally-sourced organic continental breakfasts.',
    transportProximity: '5 min walk from Sishane Metro Station.',
    image_url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ist-3', ownerId: null, city: 'Istanbul', district: 'Fatih',
    name: 'Golden Horn Residence', address: 'Balat Mah. Yildirim Cd. No:12, 34087 Fatih/Istanbul',
    ecoScore: 85, price: 9500, roomCount: 30, bedCount: 50, maxGuests: 100,
    roomTypes: ['Studio', 'Family Suite'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: false, mealOptions: 'Room Only', wifi: true, parking: true, pool: false, airConditioning: true,
    phone: '+90 212 555 1003', email: 'info@goldenhornres.demo', website: 'www.goldenhornres.demo',
    amenities: ['Free WiFi', 'Kitchenette', 'Parking', 'Air Conditioning', 'Water Saving Fixtures'],
    aiOverview: 'A historically restored residence by the Golden Horn. It blends traditional Ottoman architecture with modern low-flow water fixtures and LED lighting, keeping historical preservation sustainable.',
    transportProximity: '15 mins from tram line.',
    image_url: '/hotels/fallback-1.png'
  },
  {
    id: 'h-ist-4', ownerId: null, city: 'Istanbul', district: 'Kadikoy',
    name: 'Moda Stay', address: 'Moda Cd. No:88, 34710 Kadikoy/Istanbul',
    ecoScore: 65, price: 7500, roomCount: 20, bedCount: 30, maxGuests: 60,
    roomTypes: ['Double', 'Suite'], checkIn: '13:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: false, airConditioning: true,
    phone: '+90 216 555 1004', email: 'hello@modastay.demo', website: 'www.modastay.demo',
    amenities: ['Free WiFi', 'Rooftop Cafe', 'Vegan Options', 'Air Conditioning', 'Solar Powered'],
    aiOverview: 'Located in the vibrant Moda neighborhood, this hotel highlights its vegan-friendly cafe and solar-powered common areas, making it a favorite for eco-conscious urban explorers.',
    transportProximity: 'Walkable interval to Kadikoy ferry port.',
    image_url: '/hotels/fallback-2.jpg'
  },

  // ===================== ANTALYA HOTELS =====================
  {
    id: 'h-ayt-1', ownerId: null, city: 'Antalya', district: 'Kaleici',
    name: 'Kaleici Eco House', address: 'Hesapci Sokak No:8, 07100 Antalya',
    ecoScore: 98, price: 10500, roomCount: 15, bedCount: 25, maxGuests: 40,
    roomTypes: ['Standard', 'Superior'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: true, airConditioning: true,
    phone: '+90 242 555 2001', email: 'stay@kaleicieco.demo', website: 'www.kaleicieco.demo',
    amenities: ['Free WiFi', 'Swimming Pool', 'Garden', 'Organic Breakfast', 'Plastic Free'],
    aiOverview: 'Kaleici Eco House sits perfectly inside the historic old town walls. The internal garden acts as a natural cooling oasis, eliminating the need for constant air conditioning in common areas.',
    transportProximity: '10 mins to tram.',
    image_url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ayt-2', ownerId: null, city: 'Antalya', district: 'Lara',
    name: 'Lara Coast Hotel', address: 'Lara Turizm Yolu, 07230 Antalya',
    ecoScore: 88, price: 13500, roomCount: 100, bedCount: 150, maxGuests: 300,
    roomTypes: ['Double', 'Sea View', 'Suite'], checkIn: '15:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Half Board', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 242 555 2002', email: 'info@laracoast.demo', website: 'www.laracoast.demo',
    amenities: ['Free WiFi', 'Beach Access', 'Spa', 'Electric Vehicle Charging', 'Recycling Program'],
    aiOverview: 'A mid-sized eco resort located on the popular Lara beach strip, featuring significant investments in greywater recycling to maintain its lush gardens alongside EV charging stations for guests.',
    transportProximity: '25 mins from AYT Airport.',
    image_url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ayt-3', ownerId: null, city: 'Antalya', district: 'Konyaalti',
    name: 'Konyaalti Palm Stay', address: 'Akdeniz Blv. No:112, 07070 Antalya',
    ecoScore: 55, price: 8500, roomCount: 45, bedCount: 70, maxGuests: 110,
    roomTypes: ['Standard', 'Family'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 242 555 2003', email: 'book@konyaaltipalm.demo', website: 'www.konyaaltipalm.demo',
    amenities: ['Free WiFi', 'Pool', 'Parking', 'Energy Efficient AC', 'Waste Reduction'],
    aiOverview: 'Positioned right across from Konyaalti Beach, this hotel focuses on an efficient cooling footprint and provides refill stations instead of single-use plastic water bottles.',
    transportProximity: 'Close to main beach bus lines.',
    image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ayt-4', ownerId: null, city: 'Antalya', district: 'Marina',
    name: 'Marina Green Hotel', address: 'Mermerli Sokak No:5, 07100 Antalya',
    ecoScore: 78, price: 16000, roomCount: 22, bedCount: 30, maxGuests: 50,
    roomTypes: ['Deluxe Suite', 'View Room'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: false, airConditioning: true,
    phone: '+90 242 555 2004', email: 'hello@marinagreen.demo', website: 'www.marinagreen.demo',
    amenities: ['Free WiFi', 'Marina View', 'Restaurant', 'Locally Sourced Food', 'Green Roof'],
    aiOverview: 'This premium boutique hotel by the old marina boasts a green sedum roof to aid with building insulation and runs a popular farm-to-table seafood restaurant on its terrace.',
    transportProximity: '15 min walk to tram.',
    image_url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80'
  },

  // ===================== ANKARA HOTELS =====================
  {
    id: 'h-ank-1', ownerId: null, city: 'Ankara', district: 'Cankaya',
    name: 'Cankaya Business Hotel', address: 'Turan Gunes Blv. No:55, 06550 Ankara',
    ecoScore: 82, price: 5500, roomCount: 80, bedCount: 120, maxGuests: 200,
    roomTypes: ['Standard', 'Executive'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Room & Breakfast', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 312 555 3001', email: 'info@cankayabusiness.demo', website: 'www.cankayabusiness.demo',
    amenities: ['Free WiFi', 'Gym', 'Business Center', 'Smart Energy Management', 'EV Charging'],
    aiOverview: 'A leading modern corporate hotel in the capital, Cankaya Business Hotel uses smart grid room tech that automatically turns off climate control when guest rooms are empty to save energy.',
    transportProximity: '10 mins to Embassy row.',
    image_url: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ank-2', ownerId: null, city: 'Ankara', district: 'Kizilay',
    name: 'Kizilay City Stay', address: 'Ataturk Bulvari No:105, 06420 Ankara',
    ecoScore: 62, price: 3200, roomCount: 45, bedCount: 65, maxGuests: 110,
    roomTypes: ['Single', 'Double'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: false, mealOptions: 'Room Only', wifi: true, parking: false, pool: false, airConditioning: true,
    phone: '+90 312 555 3002', email: 'stay@kizilaycity.demo', website: 'www.kizilaycity.demo',
    amenities: ['Free WiFi', 'Cafe', 'Central Location', 'Waste Sorting', 'Double Glazed Windows'],
    aiOverview: 'Situated in the bustling heart of Ankara, this budget-friendly stay prioritizes efficient thermal insulation and rigorous recycling protocols, proving urban setups can be fundamentally green.',
    transportProximity: '1 min walk from Kizilay Metro.',
    image_url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ank-3', ownerId: null, city: 'Ankara', district: 'Cankaya',
    name: 'Atakule Urban Inn', address: 'Cinnah Cd. No:44, 06690 Ankara',
    ecoScore: 75, price: 4500, roomCount: 30, bedCount: 45, maxGuests: 80,
    roomTypes: ['Double', 'Superior'], checkIn: '15:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: false, airConditioning: true,
    phone: '+90 312 555 3003', email: 'book@atakuleurban.demo', website: 'www.atakuleurban.demo',
    amenities: ['Free WiFi', 'Park View', 'Bicycle Parking', 'Rooftop Solar Water', 'Locally Sourced Food'],
    aiOverview: 'Located near the iconic Atakule tower and Botanical Park, this boutique hotel utilizes rooftop solar water heating arrays, ensuring hot showers have zero carbon footprint for all their guests.',
    transportProximity: 'Steps away from major bus lines.',
    image_url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-ank-4', ownerId: null, city: 'Ankara', district: 'Bilkent',
    name: 'Bilkent Park Hotel', address: 'Bilkent Universitesi Kampusu, 06800 Ankara',
    ecoScore: 58, price: 6500, roomCount: 60, bedCount: 90, maxGuests: 150,
    roomTypes: ['Standard', 'Family Room', 'Suite'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Half Board', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 312 555 3004', email: 'stay@bilkentpark.demo', website: 'www.bilkentpark.demo',
    amenities: ['Free WiFi', 'Swimming Pool', 'Gym', 'Rainwater Harvesting', 'Green Surrounded'],
    aiOverview: 'Surrounded by the forested campus zones of Bilkent, this expansive hotel relies on harvested rainwater for its lush landscaping and uses a custom permaculture strategy to minimize its ecosystem footprint.',
    transportProximity: '15 mins from Bilkent station.',
    image_url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
  },

  // ===================== MUGLA HOTELS =====================
  {
    id: 'h-mug-1', ownerId: null, city: 'Mugla', district: 'Bodrum',
    name: 'Bodrum Blue Bay', address: 'Yalikavak Yolu No:20, Bodrum/Mugla',
    ecoScore: 91, price: 8200, roomCount: 35, bedCount: 50, maxGuests: 80,
    roomTypes: ['Sea View', 'Villas'], checkIn: '15:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 252 555 4001', email: 'hello@bodrumblue.demo', website: 'www.bodrumblue.demo',
    amenities: ['Free WiFi', 'Private Beach', 'Infinity Pool', 'Zero Waste Kitchen', 'Local Architecture'],
    aiOverview: 'Built to match the classic white Bodrum aesthetic, this hotel integrates completely with its environment. It features a zero-waste gourmet kitchen and a fully passive structural cooling design.',
    transportProximity: '45 mins from Milas Airport.',
    image_url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-mug-2', ownerId: null, city: 'Mugla', district: 'Fethiye',
    name: 'Fethiye Olive Stay', address: 'Ovacik Mah, Fethiye/Mugla',
    ecoScore: 84, price: 3900, roomCount: 12, bedCount: 20, maxGuests: 35,
    roomTypes: ['Bungalow', 'Standard Room'], checkIn: '13:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 252 555 4002', email: 'stay@fethiyeolive.demo', website: 'www.fethiyeolive.demo',
    amenities: ['Free WiFi', 'Pool', 'Nature Trails', 'Off-grid Capable', 'Farm to Table'],
    aiOverview: 'A small collection of bungalows scattered inside an olive grove. The owner produces their own soap and olive oil and the property runs almost entirely from localized solar panels.',
    transportProximity: '15 mins drive from Fethiye center.',
    image_url: '/hotels/fallback-3.jpg'
  },
  {
    id: 'h-mug-3', ownerId: null, city: 'Mugla', district: 'Marmaris',
    name: 'Marmaris Coast House', address: 'Siteler Mevkii No:90, Marmaris/Mugla',
    ecoScore: 68, price: 6500, roomCount: 55, bedCount: 80, maxGuests: 120,
    roomTypes: ['Double', 'Sea View'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Half Board', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 252 555 4003', email: 'book@marmariscoast.demo', website: 'www.marmariscoast.demo',
    amenities: ['Free WiFi', 'Pool', 'Beach', 'LED Lighting', 'Low Carbon Transport'],
    aiOverview: 'Sitting beautifully along the sandy strip, this property organizes guided ecological boat tours instead of traditional gas-guzzling yachts and utilizes efficient thermal heat pumps for the pool.',
    transportProximity: '1 hour from Dalaman Airport.',
    image_url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-mug-4', ownerId: null, city: 'Mugla', district: 'Datca',
    name: 'Datca Nature Hotel', address: 'Palamutbuku Sokak, Datca/Mugla',
    ecoScore: 76, price: 5000, roomCount: 20, bedCount: 30, maxGuests: 50,
    roomTypes: ['Stone Room', 'Boutique Room'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: false, airConditioning: false,
    phone: '+90 252 555 4004', email: 'stay@datcanature.demo', website: 'www.datcanature.demo',
    amenities: ['Free WiFi', 'Yoga Deck', 'Natural Ventilation', 'Composting', 'Organic Garden'],
    aiOverview: 'An ultra-eco-friendly stone property situated on the Datca peninsula. No air conditioning is needed thanks to cross-ventilation architecture, and all organic waste is composted on site.',
    transportProximity: 'Local minibus route passing by.',
    image_url: 'https://images.unsplash.com/photo-1515362655824-9a74989f318e?auto=format&fit=crop&w=1200&q=80'
  },

  // ===================== IZMIR HOTELS =====================
  {
    id: 'h-izm-1', ownerId: null, city: 'Izmir', district: 'Alsancak',
    name: 'Kordon Suites', address: 'Ataturk Cd. No:200, 35220 Izmir',
    ecoScore: 95, price: 8000, roomCount: 30, bedCount: 40, maxGuests: 60,
    roomTypes: ['Suite', 'City View'], checkIn: '14:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: false, airConditioning: true,
    phone: '+90 232 555 5001', email: 'info@kordonsuites.demo', website: 'www.kordonsuites.demo',
    amenities: ['Free WiFi', 'Sea View', 'Fine Dining', 'Local Sourcing', 'Plastic Free'],
    aiOverview: 'Overlooking the famous Kordon promenade, this suite hotel champions the local Aegean slow-food movement in its restaurants and operates a rigorous plastic-free policy across all suites.',
    transportProximity: '10 mins to Alsancak ferry port.',
    image_url: '/hotels/fallback-4.jpg'
  },
  {
    id: 'h-izm-2', ownerId: null, city: 'Izmir', district: 'Alsancak',
    name: 'Alsancak Urban Hotel', address: 'Gundogdu Meydani, 35220 Izmir',
    ecoScore: 86, price: 5500, roomCount: 45, bedCount: 65, maxGuests: 110,
    roomTypes: ['Standard', 'Double'], checkIn: '14:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: true, pool: false, airConditioning: true,
    phone: '+90 232 555 5002', email: 'hello@alsancakurban.demo', website: 'www.alsancakurban.demo',
    amenities: ['Free WiFi', 'Business Center', 'EV Charging', 'Energy Efficient A/C', 'Water Recycling'],
    aiOverview: 'A functional, beautifully designed smart hotel placed strategically near nightlife and business hubs, implementing water recycling technologies that feed its vertical indoor gardens.',
    transportProximity: '5 mins to Izban metro line.',
    image_url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'h-izm-3', ownerId: null, city: 'Izmir', district: 'Alacati',
    name: 'Alacati Garden Stay', address: 'Tokoglu Mah, Cesme/Izmir',
    ecoScore: 74, price: 9200, roomCount: 16, bedCount: 22, maxGuests: 35,
    roomTypes: ['Stone Home', 'Courtyard Room'], checkIn: '15:00', checkOut: '11:00',
    breakfastIncluded: true, mealOptions: 'Bed & Breakfast', wifi: true, parking: false, pool: true, airConditioning: true,
    phone: '+90 232 555 5003', email: 'stay@alacatigarden.demo', website: 'www.alacatigarden.demo',
    amenities: ['Free WiFi', 'Pool', 'Breakfast Courtyard', 'Chemical Free Pool', 'Local Materials'],
    aiOverview: 'Built entirely from resurrected Greek stone, this Alacati boutique features an eco-pool treated with plant-based filters rather than harsh chlorination for an unparalleled relaxing swim.',
    transportProximity: '45 mins from ADB airport.',
    image_url: '/hotels/fallback-5.jpg'
  },
  {
    id: 'h-izm-4', ownerId: null, city: 'Izmir', district: 'Cesme',
    name: 'Cesme Breeze Hotel', address: 'Boyalik Mevkii, Cesme/Izmir',
    ecoScore: 60, price: 6800, roomCount: 60, bedCount: 90, maxGuests: 150,
    roomTypes: ['Standard', 'Family', 'Suite'], checkIn: '15:00', checkOut: '12:00',
    breakfastIncluded: true, mealOptions: 'Half Board', wifi: true, parking: true, pool: true, airConditioning: true,
    phone: '+90 232 555 5004', email: 'book@cesmebreeze.demo', website: 'www.cesmebreeze.demo',
    amenities: ['Free WiFi', 'Private Beach', 'Spa', 'Wind Energy Powered', 'Community Sourced'],
    aiOverview: 'Positioned on the breezy coast of Cesme, this resort harnesses actual local wind energy to offset 50% of its electricity consumption, providing an guilt-free luxury Aegean getaway.',
    transportProximity: 'Central bus station 10 mins away.',
    image_url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'
  }
];

export default hotels;

// Auth service — localStorage-backed user account management
// Structure designed for easy replacement with a real backend

const USERS_KEY = 'ecorank_users';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function createAccount(username, password) {
  const users = getUsers();

  if (!username || !password) {
    return { success: false, error: 'Username and password are required.' };
  }
  if (username.length < 3) {
    return { success: false, error: 'Username must be at least 3 characters.' };
  }
  if (password.length < 4) {
    return { success: false, error: 'Password must be at least 4 characters.' };
  }

  const exists = users.find(
    (u) => u.username.toLowerCase() === username.toLowerCase()
  );
  if (exists) {
    return { success: false, error: 'Username already exists.' };
  }

  const newUser = {
    id: 'user-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
    username,
    password, // plain text for demo only
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return { success: true, user: { id: newUser.id, username: newUser.username } };
}

export function signIn(username, password) {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return { success: false, error: 'Invalid username or password.' };
  }

  return { success: true, user: { id: user.id, username: user.username } };
}

export function getCurrentUser() {
  try {
    const data = localStorage.getItem('ecorank_current_user');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('ecorank_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('ecorank_current_user');
  }
}

export function signOut() {
  setCurrentUser(null);
}

export function setupDemoSession() {
  const users = getUsers();
  let demoUser = users.find(u => u.username === 'demo_admin');
  
  if (!demoUser) {
    demoUser = {
      id: 'demo-admin-id',
      username: 'demo_admin',
      password: '123',
      createdAt: new Date().toISOString()
    };
    users.push(demoUser);
    saveUsers(users);
  }
  
  // Seed demo hotels
  try {
    const OWNER_HOTELS_KEY = 'ecorank_owner_hotels';
    let ownerHotels = JSON.parse(localStorage.getItem(OWNER_HOTELS_KEY)) || [];
    
    // Always reset demo hotels to fresh state with images on demo login
    ownerHotels = ownerHotels.filter(h => h.ownerId !== 'demo-admin-id');
    
    const dummyHotels = [
      {
        id: 'h-demo-1',
        ownerId: 'demo-admin-id',
        name: 'Green Paradise Resort',
        city: 'Antalya',
        district: 'Kemer',
        address: 'Kemer Sahil Yolu No:10',
        image: '/hotels/fallback-2.jpg',
        ecoScore: 92,
        roomCount: 150,
        bedCount: 300,
        maxGuests: 400,
        price: 450,
        createdAt: new Date().toISOString()
      },
      {
        id: 'h-demo-2',
        ownerId: 'demo-admin-id',
        name: 'Eco Lodge Izmir',
        city: 'Izmir',
        district: 'Seferihisar',
        address: 'Teos Yolu No:5',
        image: '/hotels/fallback-4.jpg',
        ecoScore: 88,
        roomCount: 40,
        bedCount: 60,
        maxGuests: 90,
        price: 220,
        createdAt: new Date().toISOString()
      }
    ];
    ownerHotels = [...ownerHotels, ...dummyHotels];
    localStorage.setItem(OWNER_HOTELS_KEY, JSON.stringify(ownerHotels));
  } catch (e) {
    // Ignore Storage issues
  }
  
  return { success: true, user: { id: demoUser.id, username: demoUser.username } };
}

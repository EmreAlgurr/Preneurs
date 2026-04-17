// Auth service — localStorage-backed user account management
// Structure designed for easy replacement with a real backend

const USERS_KEY = 'ecovoyage_users';

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
    const data = localStorage.getItem('ecovoyage_current_user');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}

export function setCurrentUser(user) {
  if (user) {
    localStorage.setItem('ecovoyage_current_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('ecovoyage_current_user');
  }
}

export function signOut() {
  setCurrentUser(null);
}

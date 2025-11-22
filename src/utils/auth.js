// Client-side auth utilities using localStorage

const USERS_KEY = 'cinemind_users';
const CURRENT_USER_KEY = 'cinemind_current_user';

export const initializeUsers = (initialUsers) => {
  if (!localStorage.getItem(USERS_KEY)) {
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
  }
};

export const getUsers = () => {
  const users = localStorage.getItem(USERS_KEY);
  return users ? JSON.parse(users) : [];
};

export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

export const login = (username, password) => {
  const users = getUsers();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ username: user.username, name: user.name, email: user.email }));
    return { success: true, user };
  }
  return { success: false, message: 'Invalid username or password' };
};

export const signup = (username, password, email, name) => {
  const users = getUsers();
  const exists = users.find(u => u.username === username || u.email === email);
  if (exists) {
    return { success: false, message: 'Username or email already exists' };
  }
  const newUser = { username, password, email, name };
  addUser(newUser);
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ username, name, email }));
  return { success: true, user: newUser };
};

export const logout = () => {
  localStorage.removeItem(CURRENT_USER_KEY);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(CURRENT_USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!getCurrentUser();
};

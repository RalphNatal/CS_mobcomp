import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'connex_users';
const CURRENT_USER_KEY = 'connex_current_user';

// Initialize with default users for testing
const DEFAULT_USERS = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'Test123!',
    name: 'Test User',
    title: 'Job Seeker',
    phone: '+63 900 000 0000',
    location: 'Manila, Philippines',
    about: 'Aspiring professional looking for opportunities',
    skills: [],
    experience: [],
    education: [],
  },
  {
    id: '2',
    email: 'juan@example.com',
    password: 'Juan123!',
    name: 'Juan Dela Cruz',
    title: 'Software Developer',
    phone: '+63 912 345 6789',
    location: 'Quezon City, Philippines',
    about: 'Experienced developer with passion for mobile apps',
    skills: ['React Native', 'JavaScript', 'Python'],
    experience: [],
    education: [],
  },
];

// Get all registered users
export const getUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : DEFAULT_USERS;
  } catch (error) {
    console.error('Error getting users:', error);
    return DEFAULT_USERS;
  }
};

// Register a new user
export const registerUser = async (email, password, name) => {
  try {
    const users = await getUsers();
    
    // Check if user already exists
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return { success: false, message: 'Email already registered' };
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      title: 'Job Seeker',
      phone: 'Not provided',
      location: 'Not provided',
      about: 'No bio added yet',
      skills: [],
      experience: [],
      education: [],
    };

    users.push(newUser);
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: 'User registered successfully', user: newUser };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, message: 'Error registering user' };
  }
};

// Validate login credentials from JSON
export const validateLogin = async (email, password) => {
  try {
    const users = await getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      // Store current logged-in user
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return { success: true, message: 'Login successful', user };
    } else {
      return { success: false, message: 'Invalid email or password' };
    }
  } catch (error) {
    console.error('Error validating login:', error);
    return { success: false, message: 'Error during login' };
  }
};

// Get current logged-in user
export const getCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
};

// Logout
export const logout = async () => {
  try {
    await AsyncStorage.removeItem(CURRENT_USER_KEY);
    return { success: true, message: 'Logged out successfully' };
  } catch (error) {
    console.error('Error logging out:', error);
    return { success: false, message: 'Error logging out' };
  }
};

// Update user profile
export const updateUserProfile = async (userId, updateData) => {
  try {
    const users = await getUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      return { success: false, message: 'User not found' };
    }

    users[userIndex] = { ...users[userIndex], ...updateData };
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));
    
    // Update current user if it's the logged-in user
    const currentUser = await getCurrentUser();
    if (currentUser && currentUser.id === userId) {
      await AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(users[userIndex]));
    }

    return { success: true, message: 'Profile updated successfully', user: users[userIndex] };
  } catch (error) {
    console.error('Error updating profile:', error);
    return { success: false, message: 'Error updating profile' };
  }
};
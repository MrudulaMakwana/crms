import api from './api';

export const authService = {
  // Login function matching your Django endpoint and payload
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login/', { email, password });
      
      // Destructure tokens and user profile from your backend response
      const { access, refresh, user } = response.data;
      
      // Store tokens and user details securely in localStorage (or cookies)
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
      localStorage.setItem('user', JSON.stringify(user));
      
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Login failed. Please check your network.' };
    }
  },

  // Logout function to clear local storage
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  // Get current logged-in user profile from storage
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
};
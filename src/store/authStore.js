import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: {
    name: 'Alexander Pierce',
    email: 'admin@gmail.com',
    role: 'admin', // 'admin' | 'manager'
    avatar: 'A'
  },
  theme: localStorage.getItem('theme') || 'dark',
  isMobileMenuOpen: false,
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    set({ theme });
  },
  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  setUserRole: (role) => set((state) => ({ user: { ...state.user, role } })),
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  }
}));

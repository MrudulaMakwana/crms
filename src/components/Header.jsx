import { Search, Sun, Moon, Bell, Menu, User, Shield, Settings, LogOut, ChevronDown } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logout, theme, setTheme, isMobileMenuOpen, setMobileMenuOpen } = useAuthStore();
  const navigate = useNavigate();
  
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isDark = theme === 'dark';

  // Handle clicking outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800/50 flex items-center justify-between px-4 md:px-6 sticky top-0 z-50 transition-colors duration-200">
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors p-1"
        >
          <Menu size={24} />
        </button>
        <div className="relative hidden md:block w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 dark:text-slate-500">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search customers, leads, projects..." 
            className="bg-slate-100 dark:bg-[#111624] text-sm text-slate-800 dark:text-slate-300 placeholder-slate-400 dark:placeholder-slate-500 rounded-lg pl-10 pr-4 py-2 border border-transparent dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Actions */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="relative w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell size={18} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0b0f19]"></span>
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 pl-4 transition-colors duration-200" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 p-1.5 pr-2 rounded-xl transition-colors cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
              {user?.avatar || 'A'}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{user?.name || 'Alexander Pierce'}</p>
              <p className="text-xs text-slate-500 capitalize">{user?.role || 'Admin'}</p>
            </div>
            <ChevronDown size={14} className={`text-slate-400 dark:text-slate-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 top-[110%] w-64 bg-white dark:bg-[#1e2333] border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg dark:shadow-2xl overflow-hidden py-2 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700/50">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{user?.name || 'Alexander Pierce'}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{user?.email || 'admin@apexcrm.io'}</p>
              </div>
              
              <div className="py-1">
                <button 
                  onClick={() => { setIsProfileOpen(false); navigate('/profile'); }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <User size={16} className="text-blue-500 dark:text-blue-400" /> My Profile
                </button>
                <button 
                  onClick={() => { setIsProfileOpen(false); navigate('/change-password'); }}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <Shield size={16} className="text-yellow-500" /> Change Password
                </button>
              </div>

              <div className="py-1 border-t border-slate-100 dark:border-slate-700/50">
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
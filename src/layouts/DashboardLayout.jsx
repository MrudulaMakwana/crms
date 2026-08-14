import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useAuthStore } from '../store/authStore';

const DashboardLayout = () => {
  const { isMobileMenuOpen, setMobileMenuOpen } = useAuthStore();

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-[#06080d] text-slate-900 dark:text-white font-sans overflow-hidden transition-colors duration-200">
      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[50] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar Container */}
      <div className="h-full z-[60]">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100 dark:bg-[#06080d] transition-colors duration-200">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
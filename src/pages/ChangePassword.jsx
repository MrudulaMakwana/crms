import React, { useState } from 'react';
import { Eye, EyeOff, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    old_password: '',
    new_password: '',
    confirm_password: ''
  });
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when typing
    if (error) setError('');
    if (message) setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.new_password !== formData.confirm_password) {
      setError("New passwords don't match.");
      return;
    }

    if (formData.new_password.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/change-password/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Assuming token is in localStorage, typically you'd add Authorization here
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        },
        body: JSON.stringify({
          old_password: formData.old_password,
          new_password: formData.new_password
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.detail || 'Password changed successfully.');
        setFormData({
          old_password: '',
          new_password: '',
          confirm_password: ''
        });
      } else {
        setError(data.detail || data.error || 'Failed to change password. Please check your old password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <Link to="/settings" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Settings</Link>
            <span className="text-slate-600 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Change Password</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Security Settings</h1>
        </div>
        <Link to="/settings" className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-all shadow-sm">
          <ArrowLeft size={16} /> Back to Settings
        </Link>
      </div>

      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-slate-800/60">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Lock size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Change Password</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Ensure your account is using a long, random password to stay secure.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
            
            {/* Status Messages */}
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium flex items-start gap-3">
                <Lock size={18} className="mt-0.5 shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            {message && (
              <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium flex items-start gap-3">
                <CheckCircle size={18} className="mt-0.5 shrink-0" />
                <span>{message}</span>
              </div>
            )}

            {/* Old Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Current Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showOldPassword ? "text" : "password"}
                  name="old_password"
                  value={formData.old_password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white text-sm transition-all outline-none"
                  placeholder="Enter current password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowOldPassword(!showOldPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="h-px bg-slate-100 dark:bg-slate-800/60 my-6"></div>

            {/* New Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="new_password"
                  value={formData.new_password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white text-sm transition-all outline-none"
                  placeholder="Enter new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 dark:focus:border-blue-500 text-slate-900 dark:text-white text-sm transition-all outline-none"
                  placeholder="Confirm new password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium rounded-xl text-sm transition-colors cursor-pointer flex justify-center items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating Password...
                  </>
                ) : (
                  'Update Password'
                )}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

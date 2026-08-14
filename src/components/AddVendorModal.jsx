import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddVendorModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact_person: '',
    email: '',
    phone: '',
    country: '',
    status: 'active'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting vendor data:', formData);
    // TODO: Integrate with actual POST API
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Add New Vendor</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Create a new vendor profile in the system</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form id="add-vendor-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Vendor Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company / Vendor Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="e.g. Acme Auto Parts"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Contact Person</label>
                  <input 
                    type="text" 
                    name="contact_person" 
                    value={formData.contact_person} 
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    placeholder="e.g. john@acme.com"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="e.g. +1 555 0100"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Country</label>
                  <input 
                    type="text" 
                    name="country" 
                    value={formData.country} 
                    onChange={handleChange}
                    placeholder="e.g. USA"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-2xl flex justify-end gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            form="add-vendor-form"
            className="px-5 py-2.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm shadow-indigo-500/20 transition-all active:scale-95"
          >
            Create Vendor
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddVendorModal;

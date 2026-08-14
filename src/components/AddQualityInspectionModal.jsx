import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddQualityInspectionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    grn: '',
    job_order: '',
    product: '',
    quantity: '',
    status: 'pending',
    inspected_by: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Quality Inspection data:', formData);
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
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Create Quality Inspection</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Record a new quality control check</p>
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
          <form id="add-qi-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">GRN Reference (Optional)</label>
                <input 
                  type="text" 
                  name="grn" 
                  value={formData.grn} 
                  onChange={handleChange}
                  placeholder="e.g. GRN-0011"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Job Order (Optional)</label>
                <input 
                  type="text" 
                  name="job_order" 
                  value={formData.job_order} 
                  onChange={handleChange}
                  placeholder="e.g. JO-0020"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Product</label>
                <input 
                  type="text" 
                  name="product" 
                  value={formData.product} 
                  onChange={handleChange}
                  placeholder="Product ID or Name"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Quantity</label>
                <input 
                  type="number" 
                  name="quantity" 
                  value={formData.quantity} 
                  onChange={handleChange}
                  min="1"
                  step="0.01"
                  placeholder="e.g. 20"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Status</label>
                <select 
                  name="status" 
                  value={formData.status} 
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                >
                  <option value="pending">Pending</option>
                  <option value="passed">Passed</option>
                  <option value="failed">Failed</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Inspected By</label>
                <input 
                  type="text" 
                  name="inspected_by" 
                  value={formData.inspected_by} 
                  onChange={handleChange}
                  placeholder="Inspector ID or Name"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  required
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Notes</label>
                <textarea 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g. Inbound QC checked and verified"
                  className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                />
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
            form="add-qi-form"
            className="px-5 py-2.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm shadow-indigo-500/20 transition-all active:scale-95"
          >
            Create Inspection
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddQualityInspectionModal;

import React, { useState } from 'react';
import { X } from 'lucide-react';

const AddDispatchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create Dispatch Job</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Job Order *</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white">
                  <option value="">Select Job Order...</option>
                  <option value="20">JO-0020 - JYP Corp</option>
                  <option value="21">JO-0021 - TechCorp</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Transport Mode *</label>
                <select className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white">
                  <option value="road">Road</option>
                  <option value="air">Air</option>
                  <option value="sea">Sea</option>
                  <option value="rail">Rail</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Vehicle Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. KA01 AB 1234"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Driver Name</label>
                <input 
                  type="text" 
                  placeholder="Enter driver name"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Driver Phone</label>
                <input 
                  type="tel" 
                  placeholder="Enter phone number"
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white"
                />
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Packing Note</label>
              <textarea 
                rows="3"
                placeholder="E.g. Box 1 of 1"
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-colors text-slate-900 dark:text-white resize-none"
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input 
                type="checkbox" 
                id="label_printed" 
                className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 cursor-pointer"
              />
              <label htmlFor="label_printed" className="text-sm font-medium text-slate-700 dark:text-slate-300 cursor-pointer">
                Label Printed
              </label>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-[#0b0f19]/50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button 
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            Create Dispatch
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddDispatchModal;

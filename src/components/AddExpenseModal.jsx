import React, { useState } from 'react';
import { X, Receipt, Tag, DollarSign, CreditCard, Calendar, AlignLeft, Activity } from 'lucide-react';
import api from '../services/api';

const AddExpenseModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 1,
    amount: '',
    payment_method: 'cash',
    date: '',
    description: '',
    status: 'paid'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const payload = {
        ...formData,
        category: parseInt(formData.category, 10),
      };

      await api.post('/finance/expenses/', payload);
      
      setSuccess('Expense created successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create expense');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-[#111624] w-full max-w-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Receipt size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Add New Expense</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Record a new company expense</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body - Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium flex items-start gap-2">
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium flex items-start gap-2">
              <span>{success}</span>
            </div>
          )}

          <form id="add-expense-form" onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expense Name <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Receipt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="e.g. Kerosine" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Category <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <select 
                    name="category" 
                    required 
                    value={formData.category} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm appearance-none" 
                  >
                    <option value={1}>Fuel</option>
                    <option value={2}>Office Supplies</option>
                    <option value={3}>Travel</option>
                    <option value={4}>Utilities</option>
                    <option value={5}>Rent</option>
                    <option value={6}>Marketing</option>
                    <option value={7}>IT Services</option>
                    <option value={8}>Employee Training</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Amount <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <input 
                    type="number" 
                    step="0.01"
                    name="amount" 
                    required 
                    value={formData.amount} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="0.00" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Method <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <select 
                    name="payment_method" 
                    required 
                    value={formData.payment_method} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm appearance-none" 
                  >
                    <option value="cash">Cash</option>
                    <option value="credit_card">Credit Card</option>
                    <option value="debit_card">Debit Card</option>
                    <option value="upi">UPI</option>
                    <option value="bank_transfer">Bank Transfer</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Date <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <input 
                    type="date" 
                    name="date" 
                    required 
                    value={formData.date} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm" 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status <span className="text-red-500">*</span></label>
                <div className="relative group">
                  <Activity className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                  <select 
                    name="status" 
                    required 
                    value={formData.status} 
                    onChange={handleChange} 
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm appearance-none" 
                  >
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <div className="relative group">
                <AlignLeft className="absolute left-3 top-3 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                <textarea 
                  name="description" 
                  value={formData.description} 
                  onChange={handleChange} 
                  rows="3"
                  className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all shadow-sm resize-none custom-scrollbar" 
                  placeholder="Additional notes about this expense..." 
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50/80 dark:bg-[#0b0f19]/80 backdrop-blur-md">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="add-expense-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Saving...
              </>
            ) : (
              'Save Expense'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddExpenseModal;

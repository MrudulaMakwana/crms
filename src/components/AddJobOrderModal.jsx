import React, { useState } from 'react';
import { 
  X, 
  Settings, 
  ShoppingCart, 
  User, 
  Box, 
  Calendar, 
  AlertCircle, 
  HardDrive, 
  Users, 
  FileText,
  AlignLeft,
  List
} from 'lucide-react';
import api from '../services/api';

const AddJobOrderModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    sales_order: '',
    customer: '',
    product: '',
    quantity: '',
    start_date: '',
    end_date: '',
    priority: 'high',
    machine: '',
    supervisor: '',
    operators: '',
    bom: '',
    notes: ''
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
        sales_order: formData.sales_order ? parseInt(formData.sales_order, 10) : null,
        quotation: null,
        customer: formData.customer ? parseInt(formData.customer, 10) : null,
        product: formData.product ? parseInt(formData.product, 10) : null,
        quantity: formData.quantity ? parseInt(formData.quantity, 10) : 0,
        start_date: formData.start_date,
        end_date: formData.end_date,
        priority: formData.priority,
        machine: formData.machine ? parseInt(formData.machine, 10) : null,
        supervisor: formData.supervisor ? parseInt(formData.supervisor, 10) : null,
        operators: formData.operators ? formData.operators.split(',').map(op => parseInt(op.trim(), 10)).filter(n => !isNaN(n)) : [],
        bom: formData.bom ? parseInt(formData.bom, 10) : null,
        notes: formData.notes
      };

      await api.post('/production/job-orders/', payload);
      
      setSuccess('Job Order created successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create job order');
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
      <div className="relative bg-white dark:bg-[#111624] w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-gradient-to-r from-cyan-50 to-white dark:from-cyan-900/10 dark:to-[#111624]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shadow-sm border border-cyan-200 dark:border-cyan-500/30">
              <Settings size={20} className="animate-spin-slow" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Add Job Order</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Plan and schedule a new production run</p>
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
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium flex items-start gap-2">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          <form id="add-job-order-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Core Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Box size={16} className="text-cyan-500" /> Core Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sales Order ID <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <ShoppingCart className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="sales_order" 
                      required 
                      value={formData.sales_order} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 46" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer ID <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="customer" 
                      required 
                      value={formData.customer} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 8" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Product ID <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Box className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="product" 
                      required 
                      value={formData.product} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 1" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Quantity <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <List className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="quantity" 
                      required 
                      value={formData.quantity} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 10" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scheduling & Requirements */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Calendar size={16} className="text-cyan-500" /> Scheduling & Execution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Start Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="start_date" 
                      required 
                      value={formData.start_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">End Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="end_date" 
                      required 
                      value={formData.end_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Priority</label>
                  <div className="relative group">
                    <AlertCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <select 
                      name="priority" 
                      value={formData.priority} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all appearance-none shadow-sm"
                    >
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Machine ID</label>
                  <div className="relative group">
                    <HardDrive className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="machine" 
                      value={formData.machine} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 2" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Supervisor ID</label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="supervisor" 
                      value={formData.supervisor} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 3" 
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">BOM ID</label>
                  <div className="relative group">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="bom" 
                      value={formData.bom} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 2" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5 lg:col-span-3">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Operator IDs <span className="text-slate-400 font-normal">(comma separated)</span></label>
                  <div className="relative group">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="operators" 
                      value={formData.operators} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 8, 9, 12" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <AlignLeft size={14} className="text-slate-400" /> Notes / Instructions
                </label>
                <textarea 
                  name="notes" 
                  value={formData.notes} 
                  onChange={handleChange} 
                  rows={3}
                  className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all shadow-sm resize-none" 
                  placeholder="e.g. Urgent order, handle with care" 
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
            form="add-job-order-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 disabled:bg-cyan-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Scheduling...
              </>
            ) : (
              'Create Job Order'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddJobOrderModal;

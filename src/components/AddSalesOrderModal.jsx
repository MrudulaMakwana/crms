import React, { useState } from 'react';
import { X, ShoppingCart, Plus, Trash2, DollarSign, Calendar, FileText, MapPin, Building, User } from 'lucide-react';
import api from '../services/api';

const AddSalesOrderModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    employee: '',
    customer: '',
    company_from: '',
    company_to: '',
    date: new Date().toISOString().split('T')[0],
    payment_method: 'cash',
    status: 'in_progress',
    total_discount: '0.00',
    shipping_charge: '0.00',
    notes: '',
    terms_conditions: 'Standard terms apply',
    items: [
      { product: '', quantity: 1, unit_price: '0.00', discount: '0.00', tax: '0.00' }
    ]
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

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData(prev => ({ ...prev, items: updatedItems }));
  };

  const addItemRow = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { product: '', quantity: 1, unit_price: '0.00', discount: '0.00', tax: '0.00' }]
    }));
  };

  const removeItemRow = (index) => {
    if (formData.items.length === 1) return; // Keep at least one item
    setFormData(prev => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      // POST http://localhost:8000/api/sales/orders/
      const payload = {
        ...formData,
        employee: Number(formData.employee),
        customer: Number(formData.customer),
        items: formData.items.map(item => ({
          ...item,
          product: Number(item.product),
          quantity: Number(item.quantity),
        }))
      };

      await api.post('/sales/orders/', payload);
      setSuccess('Sales order created successfully!');
      setTimeout(() => {
        onClose();
        if (onSuccess) onSuccess();
      }, 1200);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || JSON.stringify(err.response?.data) || err.message || 'Failed to create sales order');
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
      
      {/* Modal Box */}
      <div className="relative bg-white dark:bg-[#111624] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <ShoppingCart size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create Sales Order</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Add a new order for a client</p>
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
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 rounded-xl text-sm font-medium">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-xl text-sm font-medium">
              {success}
            </div>
          )}

          <form id="add-sales-order-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section: General Order Info */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <User size={14} className="text-blue-500" /> General Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Employee ID <span className="text-red-500">*</span></label>
                  <input type="number" name="employee" required value={formData.employee} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="e.g., 3" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer ID <span className="text-red-500">*</span></label>
                  <input type="number" name="customer" required value={formData.customer} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="e.g., 8" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Order Date <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Addresses & Logistics */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <MapPin size={14} className="text-emerald-500" /> Addresses & Payment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company From</label>
                  <input type="text" name="company_from" value={formData.company_from} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Company HQ, Street 1" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company To (Customer)</label>
                  <input type="text" name="company_to" value={formData.company_to} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Customer Address, Street 2" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Method</label>
                  <select name="payment_method" value={formData.payment_method} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none">
                    <option value="cash">Cash</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="credit">Credit</option>
                    <option value="upi">UPI / Online</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Order Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none">
                    <option value="in_progress">In Progress</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Order Items Dynamic List */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                  <ShoppingCart size={14} className="text-purple-500" /> Order Items
                </h3>
                <button 
                  type="button" 
                  onClick={addItemRow}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20 hover:bg-blue-100 dark:hover:bg-blue-500/20 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Plus size={14} /> Add Item
                </button>
              </div>

              <div className="space-y-3">
                {formData.items.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50/70 dark:bg-[#0b0f19]/70 border border-slate-200 dark:border-slate-800 rounded-xl relative grid grid-cols-1 sm:grid-cols-6 gap-3 items-end">
                    
                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Product ID</label>
                      <input type="number" required value={item.product} onChange={(e) => handleItemChange(index, 'product', e.target.value)} className="w-full px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none" placeholder="ID" />
                    </div>

                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Qty</label>
                      <input type="number" required min="1" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} className="w-full px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none" placeholder="1" />
                    </div>

                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Unit Price</label>
                      <input type="number" step="0.01" required value={item.unit_price} onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)} className="w-full px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none" placeholder="0.00" />
                    </div>

                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Discount</label>
                      <input type="number" step="0.01" value={item.discount} onChange={(e) => handleItemChange(index, 'discount', e.target.value)} className="w-full px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none" placeholder="0.00" />
                    </div>

                    <div className="space-y-1 sm:col-span-1">
                      <label className="text-xs font-medium text-slate-600 dark:text-slate-400">Tax</label>
                      <input type="number" step="0.01" value={item.tax} onChange={(e) => handleItemChange(index, 'tax', e.target.value)} className="w-full px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white outline-none" placeholder="0.00" />
                    </div>

                    <div className="sm:col-span-1 flex items-center justify-end">
                      <button 
                        type="button" 
                        onClick={() => removeItemRow(index)}
                        disabled={formData.items.length === 1}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-30"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Section: Charges & Notes */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <FileText size={14} className="text-amber-500" /> Financial Adjustments & Notes
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Total Discount</label>
                  <input type="number" step="0.01" name="total_discount" value={formData.total_discount} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="0.00" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Shipping Charge</label>
                  <input type="number" step="0.01" name="shipping_charge" value={formData.shipping_charge} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="0.00" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Notes</label>
                  <textarea name="notes" rows="2" value={formData.notes} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none resize-none" placeholder="Thank you for your order" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Terms & Conditions</label>
                  <input type="text" name="terms_conditions" value={formData.terms_conditions} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Standard terms apply" />
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-[#0b0f19]">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="add-sales-order-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[140px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Creating...
              </>
            ) : (
              'Save Sales Order'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddSalesOrderModal;
import React, { useState } from 'react';
import { X, FileText, User, Building, Calendar, DollarSign, Percent, Box, AlignLeft, ShieldCheck, FileDigit } from 'lucide-react';
import api from '../services/api';

const AddInvoiceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    invoice_number: '',
    customer_name: '',
    customer_email: '',
    customer_address: '',
    billing_address: '',
    invoice_date: '',
    due_date: '',
    payment_method: 'bank_transfer',
    
    // Financials
    subtotal: '',
    tax_percentage: '',
    discount_percentage: '',
    
    // Notes
    notes: '',
    status: 'draft',
    transaction_id: '',
    terms_conditions: '',

    // Single item fields for simplicity
    item_description: '',
    item_quantity: '',
    item_unit_price: ''
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
      // Calculate derived fields (API payload requested these in the prompt payload example)
      const subtotal = parseFloat(formData.subtotal || 0);
      const taxPerc = parseFloat(formData.tax_percentage || 0);
      const discPerc = parseFloat(formData.discount_percentage || 0);

      const discount_amount = subtotal * (discPerc / 100);
      const subtotalAfterDiscount = subtotal - discount_amount;
      const tax_amount = subtotalAfterDiscount * (taxPerc / 100);
      const total = subtotalAfterDiscount + tax_amount;

      const payload = {
        invoice_number: formData.invoice_number,
        customer_name: formData.customer_name,
        customer_email: formData.customer_email,
        customer_address: formData.customer_address,
        billing_address: formData.billing_address,
        invoice_date: formData.invoice_date,
        due_date: formData.due_date,
        payment_method: formData.payment_method,
        subtotal: subtotal.toFixed(2),
        tax_percentage: taxPerc.toFixed(2),
        discount_percentage: discPerc.toFixed(2),
        notes: formData.notes,
        status: formData.status,
        transaction_id: formData.transaction_id || "string",
        terms_conditions: formData.terms_conditions || "string",
        
        // Calculated
        tax_amount: tax_amount,
        discount_amount: discount_amount,
        total: total,
        
        items: [
          {
            description: formData.item_description,
            quantity: formData.item_quantity ? parseInt(formData.item_quantity, 10) : 1,
            unit_price: formData.item_unit_price || "0.00"
          }
        ]
      };

      await api.post('/invoices/invoices/', payload);
      
      setSuccess('Invoice created successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create invoice');
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
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <FileText size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create New Invoice</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Generate an invoice for your customers</p>
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

          <form id="add-invoice-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* General Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <FileDigit size={16} className="text-blue-500" /> Invoice Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Invoice Number <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <FileDigit className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="invoice_number" 
                      required 
                      value={formData.invoice_number} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. INV-003" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Transaction ID</label>
                  <div className="relative group">
                    <FileDigit className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="transaction_id" 
                      value={formData.transaction_id} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="Optional" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Invoice Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="invoice_date" 
                      required 
                      value={formData.invoice_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Due Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="due_date" 
                      required 
                      value={formData.due_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Method</label>
                  <div className="relative group">
                    <select 
                      name="payment_method" 
                      value={formData.payment_method} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none shadow-sm"
                    >
                      <option value="bank_transfer">Bank Transfer</option>
                      <option value="credit_card">Credit Card</option>
                      <option value="paypal">PayPal</option>
                      <option value="cash">Cash</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <div className="relative group">
                    <select 
                      name="status" 
                      value={formData.status} 
                      onChange={handleChange} 
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none shadow-sm"
                    >
                      <option value="draft">Draft</option>
                      <option value="sent">Sent</option>
                      <option value="paid">Paid</option>
                      <option value="overdue">Overdue</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <User size={16} className="text-blue-500" /> Customer Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="customer_name" 
                    required 
                    value={formData.customer_name} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="e.g. ABC Motors" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="customer_email" 
                    required 
                    value={formData.customer_email} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="e.g. abc@motors.com" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Customer Address <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="customer_address" 
                    required 
                    value={formData.customer_address} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="e.g. MG Road" 
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Billing Address <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="billing_address" 
                    required 
                    value={formData.billing_address} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    placeholder="e.g. MG Road" 
                  />
                </div>
              </div>
            </div>

            {/* Line Item */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Box size={16} className="text-blue-500" /> Line Item
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-50 dark:bg-[#0b0f19] rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Description <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="item_description" 
                    required 
                    value={formData.item_description} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. Engine Oil 5W30" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Quantity <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    name="item_quantity" 
                    required 
                    value={formData.item_quantity} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 5" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Unit Price <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="item_unit_price" 
                    required 
                    value={formData.item_unit_price} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 850.00" 
                  />
                </div>
              </div>
            </div>

            {/* Financials */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <DollarSign size={16} className="text-blue-500" /> Totals & Tax
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subtotal <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="subtotal" 
                      required
                      value={formData.subtotal} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 10000.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tax Percentage (%)</label>
                  <div className="relative group">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="tax_percentage" 
                      value={formData.tax_percentage} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 18.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Discount Percentage (%)</label>
                  <div className="relative group">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="discount_percentage" 
                      value={formData.discount_percentage} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 5.00" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Notes & Terms */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <AlignLeft size={16} className="text-blue-500" /> Additional Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    Notes
                  </label>
                  <textarea 
                    name="notes" 
                    value={formData.notes} 
                    onChange={handleChange} 
                    rows={2}
                    className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm resize-none" 
                    placeholder="e.g. Test invoice" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-slate-400" /> Terms & Conditions
                  </label>
                  <textarea 
                    name="terms_conditions" 
                    value={formData.terms_conditions} 
                    onChange={handleChange} 
                    rows={2}
                    className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm resize-none" 
                    placeholder="e.g. Standard terms apply" 
                  />
                </div>
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
            form="add-invoice-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[170px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Generating...
              </>
            ) : (
              'Create Invoice'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddInvoiceModal;

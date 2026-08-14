import React, { useState } from 'react';
import { X, ShoppingCart, User, Building, Hash, Calendar, DollarSign, Percent, Truck, FileText, AlignLeft, ShieldCheck, Box } from 'lucide-react';
import api from '../services/api';

const AddPurchaseOrderModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    vendor: '',
    company_from: '',
    company_to: '',
    reference: '',
    order_date: '',
    expected_delivery_date: '',
    payment_terms: 'net_30',
    status: 'pending',
    tax: '',
    total_discount: '',
    shipping_charge: '',
    notes: '',
    terms_conditions: '',
    // Single item fields for simplicity
    product: '',
    quantity: '',
    unit_price: '',
    item_discount: ''
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
        vendor: formData.vendor ? parseInt(formData.vendor, 10) : null,
        company_from: formData.company_from,
        company_to: formData.company_to,
        reference: formData.reference,
        order_date: formData.order_date,
        expected_delivery_date: formData.expected_delivery_date,
        actual_delivery_date: null,
        payment_terms: formData.payment_terms,
        status: formData.status,
        tax: formData.tax ? parseInt(formData.tax, 10) : null,
        total_discount: formData.total_discount || "0.00",
        shipping_charge: formData.shipping_charge || "0.00",
        notes: formData.notes,
        terms_conditions: formData.terms_conditions,
        items: [
          {
            product: formData.product ? parseInt(formData.product, 10) : null,
            quantity: formData.quantity ? parseInt(formData.quantity, 10) : 1,
            unit_price: formData.unit_price || "0.00",
            discount: formData.item_discount || "0.00"
          }
        ]
      };

      await api.post('/purchases/purchase-orders/', payload);
      
      setSuccess('Purchase Order created successfully!');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create purchase order');
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
              <ShoppingCart size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add Purchase Order</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Create a new PO for your vendors</p>
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

          <form id="add-po-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Vendor & General */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <User size={16} className="text-blue-500" /> General Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Vendor ID <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="vendor" 
                      required 
                      value={formData.vendor} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 5" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Reference / PO Number <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="reference" 
                      required 
                      value={formData.reference} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. PO-REF-001" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company From</label>
                  <div className="relative group">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="company_from" 
                      value={formData.company_from} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. Company HQ, Street 1" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company To</label>
                  <div className="relative group">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="company_to" 
                      value={formData.company_to} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. Acme Auto Parts, Street 2" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dates & Terms */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Calendar size={16} className="text-blue-500" /> Scheduling & Terms
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Order Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="order_date" 
                      required 
                      value={formData.order_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expected Delivery Date <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="date" 
                      name="expected_delivery_date" 
                      required 
                      value={formData.expected_delivery_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Payment Terms</label>
                  <div className="relative group">
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <select 
                      name="payment_terms" 
                      value={formData.payment_terms} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none shadow-sm"
                    >
                      <option value="net_15">Net 15</option>
                      <option value="net_30">Net 30</option>
                      <option value="net_45">Net 45</option>
                      <option value="net_60">Net 60</option>
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
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Financials */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <DollarSign size={16} className="text-blue-500" /> Financials & Shipping
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tax ID</label>
                  <div className="relative group">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="number" 
                      name="tax" 
                      value={formData.tax} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 1" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Global Discount</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="total_discount" 
                      value={formData.total_discount} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 5.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Shipping Charge</label>
                  <div className="relative group">
                    <Truck className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="text" 
                      name="shipping_charge" 
                      value={formData.shipping_charge} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm" 
                      placeholder="e.g. 10.00" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Line Item */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <Box size={16} className="text-blue-500" /> Line Item
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-[#0b0f19] rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Product ID <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    name="product" 
                    required 
                    value={formData.product} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 1" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Quantity <span className="text-red-500">*</span></label>
                  <input 
                    type="number" 
                    name="quantity" 
                    required 
                    value={formData.quantity} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 2" 
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Unit Price <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="unit_price" 
                    required 
                    value={formData.unit_price} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 100.00" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Discount</label>
                  <input 
                    type="text" 
                    name="item_discount" 
                    value={formData.item_discount} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    placeholder="e.g. 10.00" 
                  />
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
                    placeholder="e.g. Please arrange delivery" 
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
            form="add-po-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[170px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Creating...
              </>
            ) : (
              'Create Purchase Order'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddPurchaseOrderModal;

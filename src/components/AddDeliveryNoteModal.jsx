import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

const AddDeliveryNoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    customer: '',
    company_from: '',
    company_to: '',
    reference: '',
    invoice_date: '',
    due_date: '',
    frequency: 'monthly',
    status: 'active',
    note: '',
    terms_conditions: '',
    tax: '',
    total_discount: '',
    shipping_charge: '',
    items: [
      { product: '', quantity: 1, unit_price: '', discount: '', note: '' }
    ]
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData(prev => ({
      ...prev,
      items: newItems
    }));
  };

  const addItem = () => {
    setFormData(prev => ({
      ...prev,
      items: [...prev.items, { product: '', quantity: 1, unit_price: '', discount: '', note: '' }]
    }));
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        items: newItems
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call simulation
    console.log('Submitting delivery note data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create Delivery Note</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          <form id="deliveryNoteForm" onSubmit={handleSubmit} className="space-y-6">
            
            {/* General Information */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs">1</span>
                General Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Customer</label>
                  <select 
                    name="customer" 
                    value={formData.customer} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  >
                    <option value="">Select Customer</option>
                    <option value="11">Param Changani</option>
                    <option value="12">Alexander Kenn</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Reference (Order Ref)</label>
                  <input 
                    type="text" 
                    name="reference" 
                    value={formData.reference} 
                    onChange={handleChange}
                    placeholder="e.g. SO-0001"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company From</label>
                  <textarea 
                    name="company_from" 
                    value={formData.company_from} 
                    onChange={handleChange}
                    rows="2"
                    placeholder="Company HQ, Street 1"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900 resize-none"
                  ></textarea>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company To</label>
                  <textarea 
                    name="company_to" 
                    value={formData.company_to} 
                    onChange={handleChange}
                    rows="2"
                    placeholder="Customer Address, Street 2"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900 resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Dates & Status */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Invoice Date</label>
                  <input 
                    type="date" 
                    name="invoice_date" 
                    value={formData.invoice_date} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Due Date</label>
                  <input 
                    type="date" 
                    name="due_date" 
                    value={formData.due_date} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Frequency</label>
                  <select 
                    name="frequency" 
                    value={formData.frequency} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  >
                    <option value="once">Once</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  >
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                    <option value="delivered">Delivered</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Financial Details */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
               <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs">2</span>
                Financial Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Tax (%)</label>
                  <input 
                    type="number" 
                    step="0.01"
                    name="tax" 
                    value={formData.tax} 
                    onChange={handleChange}
                    placeholder="10.00"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Total Discount</label>
                  <input 
                    type="number" 
                    step="0.01"
                    name="total_discount" 
                    value={formData.total_discount} 
                    onChange={handleChange}
                    placeholder="5.00"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Shipping Charge</label>
                  <input 
                    type="number" 
                    step="0.01"
                    name="shipping_charge" 
                    value={formData.shipping_charge} 
                    onChange={handleChange}
                    placeholder="10.00"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">3</span>
                    Items
                  </h3>
                  <button 
                    type="button" 
                    onClick={addItem}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus size={14} /> Add Item
                  </button>
               </div>
               
               <div className="space-y-3">
                 {formData.items.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl relative group">
                      <button 
                        type="button"
                        onClick={() => removeItem(index)}
                        className={`absolute -top-2 -right-2 w-6 h-6 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 rounded-full items-center justify-center hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors shadow-sm ${formData.items.length > 1 ? 'flex' : 'hidden'}`}
                      >
                        <Trash2 size={12} />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                        <div className="md:col-span-4 space-y-1.5">
                           <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Product</label>
                           <select 
                              value={item.product} 
                              onChange={(e) => handleItemChange(index, 'product', e.target.value)}
                              className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            >
                              <option value="">Select Product</option>
                              <option value="1">Synthetic Oil 5W30</option>
                              <option value="2">Brake Pads</option>
                           </select>
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                           <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Quantity</label>
                           <input 
                             type="number" 
                             min="1"
                             value={item.quantity} 
                             onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                             className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                           <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Unit Price</label>
                           <input 
                             type="number" 
                             step="0.01"
                             placeholder="100.00"
                             value={item.unit_price} 
                             onChange={(e) => handleItemChange(index, 'unit_price', e.target.value)}
                             className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                           <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Discount</label>
                           <input 
                             type="number" 
                             step="0.01"
                             placeholder="10.00"
                             value={item.discount} 
                             onChange={(e) => handleItemChange(index, 'discount', e.target.value)}
                             className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           />
                        </div>
                        <div className="md:col-span-2 space-y-1.5">
                           <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Note</label>
                           <input 
                             type="text" 
                             placeholder="e.g. Box 1"
                             value={item.note} 
                             onChange={(e) => handleItemChange(index, 'note', e.target.value)}
                             className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           />
                        </div>
                      </div>
                    </div>
                 ))}
               </div>
            </div>

            {/* Notes & Terms */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Note</label>
                  <textarea 
                    name="note" 
                    value={formData.note} 
                    onChange={handleChange}
                    rows="3"
                    placeholder="Handle with care"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900 resize-none"
                  ></textarea>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Terms & Conditions</label>
                  <textarea 
                    name="terms_conditions" 
                    value={formData.terms_conditions} 
                    onChange={handleChange}
                    rows="3"
                    placeholder="Standard terms apply"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900 resize-none"
                  ></textarea>
                </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 rounded-b-2xl flex justify-end gap-3 shrink-0">
          <button 
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            Cancel
          </button>
          <button 
            form="deliveryNoteForm"
            type="submit"
            className="px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
          >
            Create Delivery Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDeliveryNoteModal;

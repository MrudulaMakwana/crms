import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

const AddGRNModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    purchase_order: '',
    supplier: '',
    warehouse: '',
    received_date: '',
    status: 'received',
    received_by: '',
    notes: '',
    items: [
      { product: '', quantity: 1 }
    ]
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { product: '', quantity: 1 }]
    });
  };

  const removeItem = (index) => {
    if (formData.items.length > 1) {
      const newItems = formData.items.filter((_, i) => i !== index);
      setFormData({ ...formData, items: newItems });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting GRN data:', formData);
    // TODO: Integrate with actual POST API
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Create GRN</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Goods Receipt Note</p>
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
          <form id="add-grn-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* General Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800 pb-2">
                Receipt Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Purchase Order</label>
                  <input 
                    type="text" 
                    name="purchase_order" 
                    value={formData.purchase_order} 
                    onChange={handleChange}
                    placeholder="PO ID or Ref"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Supplier</label>
                  <input 
                    type="text" 
                    name="supplier" 
                    value={formData.supplier} 
                    onChange={handleChange}
                    placeholder="Supplier ID or Name"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Warehouse</label>
                  <input 
                    type="text" 
                    name="warehouse" 
                    value={formData.warehouse} 
                    onChange={handleChange}
                    placeholder="Warehouse ID"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Received Date</label>
                  <input 
                    type="date" 
                    name="received_date" 
                    value={formData.received_date} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Received By</label>
                  <input 
                    type="text" 
                    name="received_by" 
                    value={formData.received_by} 
                    onChange={handleChange}
                    placeholder="User ID or Email"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
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
                    <option value="received">Received</option>
                    <option value="accepted">Accepted</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Line Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                <h3 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Receipt Items
                </h3>
                <button 
                  type="button" 
                  onClick={addItem}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg transition-colors"
                >
                  <Plus size={14} /> Add Item
                </button>
              </div>

              <div className="space-y-3">
                {formData.items.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-end gap-3 p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 rounded-xl relative group">
                    <div className="flex-1 w-full space-y-1.5">
                      <label className="block text-[12px] font-semibold text-slate-500 dark:text-slate-400">Product</label>
                      <input 
                        type="text" 
                        value={item.product} 
                        onChange={(e) => handleItemChange(index, 'product', e.target.value)}
                        placeholder="Product ID or Name"
                        className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="w-full sm:w-32 space-y-1.5">
                      <label className="block text-[12px] font-semibold text-slate-500 dark:text-slate-400">Qty</label>
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity} 
                        onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={() => removeItem(index)}
                      className="p-2 text-slate-400 hover:text-red-500 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg hover:border-red-200 dark:hover:border-red-900 transition-all opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                      disabled={formData.items.length === 1}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-1.5">
              <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Notes</label>
              <textarea 
                name="notes" 
                value={formData.notes} 
                onChange={handleChange}
                rows={2}
                placeholder="e.g. Received per PO"
                className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
              />
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
            form="add-grn-form"
            className="px-5 py-2.5 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-sm shadow-indigo-500/20 transition-all active:scale-95"
          >
            Create GRN
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddGRNModal;

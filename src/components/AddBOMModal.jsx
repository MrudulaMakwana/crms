import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';

const AddBOMModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    product: '',
    version: '1.0',
    status: 'active',
    items: [
      { raw_material: '', quantity_per_unit: '', unit: '' }
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
      items: [...prev.items, { raw_material: '', quantity_per_unit: '', unit: '' }]
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
    console.log('Submitting BOM data:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create Bill of Materials</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
          <form id="bomForm" onSubmit={handleSubmit} className="space-y-6">
            
            {/* General Information */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs">1</span>
                BOM Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 sm:col-span-2">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">BOM Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="e.g. Bike Frame BOM"
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Product</label>
                  <select 
                    name="product" 
                    value={formData.product} 
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all hover:bg-white dark:hover:bg-slate-900"
                    required
                  >
                    <option value="">Select Product</option>
                    <option value="1">Synthetic Oil 5W30</option>
                    <option value="2">Brake Pads</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[13px] font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Version</label>
                  <input 
                    type="text" 
                    name="version" 
                    value={formData.version} 
                    onChange={handleChange}
                    placeholder="e.g. 1.0"
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
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="obsolete">Obsolete</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Items */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
               <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs">2</span>
                    Raw Materials
                  </h3>
                  <button 
                    type="button" 
                    onClick={addItem}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 rounded-lg text-xs font-bold transition-colors"
                  >
                    <Plus size={14} /> Add Material
                  </button>
               </div>
               
               <div className="space-y-3">
                 {formData.items.map((item, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-xl relative group flex gap-3">
                      <div className="flex-1 space-y-1.5">
                         <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Raw Material</label>
                         <select 
                            value={item.raw_material} 
                            onChange={(e) => handleItemChange(index, 'raw_material', e.target.value)}
                            className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            required
                          >
                            <option value="">Select Material</option>
                            <option value="1">Synthetic Oil 5W30</option>
                            <option value="2">Steel Tubing</option>
                         </select>
                      </div>
                      <div className="w-24 space-y-1.5">
                         <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Qty</label>
                         <input 
                           type="number" 
                           step="0.01"
                           placeholder="2.0"
                           value={item.quantity_per_unit} 
                           onChange={(e) => handleItemChange(index, 'quantity_per_unit', e.target.value)}
                           className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           required
                         />
                      </div>
                      <div className="w-24 space-y-1.5">
                         <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">Unit</label>
                         <input 
                           type="text" 
                           placeholder="kg, pc"
                           value={item.unit} 
                           onChange={(e) => handleItemChange(index, 'unit', e.target.value)}
                           className="w-full px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700/50 rounded-lg text-sm text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                           required
                         />
                      </div>
                      
                      <div className="w-8 flex items-end pb-1.5">
                        <button 
                          type="button"
                          onClick={() => removeItem(index)}
                          className={`w-8 h-8 flex items-center justify-center bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors ${formData.items.length > 1 ? 'block' : 'hidden'}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                 ))}
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
            form="bomForm"
            type="submit"
            className="px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition-colors"
          >
            Create BOM
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBOMModal;

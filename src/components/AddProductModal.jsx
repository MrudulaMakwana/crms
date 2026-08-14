import React, { useState } from 'react';
import { X, Package, AlignLeft, Hash, DollarSign, List, FileText, CheckCircle, Tag, Layers } from 'lucide-react';
import api from '../services/api';

const AddProductModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    sku: '',
    description: '',
    specifications: '', // To be parsed as JSON if valid, or just stringified initially
    cost_price: '',
    selling_price: '',
    price: '',
    tax_percentage: '',
    unit: 'piece',
    quantity: '',
    status: 'in_stock',
    for_vehicle_type: 'four_wheeler',
    is_active: true
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    let specsParsed = {};
    try {
      if (formData.specifications.trim()) {
        specsParsed = JSON.parse(formData.specifications);
      }
    } catch (e) {
      // In a real scenario you might show a form error. For now, we just pass an empty object or the raw string.
      console.warn("Invalid JSON in specifications. Proceeding with empty object.", e);
    }

    try {
      // POST http://localhost:8000/api/products/
      const payload = {
        name: formData.name,
        category: formData.category ? parseInt(formData.category, 10) : null,
        sku: formData.sku,
        description: formData.description,
        specifications: specsParsed,
        cost_price: formData.cost_price,
        selling_price: formData.selling_price,
        price: formData.price,
        tax_percentage: formData.tax_percentage,
        unit: formData.unit,
        quantity: formData.quantity ? parseInt(formData.quantity, 10) : 0,
        status: formData.status,
        for_vehicle_type: formData.for_vehicle_type,
        is_active: formData.is_active
      };

      await api.post('/products/', payload);
      setSuccess('Product created successfully!');
      setTimeout(() => {
        onClose();
        // Trigger list refresh here if needed
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create product');
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
      <div className="relative bg-white dark:bg-[#111624] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Package size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add New Product</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Add a new item to your inventory</p>
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

          <form id="add-product-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* General Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <FileText size={16} className="text-slate-400" /> General Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Product Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="e.g. Roger Oil 6W30" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                  <div className="relative">
                    <AlignLeft className="absolute left-3 top-3 text-slate-400" size={16} />
                    <textarea 
                      name="description" 
                      value={formData.description} 
                      onChange={handleChange} 
                      rows="2"
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none" 
                      placeholder="Product details..." 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Category ID <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Layers className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number" 
                      name="category"
                      required 
                      value={formData.category} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="e.g. 1" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">SKU <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="sku"
                      required 
                      value={formData.sku} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="e.g. OIL-6W30" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Info */}
            <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <DollarSign size={16} className="text-slate-400" /> Pricing & Tax
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Cost Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number"
                      step="0.01" 
                      name="cost_price" 
                      value={formData.cost_price} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="700.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Selling Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number"
                      step="0.01" 
                      name="selling_price" 
                      value={formData.selling_price} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="800.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Base Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number"
                      step="0.01" 
                      name="price" 
                      value={formData.price} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="800.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tax (%)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">%</span>
                    <input 
                      type="number"
                      step="0.01" 
                      name="tax_percentage" 
                      value={formData.tax_percentage} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="18.00" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Info */}
            <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <List size={16} className="text-slate-400" /> Inventory Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Quantity</label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number" 
                      name="quantity" 
                      value={formData.quantity} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all" 
                      placeholder="e.g. 100" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Unit</label>
                  <select 
                    name="unit" 
                    value={formData.unit} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none"
                  >
                    <option value="piece">Piece</option>
                    <option value="kg">Kg</option>
                    <option value="liter">Liter</option>
                    <option value="box">Box</option>
                    <option value="pack">Pack</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none"
                  >
                    <option value="in_stock">In Stock</option>
                    <option value="out_of_stock">Out of Stock</option>
                    <option value="low_stock">Low Stock</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Extras */}
            <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Tag size={16} className="text-slate-400" /> Additional Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Vehicle Type</label>
                  <select 
                    name="for_vehicle_type" 
                    value={formData.for_vehicle_type} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none"
                  >
                    <option value="two_wheeler">Two Wheeler</option>
                    <option value="four_wheeler">Four Wheeler</option>
                    <option value="commercial">Commercial</option>
                    <option value="universal">Universal</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Specifications (JSON Format)</label>
                  <textarea 
                    name="specifications" 
                    value={formData.specifications} 
                    onChange={handleChange} 
                    rows="3"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none font-mono text-xs" 
                    placeholder='{"viscosity": "6W30", "volume": "1L"}' 
                  />
                </div>
              </div>

              <div className="pt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="is_active" 
                    checked={formData.is_active} 
                    onChange={handleChange} 
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                  <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    {formData.is_active ? (
                      <><CheckCircle size={16} className="text-emerald-500" /> Active Product</>
                    ) : (
                      'Set as Active'
                    )}
                  </span>
                </label>
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
            form="add-product-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Saving...
              </>
            ) : (
              'Save Product'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddProductModal;

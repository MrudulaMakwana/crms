import React, { useState } from 'react';
import { X, User, Calendar, DollarSign, PieChart, Briefcase, Calculator, ToggleLeft } from 'lucide-react';
import api from '../services/api';

const AddPayrollModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    employee: '',
    payroll_month: '',
    basic: '',
    hra: '',
    conveyance: '',
    bonus: '',
    other_allowance: '',
    pf: '',
    professional_tax: '',
    tds: '',
    other_deductions: '',
    status: 'pending'
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
      // POST http://localhost:8000/api/finance/payrolls/
      const payload = {
        ...formData,
        employee: formData.employee ? parseInt(formData.employee, 10) : null,
        basic: formData.basic ? parseFloat(formData.basic) : 0,
        hra: formData.hra ? parseFloat(formData.hra) : 0,
        conveyance: formData.conveyance ? parseFloat(formData.conveyance) : 0,
        bonus: formData.bonus ? parseFloat(formData.bonus) : 0,
        other_allowance: formData.other_allowance ? parseFloat(formData.other_allowance) : 0,
        pf: formData.pf ? parseFloat(formData.pf) : 0,
        professional_tax: formData.professional_tax ? parseFloat(formData.professional_tax) : 0,
        tds: formData.tds ? parseFloat(formData.tds) : 0,
        other_deductions: formData.other_deductions ? parseFloat(formData.other_deductions) : 0,
      };

      await api.post('/finance/payrolls/', payload);
      setSuccess('Payroll created successfully!');
      setTimeout(() => {
        onClose();
        // Trigger list refresh here if needed
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create payroll');
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
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Calculator size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add Payroll</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Process employee salary details</p>
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

          <form id="add-payroll-form" onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section: Overview */}
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                <Briefcase size={14} className="text-indigo-500" /> General Info
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Employee ID <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="number" name="employee" required value={formData.employee} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. 6" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Payroll Month <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="month" name="payroll_month" required value={formData.payroll_month} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Section: Earnings */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <DollarSign size={14} className="text-emerald-500" /> Earnings
                </h3>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Basic Salary</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="basic" value={formData.basic} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">HRA</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="hra" value={formData.hra} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Conveyance</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="conveyance" value={formData.conveyance} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bonus</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="bonus" value={formData.bonus} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Other Allowance</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="other_allowance" value={formData.other_allowance} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section: Deductions */}
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wider flex items-center gap-2">
                  <PieChart size={14} className="text-red-500" /> Deductions
                </h3>
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">PF (Provident Fund)</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="pf" value={formData.pf} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Professional Tax</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="professional_tax" value={formData.professional_tax} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">TDS</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="tds" value={formData.tds} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Other Deductions</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-medium">$</span>
                      <input type="number" name="other_deductions" value={formData.other_deductions} onChange={handleChange} className="w-full pl-8 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="0.00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Status */}
            <div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="status" 
                    checked={formData.status === 'paid'} 
                    onChange={(e) => handleChange({ target: { name: 'status', value: e.target.checked ? 'paid' : 'pending' }})} 
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-amber-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-emerald-500"></div>
                  <span className="ml-3 text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    Status: {formData.status === 'paid' ? 'Paid' : 'Pending'}
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
            form="add-payroll-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Processing...
              </>
            ) : (
              'Create Payroll'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddPayrollModal;

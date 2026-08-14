import React, { useState } from 'react';
import { X, Building, User, Tag, Calendar, DollarSign, Percent, PieChart, Info, Layers } from 'lucide-react';
import api from '../services/api';

const AddDealModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    value: '',
    lead: '',
    contact: '',
    company: '',
    owner: 5,
    
    // Status & Progress
    progress: 'proposal',
    status: 'in_progress',
    probability: 1,
    pipeline: 2,
    pipeline_stage: 1,
    priority: 'high',
    source: 1,
    
    // Dates & Periods
    expected_close_date: '',
    due_date: '',
    follow_up_date: '',
    period: 'days',
    period_value: 1,
    
    // Additional Details
    tags: '',
    description: '',
    assignees: '8', // comma separated for simplicity in UI, mapped to array
    projects: '2'   // comma separated
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
        value: formData.value ? parseFloat(formData.value) : 0,
        lead: parseInt(formData.lead, 10),
        contact: parseInt(formData.contact, 10),
        company: parseInt(formData.company, 10),
        owner: parseInt(formData.owner, 10),
        probability: parseInt(formData.probability, 10),
        period_value: parseInt(formData.period_value, 10),
        pipeline: parseInt(formData.pipeline, 10),
        pipeline_stage: parseInt(formData.pipeline_stage, 10),
        source: parseInt(formData.source, 10),
        assignees: formData.assignees.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n)),
        projects: formData.projects.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n))
      };

      await api.post('/pipeline/deals/', payload);
      
      setSuccess('Deal created successfully!');
      setTimeout(() => {
        onClose();
        setActiveTab('basic');
        setFormData({
            name: '', value: '', lead: '', contact: '', company: '', owner: 5,
            progress: 'proposal', status: 'in_progress', probability: 1, pipeline: 2, pipeline_stage: 1,
            priority: 'high', source: 1, expected_close_date: '', due_date: '', follow_up_date: '',
            period: 'days', period_value: 1, tags: '', description: '', assignees: '8', projects: '2'
        });
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create deal');
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
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <PieChart size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Create New Deal</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Add a new deal to your pipeline</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-6 border-b border-slate-200 dark:border-slate-800 overflow-x-auto custom-scrollbar shrink-0">
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'basic' 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Details
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'status' 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('status')}
          >
            Pipeline & Status
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'dates' 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('dates')}
          >
            Dates & Schedule
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'additional' 
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Info
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

          <form id="add-deal-form" onSubmit={handleSubmit}>
            
            {/* BASIC DETAILS TAB */}
            <div className={activeTab === 'basic' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Deal Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    placeholder="e.g. ABC Corp Deal"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Deal Value <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input 
                      type="number" name="value" required value={formData.value} onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Lead ID</label>
                  <input type="number" name="lead" required value={formData.lead} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Contact ID</label>
                  <input type="number" name="contact" required value={formData.contact} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company ID</label>
                  <input type="number" name="company" required value={formData.company} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>
            </div>

            {/* PIPELINE & STATUS TAB */}
            <div className={activeTab === 'status' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Pipeline ID</label>
                  <input type="number" name="pipeline" value={formData.pipeline} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Pipeline Stage ID</label>
                  <input type="number" name="pipeline_stage" value={formData.pipeline_stage} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</label>
                  <select name="progress" value={formData.progress} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="proposal">Proposal</option>
                    <option value="negotiation">Negotiation</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="in_progress">In Progress</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Probability</label>
                  <input type="number" name="probability" value={formData.probability} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Priority</label>
                  <select name="priority" value={formData.priority} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* DATES & SCHEDULE TAB */}
            <div className={activeTab === 'dates' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expected Close Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input type="date" name="expected_close_date" value={formData.expected_close_date} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Due Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input type="date" name="due_date" value={formData.due_date} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Follow Up Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input type="date" name="follow_up_date" value={formData.follow_up_date} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Period</label>
                    <select name="period" value={formData.period} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                      <option value="days">Days</option>
                      <option value="weeks">Weeks</option>
                      <option value="months">Months</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Period Value</label>
                    <input type="number" name="period_value" value={formData.period_value} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>
              </div>
            </div>

            {/* ADDITIONAL INFO TAB */}
            <div className={activeTab === 'additional' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm resize-none" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tags</label>
                  <div className="relative group">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={16} />
                    <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="Comma separated" className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Source ID</label>
                  <input type="number" name="source" value={formData.source} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Assignees (IDs)</label>
                  <input type="text" name="assignees" value={formData.assignees} onChange={handleChange} placeholder="e.g. 8, 12" className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Projects (IDs)</label>
                  <input type="text" name="projects" value={formData.projects} onChange={handleChange} placeholder="e.g. 2, 4" className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>
            </div>

          </form>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 shrink-0 bg-slate-50/80 dark:bg-[#0b0f19]/80 backdrop-blur-md">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Please fill in all required fields (<span className="text-red-500">*</span>)</p>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              form="add-deal-form"
              disabled={isLoading}
              className="px-6 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Deal'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddDealModal;

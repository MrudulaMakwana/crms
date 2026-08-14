import React, { useState } from 'react';
import { X, Megaphone, Type, AlignLeft, DollarSign, Users, Calendar, Target, Settings2 } from 'lucide-react';
import api from '../services/api';

const AddCampaignModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Details
    name: '',
    type: 'pro',
    status: 'active',
    
    // Content
    subject: '',
    content: '',
    description: '',
    
    // Audience & Filters
    target_audience_customers: false,
    target_audience_leads: false,
    recipient_filter_role: '',
    
    // Budget & Schedule
    deal_value: '',
    currency: 'usd',
    period: 'monthly',
    period_value: '1'
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
    
    try {
      // Build audience array
      const target_audience = [];
      if (formData.target_audience_customers) target_audience.push('customers');
      if (formData.target_audience_leads) target_audience.push('leads');

      const payload = {
        name: formData.name,
        type: formData.type,
        subject: formData.subject,
        content: formData.content,
        recipient_filter: formData.recipient_filter_role ? { role: formData.recipient_filter_role } : {},
        status: formData.status,
        deal_value: formData.deal_value ? parseFloat(formData.deal_value) : 0,
        currency: formData.currency,
        period: formData.period,
        period_value: formData.period_value,
        target_audience: target_audience,
        description: formData.description
      };

      await api.post('/marketing/campaigns/', payload);
      
      setSuccess('Campaign created successfully!');
      setTimeout(() => {
        onClose();
        setActiveTab('basic');
        setFormData({
            name: '', type: 'pro', status: 'active', subject: '', content: '',
            description: '', target_audience_customers: false, target_audience_leads: false,
            recipient_filter_role: '', deal_value: '', currency: 'usd', period: 'monthly', period_value: '1'
        });
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create campaign');
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
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Megaphone size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Create New Campaign</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Launch a new marketing campaign</p>
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
                ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('basic')}
          >
            Basic & Content
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'audience' 
                ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('audience')}
          >
            Audience & Filters
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'budget' 
                ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('budget')}
          >
            Budget & Timeline
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

          <form id="add-campaign-form" onSubmit={handleSubmit}>
            
            {/* BASIC & CONTENT TAB */}
            <div className={activeTab === 'basic' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Campaign Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    placeholder="e.g. Summer Sale 2026"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Campaign Type</label>
                  <select name="type" value={formData.type} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="pro">Promotional (Pro)</option>
                    <option value="awareness">Brand Awareness</option>
                    <option value="retention">Retention</option>
                    <option value="newsletter">Newsletter</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="completed">Completed</option>
                    <option value="paused">Paused</option>
                  </select>
                </div>
                
                <div className="space-y-1.5 md:col-span-2 mt-4">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                    <Type size={16} className="text-purple-500" /> Messaging
                  </h3>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject Line</label>
                  <input 
                    type="text" name="subject" value={formData.subject} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    placeholder="e.g. Big Summer Sale!"
                  />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Campaign Content</label>
                  <textarea 
                    name="content" value={formData.content} onChange={handleChange} rows={3}
                    className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm resize-none" 
                    placeholder="e.g. Get 30% off on all products!"
                  />
                </div>
                
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Internal Description</label>
                  <textarea 
                    name="description" value={formData.description} onChange={handleChange} rows={2}
                    className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm resize-none" 
                    placeholder="e.g. Summer campaign targeting existing customers and new leads"
                  />
                </div>
              </div>
            </div>

            {/* AUDIENCE & FILTERS TAB */}
            <div className={activeTab === 'audience' ? 'block space-y-6' : 'hidden'}>
              <div className="space-y-6">
                
                <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0b0f19]">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                    <Target size={16} className="text-purple-500" /> Target Audience
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="target_audience_customers" 
                        checked={formData.target_audience_customers} 
                        onChange={handleChange} 
                        className="w-4 h-4 text-purple-600 bg-white border-slate-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:bg-slate-700 dark:border-slate-600" 
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Customers (Existing clients)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        name="target_audience_leads" 
                        checked={formData.target_audience_leads} 
                        onChange={handleChange} 
                        className="w-4 h-4 text-purple-600 bg-white border-slate-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:bg-slate-700 dark:border-slate-600" 
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Leads (Potential prospects)</span>
                    </label>
                  </div>
                </div>

                <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0b0f19]">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                    <Settings2 size={16} className="text-purple-500" /> Recipient Filters
                  </h3>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Filter by Role (e.g. msr)</label>
                    <input 
                      type="text" name="recipient_filter_role" value={formData.recipient_filter_role} onChange={handleChange} 
                      className="w-full px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                      placeholder="msr, admin, user..."
                    />
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Leaves filter empty if nothing is specified.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* BUDGET & TIMELINE TAB */}
            <div className={activeTab === 'budget' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Deal Value / Budget</label>
                  <div className="relative group">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-purple-500 transition-colors" size={16} />
                    <input 
                      type="number" name="deal_value" value={formData.deal_value} onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                      placeholder="10000"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Currency</label>
                  <select name="currency" value={formData.currency} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm uppercase">
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="inr">INR (₹)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Period Frequency</label>
                  <select name="period" value={formData.period} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Period Value (Duration)</label>
                  <input 
                    type="number" name="period_value" value={formData.period_value} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-purple-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    placeholder="3"
                  />
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
              form="add-campaign-form"
              disabled={isLoading}
              className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 disabled:from-purple-400 disabled:to-indigo-500 rounded-xl transition-all shadow-md shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 min-w-[160px]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Saving...
                </>
              ) : (
                'Create Campaign'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddCampaignModal;

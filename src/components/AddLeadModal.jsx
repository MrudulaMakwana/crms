import React, { useState } from 'react';
import { X, User, Building, Mail, Phone, MapPin, Briefcase, Globe, Info, Tag, Eye } from 'lucide-react';
import api from '../services/api';

const AddLeadModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Info
    company_name: '',
    first_name: '',
    last_name: '',
    lead_type: 'person',
    source: 2,
    status: 'new',
    owner: 5,
    industry: 2,
    value: '',

    // Contact Info
    email: '',
    phone: '',
    phone_2: '',
    fax: '',
    email_opt_out: false,
    whatsapp: '',
    skype: '',
    
    // Social & Web
    website: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    instagram: '',
    
    // Additional Details
    language: '',
    tags: '',
    description: '',
    reviews: '',
    visibility: 'selected',
    visible_to: '3, 5', // simple text mapping to array later
    
    // Address
    street_address: '',
    city: '',
    state: '',
    country: '',
    zipcode: ''
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
      // Data cleaning / mapping based on provided sample
      const payload = {
        ...formData,
        value: formData.value ? parseFloat(formData.value) : 0,
        source: parseInt(formData.source, 10),
        owner: parseInt(formData.owner, 10),
        industry: parseInt(formData.industry, 10),
        visible_to: formData.visible_to.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n))
      };

      await api.post('/pipeline/leads/', payload);
      
      setSuccess('Lead created successfully!');
      setTimeout(() => {
        onClose();
        setActiveTab('basic');
        setFormData({
            company_name: '', first_name: '', last_name: '', lead_type: 'person',
            source: 2, status: 'new', owner: 5, industry: 2, value: '',
            email: '', phone: '', phone_2: '', fax: '', email_opt_out: false,
            whatsapp: '', skype: '', website: '', facebook: '', linkedin: '',
            twitter: '', instagram: '', language: '', tags: '', description: '',
            reviews: '', visibility: 'selected', visible_to: '3, 5',
            street_address: '', city: '', state: '', country: '', zipcode: ''
        });
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create lead');
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
            <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Create New Lead</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Add a new potential prospect</p>
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
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('basic')}
          >
            Basic Info
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'contact' 
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            Contact & Location
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'social' 
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('social')}
          >
            Web & Social
          </button>
          <button
            type="button"
            className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'additional' 
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' 
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
            }`}
            onClick={() => setActiveTab('additional')}
          >
            Additional Details
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

          <form id="add-lead-form" onSubmit={handleSubmit}>
            
            {/* BASIC INFO TAB */}
            <div className={activeTab === 'basic' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input 
                      type="text" name="first_name" required value={formData.first_name} onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" name="last_name" required value={formData.last_name} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</label>
                  <div className="relative group">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input 
                      type="text" name="company_name" value={formData.company_name} onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Deal Value</label>
                  <input 
                    type="number" name="value" value={formData.value} onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-all shadow-sm" 
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Lead Type</label>
                  <select name="lead_type" value={formData.lead_type} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="person">Person</option>
                    <option value="company">Company</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Source ID</label>
                  <input type="number" name="source" value={formData.source} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Industry ID</label>
                  <input type="number" name="industry" value={formData.industry} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>
            </div>

            {/* CONTACT & LOCATION TAB */}
            <div className={activeTab === 'contact' ? 'block space-y-6' : 'hidden'}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone <span className="text-red-500">*</span></label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input type="text" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Secondary Phone</label>
                  <input type="text" name="phone_2" value={formData.phone_2} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">WhatsApp</label>
                  <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Fax</label>
                  <input type="text" name="fax" value={formData.fax} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Street Address</label>
                  <input type="text" name="street_address" value={formData.street_address} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">State / Province</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Country</label>
                  <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Zipcode</label>
                  <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>

            </div>

            {/* WEB & SOCIAL TAB */}
            <div className={activeTab === 'social' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Website</label>
                  <div className="relative group">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://..." className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn</label>
                  <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/..." className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Facebook</label>
                  <input type="url" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="https://facebook.com/..." className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Twitter</label>
                  <input type="url" name="twitter" value={formData.twitter} onChange={handleChange} placeholder="https://twitter.com/..." className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Instagram</label>
                  <input type="url" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="https://instagram.com/..." className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Skype</label>
                  <input type="text" name="skype" value={formData.skype} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
              </div>
            </div>

            {/* ADDITIONAL DETAILS TAB */}
            <div className={activeTab === 'additional' ? 'block space-y-6' : 'hidden'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Tags</label>
                  <div className="relative group">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="e.g. VIP, Urgent" className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Language</label>
                  <input type="text" name="language" value={formData.language} onChange={handleChange} className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Visibility</label>
                  <div className="relative group">
                    <Eye className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={16} />
                    <select name="visibility" value={formData.visibility} onChange={handleChange} className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white appearance-none shadow-sm">
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                      <option value="selected">Selected</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Visible To (IDs)</label>
                  <input type="text" name="visible_to" value={formData.visible_to} onChange={handleChange} placeholder="Comma separated, e.g. 3, 5" className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm" />
                </div>
                
                <div className="col-span-1 md:col-span-2 flex items-center gap-3">
                  <input type="checkbox" id="email_opt_out" name="email_opt_out" checked={formData.email_opt_out} onChange={handleChange} className="w-4 h-4 text-indigo-600 bg-slate-100 border-slate-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="email_opt_out" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Opt Out (Do not send marketing emails)</label>
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Info size={14} className="text-slate-400" /> Description
                  </label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={2} className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm resize-none" />
                </div>
                
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Reviews</label>
                  <textarea name="reviews" value={formData.reviews} onChange={handleChange} rows={2} className="w-full p-3 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white shadow-sm resize-none" />
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
              form="add-lead-form"
              disabled={isLoading}
              className="px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 disabled:from-indigo-400 disabled:to-blue-500 rounded-xl transition-all shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 min-w-[140px]"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Lead'
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AddLeadModal;
import React, { useState } from 'react';
import { X, Briefcase, AlignLeft, Calendar as CalendarIcon, User, Users, FolderOpen, Clock, Tag, DollarSign, Activity } from 'lucide-react';
import api from '../services/api';

const AddProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    start_date: '',
    due_date: '',
    status: 'active',
    team_leader: '',
    responsible_persons: '', // comma separated string
    project_type: '',
    project_timing: '',
    priority: 'medium',
    price: '',
    client_name: '',
    category: '',
    budget: ''
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
      // POST http://localhost:8000/api/projects/projects/
      const parsedResponsible = formData.responsible_persons
        .split(',')
        .map(id => parseInt(id.trim(), 10))
        .filter(id => !isNaN(id));

      const payload = {
        name: formData.name,
        description: formData.description,
        start_date: formData.start_date,
        due_date: formData.due_date,
        status: formData.status,
        team_leader: formData.team_leader ? parseInt(formData.team_leader, 10) : null,
        responsible_persons: parsedResponsible,
        project_type: formData.project_type,
        project_timing: formData.project_timing,
        priority: formData.priority,
        price: formData.price ? parseFloat(formData.price) : 0,
        client_name: formData.client_name,
        category: formData.category,
        budget: formData.budget ? parseFloat(formData.budget) : 0
      };

      await api.post('/projects/projects/', payload);
      setSuccess('Project created successfully!');
      setTimeout(() => {
        onClose();
        // Trigger list refresh here if needed
      }, 1500);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.detail || err.response?.data?.error || err.message || 'Failed to create project');
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
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
              <Briefcase size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Create New Project</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Set up a new project workspace</p>
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

          <form id="add-project-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* General Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">General Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Name <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. ERP Development" 
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
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none" 
                      placeholder="Brief description of the project" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Client Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="client_name" 
                      value={formData.client_name} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. John Doe" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Category</label>
                  <div className="relative">
                    <FolderOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="category" 
                      value={formData.category} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. LLC" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline & Details */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Timeline & Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Start Date</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    <input 
                      type="date" 
                      name="start_date" 
                      value={formData.start_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Due Date</label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                    <input 
                      type="date" 
                      name="due_date" 
                      value={formData.due_date} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Type</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="project_type" 
                      value={formData.project_type} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. Mobile APP" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Timing</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="project_timing" 
                      value={formData.project_timing} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. 4 months" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Team & Status */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Team & Status</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Team Leader (ID)</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number" 
                      name="team_leader" 
                      value={formData.team_leader} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. 6" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Responsible Persons (IDs)</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="text" 
                      name="responsible_persons" 
                      value={formData.responsible_persons} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. 3, 5, 6" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Priority</label>
                  <div className="relative">
                    <Activity className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <select 
                      name="priority" 
                      value={formData.priority} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Status</label>
                  <select 
                    name="status" 
                    value={formData.status} 
                    onChange={handleChange} 
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none"
                  >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="on_hold">On Hold</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Financials */}
            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Financials</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Price</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number"
                      step="0.01" 
                      name="price" 
                      value={formData.price} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. 50000.00" 
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Budget Limit</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input 
                      type="number"
                      step="0.01" 
                      name="budget" 
                      value={formData.budget} 
                      onChange={handleChange} 
                      className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                      placeholder="e.g. 100.00" 
                    />
                  </div>
                </div>
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
            form="add-project-form"
            disabled={isLoading}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 min-w-[150px]"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                Creating...
              </>
            ) : (
              'Create Project'
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddProjectModal;

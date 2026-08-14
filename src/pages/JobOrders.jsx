import React, { useState } from 'react';
import { 
  Settings, 
  Network,
  Layout,
  ChevronDown,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Activity,
  HardDrive,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

import Button from '../components/Button';
import AddJobOrderModal from '../components/AddJobOrderModal';

const mockJobOrders = [
  {
    id: 'JO-0026',
    salesRef: '46',
    customer: 'Hemali Shah',
    productName: 'Synthetic Oil 5W30',
    quantity: '10 pcs',
    bom: 'Bike Frame BOM',
    status: 'Planned',
    machine: 'Injection Molding',
    targetDate: '13 Aug 2026',
    progress: 0,
    priority: 'high'
  },
  {
    id: 'JO-TEST-0624',
    salesRef: '1',
    customer: 'TechCorp',
    productName: 'Robotic Conveyor Assembly',
    quantity: '1 pcs',
    bom: 'Robot Arm V2',
    status: 'In Progress',
    machine: 'Assembly Line A',
    targetDate: 'TBD',
    progress: 45,
    priority: 'medium'
  }
];

const JobOrders = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Premium Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
              <Settings size={24} className="animate-spin-slow" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Job Orders (Production)
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Production planning, BOM assignment, store check & assembly execution.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/erp/pipeline" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-medium transition-all shadow-sm">
            <Network size={16} className="text-cyan-500" /> Pipeline Flow
          </Link>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <Plus size={16} /> Add Job Order
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Job Orders */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Layout size={64} className="text-cyan-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Total Job Orders</p>
          <div className="flex items-end gap-3 mt-3">
            <h3 className="text-4xl font-black text-slate-900 dark:text-white">2</h3>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg mb-1">+1 this week</span>
          </div>
        </div>
        
        {/* Planned */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Calendar size={64} className="text-slate-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Planned</p>
          <h3 className="text-4xl font-black text-slate-700 dark:text-slate-300 mt-3">1</h3>
        </div>

        {/* In Progress */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Activity size={64} className="text-blue-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">In Progress</p>
          <h3 className="text-4xl font-black text-blue-500 mt-3">1</h3>
        </div>

        {/* Completed */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <HardDrive size={64} className="text-emerald-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Completed</p>
          <h3 className="text-4xl font-black text-emerald-500 mt-3">0</h3>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Job Order # or Product Name..." 
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none w-full sm:w-40 px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all cursor-pointer">
                <option>All Statuses</option>
                <option>Planned</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" />
            </div>
            <button className="p-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all hover:text-cyan-500">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-[#0b0f19]/30">
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">JO #</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">SALES<br/>ORDER</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">PRODUCT<br/>INFO</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">ASSIGNED<br/>BOM</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">STATUS</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">TARGET<br/>DATE</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {mockJobOrders.map((job) => (
                <tr key={job.id} className="border-b border-slate-100 dark:border-slate-800/80 hover:bg-slate-50/80 dark:hover:bg-[#1a2133]/50 transition-all group">
                  <td className="p-4">
                    <span className="inline-flex items-center justify-center font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10 px-2.5 py-1 rounded-lg text-sm border border-cyan-100 dark:border-cyan-500/20">
                      {job.id}
                    </span>
                    {job.priority === 'high' && (
                      <span className="block mt-2 text-[10px] font-bold text-red-500 uppercase tracking-widest flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Urgent
                      </span>
                    )}
                  </td>
                  <td className="p-4">
                    <div className="font-medium text-slate-900 dark:text-white text-sm">Ref: #{job.salesRef}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{job.customer}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-bold text-slate-900 dark:text-white text-sm max-w-[200px] truncate" title={job.productName}>
                      {job.productName}
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded text-xs font-medium border border-slate-200 dark:border-slate-700">
                        Qty: {job.quantity}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded text-xs font-medium border border-blue-100 dark:border-blue-800/30">
                        {job.machine}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#0b0f19] px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                      <Layout size={14} className="text-indigo-500" />
                      {job.bom}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-2 w-32">
                      <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold w-fit
                        ${job.status === 'In Progress' ? 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400' : ''}
                        ${job.status === 'Planned' ? 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400' : ''}
                      `}>
                        {job.status === 'In Progress' && <Activity size={12} className="mr-1.5" />}
                        {job.status}
                      </span>
                      {job.status === 'In Progress' && (
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${job.progress}%` }} />
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                    {job.targetDate}
                  </td>
                  <td className="p-4 text-center align-middle">
                    <div className="flex items-center justify-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-cyan-600 bg-cyan-50 hover:bg-cyan-100 dark:text-cyan-400 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20 rounded-lg transition-colors border border-cyan-100 dark:border-cyan-500/20 shadow-sm" title="Manage Stage">
                        <Settings size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm" title="More Options">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddJobOrderModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default JobOrders;

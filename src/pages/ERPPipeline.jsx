import {
  Printer,
  Download,
  Plus,
  Search,
  Filter,
  ArrowUpDown,
  MoreVertical,
  Activity,
  Network
} from 'lucide-react';
import { useState } from 'react';

import Button from '../components/Button';
import AddPipelineModal from '../components/AddPipelineModal';
import AddPipelineStageModal from '../components/AddPipelineStageModal';

const ERPPipeline = () => {
  const pipelines = [
    { id: 1, name: 'Sales', value: '$4,50,664', deals: 315, stage: 'Win', stageColor: 'bg-emerald-500', date: '25 Sep 2025', status: 'Active' },
    { id: 2, name: 'Marketing', value: '$3,12,893', deals: 447, stage: 'Win', stageColor: 'bg-emerald-500', date: '29 Sep 2025', status: 'Active' },
    { id: 3, name: 'Email', value: '$2,89,274', deals: 654, stage: 'In Pipeline', stageColor: 'bg-purple-500', date: '15 Oct 2025', status: 'Active' },
    { id: 4, name: 'Chats', value: '$1,59,326', deals: 768, stage: 'Win', stageColor: 'bg-emerald-500', date: '29 Oct 2025', status: 'Active' },
    { id: 5, name: 'Operational', value: '$2,90,173', deals: 142, stage: 'Win', stageColor: 'bg-emerald-500', date: '03 Nov 2025', status: 'Inactive' },
    { id: 6, name: 'Collaborative', value: '$4,51,417', deals: 315, stage: 'Conversation', stageColor: 'bg-cyan-500', date: '17 Nov 2025', status: 'Active' },
    { id: 7, name: 'Differentiate', value: '$3,17,589', deals: 478, stage: 'Lost', stageColor: 'bg-red-500', date: '23 Nov 2025', status: 'Active' },
    { id: 8, name: 'Interact', value: '$1,69,146', deals: 664, stage: 'Lost', stageColor: 'bg-red-500', date: '09 Dec 2025', status: 'Active' },
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAddStageModalOpen, setIsAddStageModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">

      {/* Premium Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Network size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Pipeline
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Manage and track all stages of your CRM pipelines.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div onClick={() => setIsAddStageModalOpen(true)}>
            <Button variant="primary">
              <Plus size={16} /> Add Stage
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">

        {/* Toolbar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 dark:bg-[#0b0f19]/30">
          <div className="flex items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search pipelines..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:text-indigo-500 shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-[#0b0f19]/50 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">Pipeline Name <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">Total Deal Value <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">No of Deals <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">Stages <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">Created Date <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-500 transition-colors">Status <ArrowUpDown size={12} className="opacity-50" /></div>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {pipelines.map((item, index) => (
                <tr key={item.id} className="border-b border-slate-100 dark:border-slate-800/80 hover:bg-slate-50/80 dark:hover:bg-[#1a2133]/50 transition-colors group">
                  <td className="p-4 text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.name}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {item.value}
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {item.deals} Deals
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-900 dark:text-white font-medium">
                    <div className="flex items-center gap-3 w-40">
                      <div className="w-16 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-inner">
                        <div className={`h-full ${item.stageColor} w-full`}></div>
                      </div>
                      <span className="text-xs font-bold text-slate-600 dark:text-slate-300 truncate">{item.stage}</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                    {item.date}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${item.status === 'Active'
                        ? 'text-emerald-700 bg-emerald-100 border border-emerald-200 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400'
                        : 'text-red-700 bg-red-100 border border-red-200 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400'
                      }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50 dark:bg-[#0b0f19]/30">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <span>Showing</span>
            <select className="px-3 py-1.5 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 shadow-sm cursor-pointer">
              <option>10 / Pages</option>
              <option>20 / Pages</option>
              <option>50 / Pages</option>
            </select>
          </div>

          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">3</button>
            <div className="w-4 flex justify-center text-slate-400">...</div>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors">&gt;</button>
          </div>
        </div>

      </div>

      <AddPipelineModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      <AddPipelineStageModal isOpen={isAddStageModalOpen} onClose={() => setIsAddStageModalOpen(false)} />
    </div>
  );
};

export default ERPPipeline;

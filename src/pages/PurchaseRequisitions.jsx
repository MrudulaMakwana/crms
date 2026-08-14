import { 
  ShoppingCart, 
  Network,
  Download,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Clock,
  CheckCircle,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const PurchaseRequisitions = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Premium Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <ShoppingCart size={24} />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                Purchase Requisitions (PR)
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Raw material purchase requests generated due to stock shortages.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Link to="/erp/pipeline" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl text-sm font-medium transition-all shadow-sm">
            <Network size={16} className="text-indigo-500" /> Pipeline Flow
          </Link>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl text-sm font-bold transition-all shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-0.5">
            <Plus size={16} /> New PR
          </button>
        </div>
      </div>

      {/* Modern KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total PRs */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FileText size={64} className="text-slate-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Total PRs</p>
          <div className="flex items-end gap-3 mt-3">
            <h3 className="text-4xl font-black text-slate-900 dark:text-white">1</h3>
          </div>
        </div>
        
        {/* Pending Approval */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-amber-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock size={64} className="text-amber-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Pending Approval</p>
          <h3 className="text-4xl font-black text-amber-500 mt-3">0</h3>
        </div>

        {/* Approved PR */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-blue-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <CheckCircle size={64} className="text-blue-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Approved PR</p>
          <h3 className="text-4xl font-black text-blue-500 mt-3">0</h3>
        </div>

        {/* PO Generated */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <ShoppingCart size={64} className="text-emerald-500" />
          </div>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">PO Generated</p>
          <div className="flex items-end gap-3 mt-3">
            <h3 className="text-4xl font-black text-emerald-500">1</h3>
            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded-lg mb-1">Done</span>
          </div>
        </div>
      </div>

      {/* Main Table Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Toolbar */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 dark:bg-[#0b0f19]/30">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search Requisitions..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:text-indigo-500 shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-slate-50/80 dark:bg-[#0b0f19]/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">PR #</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">JOB ORDER REF</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">STATUS</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">REQUESTED BY</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider">DATE</th>
                <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 tracking-wider text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {/* Single Mock Row matching screenshot but modernized */}
              <tr className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors group">
                <td className="p-4">
                  <span className="inline-flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-lg text-sm border border-indigo-100 dark:border-indigo-500/20">
                    PR-TEST-0625
                  </span>
                </td>
                <td className="p-4">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Job #{1}
                  </span>
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                    <Clock size={12} />
                    PO Created
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300">
                      U1
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      User {1}
                    </span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    5/8/2026
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold transition-all shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5">
                      <Download size={14} /> GRN
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700 shadow-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default PurchaseRequisitions;

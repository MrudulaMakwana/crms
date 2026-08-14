import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Download,
  Filter
} from 'lucide-react';
import { useState } from 'react';
import AddBudgetModal from '../components/AddBudgetModal';
import Button from '../components/Button';

const mockBudgets = [
  {
    id: '#BG0020',
    category: 'Office Supplies',
    period: 'Q2 2026',
    budget: '$15,000',
    spent: '$12,500',
    remaining: '$2,500',
    usage: 83
  },
  {
    id: '#BG0019',
    category: 'Marketing',
    period: 'Q2 2026',
    budget: '$50,000',
    spent: '$48,200',
    remaining: '$1,800',
    usage: 96
  },
  {
    id: '#BG0018',
    category: 'Travel',
    period: 'Q2 2026',
    budget: '$25,000',
    spent: '$28,500',
    remaining: '-$3,500',
    usage: 114
  },
  {
    id: '#BG0017',
    category: 'IT Services',
    period: 'Q2 2026',
    budget: '$40,000',
    spent: '$30,800',
    remaining: '$9,200',
    usage: 77
  },
  {
    id: '#BG0016',
    category: 'Utilities',
    period: 'Q2 2026',
    budget: '$20,000',
    spent: '$15,400',
    remaining: '$4,600',
    usage: 77
  },
  {
    id: '#BG0015',
    category: 'Rent',
    period: 'Q2 2026',
    budget: '$45,000',
    spent: '$45,000',
    remaining: '$0',
    usage: 100
  },
  {
    id: '#BG0014',
    category: 'Training',
    period: 'Q2 2026',
    budget: '$30,000',
    spent: '$12,800',
    remaining: '$17,200',
    usage: 43
  }
];

const getRemainingColor = (remainingStr) => {
  if (remainingStr.startsWith('-')) {
    return 'text-red-600 dark:text-red-400 font-bold';
  } else if (remainingStr === '$0') {
    return 'text-slate-600 dark:text-slate-400 font-bold';
  }
  return 'text-emerald-600 dark:text-emerald-400 font-bold';
};

const getProgressBarColor = (usage) => {
  if (usage > 100) return 'bg-red-600';
  if (usage >= 90) return 'bg-orange-500';
  if (usage >= 75) return 'bg-emerald-600';
  return 'bg-blue-500';
};

const Budgeting = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Budgeting</h1>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button variant="primary" onClick={() => setIsAddModalOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add New</Button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full sm:max-w-[240px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
              <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Budget ID</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Category</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Period</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Budget</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Spent</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Remaining</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 w-48">Usage</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockBudgets.map(budget => (
                <tr key={budget.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{budget.id}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{budget.category}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{budget.period}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-medium">{budget.budget}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{budget.spent}</td>
                  <td className={`px-6 py-4 text-sm ${getRemainingColor(budget.remaining)}`}>
                    {budget.remaining}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${getProgressBarColor(budget.usage)}`}
                          style={{ width: `${Math.min(budget.usage, 100)}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 w-8">{budget.usage}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="p-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-600 hover:bg-slate-50 dark:hover:text-slate-300 dark:hover:bg-slate-800 transition-colors inline-flex">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Add Budget Modal */}
      <AddBudgetModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Budgeting;

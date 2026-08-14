import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Download,
  ArrowUpDown
} from 'lucide-react';
import { useState } from 'react';
import AddExpenseCategoryModal from '../components/AddExpenseCategoryModal';
import Button from '../components/Button';

const mockCategories = [
  {
    code: '#ECO01',
    name: 'Office Supplies',
    description: 'Stationery, paper, printing',
    createdOn: '11 Sep 2025',
    status: 'Active'
  },
  {
    code: '#ECO02',
    name: 'Travel',
    description: 'Flights, taxi, hotel',
    createdOn: '05 Sep 2025',
    status: 'Active'
  },
  {
    code: '#ECO03',
    name: 'Utilities',
    description: 'Electricity, water, internet',
    createdOn: '27 Aug 2025',
    status: 'Active'
  },
  {
    code: '#ECO04',
    name: 'Rent',
    description: 'Office and warehouse rent',
    createdOn: '16 Aug 2025',
    status: 'Active'
  },
  {
    code: '#ECO05',
    name: 'Marketing',
    description: 'Ads, campaigns, PR',
    createdOn: '25 Jul 2025',
    status: 'Active'
  },
  {
    code: '#ECO06',
    name: 'IT Services',
    description: 'Software, hosting, licenses',
    createdOn: '12 Jul 2025',
    status: 'Active'
  },
  {
    code: '#ECO07',
    name: 'Employee Training',
    description: 'Courses, workshops',
    createdOn: '23 Jun 2025',
    status: 'Inactive'
  }
];

const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'active':
      return 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/10 dark:border-emerald-500/30';
    case 'inactive':
      return 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-500/10 dark:border-red-500/30';
    default:
      return 'text-slate-600 bg-slate-50 border-slate-200 dark:text-slate-400 dark:bg-slate-500/10 dark:border-slate-500/30';
  }
};

const ExpenseCategory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Expense Category</h1>
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
              <ArrowUpDown size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50">
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Code</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Category Name</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Description</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Created On</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300">Status</th>
                <th className="px-6 py-4 text-[13px] font-bold text-slate-700 dark:text-slate-300 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {mockCategories.map((category, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{category.code}</td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{category.name}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{category.description}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">{category.createdOn}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-[10px] font-bold border shadow-sm ${getStatusBadgeClass(category.status)}`}>
                      {category.status}
                    </span>
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
      
      {/* Add Expense Category Modal */}
      <AddExpenseCategoryModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default ExpenseCategory;

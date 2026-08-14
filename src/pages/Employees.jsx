import { 
  Printer,
  Download,
  ChevronDown,
  Plus,
  LayoutGrid,
  List,
  Mail,
  Phone
} from 'lucide-react';
import { useState } from 'react';
import AddEmployeeModal from '../components/AddEmployeeModal';
import Button from '../components/Button';

const mockEmployees = [
  {
    id: 1,
    name: 'Ethan Walker',
    title: 'Manager',
    department: 'Engineering',
    email: 'ethan@example.com',
    phone: '+1 202 555 0173',
    avatar: 'https://i.pravatar.cc/150?u=11'
  },
  {
    id: 2,
    name: 'Madison Clark',
    title: 'Designer',
    department: 'Design',
    email: 'madison@example.com',
    phone: '+91 98765 43210',
    avatar: 'https://i.pravatar.cc/150?u=12'
  },
  {
    id: 3,
    name: 'James Harris',
    title: 'Developer',
    department: 'Engineering',
    email: 'james@example.com',
    phone: '+1 416 555 8294',
    avatar: 'https://i.pravatar.cc/150?u=13'
  },
  {
    id: 4,
    name: 'Avery Thompson',
    title: 'HR Manager',
    department: 'HR',
    email: 'avery@example.com',
    phone: '+61 412 345 678',
    avatar: 'https://i.pravatar.cc/150?u=14'
  },
  {
    id: 5,
    name: 'Benjamin Wright',
    title: 'Accountant',
    department: 'Finance',
    email: 'ben@example.com',
    phone: '+49 1512 3456789',
    avatar: 'https://i.pravatar.cc/150?u=15'
  },
  {
    id: 6,
    name: 'Chloe Mitchell',
    title: 'Sales Rep',
    department: 'Sales',
    email: 'chloe@example.com',
    phone: '+81 90 1234 5678',
    avatar: 'https://i.pravatar.cc/150?u=16'
  },
  {
    id: 7,
    name: 'Daniel Roberts',
    title: 'DevOps',
    department: 'Engineering',
    email: 'daniel@example.com',
    phone: '+55 11 91234 5678',
    avatar: 'https://i.pravatar.cc/150?u=17'
  },
  {
    id: 8,
    name: 'Grace Adams',
    title: 'Marketing',
    department: 'Marketing',
    email: 'grace@example.com',
    phone: '+27 82 123 4567',
    avatar: 'https://i.pravatar.cc/150?u=18'
  }
];

const EmployeeCard = ({ employee }) => {
  return (
    <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col items-center p-6 group">
      
      {/* Avatar */}
      <div className="mb-4">
        <img 
          src={employee.avatar} 
          alt={employee.name} 
          className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-50 dark:ring-[#1a2133] group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      {/* Basic Info */}
      <h3 className="font-bold text-[15px] text-slate-900 dark:text-white leading-tight mb-1 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {employee.name}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 text-center">
        {employee.title}
      </p>

      {/* Department Badge */}
      <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20 mb-5">
        {employee.department}
      </span>

      {/* Contact Info Footer */}
      <div className="w-full pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
        <div className="flex items-center justify-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
          <Mail size={14} className="text-slate-400" />
          <span className="truncate">{employee.email}</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-[13px] text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
          <Phone size={14} className="text-slate-400" />
          <span>{employee.phone}</span>
        </div>
      </div>
      
    </div>
  );
};

const Employees = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Employees</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-white dark:bg-[#111624] p-1 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <List size={16} />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <LayoutGrid size={16} />
            </button>
          </div>

          
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Add New
          </Button>
        </div>
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockEmployees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>

      <AddEmployeeModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />

    </div>
  );
};

export default Employees;

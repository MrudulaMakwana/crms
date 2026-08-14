import { 
  Printer,
  Download,
  ChevronDown,
  Plus,
  LayoutGrid,
  List,
  Calendar,
  MessageCircle,
  Paperclip,
  Utensils
} from 'lucide-react';
import { useState } from 'react';
import AddTaskModal from '../components/AddTaskModal';
import Button from '../components/Button';

const mockTasks = [
  {
    id: 1,
    title: 'Design Employee Dashboard',
    project: 'Office Management App',
    priority: 'Low',
    status: 'Active',
    description: 'Create a clean employee dashboard with attendance, leave and payroll widgets.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=11',
    assigneeName: 'Ethan Walker',
    date: '12 Sep 2025',
    comments: 4,
    attachments: 2
  },
  {
    id: 2,
    title: 'Build Patient Registration Form',
    project: 'Clinic Management',
    priority: 'Medium',
    status: 'Active',
    description: 'Build a multi-step patient registration form with insurance and history details.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=12',
    assigneeName: 'Madison Clark',
    date: '06 Sep 2025',
    comments: 2,
    attachments: 1
  },
  {
    id: 3,
    title: 'Develop Quiz & Assessment',
    project: 'Educational Platform',
    priority: 'High',
    status: 'Active',
    description: 'Develop quiz and assessment modules with timed tests and auto grading.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=13',
    assigneeName: 'James Harris',
    date: '28 Aug 2025',
    comments: 6,
    attachments: 3
  },
  {
    id: 4,
    title: 'Integrate Voice & Video Calling',
    project: 'Chat & Call Mobile App',
    priority: 'Low',
    status: 'Inactive',
    description: 'Integrate one-to-one voice and video calling with call history and notifications.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=14',
    assigneeName: 'Avery Thompson',
    date: '17 Aug 2025',
    comments: 3,
    attachments: 1
  },
  {
    id: 5,
    title: 'Design Homepage',
    project: 'Travel Planning Website',
    priority: 'Medium',
    status: 'Active',
    description: 'Design a responsive homepage with destination search and featured packages.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=15',
    assigneeName: 'Benjamin Wright',
    date: '26 Jul 2025',
    comments: 5,
    attachments: 2
  },
  {
    id: 6,
    title: 'Build Service Listing Page',
    project: 'Service Booking Software',
    priority: 'High',
    status: 'Active',
    description: 'Build a service listing page with category filters, ratings and pricing.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=16',
    assigneeName: 'Chloe Mitchell',
    date: '13 Jul 2025',
    comments: 7,
    attachments: 4
  },
  {
    id: 7,
    title: 'Integrate Payment Gateway',
    project: 'Hotel Booking App',
    priority: 'Low',
    status: 'Active',
    description: 'Integrate a secure payment gateway with card, UPI and wallet support.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=17',
    assigneeName: 'Daniel Roberts',
    date: '24 Jun 2025',
    comments: 2,
    attachments: 1
  },
  {
    id: 8,
    title: 'Build Vehicle Inventory',
    project: 'Car & Bike Rental Software',
    priority: 'Medium',
    status: 'Inactive',
    description: 'Build a vehicle inventory with availability status, pricing and documents.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=18',
    assigneeName: 'Grace Adams',
    date: '08 Jun 2025',
    comments: 1,
    attachments: 2
  },
  {
    id: 9,
    title: 'Add Order Tracking Feature',
    project: 'Food Order App',
    priority: 'High',
    status: 'Active',
    description: 'Add live order tracking with delivery partner location and ETA updates.',
    assigneeAvatar: 'https://i.pravatar.cc/150?u=19',
    assigneeName: 'Hendrita Bennett',
    date: '29 May 2025',
    comments: 8,
    attachments: 3
  }
];

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Low': return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
      case 'Medium': return 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30';
      case 'High': return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
      default: return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700';
    }
  };

  const getStatusColor = (status) => {
    return status === 'Active' 
      ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30'
      : 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
  };

  return (
    <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group p-5">
      
      {/* Header Info */}
      <div className="flex items-start justify-between gap-4 mb-1">
        <h3 className="font-bold text-[15px] text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {task.title}
        </h3>
        <div className="flex gap-2 shrink-0">
          <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getPriorityColor(task.priority)}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusColor(task.status)}`}>
            {task.status}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
        {task.project}
      </p>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 min-h-[40px] flex-1">
        {task.description}
      </p>

      {/* Footer Info */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-y-3 gap-x-4">
        <div className="flex items-center gap-2">
          <img src={task.assigneeAvatar} alt={task.assigneeName} className="w-6 h-6 rounded-full object-cover" />
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{task.assigneeName}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={14} className="text-slate-400" />
          <span>{task.date}</span>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <MessageCircle size={14} className="text-slate-400" />
            <span>{task.comments}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Paperclip size={14} className="text-slate-400" />
            <span>{task.attachments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Tasks</h1>
        
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

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      <AddTaskModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Tasks;

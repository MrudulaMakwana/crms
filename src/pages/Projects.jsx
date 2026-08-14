import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Printer,
  Download,
  Calendar,
  LayoutGrid,
  List,
  SlidersHorizontal,
  RefreshCcw,
  CheckSquare,
  Building,
  HeartPulse,
  GraduationCap,
  MessageCircle,
  PlaneTakeoff,
  Wrench,
  BedDouble,
  Car,
  Utensils
} from 'lucide-react';
import { useState } from 'react';
import AddProjectModal from '../components/AddProjectModal';
import Button from '../components/Button';

const mockProjects = [
  {
    id: 1,
    title: 'Office Management App',
    code: '#PRO0020',
    manager: 'Ethan Walker',
    icon: Building,
    iconColor: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    status: 'Active',
    priority: 'Low',
    description: 'A centralized workspace platform to manage office operations, meeting rooms and internal requests.',
    avatars: ['https://i.pravatar.cc/150?u=11', 'https://i.pravatar.cc/150?u=12', 'https://i.pravatar.cc/150?u=13'],
    extraAvatars: '+5',
    completedTasks: 32,
    totalTasks: 48,
    progress: 95,
    progressColor: 'bg-emerald-500',
    deadline: '25 Sep 2025'
  },
  {
    id: 2,
    title: 'Clinic Management',
    code: '#PRO0019',
    manager: 'Madison Clark',
    icon: HeartPulse,
    iconColor: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400',
    status: 'Active',
    priority: 'Medium',
    description: 'Patient scheduling, appointment and billing management system for multi-branch clinics.',
    avatars: ['https://i.pravatar.cc/150?u=14', 'https://i.pravatar.cc/150?u=15', 'https://i.pravatar.cc/150?u=16'],
    extraAvatars: '+5',
    completedTasks: 24,
    totalTasks: 40,
    progress: 65,
    progressColor: 'bg-orange-500',
    deadline: '10 Sep 2025'
  },
  {
    id: 3,
    title: 'Educational Platform',
    code: '#PRO0018',
    manager: 'James Harris',
    icon: GraduationCap,
    iconColor: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    status: 'Active',
    priority: 'High',
    description: 'Online learning platform with course management, live classes and student progress tracking.',
    avatars: ['https://i.pravatar.cc/150?u=17', 'https://i.pravatar.cc/150?u=18', 'https://i.pravatar.cc/150?u=19'],
    extraAvatars: '+5',
    completedTasks: 56,
    totalTasks: 56,
    progress: 100,
    progressColor: 'bg-emerald-500',
    deadline: '02 Sep 2025'
  },
  {
    id: 4,
    title: 'Chat & Call Mobile App',
    code: '#PRO0017',
    manager: 'Avery Thompson',
    icon: MessageCircle,
    iconColor: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    status: 'Inactive',
    priority: 'Low',
    description: 'Cross-platform messaging app with HD voice and video calling, group chats and file sharing.',
    avatars: ['https://i.pravatar.cc/150?u=20', 'https://i.pravatar.cc/150?u=21', 'https://i.pravatar.cc/150?u=22'],
    extraAvatars: '+5',
    completedTasks: 17,
    totalTasks: 36,
    progress: 48,
    progressColor: 'bg-blue-500',
    deadline: '23 Aug 2025'
  },
  {
    id: 5,
    title: 'Travel Planning Website',
    code: '#PRO0016',
    manager: 'Benjamin Wright',
    icon: PlaneTakeoff,
    iconColor: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
    status: 'Active',
    priority: 'Medium',
    description: 'Trip planning portal with itinerary builder, hotel and flight booking and curated travel guides.',
    avatars: ['https://i.pravatar.cc/150?u=23', 'https://i.pravatar.cc/150?u=24', 'https://i.pravatar.cc/150?u=25'],
    extraAvatars: '+5',
    completedTasks: 26,
    totalTasks: 36,
    progress: 72,
    progressColor: 'bg-blue-500',
    deadline: '30 Aug 2025'
  },
  {
    id: 6,
    title: 'Service Booking Software',
    code: '#PRO0015',
    manager: 'Chloe Mitchell',
    icon: Wrench,
    iconColor: 'bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
    status: 'Active',
    priority: 'High',
    description: 'On-demand service booking system with provider scheduling, payments and review management.',
    avatars: ['https://i.pravatar.cc/150?u=26', 'https://i.pravatar.cc/150?u=27', 'https://i.pravatar.cc/150?u=28'],
    extraAvatars: '+5',
    completedTasks: 18,
    totalTasks: 32,
    progress: 58,
    progressColor: 'bg-orange-500',
    deadline: '20 Jul 2025'
  },
  {
    id: 7,
    title: 'Hotel Booking App',
    code: '#PRO0014',
    manager: 'Daniel Roberts',
    icon: BedDouble,
    iconColor: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400',
    status: 'Active',
    priority: 'Low',
    description: 'Hotel reservation app with real-time room availability, dynamic pricing and loyalty rewards.',
    avatars: ['https://i.pravatar.cc/150?u=29', 'https://i.pravatar.cc/150?u=30', 'https://i.pravatar.cc/150?u=31'],
    extraAvatars: '+5',
    completedTasks: 38,
    totalTasks: 45,
    progress: 84,
    progressColor: 'bg-emerald-500',
    deadline: '28 Jun 2025'
  },
  {
    id: 8,
    title: 'Car & Bike Rental Software',
    code: '#PRO0013',
    manager: 'Grace Adams',
    icon: Car,
    iconColor: 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    status: 'Inactive',
    priority: 'Medium',
    description: 'Vehicle rental management software with fleet tracking, bookings and automated invoicing.',
    avatars: ['https://i.pravatar.cc/150?u=32', 'https://i.pravatar.cc/150?u=33', 'https://i.pravatar.cc/150?u=34'],
    extraAvatars: '+5',
    completedTasks: 10,
    totalTasks: 28,
    progress: 36,
    progressColor: 'bg-red-500',
    deadline: '15 Jun 2025'
  },
  {
    id: 9,
    title: 'Food Order App',
    code: '#PRO0012',
    manager: 'Hendrita Bennett',
    icon: Utensils,
    iconColor: 'bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400',
    status: 'Active',
    priority: 'High',
    description: 'Food delivery app with live order tracking, restaurant management and secure payments.',
    avatars: ['https://i.pravatar.cc/150?u=35', 'https://i.pravatar.cc/150?u=36', 'https://i.pravatar.cc/150?u=37'],
    extraAvatars: '+5',
    completedTasks: 21,
    totalTasks: 34,
    progress: 62,
    progressColor: 'bg-orange-500',
    deadline: '05 Jun 2025'
  }
];

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

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
      <div className="flex gap-4 mb-3">
        <div className={`w-10 h-10 rounded-lg flex flex-shrink-0 items-center justify-center ${project.iconColor}`}>
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-[15px] text-slate-900 dark:text-white leading-tight mb-1 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
            {project.code} • {project.manager}
          </p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex gap-2 mb-4">
        <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusColor(project.status)}`}>
          {project.status}
        </span>
        <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${getPriorityColor(project.priority)}`}>
          {project.priority}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 min-h-[40px]">
        {project.description}
      </p>

      {/* Metrics Row (Avatars + Tasks) */}
      <div className="flex items-center justify-between mb-4 mt-auto">
        <div className="flex items-center -space-x-2">
          {project.avatars.map((avatar, idx) => (
            <img 
              key={idx} 
              src={avatar} 
              alt="Team member" 
              className="w-7 h-7 rounded-full border-2 border-white dark:border-[#111624] object-cover relative z-10 hover:z-20 hover:scale-110 transition-transform" 
            />
          ))}
          <div className="w-7 h-7 rounded-full border-2 border-white dark:border-[#111624] bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-400 relative z-0">
            {project.extraAvatars}
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <CheckSquare size={14} className="text-slate-400" />
          <span>{project.completedTasks}/{project.totalTasks} Tasks</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${project.progressColor}`} style={{ width: `${project.progress}%` }}></div>
          </div>
          <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 w-8 text-right">{project.progress}%</span>
        </div>
      </div>

      {/* Footer (Deadline) */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Calendar size={14} />
          <span>Deadline</span>
        </div>
        <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">
          {project.deadline}
        </span>
      </div>

    </div>
  );
};

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Projects</h1>
        
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

      {/* Toolbar */}
      <div className="bg-white dark:bg-[#111624] p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-sm dark:shadow-none">
        
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all">
            <Calendar size={14} className="text-slate-400" /> 01 Jan 26 to 20 Jan 26
          </button>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
            <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
            <SlidersHorizontal size={14} className="text-slate-400" /> Sort By <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          <div className="flex gap-2">
            <button className="p-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 rounded-lg transition-all">
              <LayoutGrid size={14} />
            </button>
            <button className="p-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 rounded-lg transition-all">
              <RefreshCcw size={14} />
            </button>
          </div>
        </div>

      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-600 dark:text-slate-400">Showing</span>
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
              <option>10 / Pages</option>
              <option>25 / Pages</option>
              <option>50 / Pages</option>
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
        
        <div className="flex items-center gap-1.5">
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#1e293b] dark:bg-blue-600 text-white text-sm font-medium shadow-sm hover:bg-slate-800 dark:hover:bg-blue-700 transition-colors">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            3
          </button>
          <span className="w-8 h-8 flex items-center justify-center text-slate-400 text-sm">...</span>
        </div>
      </div>

      <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Projects;

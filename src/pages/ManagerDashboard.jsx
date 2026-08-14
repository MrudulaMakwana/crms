import React from 'react';
import { 
  Users, Filter, Layout, Clock, 
  FolderKanban, Users2, CalendarDays, 
  Plus, Check,
  FolderKanbanIcon,
  FilterIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, subtitle, icon: Icon, colorClass, iconBgClass }) => (
  <div className={`${colorClass} rounded-2xl p-6 text-white shadow-lg relative overflow-hidden transition-transform hover:scale-[1.02] duration-300`}>
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-medium text-white/90 text-sm tracking-wide">{title}</h3>
      <div className={`p-2 rounded-xl ${iconBgClass}`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
    <div className="text-4xl font-bold mb-2 tracking-tight">{value}</div>
    <div className="flex items-center gap-1.5 text-sm text-white/80">
      <Check size={14} className="opacity-70" />
      <span>{subtitle}</span>
    </div>
  </div>
);

const RosterItem = ({ name, role, initial, isActive }) => (
  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">
        {initial}
      </div>
      <div>
        <div className="text-sm font-bold text-slate-900 dark:text-white">{name}</div>
        <div className="text-xs text-slate-500 dark:text-slate-400">{role}</div>
      </div>
    </div>
    {isActive && (
      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
        Active
      </span>
    )}
  </div>
);

const ManagerDashboard = () => {
  const projects = [
    { title: "demo", status: "Not Started", statusColor: "text-slate-500 bg-slate-500/10 border-slate-500/20", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 0 },
    { title: "CRMS", status: "Not Started", statusColor: "text-slate-500 bg-slate-500/10 border-slate-500/20", priority: "High", priorityColor: "text-amber-500 bg-amber-500/10", progress: 0 },
    { title: "Vanguard Fintech Security Audit", status: "Not Started", statusColor: "text-slate-500 bg-slate-500/10 border-slate-500/20", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 0 },
    { title: "BlueWave E-Commerce Portal", status: "In Progress", statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20", priority: "High", priorityColor: "text-amber-500 bg-amber-500/10", progress: 0 },
    { title: "Starlight Patient Portal Redesign", status: "Completed", statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 100 },
    { title: "TechNova AI Assistant Integration", status: "In Progress", statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20", priority: "Urgent", priorityColor: "text-red-500 bg-red-500/10", progress: 0 },
    { title: "Acme Enterprise CRM Modernization", status: "In Progress", statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20", priority: "High", priorityColor: "text-amber-500 bg-amber-500/10", progress: 40 },
  ];
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-[#111624] rounded-2xl p-8 shadow-lg relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-slate-700/50">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-bold tracking-wide shadow-lg shadow-amber-500/20">
            <Users size={14} />
            <span>Team Manager Mode</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Welcome back, Sarah Jenkins! 
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-medium max-w-2xl">
            Overview of your assigned team members, pipeline activity, project milestones, and approvals.
          </p>
        </div>
        
        <div className="relative z-10 flex flex-wrap items-center gap-3">
         <div className="relative z-10 flex flex-wrap items-center gap-3">
      <button 
        onClick={() => navigate('/crm/leads')}
        className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-2 transition-colors shadow-lg shadow-amber-500/25 active:scale-98"
      >
        <FilterIcon size={16} />
        <span className="text-sm font-bold tracking-wide">New Lead</span>
      </button>

      <button 
        onClick={() => navigate('/projects')}
        className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/25 active:scale-98"
      >
        <FolderKanbanIcon size={16} />
        <span className="text-sm font-bold tracking-wide">New Project</span>
      </button>

      <button 
        onClick={() => navigate('/projects/tasks')}
        className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 border border-slate-600 text-white flex items-center gap-2 transition-colors shadow-lg active:scale-98"
      >
        <Plus size={16} />
        <span className="text-sm font-bold tracking-wide">Assign Task</span>
      </button>
    </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Team Members" value="5" subtitle="Assigned Reps & Staff" 
          icon={Users2} colorClass="bg-[#6366f1]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="Active Team Leads" value="9" subtitle="Managed Team Opportunities" 
          icon={Filter} colorClass="bg-[#f59e0b]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="Team Projects" value="7" subtitle="Active Milestones" 
          icon={Layout} colorClass="bg-[#a855f7]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="Pending Team Tasks" value="6" subtitle="Awaiting Completion" 
          icon={Clock} colorClass="bg-[#10b981]" iconBgClass="bg-white/20" 
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Managed Team Projects */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FolderKanban size={20} className="text-blue-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Managed Team Projects</h2>
            </div>
            <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-1.5 rounded-full transition-all" onClick={() => navigate('/projects')}>
              View Projects
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800/80">
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-2/5">Project Name</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Priority</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">Progress</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {projects.map((project, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-4 text-sm font-bold text-slate-900 dark:text-white pr-4">
                      {project.title}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${project.statusColor}`}>
                        {project.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${project.priorityColor}`}>
                        {project.priority}
                      </span>
                    </td>
                    <td className="py-4 pr-2">
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                        <div 
                          className={`h-full rounded-full transition-all duration-500 ${project.progress > 0 ? 'bg-blue-500' : 'bg-transparent'}`} 
                          style={{ width: `${Math.max(project.progress, 5)}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Roster & Meetings */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 h-full flex flex-col">
            
            {/* Team Roster & Status */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users2 size={20} className="text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Team Roster & Status</h2>
              </div>
              <div className="space-y-1">
                <RosterItem name="David Miller" role="Employee" initial="E" isActive={true} />
                <RosterItem name="Emily Watson" role="Employee" initial="E" isActive={true} />
                <RosterItem name="Michael Chang" role="Employee" initial="M" isActive={true} />
                <RosterItem name="Jessica Taylor" role="Employee" initial="J" isActive={true} />
                <RosterItem name="Robert Fox" role="Employee" initial="R" isActive={true} />
              </div>
            </div>

            {/* Team Meetings */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={20} className="text-cyan-500" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Team Meetings</h2>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 font-medium">
                No team meetings scheduled.
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ManagerDashboard;

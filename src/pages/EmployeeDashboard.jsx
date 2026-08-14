import React from 'react';
import { 
  User, Calendar, Clock, CheckCircle2, CheckSquare, 
  Gauge, Eye, AlertTriangle, Bell, CalendarDays 
} from 'lucide-react';

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
      <CheckSquare size={14} className="opacity-70" />
      <span>{subtitle}</span>
    </div>
  </div>
);

const EmployeeDashboard = () => {
  const assignedTasks = [
    { title: "Database Schema Optimization", priority: "High", priorityColor: "text-amber-500 bg-amber-500/10", progress: 75, date: "Aug 08" },
    { title: "now add ui in this project", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 20, date: "Aug 10" },
    { title: "Security Penetration Testing", priority: "Urgent", priorityColor: "text-red-500 bg-red-500/10", progress: 0, date: "Aug 13" },
    { title: "testing", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 0, date: "Aug 29" },
    { title: "CRM project is to simplify customer relationship", priority: "Medium", priorityColor: "text-cyan-500 bg-cyan-500/10", progress: 0, date: "Aug 29" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-600 rounded-2xl p-8 shadow-lg shadow-indigo-500/20 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Glassmorphic decorative circles */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-white/20">
            <User size={14} />
            <span>Employee Workspace Mode</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Welcome back, David Miller! 
          </h1>
          <p className="text-indigo-100 text-sm md:text-base font-medium max-w-2xl">
            View your assigned tasks, attendance status, upcoming meetings, and project tasks.
          </p>
        </div>
        
       
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="My Total Tasks" value="5" subtitle="Assigned Work Items" 
          icon={CheckSquare} colorClass="bg-[#6366f1]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="Completed Tasks" value="0" subtitle="Successfully Closed" 
          icon={CheckCircle2} colorClass="bg-[#10b981]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="Pending Tasks" value="5" subtitle="Requires Action" 
          icon={Clock} colorClass="bg-[#f59e0b]" iconBgClass="bg-white/20" 
        />
        <StatCard 
          title="My Performance Rate" value="0%" subtitle="Task Completion Ratio" 
          icon={Gauge} colorClass="bg-[#8b5cf6]" iconBgClass="bg-white/20" 
        />
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Assigned Tasks */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CheckSquare size={20} className="text-blue-500" />
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">My Assigned Tasks</h2>
            </div>
            <button className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 border border-blue-200 dark:border-blue-900/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-1.5 rounded-full transition-all">
              View All Tasks
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800/80">
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-2/5">Task Title</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Priority</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider w-1/4">Progress</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Due Date</th>
                  <th className="pb-3 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {assignedTasks.map((task, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="py-4 text-sm font-semibold text-slate-900 dark:text-white pr-4">
                      {task.title}
                    </td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${task.priorityColor}`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                    </td>
                    <td className="py-4 text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {task.date}
                    </td>
                    <td className="py-4 text-right">
                      <button className="p-2 rounded-full text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Schedule & Notifications */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#111624] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 h-full flex flex-col">
            
            {/* Upcoming Schedule */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={20} className="text-cyan-500" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Upcoming Schedule</h2>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 text-sm text-slate-500 dark:text-slate-400 font-medium">
                No upcoming schedule events.
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Bell size={20} className="text-amber-500" />
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Notifications</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20">
                  <AlertTriangle size={16} className="text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-amber-900 dark:text-amber-200">
                    Urgent Task: Security Penetration Testing
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default EmployeeDashboard;

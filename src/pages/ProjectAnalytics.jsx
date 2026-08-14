import { 
  Download,
  ChevronDown,
  FolderOpen,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';

const mockAnalytics = [
  { project: 'Office Management App', leadAvatar: 'https://i.pravatar.cc/150?u=11', leadName: 'Ethan Walker', progress: 95, progressColor: 'bg-emerald-500', budget: '$120K', spent: '$98K', health: 'Healthy' },
  { project: 'Clinic Management', leadAvatar: 'https://i.pravatar.cc/150?u=12', leadName: 'Madison Clark', progress: 65, progressColor: 'bg-orange-500', budget: '$220K', spent: '$180K', health: 'At Risk' },
  { project: 'Educational Platform', leadAvatar: 'https://i.pravatar.cc/150?u=13', leadName: 'James Harris', progress: 100, progressColor: 'bg-emerald-500', budget: '$340K', spent: '$335K', health: 'Completed' },
  { project: 'Chat & Call Mobile App', leadAvatar: 'https://i.pravatar.cc/150?u=14', leadName: 'Avery Thompson', progress: 48, progressColor: 'bg-blue-500', budget: '$180K', spent: '$92K', health: 'On Track' },
  { project: 'POS Admin Software', leadAvatar: 'https://i.pravatar.cc/150?u=20', leadName: 'Harper Scott', progress: 32, progressColor: 'bg-red-500', budget: '$95K', spent: '$78K', health: 'Critical' },
];

const MetricCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{value}</h3>
    </div>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
      <Icon size={18} />
    </div>
  </div>
);

const ProjectAnalytics = () => {
  const getHealthColor = (health) => {
    switch(health) {
      case 'Healthy': return 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400';
      case 'At Risk': return 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400';
      case 'Completed': return 'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400';
      case 'On Track': return 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400';
      case 'Critical': return 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400';
      default: return 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Project Analytics</h1>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} /> Export <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title="Active Projects" 
          value="28" 
          icon={FolderOpen} 
          colorClass="bg-teal-50 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400" 
        />
        <MetricCard 
          title="On Schedule" 
          value="87%" 
          icon={Clock} 
          colorClass="bg-emerald-50 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400" 
        />
        <MetricCard 
          title="Budget Used" 
          value="$2.4M" 
          icon={DollarSign} 
          colorClass="bg-orange-50 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400" 
        />
        <MetricCard 
          title="Team Utilization" 
          value="82%" 
          icon={Users} 
          colorClass="bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400" 
        />
      </div>

      {/* Main Content Container (Data Table) */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Header */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <h2 className="font-bold text-slate-900 dark:text-white">Project Performance Overview</h2>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead className="bg-white dark:bg-[#111624] border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Project</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Lead</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Progress</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Budget</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Spent</th>
                <th className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">Health</th>
              </tr>
            </thead>
            <tbody>
              {mockAnalytics.map((row, index) => (
                <tr 
                  key={index} 
                  className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    {row.project}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={row.leadAvatar} alt={row.leadName} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{row.leadName}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3 w-full max-w-[200px]">
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${row.progressColor}`} style={{ width: `${row.progress}%` }}></div>
                      </div>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 w-8">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {row.budget}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {row.spent}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${getHealthColor(row.health)}`}>
                      {row.health}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProjectAnalytics;

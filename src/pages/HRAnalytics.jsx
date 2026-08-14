import { 
  ChevronDown, 
  Printer,
  Download,
  Users,
  CalendarCheck,
  TrendingDown,
  Clock,
  TrendingUp
} from 'lucide-react';

const mockKPIs = [
  {
    title: 'Total Employees',
    value: '152',
    trend: '+8.5%',
    trendUp: true,
    icon: Users,
    color: 'emerald'
  },
  {
    title: 'Attendance Rate',
    value: '94.2%',
    trend: '+2.1%',
    trendUp: true,
    icon: CalendarCheck,
    color: 'blue'
  },
  {
    title: 'Turnover Rate',
    value: '3.8%',
    trend: '-0.5%',
    trendUp: false,
    icon: TrendingDown,
    color: 'amber'
  },
  {
    title: 'Avg Tenure',
    value: '3.2 yrs',
    trend: '+0.3',
    trendUp: true,
    icon: Clock,
    color: 'purple'
  }
];

const mockDepartments = [
  { department: 'Engineering', employees: 45, avgSalary: '$72,000', turnover: '2.5%', satisfaction: '4.5/5', status: 'Healthy' },
  { department: 'Sales', employees: 25, avgSalary: '$58,000', turnover: '5.2%', satisfaction: '4.1/5', status: 'Watch' },
  { department: 'Operations', employees: 20, avgSalary: '$52,000', turnover: '3.0%', satisfaction: '4.3/5', status: 'Healthy' },
  { department: 'Design', employees: 18, avgSalary: '$68,000', turnover: '2.0%', satisfaction: '4.7/5', status: 'Healthy' },
  { department: 'Marketing', employees: 14, avgSalary: '$56,000', turnover: '4.5%', satisfaction: '4.0/5', status: 'Healthy' },
  { department: 'Finance', employees: 12, avgSalary: '$62,000', turnover: '1.5%', satisfaction: '4.6/5', status: 'Healthy' },
  { department: 'Support', employees: 10, avgSalary: '$45,000', turnover: '6.8%', satisfaction: '3.8/5', status: 'At Risk' },
  { department: 'HR', employees: 8, avgSalary: '$54,000', turnover: '0.0%', satisfaction: '4.4/5', status: 'Healthy' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Healthy':
      return 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30';
    case 'Watch':
      return 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30';
    case 'At Risk':
      return 'bg-red-50 text-red-600 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30';
    default:
      return 'bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/30';
  }
};

const HRAnalytics = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Top Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">HR Analytics</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Printer size={14} /> <span className="hidden sm:inline">Print</span>
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-all shadow-sm">
            <Download size={14} /> <span className="hidden sm:inline">Export</span> <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockKPIs.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{kpi.title}</p>
                <div className={`p-2 rounded-lg bg-${kpi.color}-50 dark:bg-${kpi.color}-500/10 text-${kpi.color}-600 dark:text-${kpi.color}-400`}>
                  <Icon size={18} />
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</h3>
                <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded w-max ${
                  kpi.trendUp 
                    ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' 
                    : 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                }`}>
                  {kpi.trendUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                  {kpi.trend}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Department Breakdown Table */}
      <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
        <div className="p-5 border-b border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Department Breakdown</h2>
        </div>

        <div className="overflow-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-white dark:bg-[#111624]">
              <tr>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Department</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Employees</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Avg Salary</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Turnover</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Satisfaction</th>
                <th className="p-4 text-xs font-bold text-slate-700 dark:text-slate-300 border-b border-slate-100 dark:border-slate-800">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockDepartments.map((row, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-[#1a2133] transition-colors last:border-0`}
                >
                  <td className="p-4 text-sm font-bold text-slate-700 dark:text-slate-300">
                    {row.department}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.employees}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.avgSalary}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.turnover}
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {row.satisfaction}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold border ${getStatusBadge(row.status)}`}>
                      {row.status}
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

export default HRAnalytics;

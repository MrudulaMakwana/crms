import React from 'react';
import { 
  Factory, 
  Settings, 
  ShieldCheck, 
  Truck,
  Activity,
  MoreVertical,
  CheckCircle2,
  Clock,
  AlertTriangle
} from 'lucide-react';

const ProductionDashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10 p-4 sm:p-6 lg:p-8">
      
      {/* Header section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Production Dashboard</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Real-time overview of manufacturing operations</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-[#111624] p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <button className="px-4 py-1.5 text-sm font-bold bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 rounded-lg">Today</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Week</button>
          <button className="px-4 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Month</button>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Active Job Orders */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Active Job Orders</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">12</h3>
            </div>
            <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
              <Factory size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10">
            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-2 py-0.5 rounded text-[11px] font-bold">+2 This Week</span>
          </div>
        </div>

        {/* Machine Utilization */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Machine Utilization</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">78%</h3>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl">
              <Settings size={20} />
            </div>
          </div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-purple-500 rounded-full w-[78%]"></div>
          </div>
        </div>

        {/* Quality Pass Rate */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Quality Pass Rate</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">96.5%</h3>
            </div>
            <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl">
              <ShieldCheck size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10 mt-4">
            <span className="text-[11px] font-medium text-slate-500">Based on 142 inspections</span>
          </div>
        </div>

        {/* Today's Dispatches */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-colors"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Today's Dispatches</p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">8</h3>
            </div>
            <div className="p-3 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-xl">
              <Truck size={20} />
            </div>
          </div>
          <div className="flex items-center gap-2 relative z-10 mt-4">
            <span className="bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 px-2 py-0.5 rounded text-[11px] font-bold">3 Pending</span>
          </div>
        </div>

      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Production Output Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Production Output</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Units completed vs target over the last 7 days</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div> Actual
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-slate-400 border-dashed"></div> Target
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-h-[250px] relative flex items-end pb-6 px-4 mt-auto">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pb-6 -z-10">
              {[100, 80, 60, 40, 20, 0].map((val, i) => (
                 <div key={i} className="flex items-center gap-4 w-full flex-1">
                   <span className="text-[10px] text-slate-400 w-6 text-right font-medium">{val}</span>
                   <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 flex-1"></div>
                 </div>
              ))}
            </div>
            
            {/* Chart Area */}
            <div className="flex justify-between items-end w-full h-full pl-12 pr-4 relative">
              {/* Bars Mock */}
              {[
                { label: 'Mon', actual: 65, target: 70 },
                { label: 'Tue', actual: 85, target: 75 },
                { label: 'Wed', actual: 95, target: 80 },
                { label: 'Thu', actual: 70, target: 85 },
                { label: 'Fri', actual: 90, target: 90 },
                { label: 'Sat', actual: 40, target: 45 },
                { label: 'Sun', actual: 20, target: 20 },
              ].map((day, i) => (
                <div key={i} className="flex flex-col items-center gap-3 relative h-full justify-end group cursor-pointer w-full max-w-[40px]">
                  {/* Tooltip */}
                  <div className="absolute -top-10 bg-slate-900 text-white text-[11px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap pointer-events-none">
                    {day.actual} Units
                  </div>
                  
                  <div className="w-full relative flex justify-center items-end" style={{ height: '100%' }}>
                    {/* Target dashed box */}
                    <div className="absolute bottom-0 w-full border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-t-lg z-0" style={{ height: `${day.target}%` }}></div>
                    {/* Actual solid box */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-t-lg z-10 shadow-lg shadow-cyan-500/20 group-hover:brightness-110 transition-all" style={{ height: `${day.actual}%` }}></div>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 absolute -bottom-6">{day.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Machine Status */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white">Machine Status</h3>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <MoreVertical size={16} />
            </button>
          </div>
          
          <div className="space-y-5 flex-1">
            {[
              { name: "CNC Cutter A1", status: "Running", health: 98, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500" },
              { name: "Molding Press 2", status: "Maintenance", health: 45, icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-500" },
              { name: "Assembly Line C", status: "Running", health: 92, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500" },
              { name: "Packaging Unit", status: "Idle", health: 100, icon: Clock, color: "text-slate-400", bg: "bg-slate-400" },
              { name: "Welding Robot", status: "Running", health: 85, icon: Activity, color: "text-emerald-500", bg: "bg-emerald-500" },
            ].map((machine, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <machine.icon size={14} className={machine.color} />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{machine.name}</span>
                  </div>
                  <span className={`text-[10px] font-bold ${machine.color}`}>{machine.status}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${machine.bg} rounded-full opacity-80`} style={{ width: `${machine.health}%` }}></div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium w-6 text-right">{machine.health}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Row - Active Job Orders Table */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">Active Job Orders</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Currently in production stages</p>
          </div>
          <button className="text-xs font-bold text-cyan-600 hover:text-cyan-700 dark:text-cyan-400">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50/50 dark:bg-[#0b0f19]/50 border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[12px]">
              <tr>
                <th className="px-6 py-4">Job Order #</th>
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Stage</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4 text-right">Target Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {[
                { jo: "JO-0020", product: "Steel Cabinet", stage: "Cutting & Forming", progress: 65, date: "Aug 15, 2026" },
                { jo: "JO-0021", product: "Office Chair", stage: "Assembly", progress: 85, date: "Aug 16, 2026" },
                { jo: "JO-0022", product: "Conference Table", stage: "Polishing", progress: 40, date: "Aug 18, 2026" },
                { jo: "JO-0023", product: "Desk Pedestal", stage: "Painting", progress: 20, date: "Aug 20, 2026" }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">{row.jo}</td>
                  <td className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300">{row.product}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 rounded-full border border-blue-200/50 dark:border-blue-500/20">{row.stage}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${row.progress}%` }}></div>
                      </div>
                      <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400">{row.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 dark:text-slate-400 text-xs font-medium">{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProductionDashboard;

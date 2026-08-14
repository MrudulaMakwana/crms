import { 
  Building2, 
  CheckCircle2, 
  CreditCard, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Calendar as CalendarIcon,
  RefreshCw
} from 'lucide-react';

import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const SuperAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
     

      {/* Welcome Banner */}
      <div className="bg-[#0b0f19] dark:bg-black rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg border border-slate-800">
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">Welcome Back, Adrian</h2>
          <p className="text-slate-300 text-sm font-medium">14 New Companies Subscribed Today !!!</p>
        </div>
        <div className="flex items-center gap-3">
          <div onClick={() => navigate('/crm/companies')}>
            <Button variant="primary">Companies</Button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Companies</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">5468</h3>
            </div>
            <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-full text-red-500 border border-red-100 dark:border-red-500/20">
              <Building2 size={20} />
            </div>
          </div>
          <p className="text-xs font-medium text-emerald-500 flex items-center gap-1 mt-auto">
            <TrendingUp size={12} /> 5.82% <span className="text-slate-400 dark:text-slate-500 font-normal">from last month</span>
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Companies</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">4598</h3>
            </div>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-full text-emerald-500 border border-emerald-100 dark:border-emerald-500/20">
              <CheckCircle2 size={20} />
            </div>
          </div>
          <p className="text-xs font-medium text-red-500 flex items-center gap-1 mt-auto">
            <TrendingDown size={12} /> 12% <span className="text-slate-400 dark:text-slate-500 font-normal">from last month</span>
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Subscribers</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">5468</h3>
            </div>
            <div className="p-2 bg-amber-50 dark:bg-amber-500/10 rounded-full text-amber-500 border border-amber-100 dark:border-amber-500/20">
              <CreditCard size={20} />
            </div>
          </div>
          <p className="text-xs font-medium text-emerald-500 flex items-center gap-1 mt-auto">
            <TrendingUp size={12} /> 6% <span className="text-slate-400 dark:text-slate-500 font-normal">from last month</span>
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <div className="flex justify-between items-start mb-2">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Earnings</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">$89,878.58</h3>
            </div>
            <div className="p-2 bg-red-50 dark:bg-red-500/10 rounded-full text-red-500 border border-red-100 dark:border-red-500/20">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-xs font-medium text-red-500 flex items-center gap-1 mt-auto">
            <TrendingDown size={12} /> 16% <span className="text-slate-400 dark:text-slate-500 font-normal">from last month</span>
          </p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Companies Chart Mock */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white">Companies</h3>
            <select className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-300">
              <option>This Week</option>
            </select>
          </div>
          <div className="h-48 flex items-end justify-between px-2 gap-4">
            {/* Visual Bars Mock */}
            {[60, 40, 20, 90, 50, 60, 50].map((h, i) => (
              <div key={i} className="w-full relative h-full flex items-end justify-center group">
                <div className="absolute top-0 bottom-0 w-1.5 border-l-2 border-dashed border-slate-200 dark:border-slate-700/50 -z-10"></div>
                <div style={{height: `${h}%`}} className="w-3 bg-[#e85a3f] rounded-t-sm z-10 transition-all group-hover:bg-red-600"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between px-2 mt-3 text-xs text-slate-400 font-medium">
            <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
          </div>
          <div className="text-center mt-4 text-xs font-bold text-emerald-500 flex items-center justify-center gap-1">
            <TrendingUp size={14}/> 17.5% <span className="text-slate-400 font-normal">from last month</span>
          </div>
        </div>

        {/* Revenue Chart Mock */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-slate-900 dark:text-white">Revenue</h3>
            <select className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-300">
              <option>2025</option>
            </select>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">$89,878.58</h4>
            <p className="text-xs font-bold text-emerald-500 flex items-center gap-1">
              <TrendingUp size={12}/> 40% <span className="text-slate-400 font-normal">Increased from last year</span>
            </p>
          </div>
          <div className="h-32 flex items-end justify-between gap-1.5 relative">
            {/* Visual Bars Mock */}
            {[40, 30, 45, 80, 85, 90, 80, 80, 80, 85, 20, 80].map((h, i) => (
              <div key={i} className="w-full h-full flex flex-col justify-end bg-slate-100 dark:bg-slate-800/50 rounded-t-sm group">
                <div style={{height: `${h}%`}} className="w-full bg-[#d32f2f] rounded-t-sm transition-all group-hover:bg-red-700"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-400 uppercase font-medium">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>
      </div>

      {/* Top Plans Row */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-slate-900 dark:text-white">Top Plans</h3>
          <select className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs text-slate-600 dark:text-slate-300">
            <option>Last 30 Days</option>
          </select>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Mock Doughnut */}
          <div className="relative w-48 h-48 rounded-full border-[24px] border-blue-500 border-r-amber-500 border-b-red-600 border-l-blue-500 rotate-45 flex items-center justify-center">
             <div className="absolute inset-0 rounded-full border-[12px] border-white dark:border-[#111624] z-10 pointer-events-none scale-110"></div>
          </div>
          
          <div className="space-y-4 w-full md:w-1/3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> Basic
              </div>
              <span className="font-bold text-slate-900 dark:text-white">60%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span> Premium
              </div>
              <span className="font-bold text-slate-900 dark:text-white">20%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <span className="w-3 h-3 rounded-full bg-red-600"></span> Enterprise
              </div>
              <span className="font-bold text-slate-900 dark:text-white">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions List */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white">Recent Transactions</h3>
         
         <div onClick={() => navigate('/membership/transactions')}>
            <Button variant="primary">View All</Button>
          </div>
           
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
          {[
            { name: "NovaWave LLC", date: "14 Sep 2025", amount: "+$245", plan: "Basic (Monthly)", color: "bg-blue-900" },
            { name: "BlueSky", date: "20 Mar 2025", amount: "+$395", plan: "Enterprise (Yearly)", color: "bg-red-500" },
            { name: "Silver Hawk", date: "26 Mar 2025", amount: "+$345", plan: "Advanced (Monthly)", color: "bg-emerald-700" },
            { name: "Summit Peak", date: "10 Feb 2025", amount: "+$758", plan: "Enterprise (Monthly)", color: "bg-blue-500" },
            { name: "RiverStone Ltd", date: "10 Jan 2025", amount: "+$597", plan: "Premium (Yearly)", color: "bg-slate-900" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${item.color} text-white flex items-center justify-center font-bold text-xs`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{item.amount}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.plan}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Registered List */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white">Recently Registered</h3>
         
           <div onClick={() => navigate('/crm/companies')}>
            <Button variant="primary">View All</Button>
          </div>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
          {[
            { name: "Bright Bridge Grp", users: "150 Users", email: "bbg@example.com", plan: "Basic (Monthly)", iconC: "text-blue-500 bg-blue-50 border-blue-200" },
            { name: "CoastalStar Co.", users: "200 Users", email: "csc@example.com", plan: "Enterprise (Yearly)", iconC: "text-red-500 bg-red-50 border-red-200" },
            { name: "HarborView", users: "129 Users", email: "hv@example.com", plan: "Advanced (Monthly)", iconC: "text-slate-700 bg-slate-50 border-slate-200" },
            { name: "Golden Gate Ltd", users: "103 Users", email: "ggl@example.com", plan: "Enterprise (Monthly)", iconC: "text-blue-400 bg-blue-50 border-blue-200" },
            { name: "Redwood Inc", users: "109 Users", email: "rw@example.com", plan: "Premium (Yearly)", iconC: "text-white bg-slate-900 border-slate-700" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full border ${item.iconC} dark:bg-opacity-10 dark:border-opacity-20 flex items-center justify-center font-bold text-xs`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.plan}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">{item.users}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{item.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SuperAdminDashboard;

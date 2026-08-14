import { 
  Building2, 
  Download, 
  RefreshCw,
  Calendar as CalendarIcon,
  ShoppingBag,
  Handshake,
  Filter,
  Users
} from 'lucide-react';

import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
    

      {/* Top Row - Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Revenue Analytics (2/3 width) */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-[#ff3b30] pl-2">Revenue Analytics</h3>
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-md">
              <button className="px-3 py-1 text-xs font-bold bg-[#ff3b30] text-white rounded shadow-sm">Weekly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900">Monthly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900">Yearly</button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start mb-4 gap-4">
            <div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white">495K <span className="text-sm font-medium text-slate-500">Revenue with Sales (USD)</span></h4>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="w-2 h-2 rounded-full bg-[#ff3b30]"></div> Revenue
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 border border-slate-400"></div> Sales
              </div>
            </div>
          </div>
          
          {/* Bar Chart Mock */}
          <div className="h-48 flex items-end justify-between gap-2 relative">
            <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            </div>
            {/* Y axis labels mock */}
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 -ml-8 py-1">
              <span>$60k</span><span>$50k</span><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0k</span>
            </div>
            
            {/* Bars */}
            {[35, 20, 50, 50, 58, 40, 40, 30, 10, 50, 30, 28].map((h, i) => (
              <div key={i} className="w-full flex justify-center group h-full items-end">
                <div style={{height: `${h}%`}} className="w-full max-w-[24px] bg-[#ff3b30] rounded-t-sm transition-all group-hover:bg-red-700"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Sources (1/3 width) */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-amber-500 pl-2">Traffic Sources</h3>
            <button className="p-1 border border-slate-200 dark:border-slate-700 rounded text-slate-500 hover:bg-slate-50">
              <RefreshCw size={14} />
            </button>
          </div>
          
          <div className="flex justify-center mb-6">
            {/* Mock Doughnut */}
            <div className="relative w-40 h-40 rounded-full border-[20px] border-[#34c759] border-l-[#007aff] border-t-amber-500 border-r-purple-600 rotate-45 flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-[8px] border-white dark:border-[#111624] z-10 pointer-events-none scale-110"></div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#34c759]"></span> Organic Search
              </div>
              <span className="font-bold text-slate-900 dark:text-white">659</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#007aff]"></span> Direct Traffic
              </div>
              <span className="font-bold text-slate-900 dark:text-white">245</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Referral Traffic
              </div>
              <span className="font-bold text-slate-900 dark:text-white">145</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-purple-600"></span> Social Media
              </div>
              <span className="font-bold text-slate-900 dark:text-white">84</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Revenue</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">$15,44,540</h3>
            </div>
            <div className="p-2 bg-[#ff3b30] rounded-full text-white shadow-sm shadow-red-500/30">
              <ShoppingBag size={18} />
            </div>
          </div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">+2.5%</span> From Last Week
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Active Deals</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">147</h3>
            </div>
            <div className="p-2 bg-indigo-500 rounded-full text-white shadow-sm shadow-indigo-500/30">
              <Handshake size={18} />
            </div>
          </div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400 px-1.5 py-0.5 rounded text-[10px] font-bold">-21.15%</span> From Last Week
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Conversion Rate</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">32.8%</h3>
            </div>
            <div className="p-2 bg-pink-500 rounded-full text-white shadow-sm shadow-pink-500/30">
              <Filter size={18} />
            </div>
          </div>
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold">+15.5%</span> From Last Week
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex gap-2 items-end mb-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">4569</h3>
                <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold mb-1">+2.5%</span>
              </div>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Contacts</p>
            </div>
            {/* Sparkline Mock */}
            <div className="flex items-end gap-0.5 h-8">
              {[30,50,40,70,80,40,90,60,80,100].map((h, i) => (
                <div key={i} style={{height: `${h}%`}} className="w-1.5 bg-pink-200 dark:bg-pink-900/50 rounded-t-sm"></div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-auto pt-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 border border-white dark:border-[#0b0f19]"></div>
              <div className="w-6 h-6 rounded-full bg-red-500 border border-white dark:border-[#0b0f19]"></div>
              <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 border border-white dark:border-[#0b0f19] flex items-center justify-center text-[9px] font-bold">+4</div>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">From Last Week</p>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Top Deals List */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col shadow-sm">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-[#ff3b30] pl-2 text-sm">Top Deals</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50">
            {[
              { name: "NovaWave LLC", country: "Germany", amount: "$19,94,938", color: "bg-blue-900" },
              { name: "Silver Hawk", country: "Australia", amount: "$15,44,540", color: "bg-emerald-700" },
              { name: "Summit LLC", country: "Italy", amount: "$10,36,390", color: "bg-blue-500" },
              { name: "Bluesky Industries", country: "Canada", amount: "$10,15,280", color: "bg-[#ff3b30]" },
              { name: "HealthTech Innovations", country: "UK", amount: "$10,14,112", color: "bg-slate-900" },
            ].map((deal, i) => (
              <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${deal.color} text-white flex items-center justify-center font-bold text-xs`}>
                    {deal.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-1">{deal.name}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-none">{deal.country}</p>
                  </div>
                </div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">{deal.amount}</div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 mt-auto" onClick={() => navigate('/crm/deals')}>         
            <Button variant="primary" className='w-full'>View All</Button>
          </div>
        </div>

        {/* Middle Stats Stack */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Pipeline Statistics */}
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
             <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-[#ff3b30] pl-2 text-sm">Pipeline Statistics</h3>
              <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
                <option>Weekly</option>
              </select>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-3">
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Lead</p>
                <p className="font-bold text-slate-900 dark:text-white">$20010</p>
                <p className="text-[10px] text-slate-400">80 Deals</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Proposal</p>
                <p className="font-bold text-slate-900 dark:text-white">$17210</p>
                <p className="text-[10px] text-slate-400">23 Deals</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Sales</p>
                <p className="font-bold text-slate-900 dark:text-white">$9210</p>
                <p className="text-[10px] text-slate-400">12 Deals</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">Won</p>
                <p className="font-bold text-slate-900 dark:text-white">$8210</p>
                <p className="text-[10px] text-slate-400">21 Deals</p>
              </div>
            </div>
            
            {/* Visual Bar Blocks */}
            <div className="flex gap-2 h-10 mt-4">
              <div className="w-[35%] bg-[#ff3b30] rounded-sm"></div>
              <div className="w-[25%] bg-amber-500 rounded-sm"></div>
              <div className="w-[20%] bg-purple-600 rounded-sm"></div>
              <div className="w-[20%] bg-emerald-500 rounded-sm"></div>
            </div>
          </div>
          
          {/* Deals Overview */}
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-[#ff3b30] pl-2 text-sm">Deals Overview</h3>
            </div>
            
            <div className="flex items-end gap-2 mb-4">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">2656</h2>
              <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-1.5 py-0.5 rounded text-[10px] font-bold mb-1">+12.5%</span>
              <span className="text-xs text-slate-500 mb-1">compared to last week</span>
            </div>
            
            {/* Segmented Progress */}
            <div className="w-full h-2 rounded-full flex overflow-hidden mb-6">
              <div className="w-[45%] bg-[#00897b]"></div>
              <div className="w-[30%] bg-amber-500"></div>
              <div className="w-[15%] bg-purple-600"></div>
              <div className="w-[10%] bg-[#ff3b30]"></div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00897b]"></div> Successful Deals
                </div>
                <span className="font-medium text-slate-900 dark:text-white">1000 Deals</span>
              </div>
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Pending Deals
                </div>
                <span className="font-medium text-slate-900 dark:text-white">1056 Deals</span>
              </div>
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Rejected Deals
                </div>
                <span className="font-medium text-slate-900 dark:text-white">500 Deals</span>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex justify-between items-center">
              <div>
                <p className="text-[11px] text-slate-500 font-medium">Deals Won</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">689</p>
              </div>
              <div className="flex -space-x-2">
                 {[1,2,3,4,5].map(i => (
                   <div key={i} className="w-6 h-6 rounded-full bg-slate-300 dark:bg-slate-700 border-2 border-white dark:border-[#0b0f19]"></div>
                 ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white border-l-4 border-[#ff3b30] pl-2 text-sm">Recent Leads</h3>
           <div onClick={() => navigate('/crm/leads')}>
            <Button variant="primary">View All</Button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[11px] uppercase">
              <tr>
                <th className="p-4 w-[20%]">Lead Name</th>
                <th className="p-4">Company</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Location</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-xs">
              {[
                { name: "Schumm", company: "NovaWave LLC", email: "darleeo@example.com", phone: "+1 12445-47878", location: "Newyork, United States", status: "Contacted", sColor: "bg-amber-500" },
                { name: "Adams", company: "Silver Hawk", email: "vaughan12@example.com", phone: "+1 17392-27846", location: "London, United Kingdom", status: "Not Contacted", sColor: "bg-blue-500" },
                { name: "Gutkowsi", company: "Summit LLC", email: "rachel@example.com", phone: "+1 17839-93617", location: "Dallas, United States", status: "Closed", sColor: "bg-emerald-500" },
                { name: "Collins", company: "Bluesky Industries", email: "collins@example.com", phone: "+1 54321-98765", location: "Toronto, Canada", status: "Contacted", sColor: "bg-amber-500" },
                { name: "Wizosk", company: "HealthTech Innovations", email: "wizosk@example.com", phone: "+1 98765-12345", location: "Berlin, Germany", status: "Not Contacted", sColor: "bg-blue-500" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600">{row.name.substring(0, 2).toUpperCase()}</div>
                    {row.name}
                  </td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{row.company}</td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{row.email}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{row.phone}</td>
                  <td className="p-4 text-slate-600 dark:text-slate-300">{row.location}</td>
                  <td className="p-4 text-right">
                    <span className={`inline-block px-2 py-1 text-[10px] font-bold text-white rounded shadow-sm ${row.sColor}`}>
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

export default AdminDashboard;

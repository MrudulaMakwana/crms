import { useState } from 'react';
import { 
  Users, BarChart3, TrendingUp, Target, MapPin, 
  Briefcase, CheckSquare, CalendarDays, DollarSign,
  UserCheck, AlertTriangle, Building, Phone
} from 'lucide-react';

// --- MOCK DATA FROM USER PROMPT ---
const superAdminDash = {
  total_employees: 5, active_employees: 5, today_attendance: 0, online_employees: 0,
  total_dealers: 2, total_retailers: 3, total_sales_this_month: "40060.00",
  pending_leaves: 0, unread_notifications: 1
};

const performanceReport = [
  { employee_name: "Dharmik Savaliya", territory: "North Zone", total_sales: "0.00", total_distance: "0.00", attendance_percentage: 0.0, target_achievement_percentage: 0.0 },
  { employee_name: "Param Changani", territory: "East Ahmedabad", total_sales: "0.00", total_distance: "0.00", attendance_percentage: 0.0, target_achievement_percentage: 0.0 },
  { employee_name: "Rahul New Sharma", territory: "East Ahmedabad", total_sales: "0.00", total_distance: "1.50", attendance_percentage: 3.23, target_achievement_percentage: 0.0 }
];

const compareEmployees = {
  employee_a: { employee_name: "Rahul New Sharma", total_sales: "0.00", attendance_percentage: 3.23, total_distance: "1.50", target_achievement_percentage: 0.0 },
  employee_b: { employee_name: "Param Changani", total_sales: "0.00", attendance_percentage: 0.0, total_distance: "0.00", target_achievement_percentage: 0.0 }
};

const weakAreas = [
  { territory: "North Zone", total_sales: "0.00", employee_count: 1, recommendations: ["No visits recorded in this area. Ensure field coverage is planned."] },
  { territory: "East Ahmedabad", total_sales: "0.00", employee_count: 2, recommendations: ["No visits recorded in this area. Ensure field coverage is planned."] }
];

const leads = [
  { lead_name: "Henna Lee", company_name: "JYP Corp", lead_status: "Won", created_date: "2026-08-06", lead_owner: "Shreya@crm.com" },
  { lead_name: "John Doe", company_name: "Acme Corp", lead_status: "Won", created_date: "2026-08-06", lead_owner: "demo@crm.local" },
  { lead_name: "Ravi Kumar", company_name: "Tech Solutions", lead_status: "Contacted", created_date: "2026-08-05", lead_owner: "rahul@crm.com" },
];

const deals = [
  { deal_name: "ABC Corp Deal", stage: "Proposal", deal_value: "50000.00", expected_close_date: "2026-09-30", status: "In Progress" },
  { deal_name: "Enterprise Upgrade", stage: "Qualification", deal_value: "55000.00", expected_close_date: "2026-01-01", status: "Open" }
];

const contacts = [
  { name: "Rahul Sharma", phone: "9876543210", location: "Ahmedabad, Gujarat", status: "Active" },
  { name: "Ravi Kumar", phone: "9876543211", location: "Mumbai, MH", status: "Active" }
];

const companies = [
  { name: "Aryan Corp", email: "company@aryan.com", contact: "9876543210", status: "Active" },
  { name: "ABC Corp", email: "info@abccorp.com", contact: "9999999999", status: "Active" }
];

const revenue = {
  period: "2026-08", total_revenue: "34000.00", new_revenue: "34000.00", mrr: "34000.00", arr: "408000.00"
};

const projects = [
  { name: "ERP Development", client: "John", priority: "Medium", status: "Active" },
  { name: "CRM Development", client: "John", priority: "Medium", status: "completed" }
];

const tasks = [
  { title: "Setup API", category: "Call", status: "in_progress", priority: "High", due_date: "2026-08-15" },
  { title: "Contact Lead", category: "Call", status: "pending", priority: "High", due_date: "2026-08-15" }
];

const attendance = [
  { employee_name: "Rahul New Sharma", present_days: 1, absent_days: 0, attendance_rate: 100.0 }
];

const leaves = [
  { leave_type: "Sick Leave", allocated: 16, used: 2, remaining: 14, utilization: 12.5 },
  { leave_type: "Casual Leave", allocated: 15, used: 0, remaining: 15, utilization: 0.0 }
];

const customerAnalytics = {
  total_customers: 7, new_this_month: 7, avg_ltv: 5722.86,
  segments: [
    { segment: "Unknown", customers: 4, revenue: 40060.0 },
    { segment: "India", customers: 2, revenue: 0.0 }
  ]
};
// ------------------------------------

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'hr', label: 'HR & Performance' },
    { id: 'crm', label: 'CRM & Sales' },
    { id: 'projects', label: 'Projects & Tasks' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Reports and Analytics</h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-100 dark:bg-[#0b0f19] p-1 rounded-lg w-full max-w-2xl border border-slate-200 dark:border-slate-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${
              activeTab === tab.id
                ? 'bg-white dark:bg-[#111624] text-blue-600 dark:text-blue-500 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-6">
        
        {/* ===================== OVERVIEW TAB ===================== */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Super Admin Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Total Employees</p>
                <div className="flex items-center gap-3 mt-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{superAdminDash.total_employees}</h3>
                  <span className="text-xs font-medium bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 px-2 py-0.5 rounded">{superAdminDash.active_employees} Active</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Total Sales (This Month)</p>
                <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-500 mt-1">${superAdminDash.total_sales_this_month}</h3>
              </div>
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Network</p>
                <div className="flex items-center gap-4 mt-1 text-sm font-medium">
                  <span className="text-slate-700 dark:text-slate-300">{superAdminDash.total_dealers} Dealers</span>
                  <span className="text-slate-700 dark:text-slate-300">{superAdminDash.total_retailers} Retailers</span>
                </div>
              </div>
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Alerts</p>
                <div className="flex flex-col gap-1 mt-1 text-sm">
                  <span className="text-red-500">{superAdminDash.pending_leaves} Pending Leaves</span>
                  <span className="text-amber-500">{superAdminDash.unread_notifications} Unread Notifications</span>
                </div>
              </div>
            </div>

            {/* Customer Analytics */}
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Customer Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Total Customers</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{customerAnalytics.total_customers}</h3>
                <p className="text-xs text-emerald-500 mt-1">+{customerAnalytics.new_this_month} this month</p>
              </div>
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Avg LTV</p>
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">${customerAnalytics.avg_ltv}</h3>
              </div>
              <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <p className="text-sm text-slate-500 dark:text-slate-400">Top Segment</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{customerAnalytics.segments[0].segment}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">${customerAnalytics.segments[0].revenue} Revenue</p>
              </div>
            </div>
          </div>
        )}

        {/* ===================== HR & PERFORMANCE TAB ===================== */}
        {activeTab === 'hr' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Performance Report */}
            <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200">Employee Performance Report</h3></div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                    <tr><th className="p-3 font-medium">Employee</th><th className="p-3 font-medium">Territory</th><th className="p-3 font-medium">Sales</th><th className="p-3 font-medium">Distance</th><th className="p-3 font-medium">Attendance %</th></tr>
                  </thead>
                  <tbody>
                    {performanceReport.map((e, i) => (
                      <tr key={i} className="border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                        <td className="p-3 font-bold text-slate-900 dark:text-white">{e.employee_name}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-300">{e.territory}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-300">${e.total_sales}</td>
                        <td className="p-3 text-slate-600 dark:text-slate-300">{e.total_distance} km</td>
                        <td className="p-3"><span className="px-2 py-1 bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 rounded-md text-xs font-bold">{e.attendance_percentage}%</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Compare Employees */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2"><Users size={16}/> Compare Employees</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-100 dark:border-slate-700/50">
                    <p className="font-bold text-blue-600 dark:text-blue-400 mb-2">{compareEmployees.employee_a.employee_name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Sales: ${compareEmployees.employee_a.total_sales}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Att: {compareEmployees.employee_a.attendance_percentage}%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Dist: {compareEmployees.employee_a.total_distance} km</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/30 rounded-lg border border-slate-100 dark:border-slate-700/50">
                    <p className="font-bold text-purple-600 dark:text-purple-400 mb-2">{compareEmployees.employee_b.employee_name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Sales: ${compareEmployees.employee_b.total_sales}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Att: {compareEmployees.employee_b.attendance_percentage}%</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Dist: {compareEmployees.employee_b.total_distance} km</p>
                  </div>
                </div>
              </div>

              {/* Weak Areas */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2"><MapPin size={16}/> Weak Areas</h3>
                <div className="space-y-3">
                  {weakAreas.map((w, i) => (
                    <div key={i} className="flex flex-col p-3 border border-red-100 dark:border-red-900/30 bg-red-50/50 dark:bg-red-500/5 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-red-700 dark:text-red-400">{w.territory}</span>
                        <span className="text-xs text-red-500">Sales: ${w.total_sales}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">"{w.recommendations[0]}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Attendance & Leave side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200">Attendance Report</h3></div>
                <div className="p-4 space-y-3">
                  {attendance.map((a, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                      <span className="font-medium text-slate-900 dark:text-white">{a.employee_name}</span>
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-sm bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 rounded">{a.attendance_rate}% Rate</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200">Leave Report</h3></div>
                <div className="p-4 space-y-3">
                  {leaves.map((l, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-sm">
                      <span className="font-medium text-slate-900 dark:text-white">{l.leave_type}</span>
                      <span className="text-slate-600 dark:text-slate-400">{l.used} used / {l.allocated} total</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================== CRM & SALES TAB ===================== */}
        {activeTab === 'crm' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Revenue Report */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-md">
              <h3 className="font-bold text-blue-100 flex items-center gap-2 mb-4"><DollarSign size={18}/> Revenue Overview ({revenue.period})</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div><p className="text-blue-200 text-sm">Total Revenue</p><p className="text-2xl font-bold">${revenue.total_revenue}</p></div>
                <div><p className="text-blue-200 text-sm">New Revenue</p><p className="text-2xl font-bold">${revenue.new_revenue}</p></div>
                <div><p className="text-blue-200 text-sm">MRR</p><p className="text-2xl font-bold">${revenue.mrr}</p></div>
                <div><p className="text-blue-200 text-sm">ARR</p><p className="text-2xl font-bold">${revenue.arr}</p></div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Deals */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200">Deal Report</h3></div>
                <div className="p-4 space-y-3">
                  {deals.map((d, i) => (
                    <div key={i} className="flex flex-col p-3 border border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-slate-900 dark:text-white">{d.deal_name}</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">${d.deal_value}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
                        <span>Stage: {d.stage}</span>
                        <span>Close: {d.expected_close_date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leads */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200">Lead Report</h3></div>
                <div className="p-4 space-y-3">
                  {leads.map((l, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white">{l.lead_name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{l.company_name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${l.lead_status === 'Won' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400'}`}>
                        {l.lead_status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Contacts */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><Phone size={16}/> Contacts</h3></div>
                <div className="p-4 space-y-3">
                  {contacts.map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg text-sm">
                      <span className="font-medium text-slate-900 dark:text-white">{c.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{c.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Companies */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><Building size={16}/> Companies</h3></div>
                <div className="p-4 space-y-3">
                  {companies.map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/30 rounded-lg text-sm">
                      <span className="font-medium text-slate-900 dark:text-white">{c.name}</span>
                      <span className="text-slate-600 dark:text-slate-400">{c.contact}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ===================== PROJECTS & TASKS TAB ===================== */}
        {activeTab === 'projects' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Projects */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><Briefcase size={16}/> Project Report</h3></div>
                <div className="p-4 space-y-3">
                  {projects.map((p, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white">{p.name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Priority: {p.priority}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${p.status === 'Active' ? 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'}`}>
                        {p.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800"><h3 className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2"><CheckSquare size={16}/> Task Report</h3></div>
                <div className="p-4 space-y-3">
                  {tasks.map((t, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/30 rounded-lg">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 dark:text-white">{t.title}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">Due: {t.due_date}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-bold ${t.status === 'in_progress' ? 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400' : 'bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300'}`}>
                        {t.status.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Reports;

import { useState } from 'react';
import { 
  Settings as SettingsIcon,
  Building2, 
  ShieldCheck, 
  Palette, 
  Mail, 
  Database,
  CheckCircle2,
  XCircle,
  Sun,
  Moon,
  Download
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('company');
  const { theme, toggleTheme } = useAuthStore();

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'roles', label: 'Roles & Permissions', icon: ShieldCheck },
    { id: 'theme', label: 'Theme & UI', icon: Palette },
    { id: 'email', label: 'Email Settings', icon: Mail },
    { id: 'backup', label: 'Backup & Security', icon: Database },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <SettingsIcon size={32} className="text-blue-600 dark:text-blue-500" />
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">System Settings</h1>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Configure company details, role permissions, theme preferences, and email services.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        
        {/* Left Sidebar Navigation */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-sm flex flex-col gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden min-h-[400px]">
            
            {/* COMPANY INFO TAB */}
            {activeTab === 'company' && (
              <div className="p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="text-blue-600 dark:text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Company Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Name *</label>
                    <input type="text" defaultValue="Apex CRM Solutions" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Corporate Email</label>
                    <input type="email" defaultValue="contact@apexcrm.com" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                    <input type="text" defaultValue="+1 (555) 019-2834" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Currency Symbol</label>
                      <input type="text" defaultValue="$" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Timezone</label>
                      <input type="text" defaultValue="UTC" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Headquarters Address</label>
                    <textarea defaultValue="100 Technology Way" rows={3} className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 resize-none"></textarea>
                  </div>
                  
                  <div className="space-y-1.5 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Company Logo</label>
                      <div className="flex text-sm">
                        <label className="cursor-pointer bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 border-r-0 rounded-l-md px-3 py-2 text-slate-700 dark:text-slate-300 font-medium">Choose File</label>
                        <div className="flex-1 border border-slate-200 dark:border-slate-700 rounded-r-md px-3 py-2 bg-white dark:bg-[#0b0f19] text-slate-500 dark:text-slate-400 truncate">
                          No file chosen
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Current: http://127.0.0.1:8000/media/company/logo.png</p>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Logo Preview</label>
                      <div className="w-8 h-8 rounded border border-slate-200 dark:border-slate-700 flex items-center justify-center bg-white">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm shadow-md transition-colors">
                    Save Company Info
                  </button>
                </div>
              </div>
            )}

            {/* ROLES & PERMISSIONS TAB */}
            {activeTab === 'roles' && (
              <div className="p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck className="text-blue-600 dark:text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Role-Based Permissions Matrix</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30">
                      <tr>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Permission / Module</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Admin</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Manager</th>
                        <th className="p-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">Employee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                      
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Executive Dashboard KPI & Analytics</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                      </tr>
                      
                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Customer & Lead CRUD Operations</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Project Creation & Budget Control</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><XCircle className="mx-auto text-slate-400 dark:text-slate-600" size={20}/></td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Task Kanban Board Drag & Drop</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Employee Account Creation</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><XCircle className="mx-auto text-slate-400 dark:text-slate-600" size={20}/></td>
                      </tr>

                      <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                        <td className="p-4 text-sm font-medium text-slate-700 dark:text-slate-300">Company System Settings Update</td>
                        <td className="p-4 text-center"><CheckCircle2 className="mx-auto text-emerald-500" size={20}/></td>
                        <td className="p-4 text-center"><XCircle className="mx-auto text-slate-400 dark:text-slate-600" size={20}/></td>
                        <td className="p-4 text-center"><XCircle className="mx-auto text-slate-400 dark:text-slate-600" size={20}/></td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* THEME & UI TAB */}
            {activeTab === 'theme' && (
              <div className="p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Palette className="text-blue-600 dark:text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Theme & UI Preference</h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Select your default theme mode. You can also toggle mode directly anytime from the top header switcher.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Light Mode Card */}
                  <button 
                    onClick={() => theme !== 'light' && toggleTheme()}
                    className={`flex flex-col items-start p-5 rounded-xl border-2 text-left transition-all ${
                      theme === 'light' 
                        ? 'border-blue-500 bg-blue-50/30' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                  >
                    <Sun className="text-amber-500 mb-3" size={28} />
                    <h3 className="font-bold text-blue-600 dark:text-blue-400 text-lg mb-1">Light Mode</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                      Crisp slate background with indigo & violet accents
                    </p>
                  </button>

                  {/* Dark Mode Card */}
                  <button 
                    onClick={() => theme !== 'dark' && toggleTheme()}
                    className={`flex flex-col items-start p-5 rounded-xl border-2 text-left transition-all ${
                      theme === 'dark' 
                        ? 'border-blue-500 bg-blue-500/10' 
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                  >
                    <Moon className="text-cyan-400 mb-3" size={28} />
                    <h3 className="font-bold text-blue-600 dark:text-blue-400 text-lg mb-1">Dark Mode</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug">
                      Deep slate 900 background with glowing highlights
                    </p>
                  </button>
                </div>
              </div>
            )}

            {/* EMAIL SETTINGS TAB */}
            {activeTab === 'email' && (
              <div className="p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <Mail className="text-blue-600 dark:text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">SMTP Email Gateway</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">SMTP Host</label>
                    <input type="text" defaultValue="smtp.apexcrm.io" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">SMTP Port</label>
                    <input type="text" defaultValue="587" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Sender Email</label>
                    <input type="email" defaultValue="notifications@apexcrm.io" className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Encryption</label>
                    <select className="w-full px-3 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-md text-sm text-slate-900 dark:text-white focus:ring-1 focus:ring-blue-500 appearance-none">
                      <option>TLS</option>
                      <option>SSL</option>
                      <option>None</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm shadow-md transition-colors">
                    Save Gateway
                  </button>
                </div>
              </div>
            )}

            {/* BACKUP & SECURITY TAB */}
            {activeTab === 'backup' && (
              <div className="p-6 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Database className="text-blue-600 dark:text-blue-500" size={20} />
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Database Backup & Maintenance</h2>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Create instantaneous snapshots of SQLite/PostgreSQL tables and documents.
                </p>

                <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-full text-sm shadow-md transition-colors">
                  <Download size={16} /> Generate Instant Backup Snapshot
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Settings;

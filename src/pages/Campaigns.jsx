import { useState } from 'react';
import { 
  Download, 
  Plus, 
  MoreVertical
} from 'lucide-react';

import Button from '../components/Button';
import AddCampaignModal from '../components/AddCampaignModal';

const Campaigns = () => {
  const [activeTab, setActiveTab] = useState('Active');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const campaigns = [
    { name: "Summer Sale 2026", type: "Promotional", channel: "Email", budget: "$15,000", spent: "$8,200", start: "11 Jun 2026", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Product Launch Q3", type: "Brand Awareness", channel: "Social Media", budget: "$25,000", spent: "$12,400", start: "05 Jun 2026", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Customer Retention", type: "Email Drip", channel: "Email", budget: "$8,000", spent: "$5,600", start: "01 May 2026", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Referral Program", type: "Referral", channel: "Multi-channel", budget: "$12,000", spent: "$3,800", start: "15 Apr 2026", status: "Active", statC: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { name: "Spring Promotion", type: "Promotional", channel: "Google Ads", budget: "$18,000", spent: "$17,500", start: "01 Mar 2026", status: "Ending Soon", statC: "text-blue-500 bg-blue-50 border-blue-200" },
  ];

  const tabs = ['Active', 'Completed', 'Archived'];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Campaigns</h1>
        <div className="flex items-center gap-2">
         
          <Button 
            onClick={() => setIsAddModalOpen(true)}
            variant="primary"
          >
            <Plus size={16} /> Add Campaign
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 dark:border-slate-800">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-[#00897b] text-slate-900 dark:text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-white dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
              <tr>
                <th className="p-4">Campaign</th>
                <th className="p-4">Type</th>
                <th className="p-4">Channel</th>
                <th className="p-4">Budget</th>
                <th className="p-4">Spent</th>
                <th className="p-4">Start</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {campaigns.map((c, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{c.name}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.type}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.channel}</td>
                  <td className="p-4 text-slate-900 dark:text-white font-bold">{c.budget}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.spent}</td>
                  <td className="p-4 text-slate-500 font-medium">{c.start}</td>
                  <td className="p-4">
                    <span className={`inline-block px-2.5 py-1 text-[10px] font-bold rounded border ${c.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Button variant="ghost" size="icon"><MoreVertical size={16} /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center pt-8">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Dreams ERP. All Rights Reserved</p>
      </div>

      <AddCampaignModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Campaigns;

import { useState } from 'react';
import { Plus } from 'lucide-react';
import AddAddonModal from '../components/AddAddonModal';

const MembershipAddons = () => {
  const [addons, setAddons] = useState([
    { id: 1, name: "Extra Storage", desc: "Add 100 GB of secure cloud storage to any plan.", price: "$5", subscribers: "652", active: true },
    { id: 2, name: "Premium Support", desc: "Get 24/7 priority assistance from our Export team.", price: "$15", subscribers: "348", active: true },
    { id: 3, name: "Advanced Analytics", desc: "Unlock detailed insights and reporting on your usage.", price: "$10", subscribers: "215", active: true },
    { id: 4, name: "Custom Branding", desc: "Personalize your interface with your brand logo and colors.", price: "$20", subscribers: "183", active: true },
    { id: 5, name: "Premium Support", desc: "Get 24/7 priority support from our Export team.", price: "$15", subscribers: "300", active: true },
    { id: 6, name: "Data Analytics", desc: "Unlock advanced analytics to track your usage and growth.", price: "$10", subscribers: "450", active: true },
    { id: 7, name: "Team Collaboration", desc: "Enhance teamwork with shared folders and project management.", price: "$20", subscribers: "200", active: true },
    { id: 8, name: "Priority Support", desc: "Get 24/7 assistance from our Export support staff.", price: "$25", subscribers: "300", active: true },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const toggleAddon = (id) => {
    setAddons(addons.map(addon => addon.id === id ? { ...addon, active: !addon.active } : addon));
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Membership Addons</h1>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md text-sm transition-colors shadow-sm"
        >
          <Plus size={16} /> Add New
        </button>
      </div>

      {/* Addons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {addons.map((addon) => (
          <div key={addon.id} className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            <h3 className="font-bold text-slate-900 dark:text-white text-[15px] mb-2">{addon.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed flex-1">
              {addon.desc}
            </p>
            
            <div className="flex items-center justify-between mb-6">
              <div className="font-medium">
                <span className="text-lg font-bold text-slate-900 dark:text-white">{addon.price}</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm"> / month</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => toggleAddon(addon.id)}
                  className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                    addon.active ? 'bg-[#00897b]' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    addon.active ? 'translate-x-4' : 'translate-x-1'
                  }`} />
                </button>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{addon.active ? 'Active' : 'Inactive'}</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/50 flex justify-between items-center text-sm">
              <span className="text-slate-500 dark:text-slate-400">Subscribers</span>
              <span className="font-bold text-slate-900 dark:text-white text-base">{addon.subscribers}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-slate-400 dark:text-slate-500 text-xs">2026 © Apex CRM. All Rights Reserved</p>
      </div>
      
      <AddAddonModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default MembershipAddons;

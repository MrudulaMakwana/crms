import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  FileText,
  DollarSign,
  Download,
  RefreshCcw,
  LayoutGrid,
  List,
  RefreshCw,
  PieChart,
  Globe,
  CircleDot
} from 'lucide-react';
import { useState } from 'react';

import AddLeadModal from '../components/AddLeadModal';

const mockLeadStages = [
  {
    id: 'stage-1',
    title: 'Contacted',
    leads: 45,
    value: '$15,44,540',
    color: 'bg-amber-500',
    borderColor: 'border-t-amber-500',
    deals: [
      {
        id: 1,
        initials: 'SM',
        initialsColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
        name: 'Schumm',
        value: '$03,50,000',
        email: 'darleeo@example.com',
        phone: '+1 12445-47878',
        location: 'Newyork, United States',
        bottomIcon: RefreshCw
      },
      {
        id: 2,
        initials: 'CS',
        initialsColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
        name: 'Collins',
        value: '$02,10,000',
        email: 'robertson@example.com',
        phone: '+1 13987-90231',
        location: 'Austin, United States',
        bottomIcon: Globe
      },
      {
        id: 3,
        initials: 'KI',
        initialsColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400',
        name: 'Konopelski',
        value: '$02,18,000',
        email: 'sharon@example.com',
        phone: '+1 17932-04278',
        location: 'Atlanta, United States',
        bottomIcon: CircleDot
      }
    ]
  },
  {
    id: 'stage-2',
    title: 'Not Contacted',
    leads: 45,
    value: '$15,44,540',
    color: 'bg-blue-500',
    borderColor: 'border-t-blue-500',
    deals: [
      {
        id: 4,
        initials: 'AS',
        initialsColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
        name: 'Adams',
        value: '$02,45,000',
        email: 'vaughan12@example.com',
        phone: '+1 17392-27846',
        location: 'London, United Kingdom',
        bottomIcon: RefreshCw
      },
      {
        id: 5,
        initials: 'WK',
        initialsColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
        name: 'Wizosk',
        value: '$01,17,000',
        email: 'caroltho3@example.com',
        phone: '+1 78982-09163',
        location: 'Bristol, United Kingdom',
        bottomIcon: PieChart
      },
      {
        id: 6,
        initials: 'HR',
        initialsColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
        name: 'Heller',
        value: '$02,12,000',
        email: 'dawnmercha@example.com',
        phone: '+1 27691-89246',
        location: 'San Francisco, United States',
        bottomIcon: CircleDot
      }
    ]
  },
  {
    id: 'stage-3',
    title: 'Closed',
    leads: 45,
    value: '$15,44,540',
    color: 'bg-green-500',
    borderColor: 'border-t-green-500',
    deals: [
      {
        id: 7,
        initials: 'GI',
        initialsColor: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400',
        name: 'Gutkowsi',
        value: '$01,84,043',
        email: 'rachel@example.com',
        phone: '+1 17839-93617',
        location: 'Dallas, United States',
        bottomIcon: PieChart
      },
      {
        id: 8,
        initials: 'WR',
        initialsColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400',
        name: 'Walter',
        value: '$09,35,189',
        email: 'jonelle@example.com',
        phone: '+1 16739-47193',
        location: 'Leicester, United Kingdom',
        bottomIcon: Globe
      },
      {
        id: 9,
        initials: 'HN',
        initialsColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
        name: 'Hansen',
        value: '$04,27,940',
        email: 'jonathan@example.com',
        phone: '+1 18390-37153',
        location: 'Norwich, United Kingdom',
        bottomIcon: CircleDot
      }
    ]
  },
  {
    id: 'stage-4',
    title: 'Lost',
    leads: 15,
    value: '$12,50,000',
    color: 'bg-red-500',
    borderColor: 'border-t-red-500',
    deals: [
      {
        id: 10,
        initials: 'SE',
        initialsColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
        name: 'Senger',
        value: '$04,10,000',
        email: 'sidney@example.com',
        phone: '+1 11739-93617',
        location: 'Manchester, United Kingdom',
        bottomIcon: RefreshCw
      }
    ]
  }
];

const LeadCard = ({ deal, borderColor }) => {
  const BottomIcon = deal.bottomIcon;
  return (
    <div className={`bg-white dark:bg-[#111624] border-x border-b border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col mb-4 border-t-[3px] ${borderColor}`}>
      <div className="p-4 flex-1">
        
        {/* Header: Initials, Name */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${deal.initialsColor}`}>
            {deal.initials}
          </div>
          <div className="pt-2">
            <h3 className="font-semibold text-slate-900 dark:text-white text-[14px] leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {deal.name}
            </h3>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2.5 mb-2">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <DollarSign size={14} className="text-slate-400 shrink-0" />
            <span className="font-medium text-slate-700 dark:text-slate-300">{deal.value}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Mail size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">{deal.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Phone size={14} className="text-slate-400 shrink-0" />
            <span>{deal.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <MapPin size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">{deal.location}</span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-4 pt-2 flex items-center justify-between bg-white dark:bg-[#111624]">
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400">
          <BottomIcon size={12} />
        </div>
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Phone size={14} />
          </button>
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <MessageSquare size={14} />
          </button>
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <FileText size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Leads = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col h-[calc(100vh-2rem)]">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start gap-4 mb-2 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-600 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Leads</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Leads</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-500/30">
              123
            </span>
          </div>
        </div>

        
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-[#111624] p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-sm dark:shadow-none shrink-0">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <button className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors">
            <Filter size={14} /> Filter <ChevronDown size={14} className="ml-1" />
          </button>
          
          <div className="relative w-full sm:max-w-xs">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-700">
            <button 
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
            >
              <List size={16} />
            </button>
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'}`}
            >
              <LayoutGrid size={16} />
            </button>
          </div>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap"
          >
            <Plus size={16} /> Add Lead
          </button>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'grid' ? (
        <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
          <div className="flex gap-6 min-w-max h-full">
            {mockLeadStages.map((stage) => (
              <div key={stage.id} className="w-[320px] flex flex-col h-full">
                {/* Column Header */}
                <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-4 shadow-sm flex items-start justify-between shrink-0">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2.5 h-2.5 rounded-full ${stage.color}`} />
                      <h2 className="font-bold text-slate-900 dark:text-white text-[15px]">{stage.title}</h2>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stage.leads} Leads - {stage.value}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">
                      <Plus size={16} />
                    </button>
                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>

                {/* Column Cards */}
                <div className="flex-1 overflow-y-auto pr-1 pb-4 custom-scrollbar-y">
                  {stage.deals.map((deal) => (
                    <LeadCard key={deal.id} deal={deal} borderColor={stage.borderColor} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-hidden bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="overflow-x-auto overflow-y-auto custom-scrollbar flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 sticky top-0 z-10">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lead Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Value</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mockLeadStages.flatMap(stage => 
                  stage.deals.map(deal => (
                    <tr key={deal.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${deal.initialsColor}`}>
                            {deal.initials}
                          </div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {deal.name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                          <DollarSign size={14} className="text-slate-400" /> {deal.value}
                        </div>
                      </td>
                      <td className="px-6 py-4 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <Mail size={14} className="text-slate-400" /> {deal.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <Phone size={14} className="text-slate-400" /> {deal.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full text-white shadow-sm ${stage.color}`}>
                          {stage.title}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10 transition-colors inline-flex">
                          <MoreVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <AddLeadModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Leads;

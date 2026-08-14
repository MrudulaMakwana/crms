import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageSquare,
  FileText,
  DollarSign,
  Download,
  RefreshCcw,
  LayoutGrid,
  List
} from 'lucide-react';
import { useState } from 'react';

import AddDealModal from '../components/AddDealModal';

const mockStages = [
  {
    id: 'stage-1',
    title: 'Qualify To Buy',
    leads: 45,
    value: '$15,44,540',
    color: 'bg-blue-500',
    deals: [
      {
        id: 1,
        initials: 'HT',
        initialsColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
        name: 'Howell, Tremblay and Rath',
        value: '$03,50,000',
        email: 'darleeo@example.com',
        phone: '+1 12445-47878',
        location: 'Newyork, United States',
        ownerName: 'Darlee Robertson',
        ownerAvatar: 'https://i.pravatar.cc/150?u=1',
        probability: '85%',
        probabilityColor: 'bg-green-500 text-white',
        date: '10 Jan 2024'
      },
      {
        id: 2,
        initials: 'RJ',
        initialsColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400',
        name: 'Robert, John and Carlos',
        value: '$02,10,000',
        email: 'sheron@example.com',
        phone: '+1 12445-47878',
        location: 'Exeter, United States',
        ownerName: 'Sharon Roy',
        ownerAvatar: 'https://i.pravatar.cc/150?u=2',
        probability: '15%',
        probabilityColor: 'bg-yellow-500 text-white',
        date: '12 Jan 2024'
      },
      {
        id: 3,
        initials: 'WS',
        initialsColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
        name: 'Wendy, Star and David',
        value: '$04,22,000',
        email: 'vau@example.com',
        phone: '+1 12445-47878',
        location: 'Phoenix, United States',
        ownerName: 'Vaughan Lewis',
        ownerAvatar: 'https://i.pravatar.cc/150?u=3',
        probability: '95%',
        probabilityColor: 'bg-blue-500 text-white',
        date: '14 Jan 2024'
      }
    ]
  },
  {
    id: 'stage-2',
    title: 'Contact Made',
    leads: 30,
    value: '$19,94,938',
    color: 'bg-blue-500',
    deals: [
      {
        id: 4,
        initials: 'BR',
        initialsColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
        name: 'Byron, Roman and Bailey',
        value: '$02,45,000',
        email: 'jessica13@example.com',
        phone: '+1 89351-90346',
        location: 'Chester, United States',
        ownerName: 'Jessica Louise',
        ownerAvatar: 'https://i.pravatar.cc/150?u=4',
        probability: '47%',
        probabilityColor: 'bg-red-500 text-white',
        date: '06 Feb 2024'
      },
      {
        id: 5,
        initials: 'RJ',
        initialsColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
        name: 'Robert, John and Carlos',
        value: '$01,17,000',
        email: 'caroltho3@example.com',
        phone: '+1 78982-09163',
        location: 'Charlotte, United States',
        ownerName: 'Carol Thomas',
        ownerAvatar: 'https://i.pravatar.cc/150?u=5',
        probability: '98%',
        probabilityColor: 'bg-green-500 text-white',
        date: '15 Jan 2024'
      },
      {
        id: 6,
        initials: 'IC',
        initialsColor: 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400',
        name: 'Irene, Charles and Wilston',
        value: '$02,12,000',
        email: 'dawnmercha@example.com',
        phone: '+1 27691-89246',
        location: 'Bristol, United States',
        ownerName: 'Dawn Mercha',
        ownerAvatar: 'https://i.pravatar.cc/150?u=6',
        probability: '95%',
        probabilityColor: 'bg-red-500 text-white',
        date: '25 Jan 2024'
      }
    ]
  },
  {
    id: 'stage-3',
    title: 'Presentation',
    leads: 25,
    value: '$10,36,390',
    color: 'bg-blue-500',
    deals: [
      {
        id: 7,
        initials: 'HT',
        initialsColor: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400',
        name: 'Jody, Powell and Cecil',
        value: '$01,84,043',
        email: 'rachel@example.com',
        phone: '+1 17839-93617',
        location: 'Baltimore, United States',
        ownerName: 'Rachel Hampton',
        ownerAvatar: 'https://i.pravatar.cc/150?u=7',
        probability: '25%',
        probabilityColor: 'bg-blue-500 text-white',
        date: '18 Mar 2024'
      },
      {
        id: 8,
        initials: 'BL',
        initialsColor: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400',
        name: 'Bonnie, Linda and Mullin',
        value: '$09,35,189',
        email: 'jonelle@example.com',
        phone: '+1 16739-47193',
        location: 'Coventry, United States',
        ownerName: 'Jonelle Curtiss',
        ownerAvatar: 'https://i.pravatar.cc/150?u=8',
        probability: '70%',
        probabilityColor: 'bg-red-500 text-white',
        date: '15 Feb 2024'
      },
      {
        id: 9,
        initials: 'CJ',
        initialsColor: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400',
        name: 'Carlos, Jones and Jim',
        value: '$04,27,940',
        email: 'jonathan@example.com',
        phone: '+1 18390-37153',
        location: 'Seattle',
        ownerName: 'Jonathan Smith',
        ownerAvatar: 'https://i.pravatar.cc/150?u=9',
        probability: '45%',
        probabilityColor: 'bg-green-500 text-white',
        date: '30 Jan 2024'
      }
    ]
  },
  {
    id: 'stage-4',
    title: 'Proposal',
    leads: 50,
    value: '$22,50,000',
    color: 'bg-blue-500',
    deals: [
      {
        id: 10,
        initials: 'FJ',
        initialsColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400',
        name: 'Frank, Justin and Co',
        value: '$04,10,000',
        email: 'sidney@example.com',
        phone: '+1 11739-93617',
        location: 'London, United Kingdom',
        ownerName: 'Sidney Prescott',
        ownerAvatar: 'https://i.pravatar.cc/150?u=10',
        probability: '65%',
        probabilityColor: 'bg-blue-500 text-white',
        date: '11 Apr 2024'
      }
    ]
  }
];

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col mb-4">
      <div className="p-4 flex-1">
        
        {/* Header: Initials, Name */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${deal.initialsColor}`}>
            {deal.initials}
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white text-[13px] leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {deal.name}
            </h3>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2.5 mb-5">
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

        {/* Owner and Probability */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={deal.ownerAvatar} alt={deal.ownerName} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{deal.ownerName}</span>
          </div>
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${deal.probabilityColor}`}>
            {deal.probability}
          </span>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-slate-100 dark:border-slate-800 p-3 flex items-center justify-between bg-slate-50/50 dark:bg-[#0b0f19]/50">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <Calendar size={13} />
          <span>{deal.date}</span>
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

const Deals = () => {
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
            <span className="text-slate-900 dark:text-slate-200 font-medium">Deals</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Deals</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-500/30">
              125
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
              placeholder="Search deals..." 
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
            <Plus size={16} /> Add Deal
          </button>
        </div>
      </div>

      {/* Kanban Board Container */}
      <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
        <div className="flex gap-6 min-w-max h-full">
          {mockStages.map((stage) => (
            <div key={stage.id} className="w-[320px] flex flex-col h-full">
              {/* Column Header */}
              <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-4 shadow-sm flex items-start justify-between shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`w-2.5 h-2.5 rounded-full ${stage.color}`} />
                    <h2 className="font-bold text-slate-900 dark:text-white text-sm">{stage.title}</h2>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stage.leads} Leads - {stage.value}</p>
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">
                  <MoreVertical size={16} />
                </button>
              </div>

              {/* Column Cards */}
              <div className="flex-1 overflow-y-auto pr-1 pb-4 custom-scrollbar-y">
                {stage.deals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddDealModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Deals;

import { 
  Search, 
  Filter, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Headphones,
  Zap,
  Download,
  RefreshCcw,
  LayoutGrid,
  List
} from 'lucide-react';
import { useState } from 'react';

import AddCustomerModal from '../components/AddCustomerModal';

const mockCustomers = [
  {
    id: 1,
    name: 'Darlee Robertson',
    title: 'Facility Manager',
    email: 'robertson@example.com',
    phone: '1234567890',
    location: 'Germany',
    badges: ['Collab', 'VIP'],
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    name: 'Sharon Roy',
    title: 'Installer',
    email: 'sharon@example.com',
    phone: '+1 989757485',
    location: 'USA',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: 3,
    name: 'Vaughan Lewis',
    title: 'Senior Manager',
    email: 'vaughan12@example.com',
    phone: '+1 546555455',
    location: 'India',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    id: 4,
    name: 'Jessica Louise',
    title: 'Test Engineer',
    email: 'jessica13@example.com',
    phone: '+1 454478787',
    location: 'India',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
  {
    id: 5,
    name: 'Carol Thomas',
    title: 'UI /UX Designer',
    email: 'caroltho3@example.com',
    phone: '+1 124547845',
    location: 'China',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=5'
  },
  {
    id: 6,
    name: 'Dawn Mercha',
    title: 'Technician',
    email: 'dawnmercha@example.com',
    phone: '+1 478845447',
    location: 'Martin Lewis',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=6'
  },
  {
    id: 7,
    name: 'Rachel Hampton',
    title: 'Software Developer',
    email: 'rachel@example.com',
    phone: '+1 215544845',
    location: 'Indonesia',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=7'
  },
  {
    id: 8,
    name: 'Jonelle Curtiss',
    title: 'Product Manager',
    email: 'jonelle@example.com',
    phone: '+1 121145471',
    location: 'Cuba',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=8'
  },
  {
    id: 9,
    name: 'Jonathan Smith',
    title: 'Data Analyst',
    email: 'jonathan@example.com',
    phone: '+1 321454789',
    location: 'Israel',
    badges: ['Collab', 'Rated'],
    avatar: 'https://i.pravatar.cc/150?u=9'
  }
];

const CustomerCard = ({ customer }) => {
  return (
    <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
      <div className="p-5 flex-1">
        
        {/* Header: Avatar, Name, Title, Action */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-3">
            <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm" />
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {customer.name}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{customer.title}</p>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800">
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Mail size={14} className="text-slate-400" />
            <span className="truncate">{customer.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Phone size={14} className="text-slate-400" />
            <span>{customer.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <MapPin size={14} className="text-slate-400" />
            <span>{customer.location}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {customer.badges.map((badge, idx) => (
            <span 
              key={idx} 
              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                badge === 'Collab' 
                  ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10' 
                  : badge === 'VIP' 
                    ? 'text-purple-600 border-purple-200 bg-purple-50 dark:text-purple-400 dark:border-purple-500/30 dark:bg-purple-500/10'
                    : 'text-amber-600 border-amber-200 bg-amber-50 dark:text-amber-400 dark:border-amber-500/30 dark:bg-amber-500/10'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="border-t border-slate-100 dark:border-slate-800 p-3 px-5 flex items-center justify-between bg-slate-50/50 dark:bg-[#0b0f19]/50">
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Mail size={14} />
          </button>
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Phone size={14} />
          </button>
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Headphones size={14} />
          </button>
          <button className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Zap size={14} />
          </button>
        </div>
        <div>
          <img src={customer.avatar} alt="Agent" className="w-5 h-5 rounded-full object-cover grayscale opacity-60" />
        </div>
      </div>
    </div>
  );
};

const Customers = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-600 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Customers</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Customers</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 text-xs font-bold border border-red-200 dark:border-red-500/30">
              125
            </span>
          </div>
        </div>

        
      </div>

      {/* Toolbar */}
      <div className="bg-white dark:bg-[#111624] p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 shadow-sm dark:shadow-none">
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
              placeholder="Search customers..." 
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
              <Plus size={16} /> Add Customer
            </button>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCustomers.map(customer => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tags</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mockCustomers.map(customer => (
                  <tr key={customer.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={customer.avatar} alt={customer.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm" />
                        <div>
                          <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{customer.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{customer.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Mail size={14} className="text-slate-400" /> {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <Phone size={14} className="text-slate-400" /> {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" /> {customer.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {customer.badges.map((badge, idx) => (
                          <span 
                            key={idx} 
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                              badge === 'Collab' 
                                ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10' 
                                : badge === 'VIP' 
                                  ? 'text-purple-600 border-purple-200 bg-purple-50 dark:text-purple-400 dark:border-purple-500/30 dark:bg-purple-500/10'
                                  : 'text-amber-600 border-amber-200 bg-amber-50 dark:text-amber-400 dark:border-amber-500/30 dark:bg-amber-500/10'
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-blue-500/10 transition-colors inline-flex">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Load More Footer */}
      <div className="flex justify-center pt-4 pb-8">
        <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors shadow-sm">
          <RefreshCcw size={14} /> Load More
        </button>
      </div>
      
      <AddCustomerModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Customers;

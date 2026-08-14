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
  List,
  Star,
  Globe,
  Hexagon,
  Command,
  Component,
  Triangle,
  CircleDot,
  Box,
  Layers,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';
import AddCompanyModal from '../components/AddCompanyModal';

const mockCompanies = [
  {
    id: 1,
    name: 'NovaWave LLC',
    rating: '4.2',
    email: 'robertson@example.com',
    phone: '+1 875455453',
    location: 'Germany',
    badges: ['Collab', 'Rated'],
    icon: Globe,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    repAvatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    name: 'BlueSky Industries',
    rating: '5.0',
    email: 'sharon@example.com',
    phone: '+1 989757485',
    location: 'USA',
    badges: ['Collab', 'Rated'],
    icon: Hexagon,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400',
    repAvatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: 3,
    name: 'Summit Peak',
    rating: '4.5',
    email: 'jessica13@gmail.com',
    phone: '+1 89316-83167',
    location: 'India',
    badges: ['Collab', 'Rated'],
    icon: Command,
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400',
    repAvatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    id: 4,
    name: 'RiverStone Ventur',
    rating: '4.7',
    email: 'carolTho3@gmail.com',
    phone: '+1 84295-01629',
    location: 'China',
    badges: ['Collab', 'Rated'],
    icon: Component,
    color: 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300',
    repAvatar: 'https://i.pravatar.cc/150?u=5'
  },
  {
    id: 5,
    name: 'Bright Bridge Grp',
    rating: '5.0',
    email: 'dawnmercha@gmail.com',
    phone: '+1 79253-01692',
    location: 'Martin Lewis',
    badges: ['Collab', 'Rated'],
    icon: Triangle,
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400',
    repAvatar: 'https://i.pravatar.cc/150?u=6'
  },
  {
    id: 6,
    name: 'CoastalStar Co.',
    rating: '3.1',
    email: 'coastal@example.com',
    phone: '+1 23412-12345',
    location: 'Indonesia',
    badges: ['Collab', 'Rated'],
    icon: CircleDot,
    color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400',
    repAvatar: 'https://i.pravatar.cc/150?u=7'
  },
  {
    id: 7,
    name: 'HarborView',
    rating: '5.0',
    email: 'harborview@example.com',
    phone: '+1 12114-54710',
    location: 'Cuba',
    badges: ['Collab', 'Rated'],
    icon: Box,
    color: 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400',
    repAvatar: 'https://i.pravatar.cc/150?u=8'
  },
  {
    id: 8,
    name: 'Golden Gate Ltd',
    rating: '2.7',
    email: 'goldengate@example.com',
    phone: '+1 32145-47890',
    location: 'Israel',
    badges: ['Collab', 'Rated'],
    icon: Layers,
    color: 'bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/20 dark:text-fuchsia-400',
    repAvatar: 'https://i.pravatar.cc/150?u=9'
  },
  {
    id: 9,
    name: 'Redwood Inc',
    rating: '3.0',
    email: 'brook@gmail.com',
    phone: '+1 49815-90142',
    location: 'Colombia',
    badges: ['Collab', 'Rated'],
    icon: Sparkles,
    color: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400',
    repAvatar: 'https://i.pravatar.cc/150?u=10'
  }
];

const CompanyCard = ({ company }) => {
  const IconComponent = company.icon;
  
  return (
    <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
      <div className="p-5 flex-1">
        
        {/* Header: Logo, Name, Rating, Action */}
        <div className="flex justify-between items-start mb-5">
          <div className="flex gap-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${company.color}`}>
              <IconComponent size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {company.name}
              </h3>
              <div className="flex items-center gap-1 mt-1">
                <Star size={12} className="text-amber-400 fill-amber-400" />
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{company.rating}</span>
              </div>
            </div>
          </div>
          <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 shrink-0">
            <MoreVertical size={16} />
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Mail size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">{company.email}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <Phone size={14} className="text-slate-400 shrink-0" />
            <span>{company.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
            <MapPin size={14} className="text-slate-400 shrink-0" />
            <span className="truncate">{company.location}</span>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {company.badges.map((badge, idx) => (
            <span 
              key={idx} 
              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                badge === 'Collab' 
                  ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10' 
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
        <div className="flex items-center gap-4">
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
          <img src={company.repAvatar} alt="Rep" className="w-6 h-6 rounded-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer ring-1 ring-slate-200 dark:ring-slate-700" title="Contact Representative" />
        </div>
      </div>
    </div>
  );
};

const Companies = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // ✅ Moved state inside component scope
  
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-600 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Companies</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Companies</h1>
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
              placeholder="Search companies..." 
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
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap" 
            onClick={() => setIsAddModalOpen(true)}
          >
            <Plus size={16} /> Add Company
          </button>
        </div>
      </div>

      {/* Content Area */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tags</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {mockCompanies.map(company => {
                  const IconComponent = company.icon;
                  return (
                    <tr key={company.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${company.color}`}>
                            <IconComponent size={20} />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{company.name}</div>
                            <div className="flex items-center gap-1 mt-0.5">
                              <Star size={12} className="text-amber-400 fill-amber-400" />
                              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{company.rating}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 space-y-1">
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <Mail size={14} className="text-slate-400" /> {company.email}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                          <Phone size={14} className="text-slate-400" /> {company.phone}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-slate-400" /> {company.location}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-2">
                          {company.badges.map((badge, idx) => (
                            <span 
                              key={idx} 
                              className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                badge === 'Collab' 
                                  ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-500/30 dark:bg-emerald-500/10' 
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
                  );
                })}
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

      <AddCompanyModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSuccess={() => {
          setIsAddModalOpen(false);
        }} 
      />

    </div>
  );
};

export default Companies;
import { 
  Search, 
  Plus, 
  Filter, 
  CalendarDays, 
  ArrowUpDown, 
  Columns,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Download,
  RefreshCcw,
  Star,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

const mockUsers = [
  { id: 1, name: 'Darlee Robertson', role: 'Facility Manager', phone: '1234567890', email: 'robertson@example.com', created: '25 Sep 2025, 12:12 pm', lastActivity: '2 mins ago', status: 'Active', starred: true, avatar: 'bg-yellow-400' },
  { id: 2, name: 'Sharon Roy', role: 'Installer', phone: '+1 989757485', email: 'sharon@example.com', created: '27 Sep 2025, 07:40 am', lastActivity: '5 mins ago', status: 'Inactive', starred: true, avatar: 'bg-blue-300' },
  { id: 3, name: 'Vaughan Lewis', role: 'Senior Manager', phone: '+1 546555455', email: 'vaughan12@example.com', created: '29 Sep 2025, 08:20 am', lastActivity: '2 days ago', status: 'Active', starred: false, avatar: 'bg-slate-300' },
  { id: 4, name: 'Jessica Louise', role: 'Test Engineer', phone: '+1 454478787', email: 'jessica13@example.com', created: '25 Sep 2025, 12:12 pm', lastActivity: '2 mins ago', status: 'Active', starred: true, avatar: 'bg-teal-300' },
  { id: 5, name: 'Carol Thomas', role: 'UI /UX Designer', phone: '+1 124547845', email: 'caroltho3@example.com', created: '02 Oct 2025, 10:10 am', lastActivity: 'Online', status: 'Active', starred: false, avatar: 'bg-orange-300' },
  { id: 6, name: 'Dawn Mercha', role: 'Technician', phone: '+1 478845447', email: 'dawnmercha@example.com', created: '17 Oct 2025, 04:25 pm', lastActivity: '3 days ago', status: 'Active', starred: false, avatar: 'bg-pink-300' },
  { id: 7, name: 'Rachel Hampton', role: 'Software Developer', phone: '+1 215544845', email: 'rachel@example.com', created: '28 Oct 2025, 07:16 am', lastActivity: '10 days ago', status: 'Active', starred: true, avatar: 'bg-indigo-300' },
  { id: 8, name: 'Jonelle Curtiss', role: 'Supervisor', phone: '+1 121145471', email: 'jonelle@example.com', created: '08 Nov 2025, 06:10 am', lastActivity: '1 week ago', status: 'Active', starred: false, avatar: 'bg-purple-300' },
  { id: 9, name: 'Jonathan Smith', role: 'Team Lead Dev', phone: '+1 321454789', email: 'jonathan@example.com', created: '15 Nov 2025, 11:50 am', lastActivity: '1 day ago', status: 'Active', starred: false, avatar: 'bg-slate-600' },
  { id: 10, name: 'Brook Carter', role: 'Team Lead Dev', phone: '+1 278907145', email: 'brook@example.com', created: '25 Nov 2025, 06:34 pm', lastActivity: '8 mins ago', status: 'Active', starred: true, avatar: 'bg-slate-800' }
];

const Users = () => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const toggleSelect = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedUsers.length === mockUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(mockUsers.map(u => u.id));
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end items-start gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors">Home</span>
            <span className="text-slate-600 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-slate-200 font-medium">Manage Users</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Manage Users</h1>
            <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold border border-blue-200 dark:border-blue-500/30">
              152
            </span>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm dark:shadow-none overflow-hidden transition-colors">
        
        {/* Top Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-4">
          <div className="relative w-full sm:w-72">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={16} />
            </div>
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md shadow-blue-600/20 whitespace-nowrap shrink-0">
            <Plus size={16} /> Add User
          </button>
        </div>

        {/* Filters Toolbar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm transition-colors shrink-0">
            <Filter size={14} /> Filter <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm transition-colors shrink-0">
            <CalendarDays size={14} /> 14 Jul 26 - 12 Aug 26
          </button>
          
          <div className="flex-1 min-w-[20px]" />
          
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm transition-colors shrink-0">
            <ArrowUpDown size={14} /> Sort By <ChevronDown size={14} className="ml-1" />
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 rounded-md text-sm font-medium transition-colors shrink-0">
            <Columns size={14} /> Manage Columns
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900 text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                <th className="py-4 pl-4 pr-2 w-12">
                  <div 
                    onClick={toggleSelectAll}
                    className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${selectedUsers.length === mockUsers.length ? 'bg-blue-600 border-blue-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'}`}
                  >
                    {selectedUsers.length === mockUsers.length && <div className="w-2 h-2 bg-white rounded-sm" />}
                  </div>
                </th>
                <th className="py-4 px-2 w-12"></th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Name <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Phone <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Email <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Created <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Last Activity <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 px-4 whitespace-nowrap">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">Status <ArrowUpDown size={12} className="text-slate-400" /></div>
                </th>
                <th className="py-4 pr-4 pl-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {mockUsers.map((user) => {
                const isSelected = selectedUsers.includes(user.id);
                return (
                  <tr key={user.id} className={`transition-colors ${isSelected ? 'bg-blue-50 dark:bg-slate-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 bg-white dark:bg-[#111624]'}`}>
                    <td className="py-3 pl-4 pr-2">
                      <div 
                        onClick={() => toggleSelect(user.id)}
                        className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'}`}
                      >

                        {isSelected && <div className="w-2 h-2 bg-white rounded-sm" />}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <Star size={16} className={user.starred ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-600"} />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${user.avatar} text-white flex items-center justify-center font-bold text-sm shadow-sm overflow-hidden`}>
                           {/* Using initial if no image, but simulate an image layout for realism */}
                           {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-slate-200">{user.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{user.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {user.phone}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-300">
                      {user.email}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {user.created}
                    </td>
                    <td className="py-3 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {user.lastActivity}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold ${
                        user.status === 'Active' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 pl-2 text-center">
                      <button className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <span>Show</span>
            <select className="border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <span>entries</span>
          </div>

          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-[#111624]">
              <ChevronLeft size={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-red-600 bg-red-600 text-white font-medium text-sm">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-[#111624] text-sm">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-[#111624] text-sm">
              3
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 bg-white dark:bg-[#111624]">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Users;

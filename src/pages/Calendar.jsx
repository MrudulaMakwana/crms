import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import AddEventModal from '../components/AddEventModal';

const Calendar = () => {
  // Static grid for August 2026 based on screenshot
  // July ends on 31, August starts on Saturday
  // Sun Mon Tue Wed Thu Fri Sat
  // 26  27  28  29  30  31  1
  // 2   3   4   5   6   7   8
  // 9   10  11  12  13  14  15
  // 16  17  18  19  20  21  22
  // 23  24  25  26  27  28  29
  // 30  31  1   2   3   4   5

  const weeks = [
    [
      { date: 26, isPrevMonth: true }, { date: 27, isPrevMonth: true }, { date: 28, isPrevMonth: true }, { date: 29, isPrevMonth: true }, { date: 30, isPrevMonth: true }, { date: 31, isPrevMonth: true }, { date: 1, isPrevMonth: false }
    ],
    [
      { date: 2 }, 
      { date: 3, events: [{ title: '4:21p Quarterly Executive Sales...', color: 'blue' }] }, 
      { date: 4, events: [{ title: '3:21p TechNova Milestone...', color: 'green' }] }, 
      { date: 5, events: [{ title: '3:21p Iso Security Audit...', color: 'red' }] }, 
      { date: 6 }, { date: 7 }, { date: 8 }
    ],
    [
      { date: 9 }, { date: 10 }, { date: 11 }, { date: 12, isToday: true }, { date: 13 }, { date: 14 }, { date: 15 }
    ],
    [
      { date: 16 }, { date: 17 }, { date: 18 }, { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }
    ],
    [
      { date: 23 }, { date: 24 }, { date: 25 }, { date: 26 }, { date: 27 }, { date: 28 }, { date: 29 }
    ],
    [
      { date: 30 }, { date: 31 }, { date: 1, isNextMonth: true }, { date: 2, isNextMonth: true }, { date: 3, isNextMonth: true }, { date: 4, isNextMonth: true }, { date: 5, isNextMonth: true }
    ],
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
              <CalendarIcon className="w-6 h-6 text-blue-600 dark:text-blue-500" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Company Calendar</h1>
          </div>
          <p className="mt-2 text-slate-500 dark:text-slate-400">View upcoming client meetings, project deadlines, and team events.</p>
        </div>
        
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-md shadow-blue-500/20 whitespace-nowrap"
        >
          <Plus size={16} /> Schedule Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Calendar Area */}
        <div className="lg:col-span-3 bg-white dark:bg-[#111624] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col p-5">
          
          {/* Calendar Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-[#0b0f19]">
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 border-r border-slate-200 dark:border-slate-700">
                  <ChevronLeft size={16} />
                </button>
                <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                  <ChevronRight size={16} />
                </button>
              </div>
              <button className="px-4 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-[#0b0f19] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium transition-colors">
                today
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">August 2026</h2>
            
            <div className="flex rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-[#0b0f19]">
              <button className="px-4 py-1.5 bg-[#1e293b] text-white text-sm font-medium">month</button>
              <button className="px-4 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm font-medium border-x border-slate-200 dark:border-slate-700">week</button>
              <button className="px-4 py-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-sm font-medium">day</button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden flex-1 flex flex-col">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b0f19]">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, idx) => (
                <div key={idx} className="py-3 text-center text-sm font-bold text-blue-600 dark:text-blue-500 border-r border-slate-200 dark:border-slate-800 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Body */}
            <div className="flex-1 flex flex-col">
              {weeks.map((week, weekIdx) => (
                <div key={weekIdx} className="grid grid-cols-7 flex-1 border-b border-slate-200 dark:border-slate-800 last:border-b-0 min-h-[100px]">
                  {week.map((day, dayIdx) => (
                    <div 
                      key={dayIdx} 
                      className={`p-1.5 border-r border-slate-200 dark:border-slate-800 last:border-r-0 transition-colors ${
                        day.isToday 
                          ? 'bg-amber-50/50 dark:bg-amber-500/10' 
                          : 'hover:bg-slate-50 dark:hover:bg-[#1a2133]'
                      }`}
                    >
                      <div className={`text-right text-sm mb-1 ${
                        day.isPrevMonth || day.isNextMonth 
                          ? 'text-slate-300 dark:text-slate-600' 
                          : day.isToday 
                            ? 'text-blue-600 dark:text-blue-500 font-bold' 
                            : 'text-blue-500/80 dark:text-blue-400/80'
                      }`}>
                        {day.date}
                      </div>
                      
                      {day.events && (
                        <div className="space-y-1 mt-1">
                          {day.events.map((event, idx) => (
                            <div 
                              key={idx} 
                              className={`text-[10px] sm:text-[11px] font-medium truncate flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity ${
                                event.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                                event.color === 'green' ? 'text-emerald-600 dark:text-emerald-400' :
                                'text-red-600 dark:text-red-400'
                              }`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                event.color === 'blue' ? 'bg-blue-600 dark:bg-blue-400' :
                                event.color === 'green' ? 'bg-emerald-600 dark:bg-emerald-400' :
                                'bg-red-600 dark:bg-red-400'
                              }`} />
                              <span className="truncate">{event.title}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Categories Card */}
          <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Event Categories</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Client Meetings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-red-500 shadow-sm" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Deadlines</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Events</span>
              </div>
            </div>
          </div>

          {/* Upcoming Events Card */}
          <div className="bg-white dark:bg-[#111624] p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-800 dark:text-slate-100 mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">Quarterly Executive Sales...</p>
                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400 text-[11px]">
                  <Clock size={12} /> Aug 03, 10:51 AM
                </div>
              </div>
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">TechNova Milestone Review</p>
                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400 text-[11px]">
                  <Clock size={12} /> Aug 04, 09:51 AM
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">Iso Security Audit Deadline</p>
                <div className="flex items-center gap-1 mt-1 text-slate-500 dark:text-slate-400 text-[11px]">
                  <Clock size={12} /> Aug 05, 09:51 AM
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <AddEventModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default Calendar;

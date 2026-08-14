import { 
  User,
  ShieldCheck,
  Mail,
  Phone,
  Clock,
  Edit,
  Shield,
  Key
} from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-6xl mx-auto pb-10">
      
      {/* Page Title */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Profile</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        
        {/* Left Column: Profile Card */}
        <div className="w-full md:w-[350px] shrink-0">
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm flex flex-col items-center">
            
            {/* Avatar */}
            <div className="w-28 h-28 bg-blue-600 text-white rounded-full flex items-center justify-center text-5xl font-bold mb-4 shadow-md">
              A
            </div>
            
            {/* Name & Role */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 text-center">
              Alexander Pierce
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-3 text-center">
              Executive Management
            </p>
            
            {/* Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-100 dark:border-blue-500/20">
              <ShieldCheck size={14} /> Admin
            </div>
            
            <hr className="w-full border-t border-slate-200 dark:border-slate-800 my-6" />
            
            {/* Details */}
            <div className="w-full space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Mail className="text-blue-500" size={18} />
                <span>admin@apexcrm.io</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Phone className="text-blue-500" size={18} />
                <span>1234567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <Clock className="text-blue-500" size={18} />
                <span>Member since Aug 2026</span>
              </div>
            </div>

            {/* Edit Profile Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-colors font-medium text-sm">
              <Edit size={16} /> Edit Profile
            </button>

          </div>
        </div>

        {/* Right Column: Cards */}
        <div className="flex-1 space-y-6">
          
          {/* About Me Card */}
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <User className="text-blue-600 dark:text-blue-500" size={20} />
              About Me
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Test bio-f--fiflkf
            </p>
          </div>

          {/* Security Settings Card */}
          <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white mb-4">
              <Shield className="text-amber-500" size={20} />
              Security Settings
            </h3>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-[15px] mb-1">
                  Password
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Update your password regularly to keep your account secure
                </p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#fbc02d] hover:bg-[#f9a825] text-slate-900 font-bold rounded-lg text-sm transition-colors shadow-sm whitespace-nowrap">
                <Key size={16} /> Change Password
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;

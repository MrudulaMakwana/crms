import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Zap, ArrowRight, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem('token', 'mock-jwt-token-123');
      navigate('/');
    }, 800);
  };

  const fillDemo = (user, pass) => {
    setUsername(user);
    setPassword(pass);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020817] flex relative overflow-hidden font-sans transition-colors duration-200">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="flex w-full min-h-screen">
        
        {/* Left Side - Brand Showcase */}
        <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 text-slate-900 dark:text-white relative z-10 border-r border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/30 backdrop-blur-sm transition-colors duration-200">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
                <Zap className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
                Apex CRM
              </span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
              Manage your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                customer relationships
              </span>
              <br/> with intelligence.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
              Experience the next generation of sales pipeline management. Built for modern teams who demand performance and elegant design.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
            <p>© 2026 Apex Systems Inc.</p>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors">Privacy</a>
            <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <a href="#" className="hover:text-slate-800 dark:hover:text-white transition-colors">Terms</a>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
          <div className="w-full max-w-md space-y-8">
            
            <div className="text-center lg:text-left space-y-2">
              <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 mb-6 mx-auto">
                <Zap className="w-6 h-6 text-white fill-white/20" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Welcome back</h2>
              <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email or Username</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900/80"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                  <Link to="/forgot-password" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">Forgot password?</Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full pl-11 pr-11 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900/80"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-md"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  {isLoading ? 'Authenticating...' : 'Sign In'}
                  {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-slate-50 dark:bg-[#020817] text-slate-500 dark:text-slate-500 transition-colors">Quick login</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => fillDemo('admin', 'admin123')}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl text-sm text-slate-700 dark:text-slate-300 transition-all shadow-sm dark:shadow-none"
              >
                <span>Admin</span>
              </button>
              <button 
                type="button"
                onClick={() => fillDemo('manager', 'manager123')}
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl text-sm text-slate-700 dark:text-slate-300 transition-all shadow-sm dark:shadow-none"
              >
                <span>Manager</span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

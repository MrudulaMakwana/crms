import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0f19] flex">
      {/* Left Side - Hero / Marketing */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-12 text-slate-900 dark:text-white relative z-10 border-r border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/30 backdrop-blur-sm transition-colors duration-200">
        {/* Background glow effects */}
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center h-full max-w-xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20">
                <Zap className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
                Apex CRM
              </span>
            </div>
            
            <h1 className="text-5xl font-bold leading-tight mb-6 tracking-tight">
              Don't worry, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                we've got you
              </span>
              <br/> covered.
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-md leading-relaxed">
              Enter your email address and we'll send you a link to reset your password. It only takes a minute to get back on track.
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
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative z-10">
        <div className="w-full max-w-md space-y-8">
          
          <div className="text-center lg:text-left space-y-2">
            <div className="lg:hidden flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 mb-6 mx-auto">
                <Zap className="w-6 h-6 text-white fill-white/20" />
            </div>
            <Link to="/login" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors mb-4 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to login
            </Link>
            
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Forgot password?</h2>
            <p className="text-slate-500 dark:text-slate-400">No worries, we'll send you reset instructions.</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400 dark:text-slate-500 group-focus-within:text-blue-500 dark:group-focus-within:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm dark:shadow-none hover:bg-slate-50 dark:hover:bg-slate-900/80"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shadow-md mt-6"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  {isLoading ? 'Sending...' : 'Reset Password'}
                  {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </span>
              </button>
            </form>
          ) : (
            <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-xl p-6 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Check your email</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                We've sent a password reset link to <br/>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{email}</span>
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Didn't receive the email? Click to resend
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

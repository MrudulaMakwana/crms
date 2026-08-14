import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

import Button from '../components/Button';
import AddPlanModal from '../components/AddPlanModal';

const MembershipPlans = () => {
  const [billing, setBilling] = useState('monthly');

  const plans = [
    {
      name: 'Free',
      for: 'Best for personal use',
      price: '$99',
      users: 'For Only 1 User',
      features: [
        '1 User Seats',
        'Access to Free Modules',
        '100 Transactions Per Month',
        'Advanced Reporting',
        { text: 'API access', disabled: true },
        { text: 'Priority support', disabled: true }
      ],
      button: 'Select Free Membership',
      isCurrent: false,
      popular: false
    },
    {
      name: 'Starter',
      for: 'Best for personal use',
      price: '$199',
      users: 'For small teams up to 5 users',
      features: [
        '5 User Seats',
        'Core ERP Modules',
        '500 Transactions Per Month',
        'Advanced Reporting',
        { text: 'API access', disabled: true },
        { text: 'Priority support', disabled: true }
      ],
      button: 'Current Plan',
      isCurrent: true,
      popular: true
    },
    {
      name: 'Business',
      for: 'Best for personal use',
      price: '$399',
      users: 'For growing teams up to 25 users',
      features: [
        '25 User Seats',
        'All ERP modules',
        '10,000 transactions/mo',
        'Advanced Reporting',
        'API access',
        { text: 'Priority support', disabled: true }
      ],
      button: 'Buy Business',
      isCurrent: false,
      popular: false
    },
    {
      name: 'Enterprise',
      for: 'Best for personal use',
      price: '$999',
      users: 'Unlimited users, custom SLA',
      features: [
        'Unlimited seats',
        'All ERP modules',
        'Unlimited transactions',
        'Advanced Reporting',
        'Full API access',
        'Priority support'
      ],
      button: 'Buy Enterprise',
      isCurrent: false,
      popular: false
    }
  ];

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Membership Plans</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Streamline your teamwork. Start free.</p>
          <p className="text-slate-400 dark:text-slate-500 text-sm mt-1">Choose the perfect plan for your business needs</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary" onClick={() => setIsAddModalOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg> Add New</Button>
          
          {/* Toggle */}
          <div className="flex items-center bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-full p-1 shadow-sm">
            <button 
              onClick={() => setBilling('monthly')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billing === 'monthly' ? 'bg-[#00897b] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling('yearly')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                billing === 'yearly' ? 'bg-[#00897b] text-white shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-6">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`relative flex flex-col bg-white dark:bg-[#111624] rounded-xl p-6 transition-all duration-300 ${
              plan.isCurrent 
                ? 'border-2 border-[#00897b] shadow-lg shadow-[#00897b]/10 scale-[1.02]' 
                : 'border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 right-6 bg-[#00897b] text-white px-3 py-1 text-xs font-bold rounded-md shadow-sm">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{plan.for}</p>
            
            <div className="mt-4 mb-2 flex items-baseline">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium ml-1">/ month</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300">{plan.users}</p>
            
            <div className="mt-6 mb-6">
              <p className="font-bold text-slate-900 dark:text-white mb-4 text-sm">What you get:</p>
              <ul className="space-y-3">
                {plan.features.map((feature, fIdx) => {
                  const isDisabled = typeof feature === 'object' && feature.disabled;
                  const text = typeof feature === 'object' ? feature.text : feature;
                  return (
                    <li key={fIdx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 size={16} className={isDisabled ? "text-slate-300 dark:text-slate-600" : "text-[#00897b]"} />
                      <span className={isDisabled ? "text-slate-400 dark:text-slate-500 line-through" : "text-slate-600 dark:text-slate-300"}>
                        {text}
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
            
            <button 
              className={`mt-auto w-full py-2.5 rounded-lg text-sm font-bold transition-colors ${
                plan.isCurrent 
                  ? 'bg-[#00897b] text-white shadow-md' 
                  : 'bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center pt-8">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">All plans include a 14-day free trial. No credit card required.</p>
        <p className="text-slate-400 dark:text-slate-500 text-xs mt-4">2026 © Apex CRM. All Rights Reserved</p>
      </div>
      
      <AddPlanModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
};

export default MembershipPlans;

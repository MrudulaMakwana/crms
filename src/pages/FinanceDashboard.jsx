import {
  Calendar as CalendarIcon,
  Download,
  ChevronRight,
  Wallet,
  CreditCard,
  FileText,
  BarChart3,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const FinanceDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">



      {/* Top Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Revenue vs Expense Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Revenue vs Expense</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>2026</option>
            </select>
          </div>

          <div className="h-48 relative flex items-end">
            <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            </div>

            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 w-6">
              <span>80K</span><span>60K</span><span>40K</span><span>20K</span><span>0K</span>
            </div>

            <div className="ml-8 w-full h-full flex justify-between gap-1">
              {/* Mock pairs of bars (Revenue Green, Expense Orange) */}
              {[
                [40, 20], [70, 30], [50, 40], [60, 40], [40, 35], [60, 25],
                [45, 20], [40, 30], [35, 30], [45, 25], [35, 20], [60, 25]
              ].map((pair, i) => (
                <div key={i} className="w-full flex justify-center items-end gap-0.5">
                  <div style={{ height: `${pair[0]}%` }} className="w-full max-w-[12px] bg-[#00897b] rounded-t-sm hover:opacity-80 transition-opacity"></div>
                  <div style={{ height: `${pair[1]}%` }} className="w-full max-w-[12px] bg-[#e87c2b] rounded-t-sm hover:opacity-80 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between ml-8 mt-2 text-[10px] text-slate-400 font-medium text-center">
            <span className="flex-1">Jan</span><span className="flex-1">Feb</span><span className="flex-1">Mar</span>
            <span className="flex-1">Apr</span><span className="flex-1">May</span><span className="flex-1">Jun</span>
            <span className="flex-1">Jul</span><span className="flex-1">Aug</span><span className="flex-1">Sep</span>
            <span className="flex-1">Oct</span><span className="flex-1">Nov</span><span className="flex-1">Dec</span>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-[10px] font-bold text-slate-500">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#00897b]"></div> Revenue</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#e87c2b]"></div> Expense</div>
          </div>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col shadow-sm">
          <div className="p-4 flex justify-between items-center border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recent Invoices</h3>

            <div onClick={() => navigate('/erp/invoices')}>
              <Button variant="primary">View All <ChevronRight size={14} /></Button>
            </div>

          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/50 p-2">
            {[
              { id: "#INV0020", name: "Apex Computers", amount: "$10,000", status: "Paid", statC: "text-emerald-500" },
              { id: "#INV0019", name: "Beats Headphones", amount: "$5,000", status: "Unpaid", statC: "text-[#ff3b30]" },
              { id: "#INV0018", name: "Dazzle Shoes", amount: "$25,000", status: "Canceled", statC: "text-slate-400" },
              { id: "#INV0017", name: "Best Accessories", amount: "$15,500", status: "Partially", statC: "text-blue-400" },
              { id: "#INV0016", name: "A-Z Store", amount: "$34,000", status: "Overdue", statC: "text-amber-500" },
            ].map((inv, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-50 dark:bg-slate-800 text-slate-400 rounded-lg border border-slate-100 dark:border-slate-700">
                    <FileText size={14} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500">{inv.id}</p>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{inv.name}</h4>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 mb-0.5 text-center">Amount</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">{inv.amount}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 mb-0.5">Status</p>
                  <p className={`text-[10px] font-bold ${inv.statC}`}>{inv.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {[
          { title: "Total Revenue", val: "$125,000", trend: "+12.4%", tColor: "text-emerald-500", icon: Wallet, iColor: "text-orange-500 bg-orange-50 border-orange-200" },
          { title: "Total Expenses", val: "$89,500", trend: "-6.8%", tColor: "text-[#ff3b30]", icon: CreditCard, iColor: "text-blue-500 bg-blue-50 border-blue-200" },
          { title: "Pending Invoices", val: "12", trend: "+5.2%", tColor: "text-emerald-500", icon: FileText, iColor: "text-pink-500 bg-pink-50 border-pink-200" },
          { title: "Budget Utilization", val: "65%", trend: "+5.2%", tColor: "text-emerald-500", icon: BarChart3, iColor: "text-purple-500 bg-purple-50 border-purple-200" },
          { title: "Net Profit / Loss", val: "$35,500", trend: "+18%", tColor: "text-emerald-500", icon: TrendingUp, iColor: "text-emerald-500 bg-emerald-50 border-emerald-200" },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="text-xs text-slate-500 font-medium mb-1">{kpi.title}</p>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{kpi.val}</h3>
              </div>
              <div className={`p-1.5 rounded border ${kpi.iColor} dark:bg-opacity-10 dark:border-opacity-20`}>
                <kpi.icon size={16} />
              </div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium flex gap-1">
              <span className={`font-bold ${kpi.tColor}`}>{kpi.trend}</span> Last 30 days
            </p>
          </div>
        ))}
      </div>

      {/* Doughnuts & Line Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* Revenue Doughnut */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Revenue</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>Weekly</option>
            </select>
          </div>

          <div className="relative w-40 h-40 rounded-full border-[16px] border-[#00897b] border-t-[#e87c2b] border-r-purple-600 flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-[8px] border-white dark:border-[#111624] z-10 pointer-events-none scale-110"></div>
          </div>

          <div className="flex gap-4 text-[10px] font-bold text-slate-500 w-full justify-center">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#00897b]"></div> Sales</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#e87c2b]"></div> Recurring</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-600"></div> Service Fees</div>
          </div>
        </div>

        {/* Profit Margin Line Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Profit Margin vs Sales</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>2026</option>
            </select>
          </div>

          <div className="h-40 relative flex items-end">
            <div className="absolute inset-0 flex flex-col justify-between -z-10">
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
              <div className="border-b border-dashed border-slate-200 dark:border-slate-700/50 w-full flex-1"></div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-slate-400 w-6">
              <span>60K</span><span>50K</span><span>40K</span><span>30K</span><span>20K</span>
            </div>

            <div className="ml-8 w-full h-full relative overflow-hidden">
              {/* Line 1 (Profit Margin - Orange) Mock using svg or simple css borders */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full stroke-[#e87c2b] stroke-2 fill-transparent">
                <path d="M0,20 Q10,50 20,45 T40,25 T60,55 T80,45 T100,60" />
              </svg>
              {/* Line 2 (Sales - Green) Mock */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full stroke-[#00897b] stroke-2 fill-transparent">
                <path d="M0,70 Q10,90 20,85 T40,65 T60,95 T80,35 T100,20" />
              </svg>
            </div>
          </div>

          <div className="flex justify-between ml-8 mt-2 text-[10px] text-slate-400 font-medium text-center">
            <span className="flex-1">Jan</span><span className="flex-1">Feb</span><span className="flex-1">Mar</span>
            <span className="flex-1">Apr</span><span className="flex-1">May</span><span className="flex-1">Jun</span>
            <span className="flex-1">Jul</span><span className="flex-1">Aug</span><span className="flex-1">Sep</span>
            <span className="flex-1">Oct</span><span className="flex-1">Nov</span><span className="flex-1">Dec</span>
          </div>

          <div className="flex justify-center gap-4 mt-4 text-[10px] font-bold text-slate-500">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#e87c2b]"></div> Profit Margin</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#00897b]"></div> Sales</div>
          </div>
        </div>

        {/* Expenses Doughnut */}
        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900 dark:text-white text-sm">Expenses</h3>
            <select className="px-2 py-1 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent text-slate-600 dark:text-slate-400">
              <option>2026</option>
            </select>
          </div>

          <div className="relative w-40 h-40 rounded-full border-[16px] border-purple-600 border-t-[#e87c2b] border-r-[#00897b] flex items-center justify-center mb-6">
            <div className="absolute inset-0 rounded-full border-[8px] border-white dark:border-[#111624] z-10 pointer-events-none scale-110"></div>
          </div>

          <div className="space-y-2 w-full text-[10px] font-bold text-slate-500 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#e87c2b]"></div> Salaries</div>
              <span className="text-slate-900 dark:text-white">50%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-600"></div> Marketing</div>
              <span className="text-slate-900 dark:text-white">30%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#00897b]"></div> Miscellaneous</div>
              <span className="text-slate-900 dark:text-white">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Payments Table */}
      <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-slate-900 dark:text-white text-sm">Recent Payments</h3>
        
          <div onClick={() => navigate('/finance/payments')}>
                      <Button variant="primary">View All</Button>
                    </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-[#0b0f19] border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-bold text-[11px]">
              <tr>
                <th className="p-4">Payment ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Payee</th>
                <th className="p-4">Description</th>
                <th className="p-4">Invoice ID</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Bank & Account</th>
                <th className="p-4">Payment Method</th>
                <th className="p-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-xs font-medium">
              {[
                { id: "#PAY0020", date: "11 Sep 2025", payee: "Zenith Supplies", desc: "Office Stationery", inv: "#INV0020", amt: "$10,000", bank: "BOA - 4567329878", method: "Cash", status: "Paid", statC: "text-emerald-500 border-emerald-200 bg-emerald-50", icon: Wallet, pC: "text-emerald-500 bg-emerald-50 border-emerald-200" },
                { id: "#PAY0019", date: "05 Sep 2025", payee: "Delta Traders", desc: "Courier Charges", inv: "#INV0019", amt: "$5,000", bank: "WF - 9981432098", method: "Credit Card", status: "Unpaid", statC: "text-[#ff3b30] border-red-200 bg-red-50", icon: TrendingUp, pC: "text-blue-500 bg-blue-50 border-blue-200" },
                { id: "#PAY0018", date: "27 Aug 2025", payee: "Nova Enterprises", desc: "Marketing Flyers", inv: "#INV0018", amt: "$2,000", bank: "JPM - 3205987643", method: "Debit Card", status: "Partially Paid", statC: "text-blue-500 border-blue-200 bg-blue-50", icon: BarChart3, pC: "text-purple-500 bg-purple-50 border-purple-200" },
                { id: "#PAY0017", date: "16 Aug 2025", payee: "Apex Manufacturing", desc: "Office Rent", inv: "#INV0017", amt: "$1,500", bank: "CITI - 6721345098", method: "UPI", status: "Paid", statC: "text-emerald-500 border-emerald-200 bg-emerald-50", icon: CreditCard, pC: "text-orange-500 bg-orange-50 border-orange-200" },
                { id: "#PAY0016", date: "25 Jul 2025", payee: "Stellar Tools", desc: "Monthly Cleaning", inv: "#INV0016", amt: "$3,000", bank: "BOA - 4567329878", method: "Bank Transfer", status: "Unpaid", statC: "text-[#ff3b30] border-red-200 bg-red-50", icon: FileText, pC: "text-pink-500 bg-pink-50 border-pink-200" },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-slate-500">{row.id}</td>
                  <td className="p-4 text-slate-500">{row.date}</td>
                  <td className="p-4 flex items-center gap-2">
                    <div className={`p-1 border rounded ${row.pC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      <row.icon size={12} />
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">{row.payee}</span>
                  </td>
                  <td className="p-4 text-slate-500">{row.desc}</td>
                  <td className="p-4 text-slate-500">{row.inv}</td>
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{row.amt}</td>
                  <td className="p-4 text-slate-500">{row.bank}</td>
                  <td className="p-4 text-slate-500">{row.method}</td>
                  <td className="p-4 text-right">
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded border ${row.statC} dark:bg-opacity-10 dark:border-opacity-20`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default FinanceDashboard;

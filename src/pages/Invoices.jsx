import { 
  Search, 
  ChevronDown, 
  Plus, 
  MoreVertical,
  Download,
  RefreshCw,
  Filter,
  List,
  LayoutGrid,
  FileText,
  Hexagon,
  Triangle,
  CircleDot,
  Star,
  Square,
  Box,
  Layout,
  Settings2,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
  Printer,
  FileSearch
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AddInvoiceModal from '../components/AddInvoiceModal';
import InvoiceDetailModal from '../components/InvoiceDetailModal';

// Use standard icons for dynamic invoices
const getCompanyIcon = (name) => {
  if (!name) return CircleDot;
  const firstChar = name.charAt(0).toLowerCase();
  if (['a','e','i','o','u'].includes(firstChar)) return Hexagon;
  if (['b','c','d','f','g'].includes(firstChar)) return Box;
  if (['h','j','k','l','m'].includes(firstChar)) return Layout;
  return Triangle;
};

const getCompanyColor = (name) => {
  if (!name) return 'text-slate-500';
  const charCode = name.charCodeAt(0) % 5;
  const colors = ['text-blue-500', 'text-indigo-500', 'text-emerald-500', 'text-pink-500', 'text-orange-500'];
  return colors[charCode];
};

const getStatusBadge = (status) => {
  switch (status) {
    case 'paid': return 'bg-emerald-500 text-white shadow-sm';
    case 'partially paid': return 'bg-amber-500 text-white shadow-sm';
    case 'unpaid': 
    case 'draft': return 'bg-slate-500 text-white shadow-sm';
    case 'overdue': return 'bg-red-500 text-white shadow-sm';
    case 'sent': return 'bg-blue-500 text-white shadow-sm';
    default: return 'bg-slate-500 text-white shadow-sm';
  }
};

const Invoices = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editInvoiceData, setEditInvoiceData] = useState(null);
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [invoices, setInvoices] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const fetchInvoices = () => {
    const stored = localStorage.getItem('crms_invoices');
    if (stored) {
      try {
        setInvoices(JSON.parse(stored));
      } catch (e) {
        setInvoices([]);
      }
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = (id, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-7xl mx-auto pb-10">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Invoices</h1>
            <span className="px-2 py-0.5 bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 text-xs font-bold rounded">{invoices.length}</span>
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
            <span>Home</span>
            <span>{'>'}</span>
            <span className="text-slate-900 dark:text-white font-medium">Invoices</span>
          </div>
        </div>
        
    
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm transition-colors w-full sm:w-auto">
            <Filter size={14} className="text-slate-400" /> Filter <ChevronDown size={14} className="ml-1 opacity-70" />
          </button>
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
              <Search size={14} />
            </div>
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="flex items-center bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 rounded-lg p-1">
            <button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded transition-colors">
              <List size={16} />
            </button>
            <button className="p-1.5 bg-emerald-500 text-white rounded transition-colors shadow-sm">
              <LayoutGrid size={16} />
            </button>
          </div>
          <button 
              onClick={() => { setEditInvoiceData(null); setIsAddModalOpen(true); }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors shadow-md"
            >
              <Plus size={16} /> Add New Invoice
            </button>
        </div>
      </div>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {invoices.length === 0 ? (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center bg-white dark:bg-[#111624] border border-slate-200/70 dark:border-slate-800 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
             <FileText size={48} className="text-slate-300 dark:text-slate-700 mb-4" />
             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">No Invoices Found</h3>
             <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">You haven't created any invoices yet. Create your first invoice to get started.</p>
             <button 
                onClick={() => { setEditInvoiceData(null); setIsAddModalOpen(true); }}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-bold transition-colors shadow-md"
              >
                <Plus size={16} /> Add New Invoice
              </button>
          </div>
        ) : (
          invoices.map((inv, idx) => {
            const CIcon = getCompanyIcon(inv.customer_name);
            const SIcon = getCompanyIcon(inv.customer_name); // fallback sentTo icon
            const totalAmount = `$${parseFloat(inv.total || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            const isPaid = inv.status === 'paid';
            const paidAmount = isPaid ? totalAmount : '$0.00';
            const balanceAmount = isPaid ? '$0.00' : totalAmount;
            
            return (
              <div key={inv.id || idx} className="bg-white dark:bg-[#111624] rounded-xl border border-slate-200/70 dark:border-slate-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow flex flex-col p-5">
              
              {/* Card Header (ID & More) */}
              <div className="flex items-center justify-between mb-4 relative" ref={activeDropdown === inv.id ? dropdownRef : null}>
                <span className="inline-flex px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-lg border border-blue-200 dark:border-blue-500/20">
                  {inv.invoice_number || `#${inv.id}`}
                </span>
                
                <button 
                  onClick={(e) => toggleDropdown(inv.id, e)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded border border-slate-200 dark:border-slate-700 transition-colors bg-white dark:bg-[#111624] shadow-sm"
                >
                  <MoreVertical size={16} />
                </button>
                
                {/* Custom Dropdown Menu */}
                {activeDropdown === inv.id && (
                  <div className="absolute right-0 top-10 mt-1 w-56 bg-white dark:bg-[#111624] rounded-xl shadow-xl shadow-slate-900/10 dark:shadow-black/40 border border-slate-200 dark:border-slate-700 py-2 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setEditInvoiceData(inv); setIsAddModalOpen(true); setActiveDropdown(null); }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Edit size={16} className="text-slate-400" /> Edit
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      <Trash2 size={16} className="text-slate-400" /> Delete
                    </button>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/erp/invoices/${inv.id}`); setActiveDropdown(null); }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <FileSearch size={16} className="text-slate-400" /> View Invoice
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <CheckCircle2 size={16} className="text-slate-400" /> Mark as Paid
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <FileText size={16} className="text-slate-400" /> Mark as Partially Paid
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <Clock size={16} className="text-slate-400" /> Mark as Unpaid
                    </button>
                    <div className="h-px bg-slate-100 dark:bg-slate-800 my-1"></div>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate('/erp/invoices/template'); setActiveDropdown(null); }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <Settings2 size={16} className="text-slate-400" /> Format Template
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <Printer size={16} className="text-slate-400" /> Print
                    </button>
                  </div>
                )}
              </div>

              {/* Company & Status */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`p-1.5 rounded-lg bg-slate-50 dark:bg-[#0b0f19] border border-slate-100 dark:border-slate-800 ${getCompanyColor(inv.customer_name)}`}>
                    <CIcon size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-[15px] truncate max-w-[120px]">{inv.customer_name || 'Unknown'}</h3>
                </div>
                <span className={`inline-flex px-2 py-0.5 rounded text-[11px] font-bold capitalize ${getStatusBadge(inv.status)}`}>
                  {inv.status || 'Draft'}
                </span>
              </div>

              {/* Invoice Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Total Value :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{totalAmount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Due Date :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{inv.due_date || 'N/A'}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Paid Amount :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{paidAmount}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText size={14} className="text-slate-400" />
                  <span className="text-slate-500 dark:text-slate-400 w-32">Balance Amount :</span>
                  <span className="font-medium text-slate-900 dark:text-white">{balanceAmount}</span>
                </div>
              </div>

              {/* Footer: Sent to */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className={`p-1.5 rounded-full bg-slate-50 dark:bg-[#0b0f19] border border-slate-100 dark:border-slate-800 ${getCompanyColor(inv.customer_name)}`}>
                  <SIcon size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-slate-900 dark:text-white leading-tight truncate max-w-[150px]">{inv.customer_name || 'Client'}</span>
                  <span className="text-xs text-slate-400 leading-tight">Sent to</span>
                </div>
              </div>

            </div>
          );
        })
        )}
      </div>

     

      <AddInvoiceModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onInvoiceAdded={fetchInvoices} invoiceData={editInvoiceData} />

      <InvoiceDetailModal isOpen={isDetailModalOpen} onClose={() => setIsDetailModalOpen(false)} />
    </div>
  );
};

export default Invoices;

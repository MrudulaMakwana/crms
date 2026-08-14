import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, X, Upload, Plus, LayoutTemplate, Type, Palette, Image as ImageIcon } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const DUMMY_INVOICE = {
  invoice_number: "INV-PREVIEW",
  invoice_date: new Date().toISOString().split('T')[0],
  due_date: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  customer_name: "Acme Corporation",
  invoice_for: "Acme Corporation HQ\n123 Business Road\nSuite 400\nMetropolis, NY 10001",
  items: [
    { description: "Website Design & Development", qty: 1, price: "$5000.00", discount: "$0.00", total: "$5000.00" },
    { description: "SEO Optimization Setup", qty: 1, price: "$1500.00", discount: "$0.00", total: "$1500.00" },
    { description: "Monthly Server Hosting", qty: 12, price: "$50.00", discount: "$0.00", total: "$600.00" }
  ],
  subtotal: "$7100.00",
  tax: "$0.00",
  discount: "$0.00",
  total: "$7100.00",
  status: "unpaid"
};

const LEGACY_COLORS = {
  slate: '#64748b', gray: '#6b7280', zinc: '#71717a', neutral: '#737373', stone: '#78716c',
  red: '#ef4444', orange: '#f97316', amber: '#f59e0b', yellow: '#eab308', lime: '#84cc16',
  green: '#22c55e', emerald: '#10b981', teal: '#14b8a6', cyan: '#06b6d4', sky: '#0ea5e9',
  blue: '#3b82f6', indigo: '#6366f1', violet: '#8b5cf6', purple: '#a855f7', fuchsia: '#d946ef',
  pink: '#ec4899', rose: '#f43f5e'
};

const InvoiceTemplateSettings = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  
  const [activeTab, setActiveTab] = useState('general');

  // Format States
  const [templateStyle, setTemplateStyle] = useState('modern');
  const [tableBorders, setTableBorders] = useState('horizontal');
  const [borderStyle, setBorderStyle] = useState('solid');
  const [primaryFont, setPrimaryFont] = useState('inter');
  const [headingSize, setHeadingSize] = useState('md');
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [headerBg, setHeaderBg] = useState('transparent');
  const [tableHeaderStyle, setTableHeaderStyle] = useState('light');
  const [tableBorderColor, setTableBorderColor] = useState('#e2e8f0');
  const [showAccents, setShowAccents] = useState(false);
  const [logoPreview, setLogoPreview] = useState(null);
  const [logoSize, setLogoSize] = useState(100);

  // Load Initial
  useEffect(() => {
    const stored = localStorage.getItem('crms_invoice_format');
    if (stored) {
      try {
        const config = JSON.parse(stored);
        if (config.templateStyle) setTemplateStyle(config.templateStyle);
        if (config.tableBorders) setTableBorders(config.tableBorders);
        if (config.borderStyle) setBorderStyle(config.borderStyle);
        if (config.primaryFont) setPrimaryFont(config.primaryFont);
        if (config.headingSize) setHeadingSize(config.headingSize);
        if (config.primaryColor) setPrimaryColor(config.primaryColor.startsWith('#') ? config.primaryColor : (LEGACY_COLORS[config.primaryColor] || '#3b82f6'));
        if (config.headerBg) setHeaderBg(config.headerBg);
        if (config.tableHeaderStyle) setTableHeaderStyle(config.tableHeaderStyle);
        if (config.tableBorderColor) setTableBorderColor(config.tableBorderColor.startsWith('#') ? config.tableBorderColor : (LEGACY_COLORS[config.tableBorderColor] || '#e2e8f0'));
        if (config.showAccents !== undefined) setShowAccents(config.showAccents);
        if (config.logoPreview) setLogoPreview(config.logoPreview);
        if (config.logoSize) setLogoSize(config.logoSize);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSave = () => {
    const config = {
      templateStyle,
      tableBorders,
      borderStyle,
      primaryFont,
      headingSize,
      primaryColor,
      headerBg,
      tableHeaderStyle,
      tableBorderColor,
      showAccents,
      logoPreview,
      logoSize
    };
    localStorage.setItem('crms_invoice_format', JSON.stringify(config));
    navigate(-1); // go back
  };

  const handleReset = () => {
    setTemplateStyle('modern');
    setTableBorders('horizontal');
    setBorderStyle('solid');
    setPrimaryFont('inter');
    setHeadingSize('md');
    setPrimaryColor('#3b82f6');
    setHeaderBg('transparent');
    setTableHeaderStyle('light');
    setTableBorderColor('#e2e8f0');
    setShowAccents(false);
    setLogoPreview(null);
    setLogoSize(100);
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Preview Renderer
  const renderPreview = () => {
    // Determine font family
    const fontFamily = primaryFont === 'roboto' ? 'Roboto, sans-serif' : 
                       primaryFont === 'poppins' ? 'Poppins, sans-serif' : 
                       primaryFont === 'merriweather' ? 'Merriweather, serif' : 
                       primaryFont === 'opensans' ? '"Open Sans", sans-serif' : undefined;

    const fontClass = primaryFont === 'roboto' ? 'font-sans' : 
                      primaryFont === 'merriweather' ? 'font-serif' : 
                      primaryFont === 'poppins' ? 'font-[Poppins]' : 
                      primaryFont === 'opensans' ? 'font-sans' : '';

    const headerBgClass = headerBg === 'primary' 
      ? `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)] -mx-8 -mt-8 px-8 pt-8 sm:-mx-12 sm:-mt-12 sm:px-12 sm:pt-12 rounded-t-xl` 
      : headerBg === 'gray' 
        ? 'bg-slate-50 dark:bg-slate-800/20 -mx-8 -mt-8 px-8 pt-8 sm:-mx-12 sm:-mt-12 sm:px-12 sm:pt-12 rounded-t-xl' 
        : '';

    const headingClass = headingSize === 'lg' ? 'text-3xl' : headingSize === 'sm' ? 'text-xl' : 'text-2xl';

    // Border Style Maps
    const bStyleClass = {
      solid: `border-solid border-[var(--theme-border)]`, dashed: `border-dashed border-[var(--theme-border)]`, dotted: `border-dotted border-[var(--theme-border)]`,
      double: `border-double border-[var(--theme-border)]`, groove: `[border-style:groove] border-[var(--theme-border)]`, ridge: `[border-style:ridge] border-[var(--theme-border)]`,
      inset: `[border-style:inset] border-[var(--theme-border)]`, outset: `[border-style:outset] border-[var(--theme-border)]`, none: 'border-none', hidden: 'border-hidden'
    }[borderStyle] || `border-solid border-[var(--theme-border)]`;

    const divStyleClass = {
      solid: `divide-solid divide-[var(--theme-border)]`, dashed: `divide-dashed divide-[var(--theme-border)]`, dotted: `divide-dotted divide-[var(--theme-border)]`,
      double: `divide-double divide-[var(--theme-border)]`, groove: `[&>*:not(:first-child)]:[border-style:groove] divide-[var(--theme-border)]`, ridge: `[&>*:not(:first-child)]:[border-style:ridge] divide-[var(--theme-border)]`,
      inset: `[&>*:not(:first-child)]:[border-style:inset] divide-[var(--theme-border)]`, outset: `[&>*:not(:first-child)]:[border-style:outset] divide-[var(--theme-border)]`, none: 'divide-none', hidden: 'divide-hidden'
    }[borderStyle] || `divide-solid divide-[var(--theme-border)]`;

    // Table Border Logic
    const tableWrapperClass = tableBorders === 'none' || tableBorders === 'horizontal' ? '' : `border rounded-lg ${bStyleClass}`;
    
    // Header row borders
    const thBaseClass = "px-5 py-4";
    const thBorderClass = tableBorders === 'all' ? `border-r ${bStyleClass}` : '';
    
    let theadClass = `font-bold text-slate-900 dark:text-white ${templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)]`}`;
    if (tableHeaderStyle === 'solid') {
      theadClass = `font-bold bg-[var(--theme-primary)] text-white ${templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : ''}`;
    } else if (tableHeaderStyle === 'transparent') {
      theadClass = `font-bold text-slate-900 dark:text-white ${templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : ''}`;
    }
    const tdBaseClass = "px-5 py-4 text-slate-600 dark:text-slate-400";

    return (
      <div 
        className={`relative overflow-hidden w-full max-w-[800px] mx-auto bg-white dark:bg-[#111624] shadow-2xl border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-12 text-[13px] ${fontClass}`}
        style={{ 
          fontFamily,
          '--theme-primary': primaryColor,
          '--theme-primary-light': primaryColor + '1A',
          '--theme-primary-dark': primaryColor + '33',
          '--theme-border': tableBorderColor,
        }}
      >
        {showAccents && (
          <>
            <svg viewBox="0 0 1440 320" className={`absolute top-0 left-0 w-full opacity-10 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <svg viewBox="0 0 1440 320" className={`absolute top-0 left-0 w-full opacity-20 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none" style={{transform: 'translateY(-20px)'}}>
              <path fill="currentColor" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </>
        )}

        {/* Top Header */}
        <div className={`relative z-10 flex justify-between items-start mb-10 pb-10 border-b border-slate-100 dark:border-slate-800 ${headerBgClass}`}>
          <div className="space-y-2">
            <div className={`flex items-center gap-2 font-black text-slate-900 dark:text-white tracking-tight mb-2 ${headingClass}`}>
              {logoPreview ? (
                <img src={logoPreview} alt="Logo" style={{ width: `${logoSize}px` }} className="max-w-full object-contain" />
              ) : (
                <div className="flex -space-x-2 mr-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
              )}
              {!logoPreview && "CRMS"}
            </div>
            <p className="text-slate-500">3099 Kennedy Court Framingham, MA 01702</p>
          </div>
          <div className="space-y-1.5 text-right">
            <p className="font-medium text-slate-600 dark:text-slate-400">Invoice No : <span className="font-bold text-[var(--theme-primary)]">{DUMMY_INVOICE.invoice_number}</span></p>
            <p className="font-medium text-slate-600 dark:text-slate-400">Invoice Date : <span className="font-bold text-slate-900 dark:text-white">{DUMMY_INVOICE.invoice_date}</span></p>
            <p className="font-medium text-slate-600 dark:text-slate-400">Due date : <span className="font-bold text-slate-900 dark:text-white">{DUMMY_INVOICE.due_date}</span></p>
          </div>
        </div>

        {/* Addresses */}
        <div className="relative z-10 grid grid-cols-2 gap-10 mb-10">
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Invoice From :</h4>
            <div className="space-y-1.5">
              <p className="font-bold text-slate-800 dark:text-slate-200">{user?.name || 'Alexander Pierce'}</p>
              <p className="text-slate-500">3099 Kennedy Court Framingham, MA 01702</p>
              <p className="text-slate-500">Email : <span className="text-[var(--theme-primary)]">{user?.email || 'admin@crms.com'}</span></p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-base">Invoice To :</h4>
            <div className="space-y-1.5 whitespace-pre-line text-slate-500">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">{DUMMY_INVOICE.customer_name}</span>
              {DUMMY_INVOICE.invoice_for}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className={`relative z-10 overflow-hidden mb-8 ${tableWrapperClass}`}>
          <table className={`w-full text-left ${tableBorders === 'all' ? `divide-y divide-x ${divStyleClass}` : ''}`}>
            <thead className={theadClass}>
              <tr>
                <th className={`${thBaseClass} w-1/2 ${thBorderClass}`}>Job Description</th>
                <th className={`${thBaseClass} ${thBorderClass}`}>Qty</th>
                <th className={`${thBaseClass} ${thBorderClass}`}>Price</th>
                <th className={`${thBaseClass} ${thBorderClass}`}>Discount</th>
                <th className={`${thBaseClass}`}>Total</th>
              </tr>
            </thead>
            <tbody className={`${tableBorders === 'none' || tableBorders === 'outer' ? 'divide-none' : `divide-y ${divStyleClass}`}`}>
              {DUMMY_INVOICE.items.map((item, idx) => (
                <tr key={idx} className={tableBorders === 'all' ? `divide-x ${divStyleClass}` : ''}>
                  <td className={`${tdBaseClass}`}>{item.description}</td>
                  <td className={`${tdBaseClass}`}>{item.qty}</td>
                  <td className={`${tdBaseClass}`}>{item.price}</td>
                  <td className={`${tdBaseClass}`}>{item.discount}</td>
                  <td className={`${tdBaseClass} font-medium text-slate-900 dark:text-white`}>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals */}
        <div className="relative z-10 flex justify-end mb-16">
          <div className="w-1/2 min-w-[300px] space-y-4 text-[15px]">
            <div className={`flex justify-between items-center pb-4 ${tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-bold text-slate-900 dark:text-white">Sub Total</span>
              <span className="font-bold text-slate-900 dark:text-white">{DUMMY_INVOICE.subtotal}</span>
            </div>
            <div className={`flex justify-between items-center pb-4 ${tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-medium text-slate-600 dark:text-slate-400">Discount (0%)</span>
              <span className="font-medium text-slate-600 dark:text-slate-400">{DUMMY_INVOICE.discount}</span>
            </div>
            <div className={`flex justify-between items-center pb-4 ${tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-medium text-slate-600 dark:text-slate-400">Tax (5%)</span>
              <span className="font-medium text-slate-600 dark:text-slate-400">{DUMMY_INVOICE.tax}</span>
            </div>
            {(() => {
              const bgClass = tableHeaderStyle === 'solid' 
                ? `bg-[var(--theme-primary)]` 
                : headerBg === 'primary' 
                  ? `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)]` 
                  : 'bg-slate-50 dark:bg-slate-800/30';
              const textColorClass = tableHeaderStyle === 'solid' 
                ? 'text-white' 
                : 'text-slate-900 dark:text-white';
              const amtColorClass = tableHeaderStyle === 'solid'
                ? 'text-white'
                : `text-[var(--theme-primary)]`;

              return (
                <div className={`flex flex-col gap-1 py-4 rounded-lg px-4 ${bgClass}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-black ${textColorClass}`}>Total Amount</span>
                    <span className={`font-black ${amtColorClass} text-xl`}>{DUMMY_INVOICE.total}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 text-center space-y-3 pt-10 border-t border-slate-100 dark:border-slate-800/80">
           <div className={`flex items-center justify-center gap-2 font-black text-slate-900 dark:text-white tracking-tight mb-4 ${headingClass}`}>
              {logoPreview ? (
                <img src={logoPreview} alt="Logo" style={{ width: `${logoSize / 2}px` }} className="max-w-full object-contain" />
              ) : (
                <div className="flex -space-x-2 mr-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
              )}
              {!logoPreview && "CRMS"}
            </div>
            <p className="text-slate-500">Payment Made Via bank transfer / Cheque in the name of Thomas Lawler</p>
            <p className="text-slate-500">
              Bank Name : <span className="font-medium text-slate-700 dark:text-slate-300">HDFC Bank</span> Account Number : <span className="font-medium text-slate-700 dark:text-slate-300">45366287987</span> IFSC : <span className="font-medium text-slate-700 dark:text-slate-300">HDFC0018159</span>
            </p>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-64px)] -m-4 md:-m-6 flex flex-col md:flex-row bg-slate-100 dark:bg-[#06080d] overflow-hidden">
      
      {/* LEFT PANEL - CONTROLS */}
      <div className="w-full md:w-96 flex-shrink-0 bg-white dark:bg-[#0b0f19] border-r border-slate-200/60 dark:border-slate-800/50 flex flex-col h-full z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-[#0b0f19]/50">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Format Template</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Customize invoice appearance</p>
          </div>
          <button onClick={() => navigate(-1)} className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl transition-colors shadow-sm">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-6 pt-6 mb-6">
            <div className="flex gap-1 p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl overflow-x-auto hide-scrollbar">
              <button 
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-2 flex-1 min-w-[100px] justify-center py-2.5 px-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'general' ? 'bg-white dark:bg-[#111624] text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <LayoutTemplate size={16} /> General
              </button>
              <button 
                onClick={() => setActiveTab('typography')}
                className={`flex items-center gap-2 flex-1 min-w-[110px] justify-center py-2.5 px-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'typography' ? 'bg-white dark:bg-[#111624] text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <Type size={16} /> Typography
              </button>
              <button 
                onClick={() => setActiveTab('colors')}
                className={`flex items-center gap-2 flex-1 min-w-[90px] justify-center py-2.5 px-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'colors' ? 'bg-white dark:bg-[#111624] text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <Palette size={16} /> Colors
              </button>
              <button 
                onClick={() => setActiveTab('logo')}
                className={`flex items-center gap-2 flex-1 min-w-[90px] justify-center py-2.5 px-3 text-sm font-semibold rounded-lg transition-all ${activeTab === 'logo' ? 'bg-white dark:bg-[#111624] text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <ImageIcon size={16} /> Logo
              </button>
            </div>
          </div>

          <div className="px-6 pb-6">
            {activeTab === 'general' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[13px] font-bold text-blue-900 dark:text-blue-300">Show Decorative Accents</label>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={showAccents} onChange={(e) => setShowAccents(e.target.checked)} />
                      <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <p className="text-xs text-blue-700/70 dark:text-blue-400/70">Adds elegant wave styling graphics to the top and bottom of the invoice page matching your primary theme color.</p>
                </div>
                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Template Style</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => setTemplateStyle('modern')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${templateStyle === 'modern' ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-800 hover:border-blue-300'}`}
                    >
                      <div className="w-full h-2 bg-blue-600 rounded mb-2 w-1/3"></div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
                      <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mt-4 mb-2"></div>
                      <span className={`text-xs font-bold ${templateStyle === 'modern' ? 'text-blue-700 dark:text-blue-400' : 'text-slate-500'}`}>Modern</span>
                    </button>
                    <button 
                      onClick={() => setTemplateStyle('classic')}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${templateStyle === 'classic' ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-500/10' : 'border-slate-200 dark:border-slate-800 hover:border-blue-300'}`}
                    >
                      <div className="flex justify-between mb-2">
                        <div className="w-8 h-2 bg-slate-400 rounded"></div>
                        <div className="w-8 h-2 bg-slate-400 rounded"></div>
                      </div>
                      <div className="w-full h-px bg-slate-300 dark:bg-slate-600 mb-1"></div>
                      <div className="w-full h-px bg-slate-300 dark:bg-slate-600 mt-4 mb-2"></div>
                      <span className={`text-xs font-bold ${templateStyle === 'classic' ? 'text-blue-700 dark:text-blue-400' : 'text-slate-500'}`}>Classic</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Table Header Style</label>
                  <select 
                    value={tableHeaderStyle}
                    onChange={(e) => setTableHeaderStyle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="light">Light Tint (Default)</option>
                    <option value="solid">Solid Color (Dark)</option>
                    <option value="transparent">Transparent</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Table Borders Layout</label>
                  <select 
                    value={tableBorders}
                    onChange={(e) => setTableBorders(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="horizontal">Horizontal Only</option>
                    <option value="all">All Borders</option>
                    <option value="outer">Outer Box Only</option>
                    <option value="none">No Borders</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Border Line Style</label>
                  <select 
                    value={borderStyle}
                    onChange={(e) => setBorderStyle(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="solid">Solid (Default)</option>
                    <option value="dashed">Dashed</option>
                    <option value="dotted">Dotted</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove (3D)</option>
                    <option value="ridge">Ridge (3D)</option>
                    <option value="inset">Inset (3D)</option>
                    <option value="outset">Outset (3D)</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'typography' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Primary Font</label>
                  <select 
                    value={primaryFont}
                    onChange={(e) => setPrimaryFont(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="inter">Inter (Default)</option>
                    <option value="roboto">Roboto</option>
                    <option value="opensans">Open Sans</option>
                    <option value="poppins">Poppins</option>
                    <option value="merriweather">Merriweather (Serif)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Heading Size Base</label>
                  <select 
                    value={headingSize}
                    onChange={(e) => setHeadingSize(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="sm">Small</option>
                    <option value="md">Medium (Default)</option>
                    <option value="lg">Large</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'colors' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Primary Theme Color</label>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input 
                        type="color" 
                        value={primaryColor} 
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="absolute opacity-0 w-full h-full cursor-pointer inset-0 z-10"
                        title="Choose Primary Color"
                      />
                      <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-105" style={{ backgroundColor: primaryColor }}></div>
                    </div>
                    <input 
                      type="text" 
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm uppercase w-28 focus:outline-none focus:border-blue-500 font-mono text-slate-900 dark:text-white"
                      placeholder="#000000"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Table Border Color</label>
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input 
                        type="color" 
                        value={tableBorderColor} 
                        onChange={(e) => setTableBorderColor(e.target.value)}
                        className="absolute opacity-0 w-full h-full cursor-pointer inset-0 z-10"
                        title="Choose Border Color"
                      />
                      <div className="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:scale-105" style={{ backgroundColor: tableBorderColor }}></div>
                    </div>
                    <input 
                      type="text" 
                      value={tableBorderColor}
                      onChange={(e) => setTableBorderColor(e.target.value)}
                      className="px-3 py-2 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-lg text-sm uppercase w-28 focus:outline-none focus:border-blue-500 font-mono text-slate-900 dark:text-white"
                      placeholder="#000000"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 pt-4">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Header Background</label>
                  <select 
                    value={headerBg}
                    onChange={(e) => setHeaderBg(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors"
                  >
                    <option value="transparent">Transparent (Clean)</option>
                    <option value="primary">Primary Color Fill</option>
                    <option value="gray">Subtle Gray</option>
                  </select>
                </div>
              </div>
            )}

            {activeTab === 'logo' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">Company Logo</label>
                  
                  {logoPreview ? (
                    <div className="relative border-2 border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-800/20">
                      <img src={logoPreview} alt="Logo preview" style={{ width: `${logoSize}px` }} className="max-w-full object-contain" />
                      <button 
                        onClick={() => setLogoPreview(null)}
                        className="absolute top-2 right-2 p-1.5 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ) : (
                    <label className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
                      <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                      <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-full mb-3 group-hover:scale-110 transition-transform">
                        <Upload size={20} />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Click to upload image</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">SVG, PNG, JPG (max. 2MB)</p>
                    </label>
                  )}
                </div>
                
                <div className="space-y-2 pt-2">
                  <label className="text-[13px] font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>Logo Size</span>
                    <span className="text-blue-600 dark:text-blue-400">{logoSize}px</span>
                  </label>
                  <input 
                    type="range" 
                    min="50" max="200" 
                    value={logoSize}
                    onChange={(e) => setLogoSize(e.target.value)}
                    className="w-full accent-blue-600" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-[#0b0f19]/50">
          <button onClick={handleReset} className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            Reset Defaults
          </button>
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-md shadow-blue-500/20"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </div>

      {/* RIGHT PANEL - LIVE PREVIEW */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 relative flex items-start justify-center">
        {/* Subtle dot pattern background for preview area */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        <div className="w-full max-w-4xl relative z-10 transition-all duration-300">
          {renderPreview()}
        </div>
      </div>

    </div>
  );
};

export default InvoiceTemplateSettings;

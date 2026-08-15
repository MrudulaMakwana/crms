import React from 'react';
import { ArrowLeft, Download, Printer, Copy, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';

const LEGACY_COLORS = {
  slate: '#64748b', gray: '#6b7280', zinc: '#71717a', neutral: '#737373', stone: '#78716c',
  red: '#ef4444', orange: '#f97316', amber: '#f59e0b', yellow: '#eab308', lime: '#84cc16',
  green: '#22c55e', emerald: '#10b981', teal: '#14b8a6', cyan: '#06b6d4', sky: '#0ea5e9',
  blue: '#3b82f6', indigo: '#6366f1', violet: '#8b5cf6', purple: '#a855f7', fuchsia: '#d946ef',
  pink: '#ec4899', rose: '#f43f5e'
};

const InvoiceDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuthStore();

  const [invoiceData, setInvoiceData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [formatSettings, setFormatSettings] = React.useState({});
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");
  const invoiceRef = React.useRef(null);

  const handleDownload = async () => {
    setIsDownloading(true);
    setSuccess("");
    setError("");
    
    // Remember current theme
    const isDark = document.documentElement.classList.contains('dark');
    
    try {
      // Temporarily force light mode so white text doesn't render on white background
      if (isDark) {
        document.documentElement.classList.remove('dark');
        // Give browser time to repaint
        await new Promise(resolve => setTimeout(resolve, 50));
      }

      const element = invoiceRef.current;
      
      // Use standard A4 page dimensions
      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      // Capture the element using html-to-image (supports Tailwind v4 and oklch perfectly)
      const imgData = await toPng(element, { 
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff'
      });
      
      // Calculate aspect ratio to fit the image on the PDF perfectly
      const imgProps = pdf.getImageProperties(imgData);
      const ratio = imgProps.width / imgProps.height;
      const calcHeight = pdfWidth / ratio;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, calcHeight);
      pdf.save(`Invoice_${invoiceData.invoice_number}.pdf`);
      
      setSuccess("Invoice downloaded successfully!");
      setTimeout(() => setSuccess(""), 3000);
    } catch (e) {
      console.error("PDF Generation failed:", e);
      setError("Failed to generate PDF document. Please try again.");
      setTimeout(() => setError(""), 3000);
    } finally {
      // Restore dark mode
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
      setIsDownloading(false);
    }
  };

  React.useEffect(() => {
    // Load formatting
    const storedFormat = localStorage.getItem('crms_invoice_format');
    if (storedFormat) {
      try {
        setFormatSettings(JSON.parse(storedFormat));
      } catch (e) {
        console.error(e);
      }
    }

    const fetchInvoice = () => {
      const stored = localStorage.getItem('crms_invoices');
      if (stored) {
        try {
          const invoices = JSON.parse(stored);
          const found = invoices.find(inv => inv.id.toString() === id);
          if (found) {
            // Map the stored format to the display format
            setInvoiceData({
              invoice_number: found.invoice_number || `#INV${found.id}`,
              invoice_date: found.invoice_date,
              due_date: found.due_date,
              status: found.status,
              from: {
                name: user ? `${user.name} (CRMS)` : "CRMS Admin",
                address: "3099 Kennedy Court Framingham, MA 01702",
                email: user ? user.email : "admin@crms.com",
                phone: "+1 987 654 3210"
              },
              to: {
                name: found.customer_name || "Unknown Customer",
                address: found.customer_address || found.billing_address || "N/A",
                email: found.customer_email || "N/A",
                phone: "N/A"
              },
              invoice_for: found.notes || "Services Rendered",
              items: found.items ? found.items.map(item => ({
                description: item.description,
                qty: item.quantity,
                price: `$${parseFloat(item.unit_price || 0).toFixed(2)}`,
                discount: "$0.00", // Not tracked per item
                total: `$${(item.quantity * parseFloat(item.unit_price || 0)).toFixed(2)}`
              })) : [],
              subtotal: `$${parseFloat(found.subtotal || 0).toFixed(2)}`,
              discount: `$${parseFloat(found.discount_amount || 0).toFixed(2)} (${found.discount_percentage || 0}%)`,
              vat: `$${parseFloat(found.tax_amount || 0).toFixed(2)} (${found.tax_percentage || 0}%)`,
              totalAmount: `$${parseFloat(found.total || 0).toFixed(2)}`,
              amount_in_words: "Refer to total amount",
              terms: found.terms_conditions || "Please pay within 15 days from the date of invoice.",
              notes: found.notes || "Thank you for your business.",
              bank: {
                name: "HDFC Bank",
                account: "45366287987",
                ifsc: "HDFC0018159"
              }
            });
          }
        } catch (e) {
          console.error(e);
        }
      }
      setLoading(false);
    };
    
    fetchInvoice();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-64 text-slate-500">Loading invoice...</div>;
  }

  if (!invoiceData) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Invoice Not Found</h2>
        <p className="text-slate-500">The invoice you are looking for does not exist or has been deleted.</p>
        <button onClick={() => navigate('/erp/invoices')} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Return to Invoices</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 relative">
      
      {/* Success Toast */}
      {success && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-top-10 fade-in duration-300 zoom-in-95">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-[#111624] border border-emerald-200 dark:border-emerald-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-2xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <CheckCircle2 size={18} />
            </div>
            <span className="font-bold text-sm text-slate-900 dark:text-white">{success}</span>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[200] animate-in slide-in-from-top-10 fade-in duration-300 zoom-in-95">
          <div className="flex items-center gap-3 px-5 py-3.5 bg-white dark:bg-[#111624] border border-red-200 dark:border-red-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] rounded-2xl">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400">
              <AlertCircle size={18} />
            </div>
            <span className="font-bold text-sm text-slate-900 dark:text-white">{error}</span>
          </div>
        </div>
      )}

      {/* Header Actions */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">Invoices Details</h1>
          <button 
            onClick={() => navigate('/erp/invoices')}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={16} /> Back to Invoice
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => window.print()} className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-bold transition-colors shadow-sm">
            <Printer size={16} /> Print Invoice
          </button>
          <a 
            href={`mailto:${invoiceData.to.email}?subject=Invoice ${invoiceData.invoice_number}`}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg text-sm font-bold transition-colors shadow-sm"
          >
            <Mail size={16} /> Send Email
          </a>
          <button 
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-lg text-sm font-bold transition-colors shadow-sm"
          >
            {isDownloading ? (
              <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
              <Download size={16} />
            )}
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </div>
      </div>

      {/* Invoice Paper Document */}
      {(() => {
        let primaryColorHex = formatSettings.primaryColor || '#3b82f6';
        if (!primaryColorHex.startsWith('#')) primaryColorHex = LEGACY_COLORS[primaryColorHex] || '#3b82f6';
        
        let borderColorHex = formatSettings.tableBorderColor || '#e2e8f0';
        if (!borderColorHex.startsWith('#')) borderColorHex = LEGACY_COLORS[borderColorHex] || '#e2e8f0';

        const headerBgClass = formatSettings.headerBg === 'primary' 
          ? `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)] -mx-8 -mt-8 px-8 pt-8 sm:-mx-12 sm:-mt-12 sm:px-12 sm:pt-12 rounded-t-xl mb-8` 
          : formatSettings.headerBg === 'gray' 
            ? 'bg-slate-50 dark:bg-slate-800/20 -mx-8 -mt-8 px-8 pt-8 sm:-mx-12 sm:-mt-12 sm:px-12 sm:pt-12 rounded-t-xl mb-8' 
            : 'mb-8';

        const footerBgClass = formatSettings.headerBg === 'primary'
          ? `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)] -mx-8 -mb-8 px-8 pb-8 sm:-mx-12 sm:-mb-12 sm:px-12 sm:pb-12 rounded-b-xl mt-8 pt-8`
          : formatSettings.headerBg === 'gray'
            ? 'bg-slate-50 dark:bg-slate-800/20 -mx-8 -mb-8 px-8 pb-8 sm:-mx-12 sm:-mb-12 sm:px-12 sm:pb-12 rounded-b-xl mt-8 pt-8'
            : 'border-t border-slate-100 dark:border-slate-800/80 pt-10';

        const showAccents = formatSettings.showAccents || false;
        return (
      <div 
        ref={invoiceRef} 
        className={`relative overflow-hidden bg-white dark:bg-[#111624] shadow-sm border border-slate-200 dark:border-slate-800 rounded-xl p-8 sm:p-12 text-sm
          ${formatSettings.primaryFont === 'roboto' ? 'font-sans' : ''}
          ${formatSettings.primaryFont === 'merriweather' ? 'font-serif' : ''}
          ${formatSettings.primaryFont === 'poppins' ? 'font-[Poppins]' : ''}
        `}
        style={{
          fontFamily: formatSettings.primaryFont === 'roboto' ? 'Roboto, sans-serif' : formatSettings.primaryFont === 'poppins' ? 'Poppins, sans-serif' : formatSettings.primaryFont === 'merriweather' ? 'Merriweather, serif' : undefined,
          '--theme-primary': primaryColorHex,
          '--theme-primary-light': primaryColorHex + '1A',
          '--theme-primary-dark': primaryColorHex + '33',
          '--theme-border': borderColorHex,
        }}
      >
        {formatSettings.showAccents && (
          <>
            {/* Top Wave Accent */}
            <svg viewBox="0 0 1440 320" className={`absolute top-0 left-0 w-full opacity-10 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none">
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <svg viewBox="0 0 1440 320" className={`absolute top-0 left-0 w-full opacity-20 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none" style={{transform: 'translateY(-20px)'}}>
              <path fill="currentColor" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,170.7C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
          </>
        )}
        
        {/* Top Header */}
        <div className={`relative z-10 flex justify-between items-start pb-10 border-b border-slate-100 dark:border-slate-800 ${headerBgClass}`}>
          <div className="space-y-2">
            <div className={`flex items-center gap-2 font-black text-slate-900 dark:text-white tracking-tight mb-2 ${formatSettings.headingSize === 'lg' ? 'text-3xl' : formatSettings.headingSize === 'sm' ? 'text-xl' : 'text-2xl'}`}>
              {formatSettings.logoPreview ? (
                <img src={formatSettings.logoPreview} alt="Logo" style={{ width: `${formatSettings.logoSize || 100}px` }} className="max-w-full object-contain" />
              ) : (
                <div className="flex -space-x-2 mr-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
              )}
              {!formatSettings.logoPreview && "CRMS"}
            </div>
            <p className="text-slate-500">3099 Kennedy Court Framingham, MA 01702</p>
          </div>
          <div className="space-y-1.5 text-right">
            <p className="font-medium text-slate-600 dark:text-slate-400">Invoice No : <span className={`font-bold text-[var(--theme-primary)]`}>{invoiceData.invoice_number}</span></p>
            <p className="font-medium text-slate-600 dark:text-slate-400">Invoice Date : <span className="font-bold text-slate-900 dark:text-white">{invoiceData.invoice_date}</span></p>
            <p className="font-medium text-slate-600 dark:text-slate-400">Due date : <span className="font-bold text-slate-900 dark:text-white">{invoiceData.due_date}</span></p>
          </div>
        </div>

        {/* Addresses */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-2">
            <p className="font-bold text-slate-900 dark:text-white mb-2">From</p>
            <p className="font-bold text-slate-900 dark:text-white text-base">{invoiceData.from.name}</p>
            <p className="text-slate-500 leading-relaxed">{invoiceData.from.address}</p>
            <p className="text-slate-500">Email : <span className="text-slate-700 dark:text-slate-300">{invoiceData.from.email}</span></p>
            <p className="text-slate-500">Phone : <span className="text-slate-700 dark:text-slate-300">{invoiceData.from.phone}</span></p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-slate-900 dark:text-white mb-2">To</p>
            <p className="font-bold text-slate-900 dark:text-white text-base">{invoiceData.to.name}</p>
            <p className="text-slate-500 leading-relaxed">{invoiceData.to.address}</p>
            <p className="text-slate-500">Email : <span className="text-slate-700 dark:text-slate-300">{invoiceData.to.email}</span></p>
            <p className="text-slate-500">Phone : <span className="text-slate-700 dark:text-slate-300">{invoiceData.to.phone}</span></p>
          </div>
        </div>

        {/* Invoice For */}
        <p className="relative z-10 font-medium text-slate-500 mb-4">Invoice For : <span className="font-bold text-slate-800 dark:text-slate-200">{invoiceData.invoice_for}</span></p>

        {/* Border Style Maps */}
        {(() => {
          const bStyleClass = {
            solid: `border-solid border-[var(--theme-border)]`, dashed: `border-dashed border-[var(--theme-border)]`, dotted: `border-dotted border-[var(--theme-border)]`,
            double: `border-double border-[var(--theme-border)]`, groove: `[border-style:groove] border-[var(--theme-border)]`, ridge: `[border-style:ridge] border-[var(--theme-border)]`,
            inset: `[border-style:inset] border-[var(--theme-border)]`, outset: `[border-style:outset] border-[var(--theme-border)]`, none: 'border-none', hidden: 'border-hidden'
          }[formatSettings.borderStyle || 'solid'] || `border-solid border-[var(--theme-border)]`;

          const divStyleClass = {
            solid: `divide-solid divide-[var(--theme-border)]`, dashed: `divide-dashed divide-[var(--theme-border)]`, dotted: `divide-dotted divide-[var(--theme-border)]`,
            double: `divide-double divide-[var(--theme-border)]`, groove: `[&>*:not(:first-child)]:[border-style:groove] divide-[var(--theme-border)]`, ridge: `[&>*:not(:first-child)]:[border-style:ridge] divide-[var(--theme-border)]`,
            inset: `[&>*:not(:first-child)]:[border-style:inset] divide-[var(--theme-border)]`, outset: `[&>*:not(:first-child)]:[border-style:outset] divide-[var(--theme-border)]`, none: 'divide-none', hidden: 'divide-hidden'
          }[formatSettings.borderStyle || 'solid'] || `divide-solid divide-[var(--theme-border)]`;

          const tableWrapperClass = formatSettings.tableBorders === 'none' || formatSettings.tableBorders === 'horizontal' ? '' : `border rounded-lg ${bStyleClass}`;
          const thBorderClass = formatSettings.tableBorders === 'all' ? `border-r ${bStyleClass}` : '';
          
          let theadClass = `font-bold text-slate-900 dark:text-white ${formatSettings.templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)]`}`;
          if (formatSettings.tableHeaderStyle === 'solid') {
            theadClass = `font-bold bg-[var(--theme-primary)] text-white ${formatSettings.templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : ''}`;
          } else if (formatSettings.tableHeaderStyle === 'transparent') {
            theadClass = `font-bold text-slate-900 dark:text-white ${formatSettings.templateStyle === 'classic' ? `border-b-2 ${bStyleClass}` : ''}`;
          }

          return (
            <div className={`relative z-10 overflow-hidden mb-8 ${tableWrapperClass}`}>
              <table className={`w-full text-left ${formatSettings.tableBorders === 'all' ? `divide-y divide-x ${divStyleClass}` : ''}`}>
                <thead className={theadClass}>
                  <tr>
                    <th className={`px-5 py-4 w-1/2 ${thBorderClass}`}>Job Description</th>
                    <th className={`px-5 py-4 ${thBorderClass}`}>Qty</th>
                    <th className={`px-5 py-4 ${thBorderClass}`}>Price</th>
                    <th className={`px-5 py-4 ${thBorderClass}`}>Discount</th>
                    <th className="px-5 py-4">Total</th>
                  </tr>
                </thead>
                <tbody className={`${formatSettings.tableBorders === 'none' || formatSettings.tableBorders === 'outer' ? 'divide-none' : `divide-y ${divStyleClass}`}`}>
                  {invoiceData.items.map((item, idx) => (
                    <tr key={idx} className={formatSettings.tableBorders === 'all' ? `divide-x ${divStyleClass}` : ''}>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.description}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.qty}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.price}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400">{item.discount}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400 font-medium">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })()}


        {/* Totals & Notes Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1.5">Terms and Conditions</p>
              <p className="text-slate-500 leading-relaxed pr-8">{invoiceData.terms}</p>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white mb-1.5">Notes</p>
              <p className="text-slate-500">{invoiceData.notes}</p>
            </div>
          </div>
          
          <div className="space-y-4 text-[15px]">
            <div className={`flex justify-between items-center pb-4 ${formatSettings.tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-bold text-slate-900 dark:text-white">Sub Total</span>
              <span className="font-bold text-slate-900 dark:text-white">{invoiceData.subtotal}</span>
            </div>
            <div className={`flex justify-between items-center pb-4 ${formatSettings.tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-medium text-slate-600 dark:text-slate-400">Discount (0%)</span>
              <span className="font-medium text-slate-600 dark:text-slate-400">{invoiceData.discount}</span>
            </div>
            <div className={`flex justify-between items-center pb-4 ${formatSettings.tableBorders !== 'none' ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}>
              <span className="font-medium text-slate-600 dark:text-slate-400">Tax (5%)</span>
              <span className="font-medium text-slate-600 dark:text-slate-400">{invoiceData.vat}</span>
            </div>
            {(() => {
              const bgClass = formatSettings.tableHeaderStyle === 'solid' 
                ? `bg-[var(--theme-primary)]` 
                : formatSettings.headerBg === 'primary' 
                  ? `bg-[var(--theme-primary-light)] dark:bg-[var(--theme-primary-dark)]` 
                  : 'bg-slate-50 dark:bg-slate-800/30';
              const textColorClass = formatSettings.tableHeaderStyle === 'solid' 
                ? 'text-white' 
                : 'text-slate-900 dark:text-white';
              const amtColorClass = formatSettings.tableHeaderStyle === 'solid'
                ? 'text-white'
                : `text-[var(--theme-primary)]`;
              const pColorClass = formatSettings.tableHeaderStyle === 'solid'
                ? 'text-white/80'
                : 'text-slate-500';

              return (
                <div className={`flex flex-col gap-1 py-4 rounded-lg px-4 ${bgClass}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-black ${textColorClass}`}>Total Amount</span>
                    <span className={`font-black ${amtColorClass} text-xl`}>{invoiceData.totalAmount}</span>
                  </div>
                  <p className={`text-right text-sm ${pColorClass}`}>Amount in Words : {invoiceData.amount_in_words}</p>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Signature */}
        <div className="relative z-10 flex justify-end mb-16">
          <div className="text-center">
            {/* Mock signature */}
            <div className="h-16 w-48 mb-2 opacity-60 bg-gradient-to-r from-transparent via-slate-800 to-transparent dark:via-white" style={{ maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10,40 Q30,10 50,30 T90,30 T130,20 T180,40\' stroke=\'black\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")', WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M10,40 Q30,10 50,30 T90,30 T130,20 T180,40\' stroke=\'black\' stroke-width=\'2\' fill=\'none\'/%3E%3C/svg%3E")', maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}></div>
            <p className="font-bold text-slate-900 dark:text-white">Ted M. Davis</p>
            <p className="text-slate-500 text-sm">Assistant Manager</p>
          </div>
        </div>

        {/* Footer info */}
        <div className={`relative z-10 text-center space-y-3 ${footerBgClass}`}>
           <div className={`flex items-center justify-center gap-2 font-black text-slate-900 dark:text-white tracking-tight mb-4 ${formatSettings.headingSize === 'lg' ? 'text-3xl' : formatSettings.headingSize === 'sm' ? 'text-xl' : 'text-2xl'}`}>
              {formatSettings.logoPreview ? (
                <img src={formatSettings.logoPreview} alt="Logo" style={{ width: `${(formatSettings.logoSize || 100) / 2}px` }} className="max-w-full object-contain" />
              ) : (
                <div className="flex -space-x-2 mr-1">
                  <div className="w-5 h-5 rounded-full bg-red-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-amber-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-500 opacity-80 mix-blend-multiply dark:mix-blend-screen"></div>
                </div>
              )}
              {!formatSettings.logoPreview && "CRMS"}
            </div>
            <p className="text-slate-500">Payment Made Via bank transfer / Cheque in the name of Thomas Lawler</p>
            <p className="text-slate-500">
              Bank Name : <span className="font-bold text-slate-700 dark:text-slate-300">{invoiceData.bank.name}</span>{' '}
              Account Number : <span className="font-bold text-slate-700 dark:text-slate-300">{invoiceData.bank.account}</span>{' '}
              IFSC : <span className="font-bold text-slate-700 dark:text-slate-300">{invoiceData.bank.ifsc}</span>
            </p>
        </div>

        {showAccents && (
          <>
            {/* Bottom Wave Accent */}
            <svg viewBox="0 0 1440 320" className={`absolute bottom-0 left-0 w-full opacity-10 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none">
              <path fill="currentColor" d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <svg viewBox="0 0 1440 320" className={`absolute bottom-0 left-0 w-full opacity-20 pointer-events-none text-[var(--theme-primary)]`} preserveAspectRatio="none" style={{transform: 'translateY(20px)'}}>
              <path fill="currentColor" d="M0,96L48,112C96,128,192,160,288,176C384,192,480,224,576,213.3C672,203,768,149,864,138.7C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </>
        )}
      </div>
      );
      })()}
    </div>
  );
};

export default InvoiceDetails;

import React from 'react';
import { X, Printer, Download, Mail, Building, FileText } from 'lucide-react';

const mockInvoiceDetail = {
    id: 1,
    invoice_number: "INV-001",
    customer_name: "Test Customer",
    customer_email: "test@test.com",
    invoice_date: "2026-07-30",
    due_date: "2026-08-30",
    payment_method: "cash",
    subtotal: "250.00",
    tax_percentage: "0.00",
    tax_amount: "0.00",
    discount_percentage: "0.00",
    discount_amount: "0.00",
    total: "250.00",
    status: "sent",
    notes: "Updated notes",
    items: [
        { id: 1, description: "Item 1", quantity: 2, unit_price: "100.00", total: "200.00" },
        { id: 2, description: "Item 2", quantity: 1, unit_price: "50.00", total: "50.00" }
    ]
};

const InvoiceDetailModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const data = mockInvoiceDetail;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'paid': return 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20';
      case 'sent': return 'bg-blue-500/10 text-blue-600 border border-blue-500/20';
      default: return 'bg-slate-500/10 text-slate-600 border border-slate-500/20';
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#111624] w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-slate-900 dark:text-white">{data.invoice_number}</span>
            <span className={`px-2.5 py-1 text-xs font-bold rounded-lg uppercase ${getStatusBadge(data.status)}`}>
              {data.status}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition-colors tooltip" title="Print">
              <Printer size={18} />
            </button>
            <button className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-lg transition-colors tooltip" title="Download PDF">
              <Download size={18} />
            </button>
            <button className="p-2 text-slate-500 hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-500/10 rounded-lg transition-colors tooltip" title="Email Invoice">
              <Mail size={18} />
            </button>
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Invoice Paper Body */}
        <div className="p-8 overflow-y-auto bg-slate-100 dark:bg-[#0b0f19]">
          <div className="max-w-3xl mx-auto bg-white dark:bg-[#151b2b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 sm:p-12">
            
            {/* Top Section */}
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                    <Building size={24} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Apex CRM</h2>
                    <p className="text-xs text-slate-500 font-medium">Global Manufacturing LLC</p>
                  </div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <p>123 Business Avenue</p>
                  <p>Tech District, New York, NY 10001</p>
                  <p>contact@apexcrm.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase tracking-widest mb-6">Invoice</h1>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-end gap-6">
                    <span className="text-slate-500 font-medium">Invoice No:</span>
                    <span className="font-bold text-slate-900 dark:text-white w-24 text-right">{data.invoice_number}</span>
                  </div>
                  <div className="flex justify-end gap-6">
                    <span className="text-slate-500 font-medium">Invoice Date:</span>
                    <span className="font-bold text-slate-900 dark:text-white w-24 text-right">{data.invoice_date}</span>
                  </div>
                  <div className="flex justify-end gap-6">
                    <span className="text-slate-500 font-medium">Due Date:</span>
                    <span className="font-bold text-slate-900 dark:text-white w-24 text-right">{data.due_date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bill To */}
            <div className="mb-10">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Billed To</h3>
              <div className="text-sm space-y-1">
                <p className="text-base font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">{data.customer_name}</p>
                <p className="text-slate-600 dark:text-slate-400">{data.customer_email}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-10 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 font-semibold text-[13px] border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="px-6 py-4 w-12">#</th>
                    <th className="px-6 py-4">Item Description</th>
                    <th className="px-6 py-4 text-center">Qty</th>
                    <th className="px-6 py-4 text-right">Unit Price</th>
                    <th className="px-6 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                  {data.items.map((item, idx) => (
                    <tr key={item.id} className="text-slate-700 dark:text-slate-300">
                      <td className="px-6 py-4 font-medium text-slate-400">{idx + 1}</td>
                      <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">{item.description}</td>
                      <td className="px-6 py-4 text-center">{item.quantity}</td>
                      <td className="px-6 py-4 text-right">${item.unit_price}</td>
                      <td className="px-6 py-4 text-right font-bold text-slate-900 dark:text-white">${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-12">
              <div className="w-64 space-y-3 text-sm">
                <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium">
                  <span>Subtotal</span>
                  <span>${data.subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium">
                  <span>Tax ({data.tax_percentage}%)</span>
                  <span>${data.tax_amount}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium">
                  <span>Discount</span>
                  <span>-${data.discount_amount}</span>
                </div>
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between font-bold text-lg text-slate-900 dark:text-white">
                  <span>Total Amount</span>
                  <span className="text-blue-600 dark:text-blue-400">${data.total}</span>
                </div>
              </div>
            </div>

            {/* Footer Notes */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex gap-4 text-sm text-slate-500">
              <div className="p-2 bg-slate-50 dark:bg-slate-800/50 rounded-lg text-slate-400 h-fit">
                <FileText size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-300 mb-1">Notes & Terms</h4>
                <p>{data.notes || "Please pay within 30 days of receiving this invoice."}</p>
                <p className="mt-2 font-medium">Payment Method: <span className="uppercase text-slate-700 dark:text-slate-300">{data.payment_method}</span></p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default InvoiceDetailModal;

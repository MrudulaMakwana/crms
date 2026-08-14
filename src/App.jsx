import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import Leads from './pages/Leads'; 
import Users from './pages/Users';
import Customers from './pages/Customers';
import Companies from './pages/Companies';
import Deals from './pages/Deals';
import CustomerFeedback from './pages/CustomerFeedback';
import CustomerAnalytics from './pages/CustomerAnalytics';
import Projects from './pages/Projects';
import Timesheet from './pages/Timesheet';
import Milestones from './pages/Milestones';
import Tasks from './pages/Tasks';
import ProjectAnalytics from './pages/ProjectAnalytics';
import ResourceAllocation from './pages/ResourceAllocation';
import Employees from './pages/Employees';
import Departments from './pages/Departments';
import Designations from './pages/Designations';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Holidays from './pages/Holidays';
import Payroll from './pages/Payroll';
import Recruitment from './pages/Recruitment';
import Performance from './pages/Performance';
import Training from './pages/Training';
import HRAnalytics from './pages/HRAnalytics';
import Calendar from './pages/Calendar';
import ERPPipeline from './pages/ERPPipeline';
import Quotations from './pages/Quotations';
import SalesOrders from './pages/SalesOrders';
import JobOrders from './pages/JobOrders';
import PurchaseOrders from './pages/PurchaseOrders';
import Inventory from './pages/Inventory';
import PurchaseRequisitions from './pages/PurchaseRequisitions';
import Invoices from './pages/Invoices';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import SalesDashboard from './pages/SalesDashboard';
import ExecutiveDashboard from './pages/ExecutiveDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import AdminDashboard from './pages/AdminDashboard';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import Products from './pages/Products';
import Categories from './pages/Categories';
import InventoryManage from './pages/InventoryManage';
import Warehouse from './pages/Warehouse';
import Suppliers from './pages/Suppliers';
import StockAdjustment from './pages/StockAdjustment';
import StockTransfer from './pages/StockTransfer';
import Campaigns from './pages/Campaigns';
import Subscriptions from './pages/Subscriptions';
import MembershipPlans from './pages/MembershipPlans';
import MembershipAddons from './pages/MembershipAddons';
import MembershipTransactions from './pages/MembershipTransactions';
import ChangePassword from './pages/ChangePassword';
import Expenses from './pages/Expenses';
import ExpenseCategory from './pages/ExpenseCategory';
import Payments from './pages/Payments';
import Cashflow from './pages/Cashflow';
import Budgeting from './pages/Budgeting';
import Taxes from './pages/Taxes';
import DeliveryNotes from './pages/DeliveryNotes';
import BOMs from './pages/BOMs';
import Purchases from './pages/Purchases';
import PurchaseReturn from './pages/PurchaseReturn';
import Vendors from './pages/Vendors';

import ExpenseSummary from './pages/reports/ExpenseSummary';
import IncomeSummary from './pages/reports/IncomeSummary';
import ProfitLoss from './pages/reports/ProfitLoss';
import IncomeVsExpense from './pages/reports/IncomeVsExpense';
import TaxSummary from './pages/reports/TaxSummary';

import { useAuthStore } from './store/authStore';

function App() {
  const { theme } = useAuthStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="users" element={<Users />} />
            
            {/* Dashboard Routes */}
            <Route path="employee-dashboard" element={<EmployeeDashboard />} />
            <Route path="manager-dashboard" element={<ManagerDashboard />} />
            <Route path="sales-dashboard" element={<SalesDashboard />} />
            <Route path="executive-dashboard" element={<ExecutiveDashboard />} />
            <Route path="finance-dashboard" element={<FinanceDashboard />} />
            
            {/* Admin Routes */}
            <Route path="admin/dashboard" element={<AdminDashboard />} />
            
            {/* Super Admin Routes */}
            <Route path="super-admin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            
            {/* CRM Routes */}
            <Route path="crm/campaigns" element={<Campaigns />} />
            <Route path="crm/leads" element={<Leads />} />
            <Route path="crm/customers" element={<Customers />} />
            <Route path="crm/companies" element={<Companies />} />
            <Route path="crm/deals" element={<Deals />} />
            <Route path="crm/feedback" element={<CustomerFeedback />} />
            <Route path="crm/analytics" element={<CustomerAnalytics />} />
            
            {/* Project Routes */}
            <Route path="projects" element={<Projects />} />
            <Route path="projects/timesheet" element={<Timesheet />} />
            <Route path="projects/milestones" element={<Milestones />} />
            <Route path="projects/tasks" element={<Tasks />} />
            <Route path="projects/analytics" element={<ProjectAnalytics />} />
            <Route path="projects/resources" element={<ResourceAllocation />} />
            
            {/* HRM Routes */}
            <Route path="hrm/employees" element={<Employees />} />
            <Route path="hrm/departments" element={<Departments />} />
            <Route path="hrm/designations" element={<Designations />} />
            <Route path="hrm/attendance" element={<Attendance />} />
            <Route path="hrm/leave" element={<Leave />} />
            <Route path="hrm/holidays" element={<Holidays />} />
            <Route path="hrm/payroll" element={<Payroll />} />
            <Route path="hrm/recruitment" element={<Recruitment />} />
            <Route path="hrm/performance" element={<Performance />} />
            <Route path="hrm/training" element={<Training />} />
            <Route path="hrm/analytics" element={<HRAnalytics />} />

            {/* Finance Routes */}
            <Route path="finance/expenses" element={<Expenses />} />
            <Route path="finance/expense-category" element={<ExpenseCategory />} />
            <Route path="finance/payments" element={<Payments />} />
            <Route path="finance/cashflow" element={<Cashflow />} />
            <Route path="finance/budgeting" element={<Budgeting />} />
            <Route path="finance/taxes" element={<Taxes />} />
            
            <Route path="finance/reports/expense" element={<ExpenseSummary />} />
            <Route path="finance/reports/income" element={<IncomeSummary />} />
            <Route path="finance/reports/profit-loss" element={<ProfitLoss />} />
            <Route path="finance/reports/income-vs-expense" element={<IncomeVsExpense />} />
            <Route path="finance/reports/tax" element={<TaxSummary />} />
            
            {/* Main Navigation Routes */}
            <Route path="calendar" element={<Calendar />} />
            
            {/* Membership Routes */}
            <Route path="membership/plans" element={<MembershipPlans />} />
            <Route path="membership/addons" element={<MembershipAddons />} />
            <Route path="membership/transactions" element={<MembershipTransactions />} />
            
            {/* Purchase Routes */}
            <Route path="purchase/purchases" element={<Purchases />} />
            <Route path="purchase/purchase-return" element={<PurchaseReturn />} />
            <Route path="purchase/vendors" element={<Vendors />} />

          {/* ERP Routes */}
            <Route path="erp/pipeline" element={<ERPPipeline />} />
            <Route path="erp/boms" element={<BOMs />} />
            <Route path="erp/quotations" element={<Quotations />} />
            <Route path="erp/sales-orders" element={<SalesOrders />} />
            <Route path="erp/job-orders" element={<JobOrders />} />
            <Route path="erp/purchase-orders" element={<PurchaseOrders />} />
            <Route path="erp/inventory" element={<Inventory />} />
            <Route path="erp/purchase-requisitions" element={<PurchaseRequisitions />} />
            <Route path="erp/invoices" element={<Invoices />} />
            <Route path="crm/delivery-notes" element={<DeliveryNotes />} />
            
            {/* Inventory Routes */}
            <Route path="inventory/products" element={<Products />} />
            <Route path="inventory/categories" element={<Categories />} />
            <Route path="inventory/manage" element={<InventoryManage />} />
            <Route path="inventory/warehouse" element={<Warehouse />} />
            <Route path="inventory/suppliers" element={<Suppliers />} />
            <Route path="inventory/stock/adjustment" element={<StockAdjustment />} />
            <Route path="inventory/stock/transfer" element={<StockTransfer />} />
            
            {/* Analytics & System Routes */}
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
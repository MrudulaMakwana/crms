import {
    LayoutDashboard,
    Users,
    Briefcase,
    Factory,
    UserSquare2,
    Calendar,
    BarChart3,
    Settings,
    User,
    LogOut,
    ChevronDown,
    Zap,
    Crown,
    UserCog,
    Building2,
    Award,
    Target,
    Network,
    FileText,
    FileCheck,
    Calculator,
    Receipt,
    CreditCard,
    PieChart,
    Activity,
    Layers,
    CheckSquare,
    Clock,
    Flag,
    LayoutGrid,
    Handshake,
    Megaphone,
    HelpCircle,
    SquareUser,
    Building,
    UserSearch,
    CalendarCheck,
    CalendarMinus,
    Grid,
    Banknote,
    Users2,
    BadgeCheck,
    ShieldCheck,
    LineChart,
    ShoppingCart,
    Package,
    ShoppingBag,
    BookOpen,
    Mail,
    Triangle,
    Compass,
    CircleDot,
    Home,
    ExternalLink,
    ChevronLeft,
    ChevronRight,
    X,
    Landmark,
    TrendingUp,
    Tags,
    Percent,
    Truck,
    RotateCcw,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const NavItem = ({
    icon: Icon,
    label,
    to,
    active,
    hasDropdown,
    subItems,
    isCollapsed,
    isOpen,
    onToggle,
}) => {
    const location = useLocation();

    const isSubItemActive = (items) => {
        return items?.some((item) => {
            if (item.subItems) return isSubItemActive(item.subItems);
            return location.pathname === item.to;
        });
    };

    const isActive = active || isSubItemActive(subItems);

    if (subItems) {
        return (
            <div className="relative group/navitem space-y-1">
                <button
                    onClick={() => !isCollapsed && onToggle()}
                    className={`w-full flex items-center justify-between py-3 rounded-xl transition-all duration-300 ${isCollapsed ? "px-0 justify-center" : "px-4"} ${isActive
                            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                        }`}
                >
                    <div className="flex items-center gap-3 font-medium text-[13px] tracking-wide">
                        {Icon && (
                            <Icon
                                size={20}
                                className={`${isActive ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover/navitem:text-slate-600 dark:group-hover/navitem:text-slate-300"} transition-colors`}
                            />
                        )}
                        {!isCollapsed && label}
                    </div>
                    {!isCollapsed && (
                        <ChevronDown
                            size={16}
                            className={`${isActive ? "text-blue-200" : "text-slate-400 dark:text-slate-500"} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                    )}
                </button>

                {/* Expanded Mode Sub-items */}
                {!isCollapsed && (
                    <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[800px] opacity-100 mt-1.5" : "max-h-0 opacity-0"}`}
                    >
                        <div className="pl-4 pr-2 space-y-1.5 py-1">
                            {subItems.map((item, idx) => {
                                if (item.subItems) {
                                    return (
                                        <div key={idx} className="space-y-1">
                                            <button
                                                onClick={(e) => {
                                                    const btn = e.currentTarget;
                                                    const content = btn.nextElementSibling;
                                                    const arrow = btn.querySelector(".nested-arrow");
                                                    if (content.classList.contains("hidden")) {
                                                        content.classList.remove("hidden");
                                                        arrow.classList.add("rotate-180");
                                                    } else {
                                                        content.classList.add("hidden");
                                                        arrow.classList.remove("rotate-180");
                                                    }
                                                }}
                                                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] transition-colors text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 group"
                                            >
                                                <div className="flex items-center gap-2">
                                                    {item.icon && (
                                                        <item.icon
                                                            size={16}
                                                            className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                                                        />
                                                    )}
                                                    <span className="font-medium tracking-wide text-left">
                                                        {item.label}
                                                    </span>
                                                </div>
                                                <ChevronDown
                                                    size={14}
                                                    className="nested-arrow text-slate-400 transition-transform shrink-0 ml-2"
                                                />
                                            </button>
                                            <div className="hidden pl-6 space-y-1 py-1">
                                                {item.subItems.map((subItem, subIdx) => {
                                                    const isChildActive =
                                                        location.pathname === subItem.to;
                                                    return (
                                                        <Link
                                                            key={subIdx}
                                                            to={subItem.to}
                                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium tracking-wide transition-all ${isChildActive
                                                                    ? "text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-500/10"
                                                                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                                                                }`}
                                                        >
                                                            <span className="pl-1 text-left">
                                                                {subItem.label}
                                                            </span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                }
                                const isChildActive = location.pathname === item.to;
                                const SubIcon = item.icon;
                                return (
                                    <Link
                                        key={idx}
                                        to={item.to}
                                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium tracking-wide transition-all ${isChildActive
                                                ? "text-blue-600 dark:text-blue-500 bg-blue-50 dark:bg-blue-500/10"
                                                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
                                            }`}
                                    >
                                        {SubIcon && (
                                            <SubIcon
                                                size={16}
                                                className={
                                                    isChildActive
                                                        ? "text-blue-600 dark:text-blue-500"
                                                        : "text-slate-400 dark:text-slate-500"
                                                }
                                            />
                                        )}
                                        <span className={!SubIcon ? "pl-2 text-left" : "text-left"}>
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Collapsed Mode Flyout Menu */}
                {isCollapsed && (
                    <div className="absolute left-full top-0 ml-4 hidden group-hover/navitem:block z-50 w-56">
                        <div className="bg-white dark:bg-[#111624] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-2 px-1">
                            <div className="px-3 py-1 mb-1 border-b border-slate-100 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-left">
                                {label}
                            </div>
                            {subItems.map((item, idx) => (
                                <Link
                                    key={idx}
                                    to={item.to || "#"}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-[13px] font-medium tracking-wide text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                                >
                                    {item.icon && (
                                        <item.icon size={14} className="text-slate-400" />
                                    )}
                                    <span className={!item.icon ? "pl-2 text-left" : "text-left"}>
                                        {item.label}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative group/navitem">
            <Link
                to={to}
                className={`flex items-center justify-between py-3 rounded-xl transition-all duration-300 ${isCollapsed ? "px-0 justify-center" : "px-4"} ${active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
            >
                <div className="flex items-center gap-3 font-medium text-[13px] tracking-wide">
                    {Icon && (
                        <Icon
                            size={20}
                            className={`${active ? "text-white" : "text-slate-400 dark:text-slate-500 group-hover/navitem:text-slate-600 dark:group-hover/navitem:text-slate-300"} transition-colors`}
                        />
                    )}
                    {!isCollapsed && label}
                </div>
            </Link>

            {/* Collapsed Tooltip */}
            {isCollapsed && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 hidden group-hover/navitem:block z-50">
                    <div className="bg-slate-900 text-white text-[12px] font-medium py-1.5 px-3 rounded-lg whitespace-nowrap shadow-xl">
                        {label}
                    </div>
                </div>
            )}
        </div>
    );
};

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout, isMobileMenuOpen, setMobileMenuOpen } = useAuthStore();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [openMenuLabel, setOpenMenuLabel] = useState(null);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const navGroups = [
        {
            title: "Main Navigation",
            items: [
                {
                    label: 'Dashboard',
                    icon: LayoutDashboard,
                    subItems: [

                        { label: 'Super Admin Dashboard', to: '/super-admin/dashboard' },
                        { label: 'Admin Dashboard', to: '/admin/dashboard' },
                        { label: 'Manager Dashboard', to: '/manager-dashboard' },
                        { label: 'Employee Dashboard', to: '/employee-dashboard' },
                        { label: 'Executive Dashboard', to: '/executive-dashboard' },
                        { label: 'Finance Dashboard', to: '/finance-dashboard' },
                        { label: 'Sales Dashboard', to: '/sales-dashboard' },
                        { label: 'Production Dashboard', to: '/production-dashboard' }
                    ],
                },

                {
                    label: "CRM",
                    icon: Layers,
                    subItems: [
                        { label: "Customers", to: "/crm/customers", icon: Users },
                        { label: "Leads", to: "/crm/leads", icon: UserSquare2 },
                        { label: "Deals", to: "/crm/deals", icon: Handshake },
                        { label: "Pipeline", to: "/erp/pipeline", icon: Network },
                        { label: "Campaigns", to: "/crm/campaigns", icon: Megaphone },
                        {
                            label: "Customer Feedback",
                            to: "/crm/feedback",
                            icon: HelpCircle,
                        },
                        {
                            label: "Customer Analytics",
                            to: "/crm/analytics",
                            icon: PieChart,
                        },
                    ],
                },
                {
                    label: "Sales",
                    icon: TrendingUp,
                    subItems: [
                        { label: "Quotations", to: "/erp/quotations", icon: FileText },
                        { label: "Sales Orders", to: "/erp/sales-orders", icon: ShoppingCart },
                        { label: "Delivery Notes", to: "/crm/delivery-notes", icon: Truck },
                        { label: "Invoices & Billing", to: "/erp/invoices", icon: Receipt },
                    ]
                },
                {
                    label: "Production",
                    icon: Factory,
                    subItems: [
                        { label: "Production Stage", to: "/production/stages", icon: Layers },
                        { label: "Job Orders", to: "/erp/job-orders", icon: Settings },
                        { label: "Bill of Materials (BOM)", to: "/erp/boms", icon: FileText },
                        { label: "Machines", to: "/production/machines", icon: Package },
                        { label: "GRN", to: "/production/grn", icon: FileCheck },
                        { label: "Requisitions (Approve/Disapprove)", to: "/production/requisitions", icon: FileCheck },
                        { label: "Quality Inspections", to: "/production/quality-inspections", icon: ShieldCheck },
                        { label: "Dispatch Job", to: "/production/dispatch-job", icon: Truck },
                        { label: "Material Issues", to: "/production/material-issues", icon: Activity },
                    ]
                },
                {
                    label: "Purchase",
                    icon: ShoppingBag,
                    subItems: [
                        { label: "Vendors", to: "/purchase/vendors", icon: Users2 },
                        { label: "Purchase Requisitions", to: "/erp/purchase-requisitions", icon: ShoppingBag },
                        { label: "Purchases", to: "/purchase/purchases", icon: ShoppingBag },
                        {
                            label: "Purchase Orders",
                            to: "/erp/purchase-orders",
                            icon: ShoppingCart,
                        },
                        { label: "Purchase Return", to: "/purchase/purchase-return", icon: RotateCcw },
                    ],
                },
                {
                    label: "Inventory",
                    icon: Package,
                    subItems: [
                        { label: "Products", to: "/inventory/products", icon: Package },
                        { label: "Categories", to: "/inventory/categories", icon: Mail },
                        { label: "Inventory", to: "/inventory/manage", icon: CircleDot },
                        { label: "Suppliers", to: "/inventory/suppliers", icon: User },
                        { label: "Warehouse", to: "/inventory/warehouse", icon: Home },
                        {
                            label: "Stock",
                            icon: ExternalLink,
                            subItems: [
                                {
                                    label: "Stock Adjustment",
                                    to: "/inventory/stock/adjustment",
                                },
                                { label: "Stock Transfer", to: "/inventory/stock/transfer" },
                            ],
                        },
                    ],
                },
                {
                    label: "Projects",
                    icon: Briefcase,
                    subItems: [
                        { label: "All Projects", to: "/projects", icon: LayoutGrid },
                        { label: "Tasks", to: "/projects/tasks", icon: CheckSquare },
                        { label: "Timesheet", to: "/projects/timesheet", icon: Clock },
                        { label: "Milestones", to: "/projects/milestones", icon: Flag },
                        {
                            label: "Resource Allocation",
                            to: "/projects/resources",
                            icon: Users,
                        },
                        {
                            label: "Project Analytics",
                            to: "/projects/analytics",
                            icon: BarChart3,
                        },
                    ],
                },
                {
                    label: "Finance",
                    icon: Landmark,
                    subItems: [
                        { label: "Expenses", to: "/finance/expenses", icon: Receipt },
                        { label: "Expense Category", to: "/finance/expense-category", icon: Tags },
                        { label: "Payments", to: "/finance/payments", icon: CreditCard },
                        { label: "Cashflow", to: "/finance/cashflow", icon: TrendingUp },
                        { label: "Budgeting", to: "/finance/budgeting", icon: BarChart3 },
                        { label: "Taxes", to: "/finance/taxes", icon: Percent },
                        {
                            label: "Reports",
                            icon: PieChart,
                            subItems: [
                                { label: "Expense Summary", to: "/finance/reports/expense" },
                                { label: "Income Summary", to: "/finance/reports/income" },
                                { label: "Profit & Loss", to: "/finance/reports/profit-loss" },
                                { label: "Income vs Expense", to: "/finance/reports/income-vs-expense" },
                                { label: "Tax Summary", to: "/finance/reports/tax" },
                            ],
                        },
                    ],
                },
                {
                    label: "HRM",
                    icon: UserSquare2,
                    subItems: [
                        { label: "Employees", to: "/hrm/employees", icon: SquareUser },
                        { label: "Departments", to: "/hrm/departments", icon: Building },
                        {
                            label: "Designations / Roles",
                            to: "/hrm/designations",
                            icon: UserSearch,
                        },
                        { label: "Attendance", to: "/hrm/attendance", icon: CalendarCheck },
                        { label: "Leave", to: "/hrm/leave", icon: CalendarMinus },
                        { label: "Holidays", to: "/hrm/holidays", icon: Grid },
                        { label: "Payroll", to: "/hrm/payroll", icon: Banknote },
                        { label: "Recruitment", to: "/hrm/recruitment", icon: Users2 },
                        {
                            label: "Performance & Appraisal",
                            to: "/hrm/performance",
                            icon: BadgeCheck,
                        },
                        {
                            label: "Training & Development",
                            to: "/hrm/training",
                            icon: ShieldCheck,
                        },
                        { label: "HR Analytics", to: "/hrm/analytics", icon: LineChart },
                    ],
                },
                { label: "User Management", icon: Users, to: "/users" },
                { label: "Calendar", icon: Calendar, to: "/calendar" },
                { label: "Subscriptions", icon: CreditCard, to: "/subscriptions" },
                {
                    label: "Membership",
                    icon: Crown,
                    subItems: [
                        { label: "Membership Plans", to: "/membership/plans", icon: User },
                        {
                            label: "Membership Addons",
                            to: "/membership/addons",
                            icon: Layers,
                        },
                        {
                            label: "Transactions",
                            to: "/membership/transactions",
                            icon: Settings,
                        },
                    ],
                },
            ],
        },
        {
            title: "Analytics & System",
            roles: ["admin"],
            items: [
                { label: "Reports", icon: BarChart3, to: "/reports" },
                { label: "Settings", icon: Settings, to: "/settings" },
                { label: "Profile", icon: User, to: "/profile" },
            ],
        },
    ];

    return (
        <aside
            className={`bg-white dark:bg-[#0b0f19] flex flex-col h-full border-r border-slate-200/60 dark:border-slate-800/50 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all duration-300 ease-in-out fixed inset-y-0 left-0 z-[60] md:relative md:translate-x-0 ${
                isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } ${isCollapsed ? "w-[72px]" : "w-[260px]"}`}
        >
            {/* Brand Header */}
            <div
                className={`h-16 flex items-center ${isCollapsed ? "justify-center" : "justify-between px-5"} border-b border-slate-200 dark:border-slate-800 transition-all duration-300 shrink-0`}
            >
                {!isCollapsed && (
                    <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20 shrink-0">
                            <Zap className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight truncate">
                            Apex CRM
                        </span>
                    </div>
                )}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:flex p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav
                className={`flex-1 overflow-y-auto ${isCollapsed ? "px-2" : "px-3"} py-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800`}
            >
                {navGroups.map((group, idx) => {
                    if (group.roles && !group.roles.includes(user?.role)) return null;

                    return (
                        <div key={idx} className="relative">
                            {!isCollapsed && (
                                <div className="px-2 text-[11px] font-bold text-slate-400 dark:text-slate-500 tracking-widest mb-3 uppercase flex items-center gap-2">
                                    {group.title}
                                    <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1 ml-2"></div>
                                </div>
                            )}
                            {isCollapsed && idx > 0 && (
                                <div className="h-px w-10 mx-auto bg-slate-200 dark:bg-slate-800 mb-6 mt-2"></div>
                            )}

                            <div className="space-y-1.5">
                                {group.items.map((item, itemIdx) => (
                                    <NavItem
                                        key={itemIdx}
                                        icon={item.icon}
                                        label={item.label}
                                        to={item.to}
                                        active={location.pathname === item.to}
                                        hasDropdown={item.hasDropdown}
                                        subItems={item.subItems}
                                        isCollapsed={isCollapsed}
                                        isOpen={openMenuLabel === item.label}
                                        onToggle={() =>
                                            setOpenMenuLabel(
                                                openMenuLabel === item.label ? null : item.label,
                                            )
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </nav>

            {/* Logout Footer */}
            <div
                className={`p-4 mt-auto border-t border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 ${isCollapsed ? "flex justify-center" : ""}`}
            >
                <button
                    onClick={handleLogout}
                    className={`group flex items-center gap-3 ${isCollapsed ? "p-3 justify-center" : "w-full px-4 py-3"} rounded-xl bg-transparent text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors text-sm font-medium`}
                    title={isCollapsed ? "Logout" : ""}
                >
                    <LogOut size={20} className="text-slate-400 group-hover:text-red-500 transition-colors" />
                    {!isCollapsed && "Logout"}
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

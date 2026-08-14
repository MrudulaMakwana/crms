import React from 'react';

const Button = React.forwardRef(({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  disabled = false, 
  type = 'button',
  icon: Icon,
  ...props 
}, ref) => {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-blue-500",
    secondary: "bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 focus:ring-slate-500",
    danger: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm focus:ring-red-500",
    ghost: "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
    icon: "p-2"
  };

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && Icon && <Icon className={`${children ? 'mr-2' : ''} h-4 w-4`} />}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

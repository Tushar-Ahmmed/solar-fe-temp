import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "solar" | "whatsapp" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  external?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external = false,
      leftIcon,
      rightIcon,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 cursor-pointer select-none rounded-lg active:scale-[0.98]";

    const variantStyles = {
      primary:
        "bg-sky-600 text-white hover:bg-sky-700 focus-visible:ring-sky-500 shadow-sm hover:shadow",
      secondary:
        "bg-slate-800 text-white hover:bg-slate-900 focus-visible:ring-slate-700 shadow-sm",
      outline:
        "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 focus-visible:ring-sky-500",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400",
      solar:
        "bg-amber-500 text-slate-950 font-semibold hover:bg-amber-400 focus-visible:ring-amber-500 shadow-sm hover:shadow-amber-500/20",
      whatsapp:
        "bg-emerald-600 text-white font-semibold hover:bg-emerald-700 focus-visible:ring-emerald-500 shadow-sm hover:shadow-emerald-600/20",
      danger:
        "bg-rose-600 text-white hover:bg-rose-700 focus-visible:ring-rose-500 shadow-sm",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5 min-h-[34px]",
      md: "text-sm px-4 py-2.5 gap-2 min-h-[42px]",
      lg: "text-base px-6 py-3.5 gap-2.5 min-h-[50px]",
      icon: "h-10 w-10 p-0",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const content = (
      <>
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </>
    );

    if (href) {
      if (external || href.startsWith("http") || href.startsWith("https://wa.me") || href.startsWith("tel:") || href.startsWith("mailto:")) {
        return (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={combinedClasses}
          >
            {content}
          </a>
        );
      }

      return (
        <Link href={href} className={combinedClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={combinedClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

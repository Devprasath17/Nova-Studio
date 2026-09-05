import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyan";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", icon = true, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-nova-cyan/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";
    
    const variants = {
      primary: "bg-white text-black hover:bg-zinc-200 shadow-lg shadow-white/5",
      secondary: "bg-surface-card text-white border border-surface-border hover:border-zinc-500 hover:bg-surface-hover",
      outline: "bg-transparent text-white border border-zinc-700 hover:border-nova-cyan hover:text-nova-cyan",
      ghost: "bg-transparent text-zinc-300 hover:text-white hover:bg-white/5",
      cyan: "bg-nova-cyan text-black hover:bg-cyan-300 shadow-lg shadow-nova-cyan/20 font-semibold",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs tracking-wider uppercase",
      md: "px-6 py-3 text-xs md:text-sm tracking-wider uppercase",
      lg: "px-8 py-4 text-sm md:text-base tracking-wider uppercase",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <ArrowUpRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

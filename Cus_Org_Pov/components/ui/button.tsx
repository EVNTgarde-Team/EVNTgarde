"use client"

import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <button
        className={`
          inline-flex
          items-center
          justify-center
          rounded-md
          text-sm
          font-medium
          transition-colors
          focus:outline-none
          focus:ring-2
          focus:ring-ring
          focus:ring-offset-2
          disabled:opacity-50
          disabled:pointer-events-none
          ring-offset-background
          data-[state=open]:bg-accent
          data-[state=open]:text-accent-foreground
          ${
            variant === "default"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : variant === "outline"
                ? "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground"
                : null
          }
          ${
            size === "default"
              ? "px-4 py-2"
              : size === "sm"
                ? "px-3 py-1.5 rounded-md"
                : size === "lg"
                  ? "px-8 py-3 rounded-md"
                  : null
          }
          ${className ? className : ""}
        `}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"


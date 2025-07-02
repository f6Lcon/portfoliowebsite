import React from "react"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-ayu-accent text-ayu-bg hover:bg-ayu-accent-hover",
  outline: "bg-transparent border border-ayu-border text-ayu-text hover:bg-ayu-surface",
  ghost: "bg-transparent hover:bg-ayu-surface text-ayu-text",
  link: "bg-transparent underline-offset-4 hover:underline text-ayu-text p-0",
}

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.cloneElement(props.children, { ref, ...props }) : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
          "px-4 py-2",
          buttonVariants[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export { Button, buttonVariants }

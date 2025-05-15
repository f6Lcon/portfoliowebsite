import React from "react"
import { cn } from "../../lib/utils"

const buttonVariants = {
  default: "bg-purple-600 text-white hover:bg-purple-700",
  outline: "bg-transparent border border-zinc-700 text-white hover:bg-zinc-800",
  ghost: "bg-transparent hover:bg-zinc-800 text-white",
  link: "bg-transparent underline-offset-4 hover:underline text-white p-0",
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

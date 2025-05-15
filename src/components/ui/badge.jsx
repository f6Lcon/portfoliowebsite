import React from "react"
import { cn } from "../../lib/utils"

const badgeVariants = {
  default: "bg-purple-600 text-white",
  outline: "text-white border border-zinc-700",
  secondary: "bg-zinc-800 text-zinc-300",
}

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  )
})

Badge.displayName = "Badge"

export { Badge, badgeVariants }

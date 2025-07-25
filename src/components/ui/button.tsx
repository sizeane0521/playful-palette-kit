import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-primary-orange text-white hover:bg-primary-orange/90 shadow-light hover:shadow-medium",
        secondary: "bg-white text-primary-orange border border-primary-orange hover:bg-light-orange hover:border-primary-orange/80",
        ghost: "bg-transparent text-primary-orange hover:bg-light-orange/50",
        success: "bg-success-green text-white hover:bg-success-green/90 shadow-light hover:shadow-medium",
        warning: "bg-warning-yellow text-text-black hover:bg-warning-yellow/90 shadow-light hover:shadow-medium",
        error: "bg-error-red text-white hover:bg-error-red/90 shadow-light hover:shadow-medium",
        info: "bg-info-blue text-white hover:bg-info-blue/90 shadow-light hover:shadow-medium",
        // Legacy variants for compatibility
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        small: "h-8 px-3 text-xs rounded-md",
        medium: "h-11 px-6 text-sm",
        large: "h-14 px-8 text-base",
        // Legacy sizes for compatibility
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

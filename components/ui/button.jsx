import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "shadow bg-primary hover:bg-primary-hover transition-all duration-300 text-beige flex items-center rounded-md",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 rounded-md",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground rounded-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 rounded-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline rounded-md",
        accent: "bg-accent hover:bg-accent-hover text-primary",
        rounded: "bg-accent-secondary hover:bg-accent/20 rounded-full transition-all",
      },
      size: {
        default: "h-[60px] px-[30px] gap-2 rounded-[18px] text-[16px] font-normal",
        sm: "h-10 px-2 rounded-full text-xl",
        md: "h-16 px-4 rounded-full",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
        news: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

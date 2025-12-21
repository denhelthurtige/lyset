import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const eventButtonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground border border-white/15 hover:brightness-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]",
        secondary:
          "bg-white/6 text-foreground border border-border hover:bg-white/10 hover:border-white/20",
        ghost:
          "text-muted-foreground hover:text-foreground hover:bg-white/5",
      },
      size: {
        default: "px-4 py-3 text-sm",
        sm: "px-3 py-2 text-xs",
        lg: "px-6 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface EventButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof eventButtonVariants> {
  asChild?: boolean;
}

const EventButton = React.forwardRef<HTMLButtonElement, EventButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(eventButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
EventButton.displayName = "EventButton";

export { EventButton, eventButtonVariants };

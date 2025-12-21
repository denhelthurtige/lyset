import * as React from "react";
import { cn } from "@/lib/utils";

interface EventBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "price";
}

const EventBadge = React.forwardRef<HTMLSpanElement, EventBadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide",
          "bg-primary/12 border border-primary/25 text-primary",
          variant === "price" && "text-sm font-bold",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
EventBadge.displayName = "EventBadge";

export { EventBadge };

import * as React from "react";
import { cn } from "@/lib/utils";

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  subtle?: boolean;
}

const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  ({ className, subtle, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl border border-border p-5 transition-all duration-300",
          subtle 
            ? "bg-card-subtle" 
            : "bg-card shadow-[0_10px_30px_rgba(0,0,0,0.25)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
EventCard.displayName = "EventCard";

const EventCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-bold font-sans", className)}
    {...props}
  />
));
EventCardTitle.displayName = "EventCardTitle";

const EventCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-muted-foreground mt-1.5", className)}
    {...props}
  />
));
EventCardDescription.displayName = "EventCardDescription";

export { EventCard, EventCardTitle, EventCardDescription };

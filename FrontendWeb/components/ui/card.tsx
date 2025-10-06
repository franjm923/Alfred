import * as React from "react";
import { cn } from "@/lib/utils";

export const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border border-border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 p-6", props.className)} {...props} />;
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentPropsWithoutRef<"h3">>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  )
);
CardTitle.displayName = "CardTitle";

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", props.className)} {...props} />;
}

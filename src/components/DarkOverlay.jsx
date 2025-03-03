import { cn } from "@/lib/utils";

export default function DarkOverlay({ className }) {
  return (
    <div className={cn("absolute inset-0 bg-foreground/30", className)}></div>
  );
}

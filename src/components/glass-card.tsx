
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-lg backdrop-blur-xl bg-black/20 border border-white/10",
        "hover:bg-black/30 transition-all duration-300",
        "shadow-[0_8px_16px_-6px_rgba(0,0,0,0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

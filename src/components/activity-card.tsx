import { GlassCard } from "@/components/glass-card";

interface ActivityCardProps {
  title: string;
  description: string;
}

export function ActivityCard({ title, description }: ActivityCardProps) {
  return (
    <div className="p-3 rounded-lg bg-black/20 border border-white/5">
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
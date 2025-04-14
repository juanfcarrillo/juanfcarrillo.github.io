
import { ExternalLink, Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GlassCard } from "./glass-card";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  video,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
      {(image || video) && (
        <AspectRatio ratio={16 / 9} className="mb-4 overflow-hidden rounded-md">
          {video ? (
            <video
              src={video}
              className="object-cover w-full h-full"
              controls
              muted
              loop
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          )}
        </AspectRatio>
      )}
      <h3 className="font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-3">{description}</p>
      <div className="flex gap-2">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Visit live site"
          >
            <ExternalLink size={18} />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-60 hover:opacity-100 transition-opacity"
            aria-label="View source on GitHub"
          >
            <Github size={18} />
          </a>
        )}
      </div>
    </div>
  );
}

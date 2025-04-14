
import { ExternalLink, Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    <div className="h-full p-4 rounded-lg bg-black/20 border border-white/5">
      {(image || video) && (
        <AspectRatio ratio={16 / 9} className="mb-4 overflow-hidden rounded-md">
          {video ? (
            <video
              src={video}
              className="w-full h-full object-cover"
              controls
              muted
              loop
            />
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
          )}
        </AspectRatio>
      )}
      <h3 className="font-medium mb-2 line-clamp-1">{title}</h3>
      <p className="text-sm text-gray-400 mb-3 line-clamp-2">{description}</p>
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

import { GlassCard } from "@/components/glass-card";
import { Github, Mail, Linkedin } from "lucide-react";
import { ProjectCard } from "@/components/project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px]">
        {/* Hero Section - Spans 2 columns */}
        <GlassCard className="md:col-span-2 p-8 flex gap-6">
          <div className="w-32 h-32 rounded-full bg-black/40 border border-white/10">
            {/* Add your photo here */}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Your Name</h1>
            <p className="text-xl text-white/80 mb-4">Your Title</p>
            <p className="text-gray-400">
              Your summary goes here. Write a brief introduction about yourself.
            </p>
          </div>
        </GlassCard>

        {/* Skills Section */}
        <GlassCard className="p-6 overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Projects Section */}
        <GlassCard className="md:col-span-2 p-6">
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2">
                <ProjectCard
                  title="Project Name"
                  description="Brief project description"
                  image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                  githubUrl="#"
                  liveUrl="#"
                />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2">
                <ProjectCard
                  title="Another Project"
                  description="Brief project description"
                  image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                  githubUrl="#"
                  liveUrl="#"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </GlassCard>

        {/* Leadership/Activities and Get in Touch - Now in the same column */}
        <div className="md:col-span-1 grid gap-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-4">Leadership & Activities</h2>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-black/20 border border-white/5">
                <h3 className="font-medium">Activity Title</h3>
                <p className="text-sm text-gray-400">Brief description</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

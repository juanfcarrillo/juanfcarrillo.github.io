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
import { ActivityCard } from "@/components/activity-card";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "N8N",
  "Python",
  "Generative AI",
  "LangChain",
  "Supabase",
  "Firebase",
  "Clean Architecture",
  "Docker",
  "React Native",
  "Expo",
  "Stripe"
];

const projects = [
  {
    title: "ClipsMaker",
    description: "Automated video editing tool for creating short clips from long videos",
    image: "/assets/clips_maker.png",
    liveUrl: "https://clips-maker-frontend.vercel.app/",
    technologies: ['Active Speaker Detection', 'OpenCV', 'Stable Whisper', 'Next.js', 'Supabase', "Gemini", "LangChain", "Tailwind CSS"],
    status: 'online'
  },
  {
    title: "WORB",
    description: "B2B platform for requesting and managing providers and clients. (Launching soon)",
    image: "/assets/worb.jpeg",
    technologies: ['Supabase', 'Postgres', 'N8N', "Mailchimp", "Cloudfare Workers", "Hono"],
    status: 'online'
  },
  {
    title: "TutorIA",
    description: "AI-powered chatbot platform for tutoring about any topic (Made in 3 days)",
    video: '/assets/tutoria.mp4',
    technologies: ['Supabase', 'N8N', 'React Native', 'Expo', 'NativeWind', 'MailChimp'],
    status: 'private'
  },
  {
    title: "DevNote",
    description: "A local first note-taking app for developers using ai for content summarization, search, and organization",
    image: "/assets/devnote.png",
    technologies: ['Supabase', 'Next.js', 'Cloudflare', 'Tailwind CSS', 'Langchain', 'Chroma DB'],
    status: 'private'
  },
  {
    title: "EzSupport",
    description: "Generates chatbot support from a set of documents using AI",
    image: "/assets/ezsupport.png",
    technologies: ['Firebase', 'Langchain', 'Chroma DB', 'Next.js', 'Tailwind CSS', 'Vite', 'Stripe'],
    status: 'offline'
  },
  {
    title: "ChapGEN",
    description: "Generates a chapters for a video using AI (Working on it)",
    image: "/assets/chapgen.png",
    technologies: ['N8N', 'Next.js', 'Tailwind CSS', 'Supabase', 'LangChain'],
    status: 'online'
  }
];

const activities = [
  {
    title: "NASA space apps challenge",
    description: "Tech lead the development of the apps for the NASA space apps challenge",
  },
  {
    title: "START Hack",
    description: "Campus Ambassador for the START Hack, lead over 250 people the hackathon",
  },
  {
    title: "Interact2Hack",
    description: "Winner of the Interact2Hack hackathon, developed a AR app for an artistic project",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Hero Section - Spans 2 columns */}
        <GlassCard className="md:col-span-2 p-8 flex gap-6 flex-col md:flex-row">
          <div className="w-20 md:w-96 h-fit rounded-full bg-black/40 border border-white/10 overflow-hidden">
            <img src='/assets/me.png' alt="Juan Carrillo"/>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Juan Carrillo</h1>
            <p className="text-xl text-white/80 mb-4">Software Engineer/ Startup entusiast</p>
            <p className="text-gray-400">
            Software Engineering student love develop products that solve real-world problems. I focus on translating client needs into effective software, combining business analysis with scalable architectures and the right technology.
            </p>
          </div>
        </GlassCard>
    
        {/* Skills Section */}
        <GlassCard className="p-6 overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
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
        <GlassCard className="md:col-span-2 p-6 h-full">
          <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
          <div className="h-full flex flex-col justify-center">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
                    status={project.status}
                    technologies={project.technologies}
                    video={project.video}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="ghost" className="hidden md:flex absolute -left-7" />
            <CarouselNext variant="ghost" className="hidden md:flex absolute -right-7" />
          </Carousel>
          </div>
        </GlassCard>

        {/* Leadership/Activities and Get in Touch - Now in the same column */}
        <div className="md:col-span-1 grid gap-6">
          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-4">Volunteering</h2>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <ActivityCard 
                  key={index}
                  title={activity.title}
                  description={activity.description}
                />
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="flex gap-4">
              <a href="mailto:juanfrix123@gmail.com" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/juanfcarrillo" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/juan-francisco-carrillo-397487271/" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

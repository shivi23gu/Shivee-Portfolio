import { ArrowUpRight, Github as GithubIconLucide } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

import talentbridgeImg from '../assets/projects/vsclone.png';
import portfolioImg from '../assets/projects/Portfolio.png';
import currentproImg from '../assets/projects/currentpro.png';

import GithubSVG from "../assets/icons/github.svg";
import LinkedinSVG from "../assets/icons/linkedin.svg";
import GfgIconSVG from "../assets/icons/geeksforgeeks.svg";
import LeetcodeIconSVG from "../assets/icons/leetcode.svg";

const projects = [
  {
    title: "StayWithMe — Hotel Booking",
    description: "A full-stack hotel booking platform with guest and admin roles, JWT-secured REST APIs, Clerk authentication, Cloudinary image management, and real-time reservation dashboard.",
    image: currentproImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT", "Clerk", "Cloudinary", "Vercel"],
    link: "https://stay-with-me-pgtw.vercel.app/",
    github: "https://github.com/shivi23gu/StayWithMe",
  },
  {
    title: "Personal Portfolio Website",
    description: "A full-stack portfolio with dynamic content via REST APIs, automated email alerts via Nodemailer, MongoDB message persistence, and an admin dashboard for contact management.",
    image: portfolioImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Nodemailer", "Vercel"],
    link: "https://shivee-portfolio-ten.vercel.app/",
    github: "https://github.com/shivi23gu/Shivee-Portfolio",
  },
  {
    title: "TalentBridge — AI Job Portal",
    description: "An AI-powered MERN job portal with smart job matching, Claude-powered cover letter generation, resume analyzer, interview prep, and employer application scoring.",
    image: talentbridgeImg,
    tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Claude AI", "JWT", "Vercel"],
    link: "https://job-portal-1t8k.vercel.app/",
    github: "https://github.com/shivi23gu/Job-Portal",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Full-stack MERN applications and frontend projects — built, deployed, and production-ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <GithubIconLucide className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};

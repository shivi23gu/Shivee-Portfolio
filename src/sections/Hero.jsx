import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MySql",
  "JavaScript",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/shivi23gu" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/shivee-gupta-79b650251/" },
    {
      icon: (props) => (
        <div className={`${props.className} flex items-center justify-center overflow-hidden`}>
          <img
            src="/icons/geeksforgeeks.svg"
            alt="GFG"
            className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100"
          />
        </div>
      ),
      href: "https://www.geeksforgeeks.org/profile/2024pgcy15j?tab=activity",
    },
    {
      icon: (props) => (
        <div className={`${props.className} flex items-center justify-center overflow-hidden`}>
          <img
            src="/icons/leetcode.svg"
            alt="LeetCode"
            className="w-full h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100"
          />
        </div>
      ),
      href: "https://leetcode.com/u/Shivee_Gupta/",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Software Engineer • Frontend Developer
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Designing <span className="text-primary">digital</span>
              <br />
              web experiences with
              <br />
              <span className="font-serif italic font-normal text-white">
                precision and passion.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Hi, I'm Shivee Gupta—a software developer. I specialize in
              building responsive and scalable web applications with React,
              Next.js, and TypeScript, backed by a strong foundation in Java
              and Data Structures.
            </p>

            {/* CTA */}
            <div className="flex gap-4">
              {/* Contact Button */}
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* Download CV Button */}
              <a href="/Shivee_Gupta_CV.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-2 rounded-full glass hover:bg-primary/10 transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative max-w-md mx-auto">
            <div className="relative glass rounded-3xl p-2">
              <img
                src="/hero-bg.png"
                alt="Shivee Gupta"
                className="w-full aspect-[4/5] object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>

        {/* SKILLS */}
        <div className="mt-20">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="flex overflow-hidden">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={idx} className="px-8 py-4">
                <span className="text-xl font-semibold text-muted-foreground/60 hover:text-muted-foreground">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
        >
          <span className="text-xs uppercase">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

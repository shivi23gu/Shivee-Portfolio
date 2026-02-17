const experiences = [
  {
    period: "May 2025 – Aug 2025",
    role: "Frontend Developer",
    company: "GirlScript Summer of Code 2025",
    description:
      "Worked on frontend development for a fintech-inspired project, focusing on component-based architecture using React. Optimized UI performance and improved code organization for better maintainability.",
    link: "https://drive.google.com/file/d/1CpW1I3MVf2ctDx_QZZmWtwhf4NWhaFVX/view",
    technologies: ["React", "JavaScript", "Tailwind CSS", "GitHub"],
    current: false,
  },
  {
    period: "May 2025 – October 2025",
    role: "160 Days of Code Challenge",
    company: "GeeksforGeeks",
    description:
      "Completed the 160 Days of Code Challenge by GeeksforGeeks, consistently solving Data Structures and Algorithms problems. Strengthened problem-solving skills, improved code efficiency, and built a strong foundation in core computer science concepts.",
    link: "https://media.geeksforgeeks.org/courses/certificates/70d176d4b8f501b43adca885fe76f8a4.pdf",
    technologies: ["DSA", "Java", "Problem Solving", "Algorithms"],
    current: false,
  },
  {
  period: "Oct 2024 – Nov 2024", 
  role: "Hacktoberfest Contributor",
  company: "Open Source (GitHub)",
  description:
    "Officially completed the Hacktoberfest 2024 challenge by contributing to multiple open-source repositories. Earned the Level 4 badge by focusing on code quality, UI improvements, and collaborative development using Git and GitHub.",
  link: "https://www.holopin.io/hacktoberfest2024/userbadge/cm38jop1h37490cl6jurxbtxq", // Use your live Vercel link here
  technologies: ["Git", "GitHub", "Open Source", "React", "JavaScript"],
  current: false,
},
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience and{" "}
            <span className="font-serif italic font-normal text-white">
              Certifications
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my growth through hands-on projects, showcasing my
            skills in building real-world frontend applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10" />

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* 🔗 PDF / Link */}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-3 text-sm font-medium text-primary hover:underline"
                      >
                        View Certificate / PDF
                      </a>
                    )}

                    {/* Tech Stack */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

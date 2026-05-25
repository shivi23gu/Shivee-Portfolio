import { Code2, Database, Rocket, Server } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Building responsive, interactive UIs with React.js and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Designing RESTful APIs with Node.js and Express.js for scalable applications.",
  },
  {
    icon: Database,
    title: "Database",
    description:
      "Managing data efficiently with MongoDB and MongoDB Atlas.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description:
      "Shipping full-stack apps on Vercel with CI/CD and environment-based config.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building full-stack apps,
              <span className="font-serif italic font-normal text-white">
                {" "}
                from database to UI.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a MERN Stack Developer fresher with hands-on experience
                building and deploying full-stack web applications using
                React.js, Node.js, Express.js, and MongoDB. I enjoy turning
                ideas into complete products — from designing REST APIs to
                crafting responsive, user-friendly interfaces.
              </p>
              <p>
                I've built real-world projects including a hotel booking
                platform with role-based access control and JWT-secured APIs,
                and a full-stack portfolio with an automated contact system.
                I'm also an active DSA problem solver with 350+ problems solved
                on LeetCode (1500+ rating), which keeps my problem-solving
                sharp.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or solving DSA challenges
                to sharpen my skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build full-stack products that are fast,
                secure, and maintainable — experiences that users love and
                code that developers are proud of."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
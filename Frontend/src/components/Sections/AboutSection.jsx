import React from "react";
import { CheckCircle, Zap, Globe, Code2 } from "lucide-react";
import profile from "../../assets/favicon-me/about.jpg"; // Your pixel art or profile photo

const AboutSection = () => {
  const specialties = [
    {
      title: "Product Development",
      description: "End-to-end SaaS development from concept to deployment.",
      icon: <Zap size={18} />,
    },
    {
      title: "Scalable Architecture",
      description: "Systems designed for high-growth and performance.",
      icon: <Globe size={18} />,
    },
  ];

  const stats = [
    { label: "Experience", value: "7+ Months" },
    { label: "Projects", value: "10+" },
    { label: "Tech Stack", value: "15+" },
    { label: "Availability", value: "Quick" },
  ];

  const skillIcons = [
    { name: "React", url: "https://skillicons.dev/icons?i=react" },
    { name: "Bun", url: "https://skillicons.dev/icons?i=bun" },
    { name: "JS", url: "https://skillicons.dev/icons?i=js" },
    { name: "TS", url: "https://skillicons.dev/icons?i=ts" },
    { name: "MongoDB", url: "https://skillicons.dev/icons?i=mongodb" },
    { name: "NextJS", url: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Node", url: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Postgres", url: "https://skillicons.dev/icons?i=postgres" },
    { name: "Prisma", url: "https://skillicons.dev/icons?i=prisma" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[20px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-[#020816] p-2 rounded-[20px] border border-white/10">
            <img
              src={profile}
              alt="Isha Sah"
              className="w-48 h-48 md:w-64 md:h-64 rounded-[10px] object-cover scale-110"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 font-mono text-sm mb-2">About / Me</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Isha Sah
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-6">
            I'm a <span className="text-white">Full Stack Web Developer</span>{" "}
            and Open Source Contributor. I love building products to solve
            real-world problems. Specialized in building MVPs with high
            efficiency.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            {skillIcons.map((skill) => (
              <img
                key={skill.name}
                src={skill.url}
                alt={skill.name}
                className="h-8 w-8 grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specialties.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#020816] border border-white/5 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#020816] to-[#050e21] border border-white/5">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Code2 size={18} className="text-blue-500" /> Development
              Philosophy
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Scalable Architecture",
                "Clean Code",
                "UX First",
                "CI/CD Mastery",
              ].map((text) => (
                <li
                  key={text}
                  className="flex items-center gap-2 text-gray-400 text-sm"
                >
                  <CheckCircle size={14} className="text-blue-500" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#020816] border border-white/5 rounded-2xl p-6 h-fit sticky top-24">
          <h3 className="text-white font-semibold mb-6">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/5 text-center group hover:bg-white/10 transition-colors"
              >
                <div className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-all active:scale-95">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

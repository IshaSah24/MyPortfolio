import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Terminal, Code2 } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { ExperienceItem } from './components/ExperienceItem';
import { ProjectCard } from './components/ProjectCard';
import { SkillBadge } from './components/SkillBadge';

function Portfolio() {
  const { theme, setTheme } = useTheme();

  const skills = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Redis',
    'TailwindCSS',
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12 sm:px-8">
        <motion.header
          className="flex items-center justify-between mb-16"
          {...fadeIn}
        >
          <div className="flex items-center gap-3">
            <Terminal className="text-blue-600" size={28} />
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Isha Sah</h1>
              <p className="text-sm text-text-tertiary font-mono">
                Full Stack Developer
              </p>
            </div>
          </div>
          <ThemeToggle theme={theme} onThemeChange={setTheme} />
        </motion.header>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-text-secondary leading-relaxed mb-6">
            Software engineer specializing in full-stack web development. I practice DSA
            daily on LeetCode to strengthen problem-solving skills and build modern,
            user-focused applications using cutting-edge technologies.
          </p>
          <div className="flex items-center gap-4 text-sm text-text-tertiary font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
            <Code2 size={20} className="text-accent" />
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} index={index} />
            ))}
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            <ExperienceItem
              icon="I"
              title="Institutional Major Project"
              subtitle="Full Stack Developer"
              period="Jul 2024 - Feb 2025"
            />
            <ExperienceItem
              icon="T"
              title="TechOctanet Service Pvt Ltd"
              subtitle="Web Developer Intern"
              period="May 2024 - Jul 2024"
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">Education</h2>
          <div className="space-y-6">
            <ExperienceItem
              icon="D"
              title="Dooars Academy of Technology & Management"
              subtitle="Bachelor's Degree of Computer Application (BCA) • CGPA: 8.9"
              period="2022 - 2025"
            />
            <ExperienceItem
              icon="K"
              title="Kumargramduar Madan Singh High School"
              subtitle="Higher Secondary School (HS)"
              period="2020 - 2021"
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-xl font-bold text-text-primary mb-6">
            Certifications & Virtual Experiences
          </h2>
          <div className="space-y-6">
            <ExperienceItem
              icon="A"
              title="AWS Virtual Experience"
              subtitle="Serverless Application Developer • AWS Skill Builder"
              period="Aug - Oct 2024"
              details={[
                'Completed self-paced programs on AWS Lambda, API Gateway, and CDK',
                'Designed and built serverless applications using AWS services',
                'Explored event-driven architecture and scalable API design',
                'Earned verified AWS completion certificates',
              ]}
              certificates={[
                {
                  name: 'AWS Lambda Foundations',
                  url: 'https://github.com/IshaSah24/Certificates/blob/main/97bd3b8f-4b69-4737-96fe-3a60b500a926.pdf',
                },
                { name: 'API Gateway Serverless', url: '#' },
                { name: 'CDK Getting Started', url: '#' },
              ]}
            />
            <ExperienceItem
              icon="R"
              title="Red Hat Academy"
              subtitle="RHEL-124 & RHEL-134 • Linux System Administration"
              period="May - Sep 2024"
              details={[
                'Linux system administration and shell scripting using RHEL-9',
                'Configured networking, permissions, and system services',
                'Completed coursework with verified attendance certificates',
              ]}
              certificates={[
                { name: 'RH124 Certificate', url: '#' },
                { name: 'RH134 Certificate', url: '#' },
              ]}
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 bg-surface-secondary border border-divider text-text-primary text-sm rounded-full mb-3 font-mono">
              Featured Work
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">Projects</h2>
            <p className="text-sm text-text-secondary max-w-2xl mx-auto">
              A collection of full-stack applications showcasing modern web development
              practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard
              title="TypeStrike AI"
              description="AI-driven full-stack typing application with multiplayer features and difficulty levels. Users can test typing speed against AI opponents."
              features={[
                'Play with AI at various difficulty levels',
                'Real-time multiplayer using WebSockets',
                'Performance analytics and tracking',
              ]}
              tags={['React', 'WebSocket', 'MongoDB', 'DeepSeek AI', 'TailwindCSS']}
              sourceUrl="https://github.com/IshaSah24/TypeStrike-AI"
              gradient="bg-gradient-to-br from-blue-500/10 to-purple-500/10"
            />
            <ProjectCard
              title="Full Stack URL Shortener"
              description="Complete URL shortening service with user authentication, link management, and detailed analytics dashboard."
              features={[
                'Shorten and manage custom URLs',
                'Track click analytics and metrics',
                'User authentication and profiles',
              ]}
              tags={['React', 'Express', 'MongoDB', 'TailwindCSS']}
              sourceUrl="https://github.com/IshaSah24/FullStack-UrlShortner"
              gradient="bg-gradient-to-br from-purple-500/10 to-pink-500/10"
            />
          </div>
        </motion.section>

        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-surface-secondary border border-divider rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-text-primary mb-4 text-center">
              Data Structures & Algorithms
            </h2>
            <p className="text-text-secondary text-center max-w-2xl mx-auto mb-8 leading-relaxed">
              Consistent practice on{' '}
              <a
                href="https://leetcode.com/u/ishasah850/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium"
              >
                LeetCode
              </a>{' '}
              to strengthen problem-solving skills and algorithmic thinking
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
              <img
                src="https://leetcard.jacoblin.cool/ishasah850?theme=dark&font=Source%20Code%20Pro&ext=heatmap"
                alt="LeetCode Stats"
                className="w-full lg:w-[400px] rounded-xl border border-divider"
              />

              <div className="space-y-2 text-sm text-text-secondary">
                <p className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Solved 200+ problems across multiple categories
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Daily problem-solving streak maintained
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Focus on time and space optimization
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-accent">→</span>
                  Active participant in weekly contests
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://leetcode.com/u/ishasah850/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-text-primary text-bg-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View LeetCode Profile
              </a>
            </div>
          </div>
        </motion.section>

        <motion.footer
          className="border-t border-divider pt-8 pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center justify-center gap-6 mb-4">
            <a
              href="https://github.com/IshaSah24/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/isha-sah-607277300/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/IshaSah_24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-accent transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href="mailto:sah904582@email.com"
              className="text-text-tertiary hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-center text-xs text-text-tertiary font-mono">
            Built with React + TypeScript + TailwindCSS
          </p>
        </motion.footer>
      </div>
    </div>
  );
}

export default Portfolio;

import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  techStack = [], 
  bullets = [], 
  demoLink, 
  githubLink 
}) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-slate-700/50 hover:border-slate-400/50 max-w-sm mx-auto">
      
      {/* Hero Image with Overlay */}
      <div className="relative h-64 overflow-hidden rounded-t-3xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Quick Stats Overlay */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center gap-1 text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
            <span>⭐</span>
            <span>1.2k</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-white border border-white/20">
            <span>👀</span>
            <span>5k+</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-6">
        {/* Title & Type Badge */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              {title}
            </h3>
            <span className="px-3 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full font-medium border border-emerald-500/30">
              Live
            </span>
          </div>
          
          <p className="text-slate-300 leading-relaxed text-lg">{description}</p>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 tracking-wide uppercase">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 text-xs bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-full backdrop-blur-sm border border-slate-500/30 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features Bullets */}
        <div>
          <h4 className="text-sm font-semibold text-slate-400 mb-3 tracking-wide uppercase">Highlights</h4>
          <ul className="space-y-2 text-slate-300">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-400 mt-0.5">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-slate-700/50">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl backdrop-blur-sm border border-blue-500/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn"
            >
              <FiExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
              Live Demo
            </a>
          )}
          
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-xl backdrop-blur-sm border border-slate-500/30 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group/btn"
            >
              <FiGithub className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Usage Example
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20 py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="E-Commerce Dashboard"
          description="Modern admin panel with real-time analytics, inventory management, and automated reporting built for scale."
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
          techStack={['React', 'Tailwind', 'Node.js', 'Prisma', 'Chart.js']}
          bullets={[
            'Real-time sales analytics with live charts',
            'Inventory management for 10k+ products',
            'Multi-tenant architecture supporting 50+ stores',
            'Automated PDF reports & export functionality'
          ]}
          demoLink="https://demo.com"
          githubLink="https://github.com/user/project"
        />
        {/* Add more cards... */}
      </div>
    </div>
  );
};

export default ProjectCard;

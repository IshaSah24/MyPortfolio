import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';


export const ProjectCard = ({
  title,
  description,
  features,
  tags,
  demoUrl,
  sourceUrl,
  gradient,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="border border-divider rounded-xl overflow-hidden bg-surface-primary"
    >
      <div className={`h-40 ${gradient} flex items-center justify-center`}>
        <div className="text-5xl opacity-80">💻</div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg text-text-primary mb-2">{title}</h3>
        <p className="text-sm text-text-secondary mb-3 leading-relaxed">{description}</p>

        {features && (
          <ul className="text-xs text-text-tertiary space-y-1 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2">→</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-surface-secondary text-text-secondary text-xs rounded border border-divider font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-text-primary text-bg-primary text-xs rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <ExternalLink size={14} />
              Demo
            </a>
          )}
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 border border-divider text-text-primary text-xs rounded-lg hover:bg-surface-secondary transition-colors font-medium"
          >
            <Github size={14} />
            Source
          </a>
        </div>
      </div>
    </motion.div>
  );
};

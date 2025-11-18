import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';


export const ExperienceItem = ({
  icon,
  title,
  subtitle,
  period,
  details,
  certificates,
})=> {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="group"
      onHoverStart={() => details && setIsExpanded(true)}
      onHoverEnd={() => details && setIsExpanded(false)}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-surface-secondary border border-divider flex items-center justify-center text-sm font-semibold flex-shrink-0 text-text-primary">
          {icon}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-semibold text-text-primary flex items-center gap-2">
                {title}
                {details && (
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} className="text-text-tertiary" />
                  </motion.span>
                )}
              </div>
              <div className="text-sm text-text-secondary mt-0.5">{subtitle}</div>
            </div>
            <div className="text-sm text-text-tertiary whitespace-nowrap font-mono">
              {period}
            </div>
          </div>

          {details && (
            <motion.div
              initial={false}
              animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="list-disc list-inside text-sm text-text-secondary mt-3 space-y-1.5 pl-1">
                {details.map((detail, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>

              {certificates && (
                <div className="mt-3 text-sm">
                  <strong className="text-text-primary">Certificates:</strong>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {certificates.map((cert, idx) => (
                      <a
                        key={idx}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline bg-surface-tertiary px-2.5 py-1 rounded text-xs border border-divider transition-colors hover:border-accent"
                      >
                        {cert.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

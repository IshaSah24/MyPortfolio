import React from 'react';
import GitHubCard from '../GithubCard';

const CodingProfilesSection = () => {
  return (
    <section id="coding-profiles" className="mb-16 lg:mb-20">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
        GitHub Activity
      </h2>
      <GitHubCard />
    </section>
  );
};

export default CodingProfilesSection;
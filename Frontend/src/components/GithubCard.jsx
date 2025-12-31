export default function GitHubCard() {
  return (
    <div className="border border-border rounded-xl p-5 bg-card hover-lift">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-foreground">
          GitHub Activity
        </h3>

        <a
          href="https://github.com/IshaSah24"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          View Profile →
        </a>
      </div>

      {/* GitHub stats */}
      <img
        src="https://github-readme-stats.vercel.app/api?username=IshaSah24&show_icons=true&theme=transparent"
        alt="GitHub stats"
        loading="lazy"
        className="w-full rounded-md border border-border"
      />

      {/* Contribution streak */}
      <img
        src="https://streak-stats.demolab.com?user=IshaSah24&theme=transparent"
        alt="GitHub streak"
        loading="lazy"
        className="w-full mt-3 rounded-md border border-border"
      />
    </div>
  );
}

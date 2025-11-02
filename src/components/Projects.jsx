import React from 'react';

const projects = [
  {
    title: 'Neon Dashboard',
    desc: 'A real-time analytics dashboard with smooth animations and dark mode.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'E‑commerce UI',
    desc: 'Modern storefront with product filtering, cart, and checkout flows.',
    tags: ['Vite', 'React', 'Stripe'],
    link: '#'
  },
  {
    title: '3D Playground',
    desc: 'Interactive 3D experiments using Spline and WebGL integrations.',
    tags: ['Spline', 'Three', 'UX'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A selection of work packaged in macOS‑style windows.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow hover:shadow-lg transition-shadow overflow-hidden">
              {/* macOS window chrome */}
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
                <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
                <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
                <span className="ml-2 text-xs text-slate-600 dark:text-slate-300">{p.title}.app</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs rounded-full bg-slate-900/90 text-white dark:bg-white/15 dark:text-white px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="mt-5 inline-block text-sm font-medium text-slate-900 dark:text-white hover:opacity-80"
                >
                  Open →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

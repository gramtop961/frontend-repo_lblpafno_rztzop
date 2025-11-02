import React from 'react';
import { Home, User, FolderGit2, Mail } from 'lucide-react';

const Dock = () => {
  const items = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: FolderGit2, label: 'Projects', href: '#projects' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-40 flex justify-center">
      <div className="pointer-events-auto flex items-end gap-3 rounded-2xl bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/10 backdrop-blur px-4 py-2 shadow-lg">
        {items.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            className="group relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 dark:bg-white/10 hover:bg-white dark:hover:bg-white/15 transition-all duration-200 border border-white/60 dark:border-white/10 shadow hover:scale-110"
          >
            <Icon className="h-5 w-5 text-slate-900 dark:text-white" />
            <span className="absolute -top-7 scale-0 group-hover:scale-100 transition-transform text-xs rounded bg-slate-900 text-white px-2 py-1">
              {label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dock;

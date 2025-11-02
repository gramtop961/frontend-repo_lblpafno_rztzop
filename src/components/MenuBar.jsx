import React from 'react';

const MenuBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur border border-white/50 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 text-sm text-slate-700 dark:text-slate-200 select-none">
            {/* Left: window controls */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
              <span className="ml-3 font-medium">Flames • Portfolio</span>
            </div>
            {/* Center: pseudo menu */}
            <div className="hidden md:flex items-center gap-6 opacity-80">
              <button className="hover:opacity-100">File</button>
              <button className="hover:opacity-100">Edit</button>
              <button className="hover:opacity-100">View</button>
              <button className="hover:opacity-100">Window</button>
              <button className="hover:opacity-100">Help</button>
            </div>
            {/* Right: time or actions */}
            <div className="flex items-center gap-3 text-xs md:text-sm opacity-80">
              <a href="#projects" className="hover:opacity-100">Projects</a>
              <a href="#about" className="hover:opacity-100">About</a>
              <a href="#contact" className="hover:opacity-100">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

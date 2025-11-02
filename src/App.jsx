import React from 'react';
import MenuBar from './components/MenuBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Dock from './components/Dock';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1000px_600px_at_20%_-20%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_500px_at_100%_20%,rgba(139,92,246,0.15),transparent)] dark:bg-slate-950">
      <MenuBar />
      <Hero />
      <Projects />

      {/* About section */}
      <section id="about" className="relative z-10 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
              <span className="ml-2 text-xs text-slate-600 dark:text-slate-300">About.me</span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">About Me</h3>
              <p className="mt-3 text-slate-700/90 dark:text-slate-300">
                I design and build delightful web experiences with a focus on performance, accessibility, and crisp aesthetics. I love blending 3D, motion, and clean UI patterns to tell stories through interfaces.
              </p>
              <p className="mt-3 text-slate-700/90 dark:text-slate-300">
                My toolbox includes React, TypeScript, Tailwind, and design systems. Recently, I’ve been exploring interactive 3D with Spline to add playful depth to otherwise minimal layouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur shadow overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] border border-black/10" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] border border-black/10" />
              <span className="ml-2 text-xs text-slate-600 dark:text-slate-300">Contact.app</span>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Let’s work together</h3>
              <p className="mt-3 text-slate-700/90 dark:text-slate-300">
                Open to freelance, collabs, and full‑time roles. Drop a message and I’ll get back soon.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 grid gap-4 sm:grid-cols-2">
                <input className="sm:col-span-1 rounded-md border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Name" />
                <input className="sm:col-span-1 rounded-md border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Email" type="email" />
                <textarea className="sm:col-span-2 rounded-md border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/10 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-900/20" placeholder="Your message" rows={4} />
                <div className="sm:col-span-2">
                  <button className="rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 font-medium shadow hover:opacity-90">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Dock />
    </div>
  );
}

export default App;

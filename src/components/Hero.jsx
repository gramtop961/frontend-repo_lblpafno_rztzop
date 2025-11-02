import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80 dark:from-black/50 dark:via-black/10 dark:to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur px-3 py-1 text-xs text-slate-700 dark:text-slate-200 border border-white/50 dark:border-white/10 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Interactive • Tech • Modern
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
            A playful, macOS-inspired portfolio
          </h1>
          <p className="mt-4 text-lg text-slate-700/80 dark:text-slate-200/80">
            Explore my work in a desktop-like space. Click around the scene, open windows, and dive into projects crafted with care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-3 font-medium shadow hover:opacity-90">
              View Projects
            </a>
            <a href="#contact" className="rounded-lg bg-white/70 dark:bg-white/10 text-slate-900 dark:text-white px-5 py-3 font-medium backdrop-blur border border-white/60 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/20">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

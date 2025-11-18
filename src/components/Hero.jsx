import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-8">
        <div className="text-white">
          <p className="inline-flex items-center text-xs uppercase tracking-widest text-blue-300/80 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">
            Tech • Portfolio • Interactive
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm Your Name
          </h1>
          <p className="mt-4 text-lg text-blue-200/90 max-w-xl">
            I build modern, delightful digital products. Explore my work, skills, and experience.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#portfolio" className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 transition-colors">View Work</a>
            <a href="#contact" className="rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 border border-white/10 transition-colors">Contact Me</a>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 opacity-60" />
        </div>
      </div>
    </section>
  );
}

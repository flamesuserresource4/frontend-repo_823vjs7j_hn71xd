export function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{title}</h2>
        <div className="text-blue-200/90">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const list = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'FastAPI', 'Tailwind', 'MongoDB'
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {list.map((s) => (
        <div key={s} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 text-sm">
          {s}
        </div>
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  const items = [
    { title: 'Project Alpha', desc: 'Design system and dashboard' },
    { title: 'Project Beta', desc: 'E-commerce storefront' },
    { title: 'Project Gamma', desc: 'Mobile-first web app' },
    { title: 'Project Delta', desc: '3D interactive landing page' },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5">
          <div className="aspect-video bg-slate-800/50" />
          <div className="p-4">
            <h3 className="text-white font-semibold">{it.title}</h3>
            <p className="text-sm text-blue-200/80">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ExperienceList() {
  const items = [
    { role: 'Senior Frontend Engineer', company: 'Tech Co', period: '2021–Present', points: ['Led UI architecture', 'Shipped design system'] },
    { role: 'Frontend Engineer', company: 'Startup', period: '2019–2021', points: ['Built React apps', 'Improved performance'] },
  ];
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.role} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">{it.role} • {it.company}</h3>
            <span className="text-sm text-blue-200/70">{it.period}</span>
          </div>
          <ul className="mt-2 list-disc list-inside text-blue-200/90 text-sm">
            {it.points.map(p => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function EducationList() {
  const items = [
    { degree: 'B.Sc. in Computer Science', school: 'University Name', period: '2015–2019' },
  ];
  return (
    <div className="space-y-4">
      {items.map((it) => (
        <div key={it.degree} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold">{it.degree}</h3>
            <span className="text-sm text-blue-200/70">{it.school} • {it.period}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = [
    { name: 'Alex P.', text: 'A joy to work with — delivered beyond expectations.' },
    { name: 'Sam K.', text: 'Great eye for detail and product thinking.' },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((t) => (
        <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="text-blue-200/90">“{t.text}”</p>
          <p className="mt-2 text-white font-medium">{t.name}</p>
        </div>
      ))}
    </div>
  );
}

export function BlogList() {
  const posts = [
    { title: 'Designing delightful UIs', date: 'Oct 2024' },
    { title: 'Performance tips for React', date: 'Aug 2024' },
  ];
  return (
    <div className="space-y-3">
      {posts.map((p) => (
        <div key={p.title} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
          <p className="text-white">{p.title}</p>
          <span className="text-sm text-blue-200/70">{p.date}</span>
        </div>
      ))}
    </div>
  );
}

export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    alert(`Thanks, ${name}! Your message has been sent.`);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
      <input name="name" required placeholder="Name" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
      <input type="email" name="email" required placeholder="Email" className="col-span-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
      <textarea name="message" required placeholder="Message" rows="4" className="sm:col-span-2 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
      <button className="sm:col-span-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 transition-colors">Send Message</button>
    </form>
  );
}

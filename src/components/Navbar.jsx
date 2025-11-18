import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDownloadCV = () => {
    const content = `Name: Your Name\nTitle: Software Engineer\nLocation: City, Country\nEmail: you@example.com\n\nSummary\n--------\nExperienced engineer specializing in modern web applications.\n\nSkills\n------\n- JavaScript, TypeScript, React, Node.js\n- Python, FastAPI\n- Databases: MongoDB, PostgreSQL\n\nExperience\n----------\nCompany – Role (YYYY–YYYY)\n- Key achievement 1\n- Key achievement 2\n`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Your_Name_CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            onClick={() => onClick && onClick()}
            className="text-slate-200/90 hover:text-white transition-colors"
          >
            {s.label}
          </a>
        </li>
      ))}
      <li>
        <button
          onClick={handleDownloadCV}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 transition-colors"
        >
          <Download size={18} />
          Download CV
        </button>
      </li>
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white font-semibold">
          <img src="/favicon.svg" alt="Logo" className="w-6 h-6" />
          <span>My Portfolio</span>
        </a>

        <div className="hidden md:block">
          <NavLinks />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-4">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Section, Skills, PortfolioGrid, ExperienceList, EducationList, Testimonials, BlogList, ContactForm } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100 selection:bg-blue-600/30">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />

        <Section id="about" title="About">
          <p className="max-w-3xl">
            I'm a product-focused engineer who blends design sensibility with solid, scalable engineering. I enjoy building smooth interfaces, performant systems, and thoughtful experiences.
          </p>
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="portfolio" title="Portfolio">
          <PortfolioGrid />
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceList />
        </Section>

        <Section id="education" title="Education">
          <EducationList />
        </Section>

        <Section id="testimonials" title="Testimonials">
          <Testimonials />
        </Section>

        <Section id="blog" title="Blog">
          <BlogList />
        </Section>

        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>

        <footer className="py-10 text-center text-blue-200/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;

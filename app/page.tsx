const skills = [
  'HTML',
  'CSS',
  'JavaScript/TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'MongoDB',
  'Firebase',
  'Node.js',
  'Vercel',
  'VS Code',
  'Copilot'
];

const projects = [
  {
    title: "Skintrinsic",
    description: "A web application for AI assisted skincare.",
    image: "/skintrinsic.png",
    link: "http://skintrinsic.vercel.app/"
  },
  {
    title: "Dev Events",
    description: "A responsive web application for discovering and managing developer events.",
    image: "/dev-events.png",
    link: "https://dev-event-omega-five.vercel.app/"
  },
  {
    title: "Movie Finder",
    description: "A web application to search and discover movies with ease.",
    image: "/movie-finder.png",
    link: "https://movie-finder-sigma-two.vercel.app/"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Jacob Meuser</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href="#about" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">About</a>
            <a href="#projects" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Projects</a>
            <a href="#contact" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Contact</a>
          </nav>
        </header>

        <main className="space-y-20 py-12">

          <section id="about" className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">About me</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  Full-stack developer with a passion for clean code that creates consistent and usable interfaces.
                </h2>
              </div>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                I&apos;m a full-stack developer dedicated to creating user-centric digital experiences.
                With expertise in modern web technologies and a strong focus on accessibility
                and performance, I build interfaces that are both beautiful and functional.
              </p>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 dark:text-slate-200">
                  Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <a href="mailto:jakemsr@yahoo.com" className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105">
                Contact Me
              </a>
            </div>
            <div>
              <img
                src="/profile_pic.jpg"
                alt="Jacob Meuser"
                className="rounded-3xl aspect-square object-cover"
              />
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Portfolio
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Some of my projects
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                  <a href={project.link} target="_blank" className="block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="space-y-3 p-6">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 pt-6 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Jacob Meuser. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-300">
              <a href="https://github.com/jakemsr" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">GitHub</a>
              <a href="https://www.linkedin.com/in/jacob-meuser-2239863b2" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">LinkedIn</a>
              <a href="https://instagram.com/jacob.meuser" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Instagram</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

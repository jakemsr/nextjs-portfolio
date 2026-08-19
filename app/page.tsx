import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/contact-modal";


const skills = [
  'HTML',
  'CSS',
  'JavaScript/TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'SQL',
  'Git',
  'VS Code',
  'GitHub Copilot',
  'Better Auth',
  'Resend',
  'MongoDB',
  'Firebase',
  'Supabase',
  'Node.js',
  'Vercel',
  'Cloudflare Workers',
];

const projects = [
  {
    title: "OpenBSD Device Support Database",
    description: "A web application for tracking OpenBSD device support.",
    image: "/obsd-device-support.png",
    link: "https://obsd-device-support.vercel.app/",
    code: "https://github.com/jakemsr/obsd-device-support",
    problem: "Tracking OpenBSD device support is cumbersome and scattered across various sources.",
    solution: "OpenBSD Device Support Database centralizes information about device support for OpenBSD.",
    decision: "Implemented efficient search and filtering to quickly find device support information."
  },
  {
    title: "Skintrinsic",
    description: "A web application for AI assisted skincare.",
    image: "/skintrinsic.png",
    link: "http://skintrinsic.vercel.app/",
    code: "https://github.com/jakemsr/skintrinsic",
    problem: "Knowing which skincare products are suitable for individual users is challenging.",
    solution: "Skintrinsic provides personalized skincare recommendations using AI.",
    decision: "Implemented all animations with Tailwindcss to keep bundle small and maintain performance."
  },
  {
    title: "Dev Events",
    description: "A responsive web application for discovering developer events.",
    image: "/dev-events.png",
    link: "https://dev-event-omega-five.vercel.app/",
    code: "https://github.com/jakemsr/DevEvent",
    problem: "Developers need a centralized platform to discover relevant events.",
    solution: "Dev Events aggregates developer events and provides an easy-to-use interface for discovery.",
    decision: "Implemented authentication with Better Auth to personalize experience and only allow authorized users to add events."
  },
  {
    title: "Summarist",
    description: "A web application for audio and text summaries of books.",
    image: "/summarist.png",
    link: "https://summarist-eight.vercel.app/",
    code: "https://github.com/jakemsr/summarist",
    problem: "Many people struggle to find time to read a full book.",
    solution: "Summarist generates concise summaries of books, available in audio and text formats.",
    decision: "Leveraged Firebase Stripe integration to handle payments and subscriptions efficiently."
  },
];

interface HomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: HomeProps) {

  const resolvedParams = await searchParams;
  const isModalOpen = resolvedParams.modal === 'true';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-10">

        {isModalOpen && <ContactModal />}

        <header className="flex flex-col gap-6 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Jacob Meuser</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a href="#about" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">About</a>
            <a href="#projects" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Projects</a>
            <a href="/resume.pdf" target="_blank" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Resume</a>
            <Link href="/?modal=true" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Contact</Link>
          </nav>
        </header>

        <main className="space-y-20 py-12">

          <section id="about" className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">About me</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                  Software engineer with a passion for clean code that creates consistent and usable interfaces.
                </h2>
              </div>
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                I&apos;m a software engineer dedicated to creating user-centric digital experiences.
                With expertise in modern web technologies and a strong focus on performance,
                I build interfaces that are both beautiful and functional.
                Before web development I was an official OpenBSD committer with 800-plus
                kernel-level commits.
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
              <Link
                href="/?modal=true"
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105">
                Contact Me
              </Link>
            </div>
            <div>
              <Image
                src="/profile_pic.jpg"
                alt="Jacob Meuser"
                width={400}
                height={400}
                loading="eager"
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
                <article key={project.title} className="flex flex-col items-stretch overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={160}
                      className="h-40 w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-col gap-3 grow p-6">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h3>
                    </div>
                    <div>
                      <b>Problem:</b>
                      <br />
                      <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.problem}
                      </span>
                    </div>
                    <div>
                      <b>Solution:</b>
                      <br />
                      <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.solution}
                      </span>
                    </div>
                    <div>
                      <b>Technical:</b>
                      <br />
                      <span className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {project.decision}
                      </span>
                    </div>
                    <div className="flex justify-around mt-auto">
                      <div>
                        <Link
                          href={project.code}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105"
                        >
                          View Code
                        </Link>
                      </div>
                      <div>
                        <Link
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105"
                        >
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
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
              <a href="https://www.linkedin.com/in/jacob-meuser-688b45343" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">LinkedIn</a>
              <a href="https://instagram.com/jacob.meuser" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Instagram</a>
            </div>
          </div>
        </footer>

      </div>
    </div >
  );
}

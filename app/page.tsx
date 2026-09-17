import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/contact-modal";


const skills = {
  languages: [
    'C',
    'C++',
    'JavaScript',
    'TypeScript',
    'SQL',
  ],
  application_development: [
    'Next.js',
    'React',
    'Node.js',
    'REST APIs',
    'authentication',
    'data modeling',
  ],
  databases_and_data: [
    'PostgreSQL',
    'Prisma',
    'relational database design',
    'data extraction and transformation',
  ],
  systems: [
    'Unix',
    'OpenBSD',
    'systems programming',
    'device drivers',
    'hardware/software integration',
  ],
  tools: [
    'Git',
    'GitHub',
    'Vercel',
    'GitHub Copilot'
  ],
};

const currentProjects = [
  {
    title: "OpenBSD Device Support Database",
    description: "A web application for tracking OpenBSD device support.",
    image: "/obsd-device-support.png",
    link: "https://obsd-device-support.vercel.app/",
    code: "https://github.com/jakemsr/obsd-device-support",
    problem: "OpenBSD hardware support information is distributed across driver source code, \
      system documentation, and other sources, and the names used by drivers often don't \
      correspond to the product names users encounter.",
    solution: "A searchable database that connects OpenBSD hardware identifiers and drivers \
      with real-world device names, supplemented by user-submitted device reports with source \
      information that can eventually be verified before being incorporated into the trusted dataset.",
    decision: "Built a source-code parser for repeatably extracting hardware vendor and product IDs \
      from drivers, along with a relational PostgreSQL data model, Next.js APIs, authentication, and \
      device-report submission. The reporting model preserves source provenance and separates \
      submitted data from verified device information while enforcing relationships between reports \
      and their dependent records."
  },
  {
    title: "hwinspect",
    description: "A C++ command line tool for hardware inspection.",
    image: "/hwinspect.png",
    link: "",
    code: "https://github.com/jakemsr/hwinspect",
    problem: "OpenBSD provides hardware information through several system utilities, but no \
      single view brings together the details of detected USB and PCI devices, including \
      hardware identifiers, reported names, and attached drivers.",
    solution: "hwinspect collects and organizes USB and PCI device information in one place, \
      then queries the OpenBSD Device Support Database to supplement locally reported information \
      with known device names and support data. The tool is also being developed as a future path \
      for contributing hardware reports directly from an OpenBSD system.",
    decision: "Built in C++20 with modular parsers for OpenBSD system-command output, libcurl \
      HTTP requests, JSON processing, concurrent database lookups, and structured error handling. \
      Saved command output is used as test data so parsing can be developed and verified without \
      requiring access to every hardware configuration."
  },
];


const previousProjects = [
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
            <p className="text-lg font-semibold">Jacob Meuser - Software Engineer</p>
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
                <p className="text-lg uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                  About me
                </p>
              </div>
              <div className="text-base leading-7 text-slate-600 dark:text-slate-300">
                <p className="mb-4">
                  I&apos;m a software engineer with a background spanning Unix systems development,
                  web applications, and more than 20 years running my own businesses.
                </p>
                <p className="mb-4">
                  I began building websites in 1999 while co-founding an online glass-art business.
                  As the business grew, I moved from manually maintained pages to Perl and later
                  PHP and MySQL, while also running our Internet infrastructure on OpenBSD.
                  That work led me into the OpenBSD project, first through maintaining software
                  ports and eventually into kernel development.
                </p>
                <p className="mb-4">
                  From 2006-2011, I contributed more than 800 kernel-level C commits across
                  OpenBSD&apos;s audio and USB subsystems. I worked on device drivers,
                  suspend/resume, device lifecycle and concurrency problems, and audio infrastructure,
                  including
                  the <span className="text-slate-500 dark:text-slate-200 font-mono font-bold tracking-wide">azalia(4)</span> Intel
                  High Definition Audio driver
                  and <span className="text-slate-500 dark:text-slate-200 font-mono font-bold tracking-wide">sndio</span>.
                </p>
                <p className="mb-4">
                  Alongside my technical work, I built a long career as a self-employed artist.
                  I&apos;ve now returned my professional focus to software engineering, bringing
                  my application-development skills up to date while drawing on the systems
                  experience and engineering judgment I developed through OpenBSD.
                </p>
                <p className="mb-4">
                  My current work brings those parts of my experience together. I&apos;m building
                  an OpenBSD Device Support Database
                  and <span className="text-slate-500 dark:text-slate-200 font-mono font-bold tracking-wide">hwinspect</span>, a
                  C++ utility that examines hardware on an OpenBSD system and queries the database for
                  support information.
                  Together, they combine Unix systems knowledge with modern application development,
                  databases, APIs, data processing, and user-contributed information.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:max-lg:flex-row gap-6">
              <Image
                src="/profile_pic.jpg"
                alt="Jacob Meuser"
                width={400}
                height={400}
                loading="eager"
                className="rounded-3xl aspect-square object-cover"
              />
              <div className="flex flex-col gap-4">
                <p className="text-base leading-7 italic text-slate-600 dark:text-slate-300">
                  I&apos;m particularly interested in software
                  where <span className="font-bold text-slate-500 dark:text-slate-200">correctness</span>,&nbsp;
                  <span className="font-bold text-slate-500 dark:text-slate-200">maintainability</span>,
                  and <span className="font-bold text-slate-500 dark:text-slate-200">understanding the underlying system</span> matter.
                  I enjoy working across boundaries—systems and applications, code and data,
                  or low-level hardware information and the interfaces that make it useful.
                </p>
                <Link
                  href="/?modal=true"
                  className="inline-flex w-fit rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105">
                  Contact Me
                </Link>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <div className="space-y-3">
              <p className="text-lg uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Current Projects
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {currentProjects.map((project) => (
                <article key={project.title} className="flex flex-col items-stretch overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                  <Link
                    href={project.link || project.code}
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
                      {project.link &&
                        <div>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105"
                          >
                            Live Site
                          </Link>
                        </div>
                      }
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <div className="space-y-3">
              <p className="text-lg uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
                Skills
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-6">

              {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => (
                // now `category` is typed as the union of actual keys
                <div key={category} className="flex flex-col gap-2">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-700 dark:text-slate-200">
                    {category.split('_').join(' ')}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills[category].map((skill) => (
                      <span key={skill} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
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
            </div>
          </div>
        </footer>

      </div>
    </div >
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

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
    description: "A responsive web application for discovering developer events.",
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

  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    data?: {
      success: boolean;
      id: string;
      message: string;
    };
    error?: string;
  } | null>(null);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    const message = `<p>Message from ${name} ${email}:</p><p>${formMessage}</p>`;

    const payload = { message };

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(`response not ok: ${data.error}`);
        setResult({ error: data.error || 'Failed to send email' });
      } else {
        setResult({ data });
      }
    } catch (err) {
      setResult({ error: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };


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
            <a href="/resume.pdf" target="_blank" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Resume</a>
            <a href="#" onClick={() => { setShowModal(true); setResult(null); }} className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Contact</a>
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
              <button
                onClick={() => { setShowModal(true); setResult(null); }}
                className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-slate-700 transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105">
                Contact Me
              </button>
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
                <article key={project.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm shadow-slate-200/50 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                  <a href={project.link} target="_blank" className="block">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={160}
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
              <a href="https://www.linkedin.com/in/jacob-meuser-688b45343" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">LinkedIn</a>
              <a href="https://instagram.com/jacob.meuser" target="_blank" rel="noreferrer" className="relative hover:text-slate-900 dark:hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-slate-900 dark:after:bg-slate-100 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">Instagram</a>
            </div>
          </div>
        </footer>

        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-400 ease-in
          ${showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setShowModal(false)}
          />

          <div className="relative w-full max-w-md rounded-md p-6 shadow-xl bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
            <button
              className="absolute top-4 right-4 rounded-full bg-slate-900 dark:bg-slate-700 px-3 py-3 text-base font-bold text-white transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            <h3 className="text-xl font-bold">
              Let's have a chat!
            </h3>
            <h4 className="text-base font-medium mb-6">
              I'm currently open to new opportunities
            </h4>

            <form id="contact__form" onSubmit={(event) => handleSubmit(event)}>

              <div className="mb-4 text-base">
                <label className="block mb-2">Name</label>
                <input
                  className="w-full border-b border-slate-300 dark:border-slate-700 focus:outline-hidden"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="mb-4 text-base">
                <label className="block mb-2">Email</label>
                <input
                  className="w-full border-b border-slate-300 dark:border-slate-700 focus:outline-hidden"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
              </div>
              <div className="mb-4 text-base">
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full border-b border-slate-300 dark:border-slate-700 resize-y focus:outline-hidden"
                  name="message"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  required>
                </textarea>
              </div>

              {result ? (result.data?.success ? (
                <p className="text-green-500 mt-4">{result.data.message}</p>
              ) : (
                <>
                  <p className="text-red-500 mt-4">{result.error}</p>
                  <p>You can contact me directly at jakemsr@yahoo.com.</p>
                </>
              )) : (
                <button
                  id="contact__submit"
                  className={`inline-flex rounded-full bg-slate-900 dark:bg-slate-700 px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105 ${loading ? 'disabled' : ''}`}
                >
                  {loading ? "Sending..." : "Send it my way"}
                </button>
              )}
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}

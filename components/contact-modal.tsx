"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


export default function ContactModal() {

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

  const router = useRouter();
  const closeModal = () => {
    setShowModal(false);
    /* This timeout and the useEffect below are to allow transitions when closing and opening the modal */
    setTimeout(() => {
      router.back();
    }, 400);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

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
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-400 ease-in
          ${showModal ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>

      <div
        className="absolute inset-0 bg-black/50"
        onClick={closeModal}
      />

      <div className="relative w-full max-w-md rounded-md p-6 shadow-xl bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-200">
        <button
          className="absolute top-4 right-4 rounded-full bg-slate-900 dark:bg-slate-700 px-3 py-3 text-base font-bold text-white transition duration-200 ease-out hover:bg-slate-700 hover:shadow-lg hover:scale-105"
          onClick={closeModal}
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
  )
}
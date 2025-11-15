"use client";

import FloatingWAButton from "@/components/FloatingWAButton";
import GlobeBackground from '@/components/GlobeBackground';
import { motion } from "framer-motion";

export default function Home() {
  const waNumber = "6281314611989";
  const waMessage = encodeURIComponent(
    "Halo tim work.space! Saya tertarik dan mau dapat update + early access 🚀"
  );
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <>
      <FloatingWAButton waLink={waLink} />

      {/* Background */}
      <GlobeBackground />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#0e1b2f] via-[#0f172a] to-black opacity-90" />

        {/* Orbital blobs */}
        <div className="absolute w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl -top-40 -left-40 animate-pulse" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl top-40 -right-40 animate-ping-slow" />
      </div>

      <main className="min-h-screen flex flex-col items-center px-6 relative">
        {/* HERO */}
        <section className="max-w-6xl mx-auto text-center pt-40 pb-32 space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-[1.1] bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            work.space
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-4xl text-gray-300 font-light"
          >
            The operating system for the{" "}
            <span className="text-cyan-300 font-semibold">future of work</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            AI agents • Global teams • Virtual offices • Co-working pass •
            Health & visa support.
            <br />
            <span className="text-cyan-300 font-medium">
              A new way to work, coming 2026.
            </span>
          </motion.p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-cyan-500 text-black font-bold text-xl rounded-2xl shadow-lg hover:scale-105 transition-all"
            >
              Chat Founder
            </a>

            <a
              href="#waitlist"
              className="px-10 py-5 border-2 border-cyan-500 text-cyan-400 font-semibold text-xl rounded-2xl hover:bg-cyan-500/10 transition"
            >
              Join Waitlist
            </a>
          </div>

          <p className="text-sm text-gray-500 pt-8">
            Built in Indonesia • For the world • 2026
          </p>
        </section>

        {/* VALUE PROPOSITIONS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-10">
          {[
            {
              title: "AI Work Agents",
              desc: "Your personal AI executive assistant — automate workflows, reporting, hiring, and decisions.",
            },
            {
              title: "Global Remote OS",
              desc: "A unified system for tasks, docs, payroll, teams, and async communication.",
            },
            {
              title: "Virtual Work Spaces",
              desc: "3D offices, spatial audio, team zones, daily rituals, and a real office vibe — fully remote.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* WAITLIST */}
        <section id="waitlist" className="max-w-2xl mx-auto w-full mt-32 mb-20">
          <div className="backdrop-blur-xl bg-white/5 border border-cyan-500/20 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Get Early Access — 2026
            </h2>
            <p className="text-gray-300 mb-8">
              First 500 members get <span className="text-cyan-400">50% off</span>{" "}
              forever.
            </p>

            <form
              action="https://formsubmit.co/your-email-here@gmail.com"
              method="POST"
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="email@you.com"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-cyan-500/30 rounded-xl placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-linear-to-r from-cyan-500 to-purple-600 font-bold rounded-xl hover:scale-105 transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </section>

        <footer className="text-gray-600 text-sm pb-10">
          © 2025 WorkSpace Labs • Indonesia
        </footer>
      </main>
    </>
  );
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, HeartHandshake, Lightbulb, Sparkles, Target, Users } from "lucide-react"

const sections = [
  "Finance feels overwhelming, not practical",
  "Students know terms, but habits are missing",
  "Colleges need structured life-skill programs",
]

const dayFlow = [
  "Day 1 · Money Mindset",
  "Day 2 · Budgeting Basics",
  "Day 3 · Saving Systems",
  "Day 4 · Smart Spending",
  "Day 5 · Investing Basics",
  "Day 6 · Real-Life Decisions",
  "Day 7 · Habit Implementation",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#061a2d] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(22,163,74,0.2),transparent_35%),radial-gradient(circle_at_80%_0,rgba(30,144,255,0.28),transparent_40%),linear-gradient(180deg,#061a2d_0%,#0A2540_100%)]" />

      <header className="sticky top-0 z-50 border-b border-emerald-400/20 bg-[#061a2d]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#" aria-label="Finverze home" className="inline-flex">
            <Image src="/images/finverze-logo.png" alt="Finverze logo" width={72} height={72} className="h-14 w-14 drop-shadow-[0_0_18px_rgba(30,144,255,0.9)]" />
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#program" className="hover:text-emerald-300">Program</a>
            <a href="#benefits" className="hover:text-emerald-300">Benefits</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </div>
          <Link href="#contact" className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">Book Session</Link>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[84vh] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300"><Sparkles className="h-4 w-4" /> Human-first financial learning</p>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">Build financially smart students, one real habit at a time.</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75 lg:mx-0">Finverze runs a simple 7-day discipline program that students actually follow and colleges can deploy easily.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link href="#contact" className="rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-950">Book a Session</Link>
            <Link href="#program" className="rounded-xl border border-white/25 bg-white/5 px-7 py-3">View Program</Link>
          </div>
        </div>
        <div className="grid gap-4">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" alt="Students in collaborative classroom session" className="h-56 w-full rounded-2xl object-cover border border-white/20" />
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80" alt="Mentor guiding learners through workshop" className="h-56 w-full rounded-2xl object-cover border border-white/20" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <div className="grid gap-4 md:grid-cols-3">
          {sections.map((item) => (
            <div key={item} className="rounded-xl border border-emerald-400/20 bg-white/5 p-5 text-white/85">{item}</div>
          ))}
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <h2 className="text-4xl font-bold">The Finverze 7-Day Financial Discipline Program</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dayFlow.map((day) => (
            <div key={day} className="rounded-xl border border-emerald-400/20 bg-gradient-to-b from-white/10 to-white/5 p-4">{day}</div>
          ))}
        </div>
      </section>

      <section id="benefits" className="mx-auto max-w-7xl px-6 pb-20 text-center">
        <h2 className="text-4xl font-bold">Why colleges and students choose Finverze</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[[Users, "Practical money habits"], [GraduationCap, "Better student confidence"], [BookOpen, "Structured 7-day delivery"], [HeartHandshake, "Human, mentor-led sessions"]].map(([Icon, label]) => (
            <div key={label as string} className="rounded-xl border border-emerald-400/20 bg-white/5 p-5">
              {Icon && <Icon className="mx-auto h-6 w-6 text-emerald-300" />}
              <p className="mt-3 text-sm text-white/85">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[[Lightbulb, "Simple onboarding"], [Target, "Clear outcomes"], [CheckCircle2, "Easy implementation"]].map(([Icon, label]) => (
            <div key={label as string} className="rounded-xl border border-white/20 bg-white/5 p-5">
              {Icon && <Icon className="mx-auto h-6 w-6 text-emerald-300" />}
              <p className="mt-3 text-sm text-white/85">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-4xl font-bold">Bring Finverze to your campus</h2>
        <p className="mt-3 text-white/70">College teams and students can both fill this form.</p>
        <form action="https://formspree.io/f/xnjwqyyq" method="POST" className="mt-10 grid gap-4 text-left md:grid-cols-2">
          <input name="name" required placeholder="Full Name" className="h-12 rounded-xl border border-emerald-400/30 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="phone" required placeholder="Phone Number" className="h-12 rounded-xl border border-emerald-400/30 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-emerald-400/30 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="contact" required placeholder="College / Organization / Student" className="h-12 rounded-xl border border-emerald-400/30 bg-white/10 px-4 placeholder:text-white/55" />
          <textarea name="objective" required placeholder="Objective (What do you want to achieve?)" className="md:col-span-2 min-h-28 rounded-xl border border-emerald-400/30 bg-white/10 px-4 py-3 placeholder:text-white/55" />
          <button type="submit" className="md:col-span-2 h-12 rounded-xl bg-emerald-500 font-semibold text-slate-950 transition hover:bg-emerald-400">Submit Request</button>
        </form>
      </section>

      <footer className="border-t border-emerald-400/20 py-10 text-center text-sm text-white/70">
        <p>finverze.com · founder@finverze.com</p>
        <p className="mt-2 inline-flex items-center gap-2 text-emerald-300">Designed for real behavior change <ArrowRight className="h-4 w-4" /></p>
      </footer>
    </main>
  )
}

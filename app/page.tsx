import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, Building2, CheckCircle2, ChevronRight, GraduationCap, Lightbulb, Mail, Phone, ShieldCheck, Users } from "lucide-react"

const days = [
  "Day 1 — Money Mindset",
  "Day 2 — Budgeting Basics",
  "Day 3 — Saving Systems",
  "Day 4 — Smart Spending",
  "Day 5 — Investing Basics",
  "Day 6 — Real Decisions",
  "Day 7 — Habit Building",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(30,144,255,0.24),transparent_35%),radial-gradient(circle_at_88%_0,rgba(20,184,166,0.16),transparent_40%),linear-gradient(180deg,#0A2540_0%,#07192c_100%)]" />

      <header className="sticky top-0 z-50 h-[72px] border-b border-white/10 bg-[rgba(10,37,64,0.7)] backdrop-blur-xl">
        <nav className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6 lg:px-20">
          <Link href="#" className="inline-flex" aria-label="Finverze home">
            <Image src="/images/finverze-logo.png" alt="Finverze" width={56} height={56} className="h-12 w-12 drop-shadow-[0_0_14px_rgba(30,144,255,0.85)]" />
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-[#8cc8ff]">About</a>
            <a href="#program" className="hover:text-[#8cc8ff]">Program</a>
            <a href="#colleges" className="hover:text-[#8cc8ff]">Colleges</a>
            <a href="#contact" className="hover:text-[#8cc8ff]">Contact</a>
            <Link href="#contact" className="rounded-[10px] bg-[#1E90FF] px-5 py-3 font-medium text-white transition hover:shadow-[0_0_24px_rgba(30,144,255,0.6)]">Book a Session</Link>
          </div>
        </nav>
      </header>

      <section id="about" className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 py-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h1 className="text-5xl font-bold leading-[1.1] md:text-6xl">Build Financially Smart Students — Not Just Graduates.</h1>
          <p className="mt-6 max-w-[480px] text-lg text-white/75">Finverze delivers structured, practical financial discipline programs that colleges can run with confidence.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-[10px] bg-[#1E90FF] px-6 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(30,144,255,0.6)]">Book a Session</Link>
            <Link href="#program" className="rounded-[10px] border border-white/20 bg-white/5 px-6 py-3">View Program</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
            {["Practical learning", "Designed for students", "Easy to implement"].map((point) => (
              <p key={point} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" /> {point}</p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80" alt="Students in workshop" className="h-full min-h-[360px] w-full rounded-2xl object-cover shadow-[0_24px_56px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1" />
        </div>
      </section>

      <section className="bg-[#112f4d]/80 py-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-6 md:grid-cols-3 lg:px-20">
          {[[GraduationCap, "Designed for college students"], [BookOpen, "Real-world financial learning"], [ShieldCheck, "Structured 7-day program"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              {Icon && <Icon className="mx-auto h-5 w-5 text-[#90cbff]" />}<p className="mt-2 text-sm text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-[100px] text-center lg:px-20">
        <h2 className="text-4xl font-bold">Nobody teaches you money. But you're expected to manage it.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Earning without spending control", "No habit-focused financial discipline", "Too much theory, too little action"].map((item) => (
            <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(30,144,255,0.25)]">
              <Lightbulb className="mx-auto h-6 w-6 text-emerald-300" />
              <p className="mt-3 font-semibold">Problem</p>
              <p className="mt-1 text-sm text-white/80">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-bold">Finverze bridges the gap between theory and real-life money skills.</h2>
          <ul className="mt-6 space-y-3 text-white/85">
            {['Practical, not theoretical','Habit-based learning','Structured program','Real-world scenarios'].map((item)=><li key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{item}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80" alt="Students learning in class" className="h-full min-h-[320px] w-full rounded-2xl object-cover" />
        </div>
      </section>

      <section id="program" className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] text-center lg:px-20">
        <h2 className="text-4xl font-bold">The Finverze 7-Day Financial Discipline Program</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {days.map((day) => (
            <div key={day} className="rounded-xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-[#1E90FF]/70">{day}</div>
          ))}
        </div>
      </section>

      <section id="colleges" className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-bold">Why Colleges Choose Finverze</h2>
          <ul className="mt-6 space-y-3 text-white/85">
            {['Improves life skills','Enhances employability','Adds academic value','Easy implementation'].map((item)=><li key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{item}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-6"><img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80" alt="Seminar presentation" className="h-full min-h-[320px] w-full rounded-2xl object-cover" /></div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["Awareness session", "Student onboarding", "7-day program", "Implementation"].map((step, i) => (
            <div key={step} className="rounded-xl border border-white/15 bg-white/10 p-5 text-center">
              <Users className="mx-auto h-6 w-6 text-[#8bc8ff]" />
              <p className="mt-2 font-semibold">Step {i + 1}</p>
              <p className="mt-1 text-sm text-white/80">{step}</p>
              {i < 3 && <ChevronRight className="mx-auto mt-3 hidden h-4 w-4 text-white/40 md:block" />}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">Student Impact</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {["Financial awareness", "Better spending habits", "Confidence", "Decision-making"].map((item) => <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-6 text-center">{item}</div>)}
        </div>
      </section>

      <section id="contact" className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-bold">Bring Finverze to Your Campus</h2>
          <p className="mt-4 text-white/75">Book a session to explore how Finverze can be implemented in your college.</p>
          <ul className="mt-6 space-y-3 text-white/85">
            {['7-day structured program','Easy onboarding','Designed for students'].map((p)=> <li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{p}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-7 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
          <form action="https://formspree.io/f/xnjwqyyq" method="POST" className="grid gap-4 md:grid-cols-2">
            <input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="phone" required placeholder="Phone" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="students" required placeholder="Number of Students" className="h-12 rounded-xl border border-slate-200 px-4 md:col-span-2" />
            <button className="md:col-span-2 h-12 rounded-xl bg-[#1E90FF] font-semibold text-white transition hover:shadow-[0_0_24px_rgba(30,144,255,0.5)]">Book a Session</button>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] text-center lg:px-20">
        <h2 className="text-4xl font-bold">Start Building Financially Smart Students Today.</h2>
        <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1E90FF] px-8 py-3 font-medium hover:shadow-[0_0_24px_rgba(30,144,255,0.55)]">Book a Session <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row lg:px-20">
          <Image src="/images/finverze-logo.png" alt="Finverze" width={40} height={40} className="h-10 w-10" />
          <div className="flex gap-4"><a href="#about">About</a><a href="#program">Program</a><a href="#contact">Contact</a></div>
          <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> founder@finverze.com</p>
          <p className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> @finverze</p>
        </div>
      </footer>
    </main>
  )
}

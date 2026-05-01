import Link from "next/link"
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BarChart3,
  CalendarCheck2,
  Flame,
  Gamepad2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wallet,
} from "lucide-react"

const problems = [
  "Students earn but don’t manage money",
  "No real-world financial habits",
  "Theory exists, behavior doesn’t change",
]

const solutions = [
  [Target, "Daily Challenges"],
  [Gamepad2, "Gamified Learning"],
  [Wallet, "Real-Life Habit Building"],
] as const

const programDays = [
  "Day 1 → Awareness",
  "Day 2 → Spending Tracking",
  "Day 3 → Budgeting",
  "Day 4 → Saving Habits",
  "Day 5 → Smart Decisions",
  "Day 6 → Peer Challenges",
  "Day 7 → Results + Certification",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0B1C2C] scroll-smooth">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-28 text-center">
        <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1E5EFF]/20 bg-[#1E5EFF]/5 px-4 py-2 text-sm text-[#1E5EFF]">
          <Sparkles className="h-4 w-4" /> Lifestyle Finance
        </p>
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Financial Discipline for Every Student.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-[#0B1C2C]/75">Not lectures. Not theory. Real behavior change in 7 days.</p>
        <p className="mx-auto mt-3 max-w-2xl text-lg font-semibold text-[#0B1C2C]">Students don’t need more financial knowledge. They need financial discipline.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="#contact" className="rounded-xl bg-[#0B1C2C] px-7 py-3 text-white transition hover:-translate-y-0.5 hover:bg-[#1E5EFF]">Bring Finverze to Your Campus</Link>
          <Link href="#program" className="rounded-xl border border-[#0B1C2C]/20 px-7 py-3 text-[#0B1C2C] transition hover:-translate-y-0.5 hover:border-[#1E5EFF] hover:text-[#1E5EFF]">Explore Program</Link>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-[#0B1C2C]/10 bg-gradient-to-br from-[#F8FAFF] to-[#EEF3FF] p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[BarChart3, Trophy, Users].map((Icon, i) => (
              <div key={i} className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1">
                <Icon className="mx-auto h-7 w-7 text-[#1E5EFF]" />
                <p className="mt-3 text-sm text-[#0B1C2C]/70">Dashboard, progress, and leaderboard designed for daily usage.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Students don’t lack knowledge. They lack discipline.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <div key={item} className="rounded-2xl border border-[#0B1C2C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1">
              <p className="text-[#0B1C2C]/80">❌ {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0B1C2C] py-20 text-center text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Finverze = Learning + Action + Accountability</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {solutions.map(([Icon, label]) => (
              <div key={label} className="rounded-2xl border border-white/15 bg-white/5 p-6 transition hover:-translate-y-1">
                <Icon className="mx-auto h-8 w-8 text-[#7EA2FF]" />
                <p className="mt-3 text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">The 7-Day Financial Discipline Program</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {programDays.map((item) => (
            <div key={item} className="rounded-xl border border-[#0B1C2C]/10 bg-white p-4 text-sm font-medium">{item}</div>
          ))}
        </div>
        <Link href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0B1C2C] px-7 py-3 text-white transition hover:bg-[#1E5EFF]">Bring Finverze to Your Campus <ArrowRight className="h-4 w-4" /></Link>
      </section>

      <section className="bg-[#F3F7FF] py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">Why Colleges Choose Finverze</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[[GraduationCap, "Improves student life skills"], [Award, "Enhances placement readiness"], [Flame, "Boosts engagement"], [ShieldCheck, "Adds real-world value"]].map(([Icon, text]) => (
              <div key={text as string} className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1">
                {Icon && <Icon className="mx-auto h-7 w-7 text-[#1E5EFF]" />}
                <p className="mt-3 text-[#0B1C2C]/80">{text}</p>
              </div>
            ))}
          </div>
          <Link href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#0B1C2C] px-7 py-3 text-white transition hover:bg-[#1E5EFF]">Request Program <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Not a Workshop. A System Students Actually Use.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[[Trophy, "Leaderboard"], [CalendarCheck2, "Daily Streaks"], [Gamepad2, "Challenges"], [BadgeCheck, "Rewards"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-2xl border border-[#0B1C2C]/10 p-6 transition hover:-translate-y-1">
              {Icon && <Icon className="mx-auto h-7 w-7 text-[#1E5EFF]" />}
              <p className="mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFF] py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-5xl">What Makes Finverze Different</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[[Users, "Built by students, for students"], [Wallet, "Focus on behavior, not theory"], [Trophy, "Social + competitive learning"]].map(([Icon, text]) => (
              <div key={text as string} className="rounded-2xl bg-white p-6 shadow-sm">
                {Icon && <Icon className="mx-auto h-7 w-7 text-[#1E5EFF]" />}
                <p className="mt-3 text-[#0B1C2C]/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Built for Students. Backed by Real Insights.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Pilot launching at EIMR",
            "Student-first model",
            "Early adopters onboarding",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-[#0B1C2C]/10 bg-white p-5">{item}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 pb-24 pt-10 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Bring Finverze to Your Campus</h2>
        <form className="mt-10 grid gap-4 text-left" action="https://formspree.io/f/xnjwqyyq" method="POST">
          <input className="rounded-xl border border-[#0B1C2C]/20 px-4 py-3" placeholder="Name" name="name" required />
          <input className="rounded-xl border border-[#0B1C2C]/20 px-4 py-3" placeholder="College Name" name="college" required />
          <select className="rounded-xl border border-[#0B1C2C]/20 px-4 py-3" name="role" required>
            <option value="">Role</option><option>Student</option><option>Faculty</option><option>T&P</option>
          </select>
          <input className="rounded-xl border border-[#0B1C2C]/20 px-4 py-3" placeholder="Phone" name="phone" required />
          <input type="email" className="rounded-xl border border-[#0B1C2C]/20 px-4 py-3" placeholder="Email" name="email" required />
          <input type="hidden" name="_subject" value="New Finverze campus inquiry" />
          <button type="submit" className="rounded-xl bg-[#0B1C2C] px-6 py-3 text-white transition hover:bg-[#1E5EFF]">Request Program</button>
        </form>
      </section>

      <footer className="border-t border-[#0B1C2C]/10 py-10 text-center text-sm text-[#0B1C2C]/70">
        <p>finverze.com</p>
        <p className="mt-1">founder@finverze.com</p>
      </footer>
    </main>
  )
}

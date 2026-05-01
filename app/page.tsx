import Link from "next/link"
import {
  Award,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Gamepad2,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wallet,
} from "lucide-react"

const problemCards = [
  "Students earn but don’t manage money",
  "No financial discipline in real life",
  "Learning exists but behavior doesn’t change",
]

const pillars = [
  { title: "Challenges", icon: Target },
  { title: "Gamification", icon: Trophy },
  { title: "Real-life Habits", icon: Wallet },
]

const dayFlow = [
  "Day 1: Awareness",
  "Day 2: Spending Tracking",
  "Day 3: Budgeting",
  "Day 4: Saving Behavior",
  "Day 5: Smart Decisions",
  "Day 6: Peer Challenges",
  "Day 7: Final Score + Certification",
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-700">
          <Sparkles className="h-4 w-4" /> Lifestyle Finance
        </p>
        <h1 className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
          Financial Discipline for Every Student.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-600">Not lectures. Not theory. Real habits. Real behavior change.</p>
        <p className="mt-3 max-w-2xl text-lg font-medium text-slate-800">Students don’t need more information. They need behavior change.</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="#contact" className="rounded-xl bg-slate-900 px-7 py-3 text-white transition hover:bg-blue-700">Partner with Us</Link>
          <Link href="#program" className="rounded-xl border border-slate-300 px-7 py-3 text-slate-800 transition hover:border-blue-300 hover:text-blue-700">Explore Program</Link>
        </div>

        <div className="mt-14 w-full max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            {[BarChart3, Users, Trophy].map((Icon, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-5 text-center">
                <Icon className="mx-auto h-7 w-7 text-blue-700" />
                <p className="mt-3 text-sm text-slate-600">Student progress, streaks, and leaderboard in one dashboard.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-center md:grid-cols-4">
          <p className="md:col-span-4 text-sm font-medium text-slate-700">Built for Students. Backed by Real Insights.</p>
          <div><p className="text-2xl font-semibold">100+</p><p className="text-sm text-slate-600">Students Engaged</p></div>
          <div><p className="text-2xl font-semibold">7-Day</p><p className="text-sm text-slate-600">Transformation Model</p></div>
          <div><p className="text-2xl font-semibold">Daily</p><p className="text-sm text-slate-600">Habit Tracking</p></div>
          <div><p className="text-2xl font-semibold">Peer</p><p className="text-sm text-slate-600">Accountability Loop</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">Students don’t lack knowledge. They lack discipline.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {problemCards.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-slate-700">❌ {item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-5xl">Finverze = Learning + Action + Accountability</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
                <Icon className="mx-auto h-8 w-8 text-blue-400" />
                <p className="mt-3 text-lg">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">7-Day Financial Discipline Program</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {dayFlow.map((day) => (
            <div key={day} className="rounded-xl border border-slate-200 bg-white p-4 text-sm">{day}</div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {["✔ Workshops", "✔ Daily Tasks", "✔ Peer Competition"].map((item) => (
            <span key={item} className="rounded-full bg-blue-50 px-4 py-2 text-blue-700">{item}</span>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-5xl">Why Colleges Partner with Finverze</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              [GraduationCap, "Improves student life skills"],
              [Award, "Enhances placement readiness"],
              [ShieldCheck, "Adds value to curriculum"],
              [Users, "Increases engagement"],
            ].map(([Icon, text]) => (
              <div key={text as string} className="rounded-2xl bg-white p-6">
                {Icon && <Icon className="mx-auto h-7 w-7 text-blue-700" />}
                <p className="mt-3 text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <Link href="#contact" className="mt-10 inline-block rounded-xl bg-slate-900 px-7 py-3 text-white hover:bg-blue-700">Bring Finverze to Your Campus</Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">Not boring education. A game.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[[Trophy, "Leaderboard"], [CalendarDays, "Daily Streaks"], [Gamepad2, "Challenges"], [CheckCircle2, "Rewards"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-2xl border border-slate-200 p-6">
              {Icon && <Icon className="mx-auto h-7 w-7 text-blue-700" />}
              <p className="mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-semibold">Built by a student, for students.</h2>
          <p className="mt-4 text-slate-600">Finverze understands real problems because it comes from real experience.</p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold md:text-5xl">Let’s Bring Financial Discipline to Your Campus</h2>
        <form className="mt-10 grid gap-4 text-left" action="https://formspree.io/f/xnjwqyyq" method="POST">
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Name" name="name" required />
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="College Name" name="college" required />
          <select className="rounded-xl border border-slate-300 px-4 py-3" name="role" required>
            <option value="">Role</option>
            <option>Student</option>
            <option>Faculty</option>
            <option>T&P</option>
          </select>
          <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Phone" name="phone" required />
          <input type="email" className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" name="email" required />
          <textarea className="rounded-xl border border-slate-300 px-4 py-3 min-h-28" placeholder="What outcome do you want for your students?" name="message" required />
          <input type="hidden" name="_subject" value="New Finverze campus inquiry" />
          <button type="submit" className="rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-blue-700">Let's Connect</button>
        </form>
      </section>

      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-600">
        <p>finverze.com</p>
        <p className="mt-1">founder@finverze.com</p>
      </footer>
    </main>
  )
}

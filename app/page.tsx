import Image from "next/image"
import Link from "next/link"
import { BookOpen, Briefcase, Building2, CheckCircle2, ClipboardCheck, GraduationCap, Handshake, Lightbulb, Mail, Phone, ShieldCheck, Users } from "lucide-react"

const programDays = [
  ["Day 1: Money Mindset", "Understanding spending behavior"],
  ["Day 2: Budgeting Basics", "Tracking and managing money"],
  ["Day 3: Saving Systems", "Building discipline"],
  ["Day 4: Smart Spending", "Needs vs wants"],
  ["Day 5: Introduction to Investing", "Basics made simple"],
  ["Day 6: Real-Life Financial Decisions", "Case-based learning"],
  ["Day 7: Implementation & Habit Building", "Turning knowledge into action"],
] as const

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(30,144,255,0.22),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(120,110,255,0.16),transparent_40%),linear-gradient(180deg,#0A2540_0%,#081f34_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A2540]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/images/finverze-logo.png" alt="Finverze" width={64} height={64} className="h-14 w-14 drop-shadow-[0_0_14px_rgba(30,144,255,0.8)]" />
            <span className="text-2xl font-semibold tracking-wide">Finverze</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-[#8bc9ff]">About</a>
            <a href="#program" className="hover:text-[#8bc9ff]">Program</a>
            <a href="#colleges" className="hover:text-[#8bc9ff]">Colleges</a>
            <a href="#contact" className="hover:text-[#8bc9ff]">Contact</a>
          </div>
          <Link href="#contact" className="rounded-xl bg-[#1E90FF] px-5 py-2.5 text-sm font-medium transition hover:shadow-[0_0_24px_rgba(30,144,255,0.5)]">Book a Session</Link>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[84vh] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2" id="about">
        <div>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">Build Financially Smart Students — Not Just Graduates.</h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">Finverze delivers structured financial discipline programs designed for colleges to equip students with real-world money skills.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-xl bg-[#1E90FF] px-7 py-3 font-medium transition hover:-translate-y-0.5">Book a Session</Link>
            <Link href="#program" className="rounded-xl border border-white/25 bg-white/5 px-7 py-3 transition hover:border-[#1E90FF]">View Program</Link>
          </div>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
          <Image src="/images/finverze-logo.png" alt="Finverze workshop representation" width={900} height={600} className="h-auto w-full rounded-2xl object-contain p-8" />
          <p className="mt-3 text-center text-sm text-white/65">Structured workshops, guided learning, real-world application.</p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 text-center md:grid-cols-3">
          {[[ShieldCheck, "Designed for college students"], [ClipboardCheck, "Practical, real-world learning"], [GraduationCap, "Workshop-based approach"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-xl border border-white/10 bg-white/5 p-4">
              {Icon && <Icon className="mx-auto h-6 w-6 text-[#7dc3ff]" />}<p className="mt-2 text-sm text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold">The Finverze 7-Day Financial Discipline Program</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programDays.map(([title, text]) => (
            <div key={title} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:border-[#1E90FF]/70">
              <p className="text-sm font-semibold text-[#95d2ff]">{title}</p>
              <p className="mt-2 text-white/80">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20" id="colleges">
        <h2 className="text-center text-4xl font-bold">Simple to Implement. Powerful Results.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[[Lightbulb, "Awareness session by Finverze"], [Building2, "College enrolls students"], [BookOpen, "7-day structured program starts"], [CheckCircle2, "Students build real financial habits"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-xl border border-white/15 bg-white/10 p-5 text-center">
              {Icon && <Icon className="mx-auto h-6 w-6 text-[#7dc3ff]" />}<p className="mt-3 text-sm text-white/85">{text}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 text-center text-3xl font-semibold">Why Colleges Choose Finverze</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[[Users, "Improves student life skills"], [Briefcase, "Enhances college value proposition"], [Handshake, "Practical learning, not theory"], [ShieldCheck, "Structured & guided program"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-xl border border-white/15 bg-white/10 p-5 text-center">
              {Icon && <Icon className="mx-auto h-6 w-6 text-[#7dc3ff]" />}<p className="mt-3 text-sm text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-center text-4xl font-bold">What Students Gain</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["Financial awareness", "Better money habits", "Confidence in real-life decisions", "Structured understanding of finance"].map((item) => (
            <div key={item} className="rounded-xl border border-white/15 bg-white/10 p-5 text-center text-sm text-white/85">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-center text-4xl font-bold">What Colleges Are Saying</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Clear structure, real student participation.", "Students finally discuss money with confidence.", "Simple implementation, measurable engagement."].map((q) => (
            <blockquote key={q} className="rounded-xl border border-white/15 bg-white/10 p-5 text-white/85">“{q}”</blockquote>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="text-4xl font-bold">Bring Finverze to Your Campus</h2>
        <form action="https://formspree.io/f/xnjwqyyq" method="POST" className="mt-10 grid gap-4 text-left md:grid-cols-2">
          <input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="phone" required placeholder="Phone Number" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <input type="email" name="email" required placeholder="Email" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="students" required placeholder="Number of Students" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <input name="program_type" required placeholder="Preferred Program Type" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/55" />
          <button type="submit" className="md:col-span-2 h-12 rounded-xl bg-[#1E90FF] font-medium transition hover:shadow-[0_0_22px_rgba(30,144,255,0.6)]">Book a Session</button>
        </form>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-20 text-center">
        <h2 className="text-4xl font-bold">Start Building Financially Smart Students Today.</h2>
        <Link href="#contact" className="mt-8 inline-block rounded-xl bg-[#1E90FF] px-8 py-3 font-medium">Book a Session</Link>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row">
          <div className="flex items-center gap-3"><Image src="/images/finverze-logo.png" alt="Finverze" width={36} height={36} className="h-9 w-9" /><span>finverze.com</span></div>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> founder@finverze.com</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 XXX XXX XXXX</p>
        </div>
      </footer>
    </main>
  )
}

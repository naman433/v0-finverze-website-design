import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, Building2, CheckCircle2, ChevronRight, Compass, GraduationCap, Handshake, Lightbulb, Mail, Target, Users } from "lucide-react"

const program = [
  ["Day 1", "Money Mindset", "Understand spending behavior", Lightbulb],
  ["Day 2", "Budgeting Basics", "Track and manage money", BookOpen],
  ["Day 3", "Saving Systems", "Build saving discipline", Target],
  ["Day 4", "Smart Spending", "Differentiate needs and wants", Compass],
  ["Day 5", "Investing Basics", "Learn simple long-term thinking", Briefcase],
  ["Day 6", "Real-Life Decisions", "Case-based money choices", Users],
  ["Day 7", "Habit Building", "Turn learning into action", CheckCircle2],
] as const

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(30,144,255,0.22),transparent_35%),radial-gradient(circle_at_85%_0,rgba(14,165,233,0.16),transparent_38%),linear-gradient(180deg,#0A2540_0%,#081b2f_100%)]" />

      <header className="sticky top-0 z-50 h-[72px] border-b border-white/10 bg-[rgba(10,37,64,0.7)] backdrop-blur-xl">
        <nav className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-6 lg:px-20">
          <Link href="#" className="inline-flex" aria-label="Finverze home">
            <Image src="/images/finverze-logo.png" alt="Finverze" width={100} height={100} className="h-20 w-20 drop-shadow-[0_0_16px_rgba(30,144,255,0.8)]" />
          </Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#program" className="hover:text-[#9fd4ff]">Program</a>
            <a href="#colleges" className="hover:text-[#9fd4ff]">Colleges</a>
            <a href="#contact" className="hover:text-[#9fd4ff]">Contact</a>
            <Link href="#contact" className="rounded-[10px] bg-[#1E90FF] px-5 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(30,144,255,0.55)]">Book a Session</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 py-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h1 className="text-5xl font-bold leading-[1.1] md:text-6xl">Build Financially Smart Students — Not Just Graduates.</h1>
          <p className="mt-6 max-w-[480px] text-lg text-white/75">A structured 7-day financial discipline program designed for colleges to equip students with real-world money skills.</p>
          <ul className="mt-6 space-y-3 text-white/85">
            {['Designed for college students','Practical, real-world learning','Easy to implement on campus'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{p}</li>)}
          </ul>
          <div className="mt-8 flex gap-4">
            <Link href="#contact" className="rounded-[10px] bg-[#1E90FF] px-6 py-3 font-medium">Book a Session</Link>
            <Link href="#program" className="rounded-[10px] border border-white/20 bg-white/5 px-6 py-3">View Program</Link>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-white/15">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80" alt="College workshop session" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#112f4d]/80 py-8">
        <div className="mx-auto grid w-full max-w-[1200px] gap-4 px-6 md:grid-cols-3 lg:px-20">
          {[[GraduationCap,"Designed for college students"],[BookOpen,"Real-world financial learning"],[ShieldIcon,"Structured 7-day program"]].map(([Icon,text])=> (
            <div key={text as string} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">{Icon && <Icon className="mx-auto h-5 w-5 text-[#90cbff]" />}<p className="mt-2 text-sm text-white/85">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-[100px] text-center lg:px-20">
        <h2 className="text-4xl font-bold">Nobody teaches you money. But you're expected to manage it.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['Students earn but struggle to plan','Theory is taught, habits are not','Money confidence stays low after college'].map((p)=> <div key={p} className="rounded-xl border border-white/15 bg-white/10 p-6"><Lightbulb className="mx-auto h-6 w-6 text-emerald-300" /><p className="mt-3 text-sm text-white/85">{p}</p></div>)}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6"><h2 className="text-4xl font-bold">Finverze bridges the gap between theory and real-life money skills.</h2><ul className="mt-6 space-y-3 text-white/85">{['Practical, not theoretical','Habit-based learning','Structured program','Real-world scenarios'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{p}</li>)}</ul></div>
        <div className="lg:col-span-6"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80" alt="Classroom learning" className="h-full min-h-[320px] w-full rounded-2xl object-cover" /></div>
      </section>

      <section id="program" className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">The Finverze 7-Day Financial Discipline Program</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {program.map(([day,title,desc,Icon]) => (
            <div key={day} className="flex min-h-[170px] flex-col justify-between rounded-xl border border-white/15 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-[#1E90FF]/70 hover:shadow-[0_0_24px_rgba(30,144,255,0.25)]">
              <Icon className="h-5 w-5 text-emerald-300" />
              <div><p className="mt-3 text-xs text-[#9fd4ff]">{day}</p><p className="font-semibold">{title}</p><p className="mt-1 text-sm text-white/80">{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="colleges" className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-bold">Why Colleges Choose Finverze</h2>
          <ul className="mt-6 space-y-3 text-white/85">{['Improves student life skills','Enhances employability','Adds value beyond academics','Structured & guided program'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{p}</li>)}</ul>
        </div>
        <div className="lg:col-span-6"><img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1600&q=80" alt="College training session" className="h-full min-h-[320px] w-full rounded-2xl object-cover" /></div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">How It Works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["Awareness session", "Student onboarding", "7-day program", "Habit implementation"].map((s,i)=><div key={s} className="rounded-xl border border-white/15 bg-white/10 p-5 text-center"><Users className="mx-auto h-6 w-6 text-[#9fd4ff]" /><p className="mt-2 text-sm">{s}</p>{i<3 && <ChevronRight className="mx-auto mt-3 hidden h-4 w-4 text-white/40 md:block" />}</div>)}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">Student Impact</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">{['Financial awareness','Better spending habits','Confidence','Decision-making'].map((i)=><div key={i} className="rounded-xl border border-white/15 bg-white/10 p-6 text-center">{i}</div>)}</div>
      </section>

      <section id="contact" className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-5"><h2 className="text-4xl font-bold">Bring Finverze to Your Campus</h2><p className="mt-4 text-white/75">Book a session to explore how Finverze can be implemented in your college.</p><ul className="mt-6 space-y-3 text-white/85">{['7-day structured program','Easy onboarding','Designed for students'].map((b)=><li key={b} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-300" />{b}</li>)}</ul></div>
        <div className="lg:col-span-7 rounded-2xl bg-white p-6 text-slate-900 shadow-2xl">
          <p className="mb-4 text-sm text-slate-600">✔ 7-day structured program · ✔ Easy onboarding · ✔ Designed for students</p>
          <form action="https://formspree.io/f/xnjwqyyq" method="POST" className="grid gap-4 md:grid-cols-2">
            <input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="phone" required placeholder="Phone" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-slate-200 px-4" />
            <input name="students" required placeholder="Number of Students" className="h-12 rounded-xl border border-slate-200 px-4 md:col-span-2" />
            <button className="md:col-span-2 h-12 rounded-xl bg-[#1E90FF] font-semibold text-white">Book a Session</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row lg:px-20"><Image src="/images/finverze-logo.png" alt="Finverze" width={40} height={40} className="h-10 w-10" /><p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" />founder@finverze.com</p></div></footer>
    </main>
  )
}

function ShieldIcon(props: React.ComponentProps<typeof GraduationCap>) {
  return <GraduationCap {...props} />
}

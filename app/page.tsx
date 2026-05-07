import Link from "next/link"
import { ArrowRight, BookOpen, Building2, CheckCircle2, Compass, Mail, MapPinned, Target, Users, Handshake } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">

      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.30),transparent_35%),radial-gradient(circle_at_85%_0,rgba(99,102,241,0.20),transparent_40%),linear-gradient(180deg,#071120_0%,#0a1528_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-20">
          <Link href="#" className="text-2xl font-semibold tracking-[0.14em] drop-shadow-[0_0_16px_rgba(37,99,235,0.6)]">FINVERZE</Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about">About</a><a href="#programs">Programs</a><a href="#vision">Vision</a><a href="#contact">Contact</a>
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-5 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</Link>
          </div>
        </nav>
      </header>

      <section className="relative mx-auto max-w-[1500px] overflow-hidden px-6 py-[110px] lg:px-20">
        <div className="absolute inset-6 -z-10 rounded-3xl bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute inset-6 -z-10 rounded-3xl bg-gradient-to-b from-[#071120]/35 via-[#071120]/70 to-[#071120]/90" />

        <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-[#071120]/35 p-8 text-center backdrop-blur-md md:p-12">
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">Building Strong Financial Habits for the Next Generation.</h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/85">Finverze helps colleges equip students with practical financial habits, money discipline, and real-world financial awareness through structured workshops and guided programs.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-6 py-3 font-medium transition hover:-translate-y-0.5">Book a Session</Link>
            <Link href="#programs" className="rounded-[10px] border border-white/30 bg-white/10 px-6 py-3 transition hover:border-[#2563EB]">Explore Programs</Link>
          </div>
          <ul className="mt-7 grid gap-3 text-white/90 sm:grid-cols-3 sm:text-left">
            {['Habit-focused approach','Practical real-world implementation','Structured student programs'].map((p)=> <li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[[BookOpen,'Practical Habit Building'],[Target,'Structured Student Programs'],[Compass,'Real-World Financial Discipline']].map(([I,t])=><div key={t as string} className="rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur transition hover:-translate-y-1"><I className="h-5 w-5 text-[#8fb6ff]" /><p className="mt-3 text-lg font-medium">{t}</p></div>)}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left">
        <h2 className="text-5xl font-semibold tracking-tight">Why Finverze Exists</h2>
        <p className="mt-6 max-w-4xl text-xl text-white/85">Most students graduate without developing healthy financial habits.</p>
        <p className="mt-4 max-w-4xl text-lg text-white/80">Most understand theory, but struggle with spending, saving, and real-life decisions.</p>
        <p className="mt-4 max-w-4xl text-lg text-white/80">Finverze bridges this gap through practical habits that stay beyond college.</p>
      </section>

      <section id="programs" className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left">
        <h2 className="text-5xl font-semibold">Programs Designed to Build Financial Discipline</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[["Financial Awareness Workshop","Interactive workshop on money habits and practical financial behavior."],["7-Day Financial Discipline Program","Guided 7-day journey to build budgeting, saving, and spending discipline."],["14-Day Advanced Financial Discipline Program","Advanced 14-day implementation program for long-term money habits."]].map(([title,text])=><div key={title} className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/70"><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-3 text-lg text-white/80">{text}</p><Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-[#9fc4ff]">Enquire Now <ArrowRight className="h-4 w-4" /></Link></div>)}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left">
        <h2 className="text-5xl font-semibold tracking-tight">The Vision Behind Finverze</h2>
        <p className="mt-6 text-lg text-white/82">Finverze was founded with a simple realization: Students are taught how to build careers — but rarely how to build financial discipline, responsible money habits, or long-term financial awareness.</p>
        <p className="mt-4 text-lg text-white/80">Our vision is to build a generation with strong financial discipline from an early stage.</p>
        <p className="mt-4 text-lg text-white/80">These programs are the first step toward long-term financial behavior change.</p>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left"><h2 className="text-5xl font-semibold">Long-Term Vision</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{['Building financially disciplined campuses','Creating habit-driven financial systems','Expanding student financial awareness nationwide','Developing a long-term financial growth ecosystem'].map((t)=><div key={t} className="rounded-2xl border border-white/10 bg-white/8 p-5 text-lg transition hover:border-[#2563EB]/60">{t}</div>)}</div></section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left">
        <h2 className="text-5xl font-semibold tracking-tight">Why Colleges Choose Finverze</h2>
        <ul className="mt-6 grid gap-3 text-lg text-white/85 md:grid-cols-2">{['Enhances real-world student life skills','Adds value beyond academics','Practical and structured implementation','Supports student behavioral development','Flexible workshop and program formats'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left"><h2 className="text-5xl font-semibold">Simple Implementation Process</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{[[Handshake,'Initial Consultation'],[MapPinned,'Program Planning'],[Building2,'Campus Session Delivery'],[Users,'Student Engagement & Habit Building']].map(([I,t])=><div key={t as string} className="rounded-2xl border border-white/12 bg-white/8 p-5"><I className="h-6 w-6 text-[#9fc4ff]" /><p className="mt-3 text-lg">{t}</p></div>)}</div></section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[90px] lg:px-20 text-left"><h2 className="text-5xl font-semibold">What Students Actually Build</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{['Better spending habits','Saving discipline','Smarter financial decisions','Real-world confidence','Financial awareness','Long-term money mindset'].map((t)=><div key={t} className="rounded-2xl border border-white/12 bg-[#0d1d34] p-6 text-lg">{t}</div>)}</div></section>

      <section id="contact" className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-5 text-left"><h2 className="text-5xl font-semibold tracking-tight">Bring Finverze to Your Campus</h2><p className="mt-4 text-lg text-white/85">Connect with us to explore workshops and financial discipline programs designed for your students. For queries: founder@finverze.com.</p><ul className="mt-6 grid gap-3 text-lg text-white/85">{['Structured delivery','Student-focused implementation','Easy onboarding process'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul></div>
        <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><form action="https://formspree.io/f/xnjwqyyq" method="POST" className="grid gap-4 md:grid-cols-2"><input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="phone" required placeholder="Phone Number" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="program" required placeholder="Program Interested In" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><button className="md:col-span-2 h-12 rounded-xl bg-[#2563EB] text-lg font-semibold hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</button></form></div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20 text-left"><h2 className="text-5xl font-semibold tracking-tight">Start Building Financially Disciplined Students Today.</h2><Link href="#contact" className="mt-8 inline-flex rounded-[10px] bg-[#2563EB] px-8 py-3 font-medium">Schedule a Discussion</Link></section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row lg:px-20"><p className="tracking-[0.14em]">FINVERZE</p><div className="flex gap-4"><a href="#about">About</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div><p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> founder@finverze.com</p></div></footer>
    </main>
  )
}

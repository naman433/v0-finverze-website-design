import Link from "next/link"
import { ArrowRight, BookOpen, Building2, CheckCircle2, Compass, Handshake, Lightbulb, Mail, MapPinned, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.30),transparent_35%),radial-gradient(circle_at_85%_0,rgba(99,102,241,0.20),transparent_40%),linear-gradient(180deg,#071120_0%,#0a1528_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-5 lg:px-20">
          <Link href="#" className="text-2xl font-semibold tracking-[0.14em] drop-shadow-[0_0_16px_rgba(37,99,235,0.6)]">FINVERZE</Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about">About</a><a href="#programs">Programs</a><a href="#vision">Vision</a><a href="#contact">Contact</a>
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-5 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-14 px-6 py-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-7">
          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">Building Strong Financial Habits for the Next Generation.</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">Finverze helps colleges equip students with practical financial habits, money discipline, and real-world financial awareness through structured workshops and guided programs.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-6 py-3 font-medium transition hover:-translate-y-0.5">Book a Session</Link>
            <Link href="#programs" className="rounded-[10px] border border-white/20 bg-white/5 px-6 py-3 transition hover:border-[#2563EB]">Explore Programs</Link>
          </div>
          <ul className="mt-7 grid gap-3 text-white/85 sm:grid-cols-2">
            {['Habit-focused approach','Practical real-world implementation','Structured student programs'].map((p)=> <li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="h-[360px] rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.45),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.3),transparent_45%),linear-gradient(145deg,#0f2038,#0a1629)] shadow-[0_24px_70px_rgba(0,0,0,0.45)] animate-pulse" />
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[[BookOpen,'Practical Habit Building'],[Target,'Structured Student Programs'],[Compass,'Real-World Financial Discipline']].map(([I,t])=><div key={t as string} className="rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur transition hover:-translate-y-1"><I className="h-5 w-5 text-[#8fb6ff]" /><p className="mt-3 font-medium">{t}</p></div>)}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-8">
          <h2 className="text-4xl font-semibold tracking-tight">Why Finverze Exists</h2>
          <p className="mt-6 text-white/80">Most students graduate without developing healthy financial habits.</p>
          <p className="mt-4 text-white/75">They may understand concepts theoretically, but very few know how to manage spending, build saving discipline, control financial behavior, or make responsible money decisions in real life.</p>
          <p className="mt-4 text-white/75">Finverze was created to bridge this gap by helping students build practical financial habits that stay with them beyond college.</p>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-4xl font-semibold">Programs Designed to Build Financial Discipline</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[["Financial Awareness Workshop","An interactive workshop introducing students to money habits, financial behavior, and practical real-world financial awareness."],["7-Day Financial Discipline Program","A structured guided experience focused on helping students develop budgeting habits, saving discipline, spending awareness, and smarter financial behavior."],["14-Day Advanced Financial Discipline Program","An immersive implementation-focused program designed to help students build long-term financial discipline systems and stronger money habits."]].map(([title,text])=><div key={title} className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2563EB]/70"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm text-white/78">{text}</p><Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-[#9fc4ff]">Enquire Now <ArrowRight className="h-4 w-4" /></Link></div>)}
        </div>
      </section>

      <section id="vision" className="mx-auto max-w-[1300px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-4xl font-semibold tracking-tight">The Vision Behind Finverze</h2>
        <p className="mt-6 text-white/78">Finverze was founded with a simple realization:</p>
        <p className="mt-4 text-white/75">Students are taught how to build careers — but rarely how to build financial discipline, responsible money habits, or long-term financial awareness.</p>
        <p className="mt-4 text-white/75">The vision behind Finverze is to create a generation of financially disciplined individuals by introducing practical money habits at an early stage of life.</p>
        <p className="mt-4 text-white/75">What begins today through workshops and structured programs is intended to evolve into a long-term ecosystem focused on financial behavior, discipline, and personal financial growth for students and young adults.</p>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20"><h2 className="text-4xl font-semibold">Long-Term Vision</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{['Building financially disciplined campuses','Creating habit-driven financial systems','Expanding student financial awareness nationwide','Developing a long-term financial growth ecosystem'].map((t)=><div key={t} className="rounded-2xl border border-white/10 bg-white/8 p-5 transition hover:border-[#2563EB]/60">{t}</div>)}</div></section>

      <section className="mx-auto max-w-[1300px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-4xl font-semibold tracking-tight">Why Colleges Choose Finverze</h2>
        <ul className="mt-6 grid gap-3 text-white/85 md:grid-cols-2">{['Enhances real-world student life skills','Adds value beyond academics','Practical and structured implementation','Supports student behavioral development','Flexible workshop and program formats'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20"><h2 className="text-4xl font-semibold">Simple Implementation Process</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{[[Handshake,'Initial Consultation'],[MapPinned,'Program Planning'],[Building2,'Campus Session Delivery'],[Users,'Student Engagement & Habit Building']].map(([I,t])=><div key={t as string} className="rounded-2xl border border-white/12 bg-white/8 p-5"><I className="h-6 w-6 text-[#9fc4ff]" /><p className="mt-3 text-sm">{t}</p></div>)}</div></section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20"><h2 className="text-4xl font-semibold">What Students Actually Build</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{['Better spending habits','Saving discipline','Smarter financial decisions','Real-world confidence','Financial awareness','Long-term money mindset'].map((t)=><div key={t} className="rounded-2xl border border-white/12 bg-[#0d1d34] p-6">{t}</div>)}</div></section>

      <section id="contact" className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-5"><h2 className="text-4xl font-semibold tracking-tight">Bring Finverze to Your Campus</h2><p className="mt-4 text-white/75">Connect with us to explore workshops and financial discipline programs designed for your students.</p><ul className="mt-6 grid gap-3 text-white/85">{['Structured delivery','Student-focused implementation','Easy onboarding process'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul></div>
        <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><form action="https://formspree.io/f/xnjwqyyq" method="POST" className="grid gap-4 md:grid-cols-2"><input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="phone" required placeholder="Phone Number" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="program" required placeholder="Program Interested In" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="students" required placeholder="Number of Students" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><button className="md:col-span-2 h-12 rounded-xl bg-[#2563EB] font-semibold hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</button></form></div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 pb-[100px] lg:px-20"><h2 className="text-4xl font-semibold tracking-tight">Start Building Financially Disciplined Students Today.</h2><Link href="#contact" className="mt-8 inline-flex rounded-[10px] bg-[#2563EB] px-8 py-3 font-medium">Schedule a Discussion</Link></section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row lg:px-20"><p className="tracking-[0.14em]">FINVERZE</p><div className="flex gap-4"><a href="#about">About</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div><p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> founder@finverze.com</p></div></footer>
    </main>
  )
}

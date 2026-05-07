import Link from "next/link"
import { ArrowRight, BookOpen, Briefcase, Building2, CheckCircle2, Compass, GraduationCap, Handshake, Lightbulb, Mail, MapPinned, Target, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071120] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(37,99,235,0.30),transparent_35%),radial-gradient(circle_at_85%_0,rgba(99,102,241,0.20),transparent_40%),linear-gradient(180deg,#071120_0%,#0a1528_100%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071120]/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 lg:px-20">
          <Link href="#" className="text-2xl font-semibold tracking-[0.2em] text-white drop-shadow-[0_0_16px_rgba(37,99,235,0.6)]">FINVERZE</Link>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-[#9fc4ff]">About</a>
            <a href="#programs" className="hover:text-[#9fc4ff]">Programs</a>
            <a href="#vision" className="hover:text-[#9fc4ff]">Vision</a>
            <a href="#contact" className="hover:text-[#9fc4ff]">Contact</a>
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-5 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid min-h-screen w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6">
          <h1 className="text-5xl font-bold leading-[1.08] md:text-6xl">Building Strong Financial Habits for the Next Generation.</h1>
          <p className="mt-6 max-w-[520px] text-lg text-white/75">Finverze helps colleges equip students with practical financial habits, money discipline, and real-world financial awareness through structured workshops and guided programs.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#contact" className="rounded-[10px] bg-[#2563EB] px-6 py-3 font-medium transition hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</Link>
            <Link href="#programs" className="rounded-[10px] border border-white/20 bg-white/5 px-6 py-3">Explore Programs</Link>
          </div>
          <ul className="mt-7 space-y-2 text-white/85">
            {['Habit-focused approach','Practical real-world implementation','Structured student programs'].map((p)=> <li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}
          </ul>
        </div>
        <div className="relative lg:col-span-6">
          <div className="absolute -inset-6 rounded-[28px] bg-[#2563EB]/20 blur-3xl" />
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80" alt="Students in discussion" className="relative h-full min-h-[420px] w-full rounded-2xl object-cover shadow-[0_30px_80px_rgba(0,0,0,0.45)]" />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-[#071120]/55 via-transparent to-[#2563EB]/10" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[[BookOpen,'Practical Habit Building'],[Target,'Structured Student Programs'],[Compass,'Real-World Financial Discipline']].map(([Icon,t])=><div key={t as string} className="rounded-2xl border border-white/10 bg-white/8 p-6 backdrop-blur"><Icon className="h-5 w-5 text-[#8fb6ff]" /><p className="mt-3 font-medium">{t}</p></div>)}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-7"><h2 className="text-4xl font-bold">Why Finverze Exists</h2><p className="mt-6 text-white/80">Most students graduate without developing healthy financial habits.</p><p className="mt-4 text-white/75">They may understand concepts theoretically, but very few know how to manage spending, build saving discipline, control financial behavior, or make responsible money decisions in real life.</p><p className="mt-4 text-white/75">Finverze was created to bridge this gap by helping students build practical financial habits that stay with them beyond college.</p></div>
        <div className="relative lg:col-span-5"><div className="absolute -inset-4 rounded-3xl bg-[#2563EB]/15 blur-2xl" /><img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1400&q=80" alt="College seminar" className="relative h-full min-h-[340px] w-full rounded-2xl object-cover" /></div>
      </section>

      <section id="programs" className="mx-auto max-w-[1200px] px-6 pb-[100px] lg:px-20">
        <h2 className="text-center text-4xl font-bold">Programs Designed to Build Financial Discipline</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            ["Financial Awareness Workshop","An interactive workshop introducing students to money habits, financial behavior, and practical real-world financial awareness."],
            ["7-Day Financial Discipline Program","A structured guided experience focused on helping students develop budgeting habits, saving discipline, spending awareness, and smarter financial behavior."],
            ["14-Day Advanced Financial Discipline Program","An immersive implementation-focused program designed to help students build long-term financial discipline systems and stronger money habits."],
          ].map(([title,text]) => <div key={title} className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/12 to-white/5 p-7 transition hover:-translate-y-1 hover:border-[#2563EB]/70 hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-sm text-white/78">{text}</p><Link href="#contact" className="mt-6 inline-flex items-center gap-2 text-[#9fc4ff]">Enquire Now <ArrowRight className="h-4 w-4" /></Link></div>)}
        </div>
      </section>

      <section id="vision" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-7"><h2 className="text-4xl font-bold">The Vision Behind Finverze</h2><p className="mt-6 text-white/78">Finverze was founded with a simple realization:</p><p className="mt-4 text-white/75">Students are taught how to build careers — but rarely how to build financial discipline, responsible money habits, or long-term financial awareness.</p><p className="mt-4 text-white/75">The vision behind Finverze is to create a generation of financially disciplined individuals by introducing practical money habits at an early stage of life.</p><p className="mt-4 text-white/75">What begins today through workshops and structured programs is intended to evolve into a long-term ecosystem focused on financial behavior, discipline, and personal financial growth for students and young adults.</p></div>
        <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#2563EB]/30 to-[#1e293b]/50 p-8 backdrop-blur"><div className="h-full min-h-[320px] rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(37,99,235,0.5),transparent_40%)]" /></div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[100px] lg:px-20"><h2 className="text-center text-4xl font-bold">Long-Term Vision</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{['Building financially disciplined campuses','Creating habit-driven financial systems','Expanding student financial awareness nationwide','Developing a long-term financial growth ecosystem'].map((t)=><div key={t} className="rounded-2xl border border-white/10 bg-white/8 p-5 text-center">{t}</div>)}</div></section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-6"><h2 className="text-4xl font-bold">Why Colleges Choose Finverze</h2><ul className="mt-6 space-y-3 text-white/85">{['Enhances real-world student life skills','Adds value beyond academics','Practical and structured implementation','Supports student behavioral development','Flexible workshop and program formats'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul></div>
        <div className="lg:col-span-6"><img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1600&q=80" alt="Workshop discussion" className="h-full min-h-[320px] w-full rounded-2xl object-cover" /></div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[100px] lg:px-20"><h2 className="text-center text-4xl font-bold">Simple Implementation Process</h2><div className="mt-8 grid gap-4 md:grid-cols-4">{[[Handshake,'Initial Consultation'],[MapPinned,'Program Planning'],[Building2,'Campus Session Delivery'],[Users,'Student Engagement & Habit Building']].map(([I,t],idx)=><div key={t as string} className="rounded-2xl border border-white/12 bg-white/8 p-5 text-center"><I className="mx-auto h-6 w-6 text-[#9fc4ff]" /><p className="mt-3 text-sm">{t}</p>{idx<3 && <div className="mx-auto mt-3 hidden h-px w-10 bg-white/30 md:block" />}</div>)}</div></section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[100px] lg:px-20"><h2 className="text-center text-4xl font-bold">What Students Actually Build</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{['Better spending habits','Saving discipline','Smarter financial decisions','Real-world confidence','Financial awareness','Long-term money mindset'].map((t)=><div key={t} className="rounded-2xl border border-white/12 bg-[#0d1d34] p-6 text-center">{t}</div>)}</div></section>

      <section id="contact" className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 pb-[100px] lg:grid-cols-12 lg:px-20">
        <div className="lg:col-span-5"><h2 className="text-4xl font-bold">Bring Finverze to Your Campus</h2><p className="mt-4 text-white/75">Connect with us to explore workshops and financial discipline programs designed for your students.</p><ul className="mt-6 space-y-3 text-white/85">{['Structured delivery','Student-focused implementation','Easy onboarding process'].map((p)=><li key={p} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-300" />{p}</li>)}</ul></div>
        <div className="lg:col-span-7 rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl"><form action="https://formspree.io/f/xnjwqyyq" method="POST" className="grid gap-4 md:grid-cols-2"><input name="college_name" required placeholder="College Name" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="contact_person" required placeholder="Contact Person" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="email" type="email" required placeholder="Email" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="phone" required placeholder="Phone Number" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="program" required placeholder="Program Interested In" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><input name="students" required placeholder="Number of Students" className="h-12 rounded-xl border border-white/20 bg-white/10 px-4 placeholder:text-white/60" /><button className="md:col-span-2 h-12 rounded-xl bg-[#2563EB] font-semibold hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]">Book a Session</button></form></div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-[100px] text-center lg:px-20"><h2 className="text-4xl font-bold">Start Building Financially Disciplined Students Today.</h2><Link href="#contact" className="mt-8 inline-flex rounded-[10px] bg-[#2563EB] px-8 py-3 font-medium">Schedule a Discussion</Link></section>

      <footer className="border-t border-white/10 py-10"><div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-sm text-white/70 md:flex-row lg:px-20"><p className="tracking-[0.2em]">FINVERZE</p><div className="flex gap-4"><a href="#about">About</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div><p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> founder@finverze.com</p></div></footer>
    </main>
  )
}

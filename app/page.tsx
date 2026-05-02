import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  BarChart3,
  Brain,
  Gift,
  GraduationCap,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Trophy,
  Users,
  Wallet,
  Zap,
} from "lucide-react"

const navItems = ["Home", "Features", "How it Works", "Rewards"]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,144,255,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(88,80,236,0.18),transparent_40%),linear-gradient(180deg,#0A2540_0%,#07192b_100%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A2540]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#" className="flex items-center gap-3">
            <Image src="/images/finverze-logo.png" alt="Finverze" width={40} height={40} className="h-10 w-10 drop-shadow-[0_0_16px_rgba(30,144,255,0.8)]" />
            <span className="text-xl font-semibold tracking-wide">Finverze</span>
          </Link>
          <div className="hidden items-center gap-7 text-sm text-white/80 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="transition hover:text-[#1E90FF]">{item}</a>
            ))}
          </div>
          <Link href="#waitlist" className="rounded-xl bg-[#1E90FF] px-5 py-2.5 text-sm font-medium transition hover:shadow-[0_0_24px_rgba(30,144,255,0.55)]">Join Waitlist</Link>
        </nav>
      </header>

      <section id="home" className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-[#1E90FF]/40 bg-white/5 px-4 py-2 text-sm text-[#7bc0ff]"><Rocket className="h-4 w-4" /> Early users get exclusive rewards & perks</p>
          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">Master Money Before It Masters You.</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">Finverze helps students build real financial discipline through gamified learning, real-world challenges, and rewards.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="#waitlist" className="rounded-xl bg-[#1E90FF] px-7 py-3 font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(30,144,255,0.6)]">Join Waitlist</Link>
            <Link href="#experience-finverze" className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 transition hover:border-[#1E90FF] hover:text-[#90cbff]">Explore Platform</Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <p className="text-sm text-white/60">Good Evening, Naman</p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0d3158] p-4"><p className="text-xs text-white/60">Streak</p><p className="mt-1 text-xl font-semibold">🔥 5-day streak</p></div>
              <div className="rounded-2xl bg-[#0d3158] p-4"><p className="text-xs text-white/60">XP</p><p className="mt-1 text-xl font-semibold">1250 XP</p></div>
            </div>
            <div className="mt-4 rounded-2xl bg-[#0d3158] p-4">
              <p className="text-xs text-white/60">Today's Challenge</p>
              <p className="mt-1 font-semibold">No Spend Day</p>
              <div className="mt-3 h-2 rounded-full bg-white/15"><div className="h-2 w-3/5 rounded-full bg-[#1E90FF]" /></div>
              <button className="mt-4 rounded-lg bg-[#1E90FF] px-4 py-2 text-sm">Continue</button>
            </div>
          </div>
          <div className="absolute -left-8 top-8 rounded-xl border border-white/20 bg-[#0f3762]/80 px-4 py-3 text-sm backdrop-blur animate-pulse">🏆 Rank #12</div>
          <div className="absolute -right-5 bottom-10 rounded-xl border border-white/20 bg-[#0f3762]/80 px-4 py-3 text-sm backdrop-blur">🎁 Rewards Unlocked</div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5 py-7">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-white/75">
          <p>Trusted by 500+ students (beta)</p><p>Built for the next generation of financially smart students</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="features">
        <h2 className="text-center text-4xl font-bold">Nobody teaches you money. But you're expected to manage it.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[[Wallet, "You earn → you spend → you’re broke"], [Brain, "No one teaches real financial discipline"], [Shield, "Finance feels boring & confusing"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#1E90FF]/70">
              {Icon && <Icon className="h-7 w-7 text-[#6cbcff]" />}<p className="mt-3 text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20" id="how-it-works">
        <h2 className="text-center text-4xl font-bold">Finverze makes finance addictive.</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[[Zap, "Gamified learning (XP, streaks)"], [Target, "Real-world financial habits"], [Trophy, "Leaderboards & competition"], [Gift, "Rewards & perks"]].map(([Icon, text]) => (
            <div key={text as string} className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/15 to-white/5 p-6 transition hover:shadow-[0_0_22px_rgba(30,144,255,0.35)]">
              {Icon && <Icon className="h-7 w-7 text-[#74beff]" />}<p className="mt-3 text-sm text-white/85">{text}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 text-center text-3xl font-semibold">Simple. Powerful. Effective.</h3>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {["Learn", "Apply", "Compete", "Earn"].map((step, i) => (
            <div key={step} className="rounded-xl border border-[#1E90FF]/35 bg-[#0f3154]/70 p-4 text-center">
              <p className="text-xs text-[#86c9ff]">Step {i + 1}</p><p className="mt-1 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience-finverze" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold">Experience Finverze</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><h4 className="font-semibold">Challenge Screen</h4><p className="mt-3 text-sm text-white/75">No Spend Day · Save ₹500 · Track Expenses</p></div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><h4 className="font-semibold">Leaderboard</h4><p className="mt-3 text-sm text-white/75">College · Friends · National rankings</p></div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><h4 className="font-semibold">Rewards</h4><p className="mt-3 text-sm text-white/75">Amazon Voucher · Free Coffee · Discounts</p></div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><h4 className="font-semibold">College Dashboard</h4><p className="mt-3 text-sm text-white/75">College rank · Total XP · Active students</p></div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur"><h4 className="font-semibold">Profile</h4><p className="mt-3 text-sm text-white/75">Badges · XP progress · Stats</p></div>
          <div className="rounded-2xl border border-[#1E90FF]/40 bg-[#103a66] p-6 backdrop-blur"><h4 className="font-semibold">Your college vs every other college</h4><p className="mt-3 text-sm text-white/75">Competition + ambassador model built in.</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20" id="rewards">
        <div className="grid gap-6 md:grid-cols-3">
          {["Made finance actually fun.", "First time I tracked my money seriously.", "Feels like a game, but actually useful."].map((quote) => (
            <blockquote key={quote} className="rounded-2xl border border-white/15 bg-white/10 p-6 text-white/85">“{quote}”</blockquote>
          ))}
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <h2 className="text-4xl font-bold">Start your financial journey today.</h2>
        <p className="mt-3 text-white/70">Limited early access. Rewards for first users.</p>
        <form action="https://formspree.io/f/xnjwqyyq" method="POST" className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input type="email" name="email" required placeholder="Enter your email" className="h-12 flex-1 rounded-xl border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50" />
          <button type="submit" className="h-12 rounded-xl bg-[#1E90FF] px-6 font-medium transition hover:shadow-[0_0_24px_rgba(30,144,255,0.65)]">Join Waitlist</button>
        </form>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/65 md:flex-row">
          <div className="flex items-center gap-3"><Image src="/images/finverze-logo.png" alt="Finverze" width={24} height={24} className="h-6 w-6" /><span>finverze.com</span></div>
          <p>founder@finverze.com</p>
        </div>
      </footer>
    </main>
  )
}

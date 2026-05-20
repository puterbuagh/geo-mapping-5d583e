import InteractiveMap from "@/components/quiz/InteractiveMap";
import { Compass, MapPinned, GraduationCap } from "lucide-react";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Atmospheric backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,theme(colors.accent/0.35),transparent_55%),radial-gradient(ellipse_at_bottom_right,theme(colors.primary/0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-multiply" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-foreground" />
        </svg>
      </div>

      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[4px_4px_0_0_theme(colors.foreground)]">
            <Compass className="h-6 w-6" strokeWidth={2.25} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Mrs. / Mr. Teacher — Grade 5</p>
            <h1 className="font-display text-2xl font-extrabold leading-none tracking-tight text-foreground">Atlas Quest</h1>
          </div>
        </div>
        <nav className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground md:flex">
          <span className="inline-flex items-center gap-2"><MapPinned className="h-4 w-4" /> North America</span>
          <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Classroom Ready</span>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              An interactive map for fifth graders
            </p>
            <h2 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground md:text-7xl">
              Click the map.
              <br />
              <span className="italic text-primary">Learn</span> the continent.
            </h2>
            <p className="mt-5 max-w-xl font-body text-lg text-muted-foreground">
              Tap regions of North America, every U.S. state, and every Canadian province &amp; territory. Get instant feedback, build a streak, and ace your geography unit.
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-[6px_6px_0_0_theme(colors.foreground)]">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
              <ol className="mt-3 space-y-2 font-body text-sm text-foreground">
                <li><span className="font-mono text-primary">01 →</span> Choose a quiz mode</li>
                <li><span className="font-mono text-primary">02 →</span> Read the prompt up top</li>
                <li><span className="font-mono text-primary">03 →</span> Click the matching place on the map</li>
                <li><span className="font-mono text-primary">04 →</span> Beat your best score</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <InteractiveMap />
      </section>

      <footer className="border-t border-border bg-card/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex-row md:items-center">
          <span>© Atlas Quest — Built for curious classrooms</span>
          <span>Regions · 50 States · 13 Provinces &amp; Territories</span>
        </div>
      </footer>
    </main>
  );
}

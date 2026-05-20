"use client";

import { RotateCcw, Map as MapIcon, Flag, Compass } from "lucide-react";
import type { QuizMode } from "@/lib/geography/quiz-engine";

interface QuizControlsProps {
  mode: QuizMode;
  onModeChange: (mode: QuizMode) => void;
  score: number;
  total: number;
  currentIndex: number;
  onReset: () => void;
  isActive: boolean;
}

function QuizControls({
  mode,
  onModeChange,
  score,
  total,
  currentIndex,
  onReset,
  isActive,
}: QuizControlsProps) {
  const modes: { id: QuizMode; label: string; icon: typeof MapIcon }[] = [
    { id: "regions", label: "Regions of N. America", icon: Compass },
    { id: "states", label: "U.S. States", icon: Flag },
    { id: "territories", label: "Canadian Provinces", icon: MapIcon },
  ];

  const accuracy = currentIndex > 0 ? Math.round((score / currentIndex) * 100) : 0;
  const progress = total > 0 ? Math.min(100, (currentIndex / total) * 100) : 0;

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border-2 border-foreground bg-card p-5 shadow-stamp-lg">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          Quiz Mode
        </p>
        <div className="mt-3 grid gap-2">
          {modes.map((m) => {
            const Icon = m.icon;
            const active = mode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => onModeChange(m.id)}
                disabled={isActive}
                className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition-all ${
                  active
                    ? "border-foreground bg-primary text-primary-foreground shadow-stamp"
                    : "border-border bg-background hover:border-foreground hover:-translate-y-0.5 text-foreground"
                } ${isActive ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                aria-label={`Switch to ${m.label} mode`}
              >
                <Icon className="h-5 w-5" />
                {m.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          Your Progress
        </p>

        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-border bg-background px-2.5 py-2 text-center">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
              Correct
            </p>
            <p className="font-display text-2xl font-extrabold leading-none text-[hsl(var(--success))]">
              {score}
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background px-2.5 py-2 text-center">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
              Answered
            </p>
            <p className="font-display text-2xl font-extrabold leading-none">{currentIndex}</p>
          </div>
          <div className="rounded-lg border border-border bg-background px-2.5 py-2 text-center">
            <p className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
              Total
            </p>
            <p className="font-display text-2xl font-extrabold leading-none">{total}</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
            <span>Accuracy</span>
            <span className="text-foreground font-semibold">{accuracy}%</span>
          </div>
          <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-foreground bg-accent px-4 py-3 font-body text-sm font-semibold text-accent-foreground shadow-stamp hover:-translate-y-0.5 transition-transform"
        aria-label="Reset quiz"
      >
        <RotateCcw className="h-4 w-4" />
        Reset Quiz
      </button>
    </div>
  );
}

export default QuizControls;

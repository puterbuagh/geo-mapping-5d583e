"use client";

import { useEffect, useMemo, useState } from "react";
import { Sparkles, Trophy, Map as MapIcon, Flag, Mountain } from "lucide-react";
import { regions } from "@/lib/geography/regions";
import { usStates } from "@/lib/geography/us-states";
import { canadianTerritories } from "@/lib/geography/canadian-territories";
import {
  createQuiz,
  checkAnswer,
  type QuizMode,
  type QuizState,
  type GeoFeature,
} from "@/lib/geography/quiz-engine";
import QuizControls from "./QuizControls";
import QuizFeedback from "./QuizFeedback";
import ResultsScreen from "./ResultsScreen";

type Feedback = { kind: "correct" | "incorrect"; message: string; id: string } | null;

function modeFeatures(mode: QuizMode): GeoFeature[] {
  if (mode === "regions") return regions;
  if (mode === "states") return usStates;
  return canadianTerritories;
}

function modeMeta(mode: QuizMode) {
  if (mode === "regions")
    return { label: "Regions of N. America", icon: MapIcon, count: regions.length };
  if (mode === "states")
    return { label: "U.S. States", icon: Flag, count: usStates.length };
  return {
    label: "Canadian Provinces & Territories",
    icon: Mountain,
    count: canadianTerritories.length,
  };
}

export function InteractiveMap() {
  const [mode, setMode] = useState<QuizMode>("regions");
  const [quiz, setQuiz] = useState<QuizState>(() => createQuiz("regions", regions));
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const features = useMemo(() => modeFeatures(mode), [mode]);

  useEffect(() => {
    setQuiz(createQuiz(mode, modeFeatures(mode)));
    setFeedback(null);
  }, [mode]);

  const currentFeature = quiz.queue[quiz.index];
  const done = !currentFeature;

  function handleClick(id: string) {
    if (done) return;
    const result = checkAnswer(quiz, id);
    setQuiz(result.state);
    const clicked = features.find((f) => f.id === id);
    setFeedback({
      kind: result.correct ? "correct" : "incorrect",
      message: result.correct
        ? `Yes! That's ${clicked?.name}.`
        : `Not quite — you clicked ${clicked?.name ?? "there"}.`,
      id,
    });
    window.setTimeout(() => setFeedback(null), 1500);
  }

  function reset() {
    setQuiz(createQuiz(mode, features));
    setFeedback(null);
  }

  const total = quiz.queue.length;
  const answered = quiz.index;
  const progress = total === 0 ? 0 : Math.min(100, (answered / total) * 100);
  const accuracy = quiz.attempts === 0 ? 0 : Math.round((quiz.correct / quiz.attempts) * 100);

  const modes: { mode: QuizMode; label: string; icon: typeof MapIcon; count: number }[] = (
    ["regions", "states", "territories"] as QuizMode[]
  ).map((m) => ({ mode: m, ...modeMeta(m) }));

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Sidebar controls */}
      <aside className="lg:col-span-4 space-y-5">
        <QuizControls
          modes={modes}
          activeMode={mode}
          onSelectMode={setMode}
          onReset={reset}
          correct={quiz.correct}
          attempts={quiz.attempts}
          accuracy={accuracy}
          answered={answered}
          total={total}
          progress={progress}
        />

        <div className="rounded-2xl border border-dashed border-border bg-card/60 p-5">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            Prompt
          </p>
          {done ? (
            <div className="mt-3 flex items-start gap-3">
              <Trophy className="mt-0.5 h-6 w-6 text-primary" />
              <div>
                <p className="font-display text-2xl font-extrabold leading-tight text-foreground">
                  Quiz complete!
                </p>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  You scored{" "}
                  <span className="font-semibold text-foreground">{quiz.correct}</span> out of{" "}
                  <span className="font-semibold text-foreground">{total}</span>. Hit reset to play again.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-3 flex items-start gap-3">
              <Sparkles className="mt-1 h-5 w-5 text-accent-foreground" />
              <div>
                <p className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                  Find this place
                </p>
                <p className="font-display text-3xl font-extrabold italic leading-tight text-foreground">
                  {currentFeature?.name}
                </p>
                {currentFeature?.hint && (
                  <p className="mt-2 font-body text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Hint:</span> {currentFeature.hint}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        <QuizFeedback feedback={feedback} />
      </aside>

      {/* Map */}
      <div className="lg:col-span-8">
        <div className="relative overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-stamp-lg">
          <div className="flex items-center justify-between border-b-2 border-foreground bg-accent px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              Interactive Map · {modeMeta(mode).label}
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-accent-foreground">
              {hoveredId
                ? features.find((f) => f.id === hoveredId)?.name
                : "Hover a shape"}
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full bg-[radial-gradient(ellipse_at_center,theme(colors.background),theme(colors.muted))]">
            <svg
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              role="img"
              aria-label={`Map for ${modeMeta(mode).label}`}
            >
              {/* Decorative latitude / longitude lines */}
              <g stroke="currentColor" className="text-foreground/10" strokeWidth="1">
                {[100, 200, 300, 400, 500].map((y) => (
                  <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} />
                ))}
                {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="600" />
                ))}
              </g>

              {features.map((f) => {
                const isTarget = currentFeature?.id === f.id;
                const isFeedback = feedback?.id === f.id;
                const isHover = hoveredId === f.id;
                const fill = isFeedback
                  ? feedback?.kind === "correct"
                    ? "hsl(var(--secondary))"
                    : "hsl(var(--primary))"
                  : isHover
                  ? "hsl(var(--accent))"
                  : "hsl(var(--card))";
                return (
                  <g key={f.id}>
                    <path
                      d={f.path}
                      fill={fill}
                      stroke="hsl(var(--foreground))"
                      strokeWidth={isHover ? 2 : 1.25}
                      onMouseEnter={() => setHoveredId(f.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => handleClick(f.id)}
                      className="cursor-pointer transition-colors duration-150"
                      aria-label={f.name}
                    />
                    {isTarget && f.labelX !== undefined && f.labelY !== undefined && (
                      <circle
                        cx={f.labelX}
                        cy={f.labelY}
                        r="6"
                        fill="hsl(var(--primary))"
                        className="animate-pulse-ring"
                        style={{ transformOrigin: `${f.labelX}px ${f.labelY}px` }}
                      />
                    )}
                  </g>
                );
              })}

              {/* Hovered label */}
              {hoveredId &&
                (() => {
                  const f = features.find((x) => x.id === hoveredId);
                  if (!f || f.labelX === undefined || f.labelY === undefined) return null;
                  const width = Math.max(48, f.name.length * 6.6);
                  return (
                    <g pointerEvents="none">
                      <rect
                        x={f.labelX - 6}
                        y={f.labelY - 22}
                        width={width}
                        height={20}
                        rx={4}
                        fill="hsl(var(--foreground))"
                      />
                      <text
                        x={f.labelX}
                        y={f.labelY - 8}
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                        fill="hsl(var(--background))"
                      >
                        {f.name}
                      </text>
                    </g>
                  );
                })()}
            </svg>

            {done && (
              <ResultsScreen
                correct={quiz.correct}
                total={total}
                accuracy={accuracy}
                onReset={reset}
              />
            )}
          </div>
        </div>

        <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
          Tip · Read the italic prompt on the left, then click that place on the map.
        </p>
      </div>
    </div>
  );
}

export default InteractiveMap;

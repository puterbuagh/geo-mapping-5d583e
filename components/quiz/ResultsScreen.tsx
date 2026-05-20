"use client";

import { motion } from "framer-motion";
import { Trophy, RotateCcw, Target, Sparkles, BookOpen } from "lucide-react";

interface ResultsScreenProps {
  score: number;
  total: number;
  missed: string[];
  onRetry: () => void;
}

function ResultsScreen({ score, total, missed, onRetry }: ResultsScreenProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  let message = "Keep practicing — every explorer starts somewhere!";
  let badge = "Cadet Cartographer";
  if (percentage === 100) {
    message = "Perfect score! You're a true geography genius.";
    badge = "Master Cartographer";
  } else if (percentage >= 80) {
    message = "Excellent work — you really know your map!";
    badge = "Expert Explorer";
  } else if (percentage >= 60) {
    message = "Nice job — you're getting there!";
    badge = "Skilled Navigator";
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mx-auto max-w-2xl rounded-3xl border-2 border-foreground bg-card p-8 md:p-10 shadow-stamp-lg"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-foreground bg-accent shadow-stamp mb-4"
        >
          <Trophy className="text-foreground" size={40} />
        </motion.div>
        <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground mb-2">
          Field Report
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-2">Quiz Complete!</h2>
        <p className="text-muted-foreground font-body">{message}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-secondary px-4 py-1.5 text-secondary-foreground shadow-stamp">
          <Sparkles size={14} />
          <span className="font-mono text-xs uppercase tracking-wider font-semibold">{badge}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="rounded-xl border-2 border-foreground bg-background p-5 text-center shadow-stamp">
          <Target className="mx-auto mb-2 text-primary" size={24} />
          <div className="font-display text-4xl font-extrabold">
            {score}<span className="text-muted-foreground text-2xl">/{total}</span>
          </div>
          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-1">
            Correct Answers
          </div>
        </div>
        <div className="rounded-xl border-2 border-foreground bg-background p-5 text-center shadow-stamp">
          <Sparkles className="mx-auto mb-2 text-primary" size={24} />
          <div className="font-display text-4xl font-extrabold">{percentage}%</div>
          <div className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground mt-1">
            Accuracy
          </div>
        </div>
      </div>

      {missed.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-foreground" />
            <h3 className="font-display text-xl font-bold">Review these places:</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {missed.map((name) => (
              <span
                key={name}
                className="rounded-full border-2 border-foreground bg-muted px-3 py-1.5 font-body text-sm font-semibold text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onRetry}
        className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-foreground bg-primary px-6 py-4 font-body font-semibold text-primary-foreground shadow-stamp transition-transform hover:-translate-y-0.5"
      >
        <RotateCcw size={18} />
        Try Again
      </button>
    </motion.div>
  );
}

export default ResultsScreen;

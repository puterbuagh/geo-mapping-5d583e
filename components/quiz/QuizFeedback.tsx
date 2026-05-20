"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, HelpCircle, MapPin } from "lucide-react";

interface QuizFeedbackProps {
  prompt: string;
  lastAnswer: { correct: boolean; correctName: string; selectedName?: string; fact?: string } | null;
  questionNumber: number;
  totalQuestions: number;
}

function QuizFeedback({ prompt, lastAnswer, questionNumber, totalQuestions }: QuizFeedbackProps) {
  return (
    <div className="rounded-2xl border-2 border-foreground bg-card p-6 shadow-stamp">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex items-center gap-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
          <HelpCircle size={14} />
          Click the map
        </div>
      </div>

      <div className="flex items-start gap-3 mb-4">
        <MapPin className="flex-shrink-0 mt-1.5 h-5 w-5 text-primary" />
        <h3 className="font-display text-3xl md:text-4xl font-extrabold italic leading-tight text-foreground">
          {prompt}
        </h3>
      </div>

      <AnimatePresence mode="wait">
        {lastAnswer && (
          <motion.div
            key={`${lastAnswer.correctName}-${questionNumber}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-3 rounded-xl border-2 border-foreground p-4 shadow-stamp ${
              lastAnswer.correct
                ? "bg-secondary text-secondary-foreground"
                : "bg-primary text-primary-foreground"
            }`}
          >
            {lastAnswer.correct ? (
              <CheckCircle2 className="flex-shrink-0 mt-0.5" size={20} />
            ) : (
              <XCircle className="flex-shrink-0 mt-0.5" size={20} />
            )}
            <div className="text-sm font-body">
              {lastAnswer.correct ? (
                <>
                  <p className="font-semibold">Correct! Great job.</p>
                  {lastAnswer.fact && <p className="mt-1 opacity-90">{lastAnswer.fact}</p>}
                </>
              ) : (
                <>
                  <p className="font-semibold mb-1">Not quite!</p>
                  <p>
                    {lastAnswer.selectedName ? (
                      <>You picked <span className="font-semibold">{lastAnswer.selectedName}</span>. </>
                    ) : null}
                    The answer was <span className="font-semibold">{lastAnswer.correctName}</span>.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuizFeedback;

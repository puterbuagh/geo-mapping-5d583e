// Quiz engine types and helpers for the geography quiz.

export type QuizMode = "regions" | "states" | "territories";

export interface GeoFeature {
  id: string;
  name: string;
  hint?: string;
  fact?: string;
  /** SVG path string positioned in an 800x600 viewBox. */
  path: string;
  /** Optional label anchor coordinates (also used for the pulsing target marker). */
  labelX?: number;
  labelY?: number;
}

export interface QuizState {
  mode: QuizMode;
  /** Ordered list of features the player still needs to identify. */
  queue: GeoFeature[];
  /** Index into queue of the current prompt. */
  index: number;
  /** Number of correct first-try answers. */
  correct: number;
  /** Total click attempts (right or wrong). */
  attempts: number;
  /** IDs that have already been answered correctly. */
  answered: string[];
}

export interface AnswerResult {
  correct: boolean;
  state: QuizState;
}

/** Fisher–Yates shuffle that returns a new array. */
function shuffle<T>(items: T[]): T[] {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function createQuiz(mode: QuizMode, features: GeoFeature[]): QuizState {
  return {
    mode,
    queue: shuffle(features),
    index: 0,
    correct: 0,
    attempts: 0,
    answered: [],
  };
}

export function checkAnswer(state: QuizState, clickedId: string): AnswerResult {
  const current = state.queue[state.index];
  if (!current) {
    return { correct: false, state };
  }
  const isCorrect = current.id === clickedId;
  const nextState: QuizState = {
    ...state,
    attempts: state.attempts + 1,
    correct: isCorrect ? state.correct + 1 : state.correct,
    index: isCorrect ? state.index + 1 : state.index,
    answered: isCorrect ? [...state.answered, current.id] : state.answered,
  };
  return { correct: isCorrect, state: nextState };
}

export function isQuizComplete(state: QuizState): boolean {
  return state.index >= state.queue.length;
}

export function accuracy(state: QuizState): number {
  if (state.attempts === 0) return 0;
  return Math.round((state.correct / state.attempts) * 100);
}

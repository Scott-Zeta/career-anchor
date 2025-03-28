'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react';

interface CareerAnchorContextProps {
  answers: Record<string, number>;
  setAnswer: (questionId: string, value: number) => void;
  scores: Record<string, number>;
  calculateScores: () => void;
  resetAnswers: () => void;
  progress: {
    total: number;
    answered: number;
    percentage: number;
  };
  topAnchors: string[];
}

type AnchorType = 'TF' | 'GMC' | 'AI' | 'SS' | 'EC' | 'S' | 'PC' | 'LS';

const anchorQuestions: Record<AnchorType, number[]> = {
  TF: [1, 10, 18], // Technical/Functional Competence
  GMC: [2, 17, 24], // General Managerial Competence
  AI: [3, 9, 15], // Autonomy/Independence
  SS: [5, 12, 23], // Security/Stability
  EC: [4, 11, 22], // Entrepreneurial Creativity
  S: [7, 13, 19], // Service/Dedication to a Cause
  PC: [8, 14, 20], // Pure Challenge
  LS: [6, 16, 21], // Lifestyle
};

const CareerAnchorContext = createContext<CareerAnchorContextProps | undefined>(
  undefined
);

const STORAGE_KEY = 'careerAnchorState';

const initialScores = {
  TF: 0,
  GMC: 0,
  AI: 0,
  SS: 0,
  EC: 0,
  S: 0,
  PC: 0,
  LS: 0,
};

export function CareerAnchorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialized = useRef(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [scores, setScores] = useState<Record<string, number>>(initialScores);
  const [topAnchors, setTopAnchors] = useState<string[]>([]);

  // Load state from localStorage only once on client side
  useEffect(() => {
    if (!initialized.current && typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setAnswers(parsed.answers || {});
        setScores(parsed.scores || initialScores);
        setTopAnchors(parsed.topAnchors || []);
      }
      initialized.current = true;
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    if (initialized.current) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          answers,
          scores,
          topAnchors,
        })
      );
    }
  }, [answers, scores, topAnchors]);

  const progress = {
    total: 24,
    answered: Object.keys(answers).length,
    percentage: Math.round((Object.keys(answers).length / 24) * 100),
  };

  const setAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateScores = () => {
    const newScores = { ...scores };

    // Reset scores
    Object.keys(newScores).forEach((key) => {
      newScores[key] = 0;
    });

    // Calculate scores for each anchor
    Object.entries(anchorQuestions).forEach(([anchor, questions]) => {
      questions.forEach((q) => {
        if (answers[q.toString()]) {
          newScores[anchor] += answers[q.toString()];
        }
      });
    });

    setScores(newScores);

    // Calculate top anchors
    const sortedAnchors = Object.entries(newScores)
      .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
      .slice(0, 3) // Get top 3 anchors
      .map(([abbreviation]) => abbreviation);

    setTopAnchors(sortedAnchors);
  };

  // Modify resetAnswers to clear localStorage
  const resetAnswers = () => {
    setAnswers({});
    setScores(initialScores);
    setTopAnchors([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <CareerAnchorContext.Provider
      value={{
        answers,
        setAnswer,
        scores,
        calculateScores,
        resetAnswers,
        progress,
        topAnchors,
      }}
    >
      {children}
    </CareerAnchorContext.Provider>
  );
}

export function useCareerAnchor() {
  const context = useContext(CareerAnchorContext);
  if (context === undefined) {
    throw new Error(
      'useCareerAnchor must be used within a CareerAnchorProvider'
    );
  }
  return context;
}

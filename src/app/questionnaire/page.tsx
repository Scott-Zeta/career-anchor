'use client';

import ProgressBar from '@/components/questionnaire/ProgressBar';
import QuestionCard from '@/components/questionnaire/QuestionCard';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useCareerAnchor } from '@/lib/CareerAnchorContext';

import { questions } from '@/lib/CareerAnchorData';

export default function Questionnaire() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  // Pagination
  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [notAnswered, setNotAnswered] = useState(false);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  // Context
  const { progress, calculateScores } = useCareerAnchor();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      if (progress.answered >= questionsPerPage * currentPage) {
        setNotAnswered(false);
        setCurrentPage((prev) => prev + 1);
        window.scrollTo({ top: 140 });
      } else {
        setNotAnswered(true);
        window.scrollTo({ top: 140 });
      }
    } else {
      calculateScores();
      router.push('/result');
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setNotAnswered(false);
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 140 });
    }
  };

  useEffect(() => {
    const initialPage = Math.ceil(progress.answered / questionsPerPage);
    if (initialPage > 0) {
      setCurrentPage(initialPage);
    }
    setIsLoading(false);
  }, [progress.answered, questionsPerPage]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-6">
            {Array.from({ length: questionsPerPage }).map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Career Anchors Questionnaire
        </h1>
        <p className="text-gray-600 mb-6">
          Rate each statement on a scale of 1 (low) to 4 (high) based on how
          much it applies to you. There are no right or wrong answers - the goal
          is to understand what matters most to you in your career.
        </p>
        <ProgressBar progress={progress} />
        {notAnswered && (
          <div className="text-red-500">
            Please answer all questions before proceeding.
          </div>
        )}
      </div>

      <div className="space-y-6 mb-5">
        {currentQuestions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            text={question.text}
            anchorLabel={question.anchorLabel}
          />
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">
        Page {currentPage} of {totalPages}
      </div>

      <div className="flex justify-between items-center mt-5 pt-6 border-t border-gray-200">
        <Button
          className={`min-w-[160px] px-8 py-7 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-lg transition-colors ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => {
            handlePrevPage();
          }}
          disabled={currentPage === 1}
        >
          Previous Page
        </Button>
        <Button
          className="min-w-[160px] px-8 py-7 rounded-lg font-medium text-lg transition-colors"
          onClick={() => {
            handleNextPage();
          }}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
}

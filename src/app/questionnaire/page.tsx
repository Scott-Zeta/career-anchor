'use client';

import ProgressBar from '@/components/questionnaire/ProgressBar';
import QuestionCard from '@/components/questionnaire/QuestionCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

import { questions } from '@/lib/CareerAnchorData';

export default function Questionnaire() {
  // Pagination
  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0 });
    } else {
      alert('You have completed the questionnaire!');
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0 });
    }
  };

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
        <ProgressBar />
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

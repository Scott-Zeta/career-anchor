import ProgressBar from '@/components/questionnaire/ProgressBar';
import QuestionCard from '@/components/questionnaire/QuestionCard';

export default function Questionnaire() {
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
      <div className="space-y-6">
        <QuestionCard />
      </div>
    </div>
  );
}

import ProgressBar from '@/components/questionnaire/ProgressBar';
import QuestionCard from '@/components/questionnaire/QuestionCard';
import { Button } from '@/components/ui/button';

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
      <div className="space-y-6 mb-5">
        <QuestionCard />
      </div>

      <div className="text-center text-sm text-gray-500">Page 1 of 2</div>

      <div className="flex justify-between items-center mt-5 pt-6 border-t border-gray-200">
        <Button className="min-w-[160px] px-8 py-7 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-lg transition-colors">
          Previous Page
        </Button>
        <Button className="min-w-[160px] px-8 py-7 rounded-lg font-medium text-lg transition-colors">
          Next Page
        </Button>
      </div>
    </div>
  );
}

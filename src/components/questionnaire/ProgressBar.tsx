import { Progress } from '../ui/progress';

interface ProgressBarProps {
  progress: {
    answered: number;
    total: number;
    percentage: number;
  };
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progress: {progress.answered} of {progress.total} questions answered
        </span>
        <span className="text-sm font-medium text-gray-700">
          {progress.percentage}%
        </span>
      </div>
      <Progress value={progress.percentage} indicatorColor="bg-primary" />
    </div>
  );
}

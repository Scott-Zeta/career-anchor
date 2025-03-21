import { Progress } from '../ui/progress';

export default function ProgressBar() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Progress: 3 of 24 questions answered
        </span>
        <span className="text-sm font-medium text-gray-700">13%</span>
      </div>
      <Progress value={13} />
    </div>
  );
}

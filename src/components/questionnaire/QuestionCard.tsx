interface QuestionCardProps {
  id: number;
  text: string;
  anchorLabel: string;
}

export default function QuestionCard({
  id,
  text,
  anchorLabel,
}: QuestionCardProps) {
  return (
    <div className="question-card bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-start mb-4">
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-4 px-3 py-1.5 rounded-lg">
          {id}
        </span>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{text}</h3>
          <p className="text-sm text-gray-500">{anchorLabel}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {[
          { value: 1, label: 'Low' },
          { value: 2, label: 'Medium' },
          { value: 3, label: 'High' },
          { value: 4, label: 'Very High' },
        ].map(({ value, label }) => (
          <div key={`q-${id}-${value}`} className="relative">
            <input
              type="radio"
              name={`q-${id}`}
              value={value}
              id={`q-${id}-${value}`}
              className="hidden peer"
            />
            <label
              htmlFor={`q-${id}-${value}`}
              className="block text-center px-4 py-2 border-2 border-gray-300 rounded-lg cursor-pointer transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50"
            >
              <span className="block text-sm font-medium">{value}</span>
              <span className="text-xs text-gray-500">{label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

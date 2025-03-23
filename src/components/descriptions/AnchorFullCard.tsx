import {
  FaWrench,
  FaUsers,
  FaCheck,
  FaShieldAlt,
  FaLightbulb,
  FaHandsHelping,
  FaTrophy,
  FaBalanceScale,
} from 'react-icons/fa';

interface AnchorFullCardProps {
  title: string;
  subtitle: string;
  description: string;
  implications: string[];
  icon: string;
  themecolor: string;
}

const iconMap: { [key: string]: React.ComponentType } = {
  wrench: FaWrench,
  users: FaUsers,
  check: FaCheck,
  'shield-alt': FaShieldAlt,
  lightbulb: FaLightbulb,
  'hands-helping': FaHandsHelping,
  trophy: FaTrophy,
  'balance-scale': FaBalanceScale,
};

const getColorClasses = (color: string) => {
  const colorMap: {
    [key: string]: { bg: string; text: string; bgCard: string; border: string };
  } = {
    violet: {
      bg: 'bg-violet-100',
      text: 'text-violet-700',
      bgCard: 'bg-violet-50',
      border: 'border-violet-500',
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      bgCard: 'bg-blue-50',
      border: 'border-blue-500',
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      bgCard: 'bg-green-50',
      border: 'border-green-500',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      bgCard: 'bg-amber-50',
      border: 'border-amber-500',
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      bgCard: 'bg-red-50',
      border: 'border-red-500',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      bgCard: 'bg-purple-50',
      border: 'border-purple-500',
    },
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-700',
      bgCard: 'bg-pink-50',
      border: 'border-pink-500',
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      bgCard: 'bg-yellow-50',
      border: 'border-yellow-500',
    },
  };
  return (
    colorMap[color] || {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      bgCard: 'bg-blue-50',
      border: 'border-blue-500',
    }
  );
};

export default function AnchorFullCard({
  title,
  subtitle,
  description,
  implications,
  icon,
  themecolor,
}: AnchorFullCardProps) {
  const colors = getColorClasses(themecolor);
  const IconComponent = iconMap[icon] || FaWrench;

  return (
    <div
      className={`border-l-4 ${colors.border} bg-white p-6 rounded-r-lg shadow-md transition transform hover:translate-x-1 hover:shadow-lg`}
    >
      <div className="flex items-start mb-4">
        <div
          className={`${colors.bg} ${colors.text} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl`}
        >
          <IconComponent />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className={`${colors.text} font-medium`}>{subtitle}</p>
        </div>
      </div>
      <div className="ml-16">
        <p className="text-gray-600 mb-4 whitespace-pre-line">{description}</p>
        <div className={`${colors.bgCard} p-4 rounded-lg`}>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Career Implications
          </h3>
          <ul className="space-y-2 text-gray-600 list-disc list-inside">
            {implications.map((implication, index) => (
              <li key={index}>{implication}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

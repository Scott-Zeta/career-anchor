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

interface AnchorCardProps {
  title: string;
  personality: string;
  icon: string;
  themecolor: string;
  score: number;
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
    [key: string]: { bg: string; text: string; bgCard: string };
  } = {
    violet: {
      bg: 'bg-violet-100',
      text: 'text-violet-700',
      bgCard: 'bg-violet-50',
    },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', bgCard: 'bg-blue-50' },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      bgCard: 'bg-green-50',
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-700',
      bgCard: 'bg-amber-50',
    },
    red: { bg: 'bg-red-100', text: 'text-red-700', bgCard: 'bg-red-50' },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      bgCard: 'bg-purple-50',
    },
    pink: { bg: 'bg-pink-100', text: 'text-pink-700', bgCard: 'bg-pink-50' },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      bgCard: 'bg-yellow-50',
    },
  };
  return (
    colorMap[color] || {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      bgCard: 'bg-blue-50',
    }
  );
};

export default function AnchorCard({
  title,
  personality,
  icon,
  themecolor,
  score,
}: AnchorCardProps) {
  const colors = getColorClasses(themecolor);
  const IconComponent = iconMap[icon] || FaWrench;

  return (
    <div className={`min-h-[180px] p-4 ${colors.bgCard} rounded-r-lg`}>
      <div className="flex items-center mb-2">
        <div
          className={`${colors.bg} ${colors.text} w-10 h-10 rounded-full flex items-center justify-center mr-3 text-xl`}
        >
          <IconComponent />
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <span className={colors.text}>(Score: {score})</span>
        </div>
      </div>
      <p className="text-gray-600 ml-13">{personality}</p>
    </div>
  );
}

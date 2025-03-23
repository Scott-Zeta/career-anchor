import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

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

interface AnchorAccordionProps {
  title: string;
  subtitle: string;
  description: string;
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

export default function AnchorAccordion({
  title,
  subtitle,
  description,
  icon,
  themecolor,
}: AnchorAccordionProps) {
  const colors = getColorClasses(themecolor);
  const IconComponent = iconMap[icon] || FaWrench;

  return (
    <AccordionItem value={title}>
      <AccordionTrigger>
        <div className="flex justify-between items-center px-5 py-1">
          <div className="flex items-center">
            <div
              className={`${colors.bg} ${colors.text} w-10 h-10 rounded-full flex items-center justify-center mr-4 text-xl`}
            >
              <IconComponent />
            </div>
            <span className="font-medium text-gray-900">{title}</span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className={`${colors.bgCard} px-5 py-5`}>
          <p className={`${colors.text} font-medium`}>{subtitle}</p>
          <br />
          <p className="text-gray-600 mb-4 whitespace-pre-line">
            {description}
          </p>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

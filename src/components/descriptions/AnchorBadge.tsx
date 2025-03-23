interface AnchorBadgeProps {
  title: string;
  themecolor: string;
  score: number;
}

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

export default function AnchorBadge({
  title,
  themecolor,
  score,
}: AnchorBadgeProps) {
  const colors = getColorClasses(themecolor);

  return (
    <span
      className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-medium`}
    >
      {title} ({score})
    </span>
  );
}

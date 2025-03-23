'use client';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  scores: Record<string, number>;
}

const labels = ['TF', 'GMC', 'AI', 'SS', 'EC', 'S', 'PC', 'LS'];
const fullNames: Record<string, string> = {
  TF: 'Technical/Functional',
  GMC: 'General Management',
  AI: 'Autonomy/Independence',
  SS: 'Security/Stability',
  EC: 'Entrepreneurial Creativity',
  S: 'Service/Dedication',
  PC: 'Pure Challenge',
  LS: 'Lifestyle',
};

const anchorColours = [
  'rgba(79, 70, 229, 0.7)',
  'rgba(14, 165, 233, 0.7)',
  'rgba(16, 185, 129, 0.7)',
  'rgba(245, 158, 11, 0.7)',
  'rgba(239, 68, 68, 0.7)',
  'rgba(139, 92, 246, 0.7)',
  'rgba(236, 72, 153, 0.7)',
  'rgba(99, 102, 241, 0.7)',
];

export default function RadarChart({ scores }: RadarChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Your Score',
        data: labels.map((label) => scores[label] || 0),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: anchorColours,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: anchorColours,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        pointLabels: {
          font: {
            size: 14,
            weight: 700,
          },
        },
        min: 0,
        max: 12,
        ticks: {
          stepSize: 3,
          backdropColor: 'transparent',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (tooltipItems: TooltipItem<'radar'>[]) {
            const label = tooltipItems[0]?.label;
            return fullNames[label] || label;
          },
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}

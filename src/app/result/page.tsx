import RadarChart from '@/components/result/RadarChart';
import Link from 'next/link';

import { anchorDescriptions } from '@/lib/CareerAnchorData';
import { Progress } from '@/components/ui/progress';
import AnchorCard from '@/components/result/AnchorCard';
import { Button } from '@/components/ui/button';
import { FaBookOpen, FaDownload, FaShareAlt, FaCalendar } from 'react-icons/fa';

const getProgressColor = (key: string) => {
  const colorMap: { [key: string]: string } = {
    TF: 'bg-violet-500',
    GMC: 'bg-blue-500',
    AI: 'bg-green-500',
    SS: 'bg-amber-500',
    EC: 'bg-red-500',
    S: 'bg-purple-500',
    PC: 'bg-pink-500',
    LS: 'bg-yellow-500',
  };
  return colorMap[key] || 'bg-blue-500';
};

export default function result() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Your Career Anchor Results
        </h1>
        <p className="text-gray-600 mb-6">
          Based on your responses, we&apos;ve identified your dominant career
          anchors. These anchors represent what you value most in your work
          life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          {/* RadarChart Section */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Career Anchor Profile
            </h2>
            <div className="h-80">
              <RadarChart />
            </div>
          </div>

          {/* Top Three Anchors Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Top Three Anchors
            </h2>

            <div className="space-y-4">
              {/* AnchorCard */}
              {Object.entries(anchorDescriptions).map(([key, anchor]) => (
                <div key={key}>
                  <AnchorCard
                    title={anchor.title}
                    personality={anchor.personality}
                    themecolor={anchor.themecolor}
                    icon={anchor.icon}
                    score={6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          {/* Results Progress Bar Section */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Complete Results
            </h2>

            <div className="space-y-4">
              {Object.entries(anchorDescriptions).map(([key, anchor]) => (
                <div key={key}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">
                      {`${anchor.title} (${key.toString()})`}
                    </span>
                    <span className="text-sm font-medium text-gray-900">6</span>
                  </div>
                  <Progress
                    value={66}
                    className="mt-4"
                    indicatorColor={getProgressColor(key)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* What's Next Section */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What&apos;s Next?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <FaBookOpen className="text-xs" />
                </div>
                <span className="text-gray-600">
                  Read detailed descriptions of your top anchors
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <FaDownload className="text-xs" />
                </div>
                <span className="text-gray-600">
                  Download your complete results report
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <FaShareAlt className="text-xs" />
                </div>
                <span className="text-gray-600">
                  Share your results with a career counselor
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <FaCalendar className="text-xs" />
                </div>
                <span className="text-gray-600">
                  Schedule a career guidance session
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Button
                className="w-full px-4 py-7 rounded-lg font-medium transition-colors text-lg"
                asChild
              >
                <Link href="/descriptions">View Anchor Descriptions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

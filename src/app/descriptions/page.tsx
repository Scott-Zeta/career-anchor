import AnchorBadge from '@/components/descriptions/AnchorBadge';
import { anchorDescriptions } from '@/lib/CareerAnchorData';

export default function descriptions() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Career Anchor Descriptions
        </h1>
        <p className="text-gray-600 mb-6">
          Learn more about each of the eight career anchors identified by Dr.
          Edgar Schein and what they mean for your career path.
        </p>
      </div>

      {/* Your Top Anchors Section */}
      <div className="mb-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Your Top Anchors
            </h2>
            <p className="text-gray-600 mt-2">
              Based on your questionnaire results, your top three career anchors
              are:
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {Object.entries(anchorDescriptions).map(([key, anchor]) => (
                <div key={key}>
                  <AnchorBadge
                    title={anchor.title}
                    themecolor={anchor.themecolor}
                    score={6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Anchor Full Descriptions Section */}
    </div>
  );
}

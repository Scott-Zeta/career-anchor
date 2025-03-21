import RadarChart from '@/components/result/RadarChart';
import React from 'react';

export default function result() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
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
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Career Anchor Profile
            </h2>
            <div className="h-80">
              <RadarChart />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Top Three Anchors
            </h2>

            <div className="space-y-4">
              {/* <!-- Top Anchor --> */}
              <div className="anchor-card tf p-4 bg-indigo-50 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-indigo-100 text-indigo-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-wrench"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Technical/Functional Competence
                    </h3>
                    <span className="text-sm font-medium text-indigo-600">
                      Primary Anchor (Score: 11)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 ml-13">
                  You value being good at something specific and enjoy
                  developing expertise in your field. You&apos;re motivated by
                  challenges that test your skills and abilities.
                </p>
              </div>

              {/* <!-- Second Anchor --> */}
              <div className="anchor-card ai p-4 bg-green-50 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 text-green-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Autonomy/Independence
                    </h3>
                    <span className="text-sm font-medium text-green-600">
                      Secondary Anchor (Score: 9)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 ml-13">
                  You value freedom and independence in your work. You prefer
                  environments that allow you to work on your own terms and at
                  your own pace.
                </p>
              </div>

              {/* <!-- Third Anchor --> */}
              <div className="anchor-card pc p-4 bg-pink-50 rounded-r-lg">
                <div className="flex items-center mb-2">
                  <div className="bg-pink-100 text-pink-700 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Pure Challenge
                    </h3>
                    <span className="text-sm font-medium text-pink-600">
                      Tertiary Anchor (Score: 8)
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 ml-13">
                  You&apos;re motivated by overcoming difficult obstacles and
                  solving unsolvable problems. You thrive on constant challenge
                  and competition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Complete Results
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Technical/Functional (TF)
                </span>
                <span className="text-sm font-medium text-gray-900">11</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  General Management (GMC)
                </span>
                <span className="text-sm font-medium text-gray-900">6</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Autonomy/Independence (AI)
                </span>
                <span className="text-sm font-medium text-gray-900">9</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Security/Stability (SS)
                </span>
                <span className="text-sm font-medium text-gray-900">5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Entrepreneurial Creativity (EC)
                </span>
                <span className="text-sm font-medium text-gray-900">7</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Service/Dedication (S)
                </span>
                <span className="text-sm font-medium text-gray-900">6</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Pure Challenge (PC)
                </span>
                <span className="text-sm font-medium text-gray-900">8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-pink-500 h-2.5 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">
                  Lifestyle (LS)
                </span>
                <span className="text-sm font-medium text-gray-900">4</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-400 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              What&apos;s Next?
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <i className="fas fa-book-open text-xs"></i>
                </div>
                <span className="text-gray-600">
                  Read detailed descriptions of your top anchors
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <i className="fas fa-download text-xs"></i>
                </div>
                <span className="text-gray-600">
                  Download your complete results report
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <i className="fas fa-share-alt text-xs"></i>
                </div>
                <span className="text-gray-600">
                  Share your results with a career counselor
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                  <i className="fas fa-calendar text-xs"></i>
                </div>
                <span className="text-gray-600">
                  Schedule a career guidance session
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors">
                View Anchor Descriptions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

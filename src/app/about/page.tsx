'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Understanding Career Anchors
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how your core values and motivations shape your career path
          and professional decisions.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What Are Career Anchors?
            </h2>
            <p className="text-gray-600 mb-4">
              Career Anchors, developed by MIT professor Edgar Schein in the
              1960s, are the core values and motivations that guide your
              professional decisions. They represent the one thing you
              won&apos;t give up, even in the face of difficult choices.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Internal Career
                  </h3>
                  <p className="text-gray-600">
                    Your subjective idea about life and work, including your
                    ambitions, hopes, and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    External Career
                  </h3>
                  <p className="text-gray-600">
                    The realistic possibilities available to you in the
                    professional world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Three Domains of Career Anchors
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">
                  Skills and Competencies
                </h3>
                <p className="text-gray-600">
                  The things you&apos;re good at. Through reflection and
                  feedback, you can discover your strengths and areas of
                  expertise.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-medium text-green-900 mb-2">Motives</h3>
                <p className="text-gray-600">
                  The things you want. Each new experience brings you closer to
                  understanding your true desires and aspirations.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-medium text-purple-900 mb-2">Values</h3>
                <p className="text-gray-600">
                  The things that are important to you. Your career choices
                  should align with your core values and the organizational
                  climate that best fits them.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              The Eight Career Anchor Themes
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: 'Technical/Functional', color: 'violet' },
                { title: 'General Management', color: 'blue' },
                { title: 'Autonomy/Independence', color: 'green' },
                { title: 'Security/Stability', color: 'amber' },
                { title: 'Entrepreneurial Creativity', color: 'red' },
                { title: 'Service/Dedication', color: 'purple' },
                { title: 'Pure Challenge', color: 'pink' },
                { title: 'Lifestyle', color: 'yellow' },
              ].map((anchor, index) => (
                <div
                  key={index}
                  className={`p-4 bg-${anchor.color}-50 rounded-lg border border-${anchor.color}-100`}
                >
                  <h3 className={`font-medium text-${anchor.color}-900`}>
                    {anchor.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Career Anchors Matter
            </h2>
            <p className="text-gray-600 mb-6">
              Understanding your career anchors helps you make more informed
              decisions about your professional path and ensures your work
              aligns with your core values and motivations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Make better career decisions</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Find work that truly fulfills you</span>
              </div>
              <div className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Navigate career transitions more effectively</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 p-8 rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Discover Your Career Anchors?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Take our comprehensive assessment to identify your dominant career
          anchors and gain valuable insights into your professional motivations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="px-8 py-6 text-lg" asChild>
            <Link href="/">
              Start the Assessment
              <FaArrowRight className="ml-2" />
            </Link>
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg" asChild>
            <Link href="/descriptions">Explore all Anchors</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

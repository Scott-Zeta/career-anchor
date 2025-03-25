'use client';

import AnchorAccordion from '@/components/descriptions/AnchorAccordion';
import AnchorBadge from '@/components/descriptions/AnchorBadge';
import AnchorFullCard from '@/components/descriptions/AnchorFullCard';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { anchorDescriptions } from '@/lib/CareerAnchorData';
import { useCareerAnchor } from '@/lib/CareerAnchorContext';
import Link from 'next/link';

export default function Descriptions() {
  const { scores, topAnchors, resetAnswers } = useCareerAnchor();
  // console.log(scores, topAnchors);
  const takenTest = topAnchors.length > 0;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Eight types of Career Anchors
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
            {takenTest ? (
              <>
                <p className="text-gray-600 mt-2">
                  Based on your questionnaire results, your top three career
                  anchors are:
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {topAnchors.map((key) => {
                    const anchor =
                      anchorDescriptions[
                        key as keyof typeof anchorDescriptions
                      ];
                    return (
                      <div key={key}>
                        <AnchorBadge
                          title={anchor.title}
                          themecolor={anchor.themecolor}
                          score={scores[key]}
                        />
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-600 mt-2">
                  Looks like you haven&apos;t taken the questionnaire yet. Take
                  the questionnaire to discover your career anchors and more
                  details!
                </p>
                <div className="flex justify-center mt-5">
                  <Button
                    className="w-full sm:w-auto px-8 py-7 rounded-lg font-medium text-lg transition-colors"
                    asChild
                  >
                    <Link href="/questionnaire">Take the Questionnaire</Link>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Anchor Full Descriptions Section */}
      <div className="space-y-6 mb-12">
        {topAnchors.map((key) => {
          const anchor =
            anchorDescriptions[key as keyof typeof anchorDescriptions];
          return (
            <div key={key}>
              <AnchorFullCard
                title={anchor.title}
                subtitle={anchor.subtitle}
                description={anchor.description}
                implications={anchor.implications}
                icon={anchor.icon}
                themecolor={anchor.themecolor}
              />
            </div>
          );
        })}
      </div>

      {/* Anchor Accordions */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Explore all Anchors
      </h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <Accordion type="multiple" className="w-full">
          {Object.entries(anchorDescriptions)
            .filter(([key]) => !topAnchors.includes(key))
            .map(([key, anchor]) => (
              <AnchorAccordion
                key={key}
                title={anchor.title}
                subtitle={anchor.subtitle}
                description={anchor.description}
                icon={anchor.icon}
                themecolor={anchor.themecolor}
              />
            ))}
        </Accordion>
      </div>

      {/* What do Section */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          What Do These Anchors Mean For You?
        </h2>
        <p className="text-gray-600 mb-4">
          Understanding your career anchors can help you make more informed
          career choices that align with your values and motivations. When your
          work environment matches your career anchors, you&apos;re likely to
          feel more satisfied and engaged.
        </p>
        <p className="text-gray-600 mb-4">
          Consider discussing your results with a career counselor or mentor who
          can help you explore career paths that align with your anchors.
        </p>
        {takenTest ? (
          <div className="flex flex-col sm:flex-row sm:justify-around mt-6 gap-4">
            <Button
              className="w-full sm:min-w-[250px] sm:w-auto px-4 py-7 rounded-lg font-medium transition-colors text-lg"
              asChild
            >
              <Link href="/result">Return to Your Result</Link>
            </Button>
            <Button
              className="w-full sm:min-w-[250px] sm:w-auto bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-7 rounded-lg font-medium transition-colors text-lg"
              onClick={() => resetAnswers()}
              asChild
            >
              <Link href="/questionnaire">Retake the Questionnaire</Link>
            </Button>
          </div>
        ) : (
          <div className="flex justify-center mt-6">
            <Button
              className="w-full sm:w-auto px-8 py-7 rounded-lg font-medium text-lg transition-colors"
              asChild
            >
              <Link href="/questionnaire">Take the Questionnaire</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

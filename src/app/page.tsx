import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaCompass, FaBalanceScale, FaLightbulb } from 'react-icons/fa';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Your Career Anchor
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Find out what truly drives your career satisfaction and make
            informed decisions about your professional future.
          </p>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
            <Button
              className="w-full sm:w-auto px-8 py-7 rounded-lg font-medium text-lg transition-colors"
              asChild
            >
              <Link href="/questionnaire">Take the Questionnaire</Link>
            </Button>
            <Button
              className="w-full sm:w-auto px-8 py-7 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 rounded-lg font-medium text-lg transition-colors"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/images/photo-1551836022-deb4988cc6c0.avif"
            alt="Career Path"
            className="rounded-xl shadow-xl w-full h-auto hidden md:block"
            width={800}
            height={600}
          />
        </div>
      </div>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Determine Your Career Anchor?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaCompass className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Find Your Direction</h3>
            <p className="text-gray-600">
              Understand what truly motivates you and drives your career
              satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaLightbulb className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Make Better Choices</h3>
            <p className="text-gray-600">
              Make informed decisions about job offers, promotions, and career
              transitions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <FaBalanceScale className="text-3xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Achieve Balance</h3>
            <p className="text-gray-600">
              Align your work choices with your core values and life priorities.
            </p>
          </div>
        </div>
      </section>

      <section className="my-16 bg-blue-50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              About Career Anchors
            </h2>
            <p className="text-gray-600 mb-4">
              Developed by Dr. Edgar Schein at MIT, career anchors represent
              your self-concept consisting of self-perceived talents and
              abilities, motives and needs, and attitudes and values that you
              would not give up.
            </p>
            <p className="text-gray-600">
              The Career Anchors Questionnaire helps you identify your dominant
              anchor among eight different categories: Technical(Functional)
              Competence, General Managerial Competence, Autonomy(Independence),
              Security(Stability), Entrepreneurial Creativity,
              Service(Dedication) to a Cause, Pure Challenge, and Lifestyle.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/images/photo-1486312338219-ce68d2c6f44d.avif"
              alt="Planning Career"
              className="rounded-xl shadow-lg w-full h-auto hidden md:block"
              width={800}
              height={600}
            ></Image>
          </div>
        </div>
      </section>

      <section className="my-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Discover Your Career Anchor?
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take our comprehensive questionnaire and get personalized insights
          about what truly drives your career satisfaction.
        </p>
        <Button
          className="w-full sm:w-auto px-8 py-7 rounded-lg font-medium text-lg transition-colors"
          asChild
        >
          <Link href="/questionnaire">Start the Questionnaire</Link>
        </Button>
      </section>
    </div>
  );
}

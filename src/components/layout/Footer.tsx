import Link from 'next/link';
import { GiAnchor } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <GiAnchor className="text-primary text-5xl mr-3" />
            <span className="text-xl font-bold">Career Anchor</span>
          </div>
          <div className="flex space-x-8">
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-400">
          &copy; {new Date().getFullYear()} Career Anchor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

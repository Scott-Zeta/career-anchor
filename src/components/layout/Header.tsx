'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { GiAnchor } from 'react-icons/gi';
import { Button } from '../ui/button';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-10">
      <nav className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <GiAnchor className="text-primary text-5xl mr-3" />
          <i className="fas fa-anchor text-primary text-3xl mr-3"></i>
          <span className="text-2xl font-bold text-blue-800">
            Career Anchor
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-primary' : 'text-gray-600'
            } hover:text-primary transition-colors font-bold`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === '/about' ? 'text-primary' : 'text-gray-600'
            } hover:text-primary transition-colors font-bold`}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-primary transition-colors font-bold"
          >
            Contact
          </Link>
          {pathname !== '/questionnaire' && (
            <Button className="font-bold hidden md:block">
              <Link href="/questionnaire">Start Questionnaire</Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}

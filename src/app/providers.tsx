'use client';

import { CareerAnchorProvider } from '@/lib/CareerAnchorContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <CareerAnchorProvider>{children}</CareerAnchorProvider>
    </>
  );
};

export default Providers;

import type { PropsWithChildren } from 'react';
import FloatingDishesBackground from '@/components/auth/floating-dishes-background';
import { ChefHat } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <FloatingDishesBackground />
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <Link href="/" className="mb-8 flex items-center space-x-2 text-3xl font-bold text-primary">
          <ChefHat size={40} />
          <span>Gastronomic Getaway</span>
        </Link>
        {children}
      </div>
    </>
  );
}

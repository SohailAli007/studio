
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChefHat, LogOut, ShoppingCart, UserCircle, Package } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function SiteHeader() {
  const router = useRouter();
  const { toast } = useToast();

  const handleLogout = () => {
    // Simulate logout
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/home" className="flex items-center space-x-2 text-xl font-bold text-primary">
          <ChefHat size={32} />
          <span>Gastronomic Getaway</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Link href="/home/cart" passHref>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/home/orders" passHref>
            <Button variant="ghost" size="icon" aria-label="Orders">
              <Package className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/home/profile" passHref>
            <Button variant="ghost" size="icon" aria-label="Profile">
              <UserCircle className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

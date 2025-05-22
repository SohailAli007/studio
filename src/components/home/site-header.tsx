
"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChefHat, LogOut, UserCircle, ShoppingCart, PackageIcon } from 'lucide-react'; // Added PackageIcon
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

  // Placeholder user data for avatar
  const user = {
    name: "Alex Doe",
    initials: "AD",
    avatarUrl: "https://placehold.co/40x40.png" // Placeholder avatar image
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/home" className="flex items-center space-x-2 text-xl font-bold text-primary">
          <ChefHat size={32} />
          <span>Gastronomic Getaway</span>
        </Link>
        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="person avatar" />
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    alex.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/home/profile" className="flex items-center">
                  <UserCircle className="mr-2 h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home/cart" className="flex items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  My Cart
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/home/orders" className="flex items-center">
                  <PackageIcon className="mr-2 h-4 w-4" /> {/* Changed to PackageIcon */}
                  My Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

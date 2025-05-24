
"use client";

import React, { useState, useEffect } from 'react';
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
import { ChefHat, LogOut, UserCircle, ShoppingCart, PackageIcon, Sun, Moon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Switch } from "@/components/ui/switch";

export function SiteHeader() {
  const router = useRouter();
  const { toast } = useToast();

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Effect to set mounted state and load theme from localStorage
  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkTheme(true);
    } else {
      // Default to light theme if no theme is stored or if it's explicitly 'light'
      document.documentElement.classList.remove('dark');
      setIsDarkTheme(false);
      if (!storedTheme) {
        localStorage.setItem('theme', 'light');
      }
    }
  }, []);

  // Effect to apply theme changes and update localStorage
  useEffect(() => {
    if (!mounted) return; // Don't run on initial server render before hydration

    if (isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkTheme, mounted]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  // Placeholder user data for avatar
  const user = {
    name: "Alex Doe",
    initials: "AD",
    avatarUrl: "https://placehold.co/40x40.png"
  };

  // Avoid rendering theme-dependent UI until mounted to prevent hydration mismatch
  const renderThemeToggle = () => {
    if (!mounted) {
      // Render a placeholder or nothing to prevent hydration issues
      // For simplicity, rendering a minimal fixed-size div.
      // A better approach might be specific skeleton UI or CSS to reserve space.
      return <div style={{ width: '100px', height: '32px' }} />; // Approx size of the switch + icons
    }
    return (
      <div className="flex items-center p-1 rounded-full border bg-background mr-2">
        <Sun className={`h-5 w-5 text-muted-foreground transition-all ${!isDarkTheme ? 'opacity-100 text-primary' : 'opacity-50'}`} />
        <Switch
          checked={isDarkTheme}
          onCheckedChange={toggleTheme}
          className="mx-2"
          aria-label="Toggle theme"
        />
        <Moon className={`h-5 w-5 text-muted-foreground transition-all ${isDarkTheme ? 'opacity-100 text-primary' : 'opacity-50'}`} />
      </div>
    );
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/home" className="flex items-center space-x-2 text-xl font-bold text-primary">
          <ChefHat size={32} />
          <span>Gastronomic Getaway</span>
        </Link>
        <div className="flex items-center space-x-2">
          {renderThemeToggle()}
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
                  <PackageIcon className="mr-2 h-4 w-4" />
                  My Orders
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {
                 toast({
                  title: 'Logged Out',
                  description: 'You have been successfully logged out.',
                });
                router.push('/login');
              }} className="cursor-pointer">
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

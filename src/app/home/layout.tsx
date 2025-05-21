
"use client";

import React, { useState, useEffect, type PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
} from '@/components/ui/sidebar';
import { SiteHeader } from '@/components/home/site-header';
import { UserCircle, ChefHat } from 'lucide-react';

export default function HomeLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <SidebarProvider defaultOpen={false}> {/* Sidebar collapsed by default */}
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        {/* Sidebar first, then content. Grid for left sidebar */}
        <div className="flex flex-1 md:grid md:grid-cols-[auto_1fr]"> 
          
          {/* Sidebar on the LEFT */}
          <Sidebar side="left" collapsible="icon" className="hidden md:flex">
            <SidebarHeader className="p-3 border-b">
              <Link href="/home" className="flex items-center space-x-2 text-lg font-semibold text-primary group-data-[collapsible=icon]:hidden">
                <ChefHat size={28} />
                <span>Gastronomic Getaway</span>
              </Link>
               <div className="flex items-center justify-center group-data-[collapsible=icon]:flex group-data-[state=expanded]:hidden">
                 <ChefHat size={28} className="text-primary" />
               </div>
            </SidebarHeader>
            <SidebarContent className="p-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    tooltip={{content: "Profile", side: "right", align: "center"}}
                    isActive={pathname === '/home/profile' || pathname.startsWith('/home/cart') || pathname.startsWith('/home/orders')}
                  >
                    <Link href="/home/profile">
                      <UserCircle />
                      <span>Profile</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-2 border-t">
              {/* Footer content for sidebar, e.g. app version or small logout */}
            </SidebarFooter>
          </Sidebar>

          {/* Main content area */}
          <SidebarInset className="flex flex-col h-full overflow-hidden"> {/* Ensures SidebarInset fits its grid cell and clips its own overflow */}
            <div className="flex-grow overflow-y-auto"> {/* This div will scroll its content if it's too long */}
              {children}
            </div>
            <footer className="py-8 text-center text-muted-foreground border-t mt-auto"> {/* mt-auto pushes footer down */}
              © {currentYear !== null ? currentYear : "..."} Gastronomic Getaway. All rights reserved.
            </footer>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}


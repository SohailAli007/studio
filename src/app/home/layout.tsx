
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
import { ShoppingCart, UserCircle, Package, ChefHat } from 'lucide-react';

export default function HomeLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex flex-1 md:grid md:grid-cols-[1fr_auto]"> {/* Updated grid columns */}
          <SidebarInset className="flex flex-col"> {/* SidebarInset for main content area */}
            <div className="flex-grow">
              {children}
            </div>
            <footer className="py-8 text-center text-muted-foreground border-t mt-auto">
              © {currentYear !== null ? currentYear : "..."} Gastronomic Getaway. All rights reserved.
            </footer>
          </SidebarInset>

          <Sidebar side="right" collapsible="icon" className="hidden md:flex"> {/* Updated side prop */}
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
                    tooltip={{content: "Cart", side: "left", align: "center"}}  /* Updated tooltip side */
                    isActive={pathname === '/home/cart'}
                  >
                    <Link href="/home/cart">
                      <ShoppingCart />
                      <span>Cart</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={{content: "Orders", side: "left", align: "center"}} /* Updated tooltip side */
                    isActive={pathname === '/home/orders'}
                  >
                    <Link href="/home/orders">
                      <Package />
                      <span>Orders</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    asChild 
                    tooltip={{content: "Profile", side: "left", align: "center"}} /* Updated tooltip side */
                    isActive={pathname === '/home/profile'}
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
          {/* Mobile sidebar is handled by Sheet within SidebarProvider based on useIsMobile hook */}
        </div>
      </div>
    </SidebarProvider>
  );
}

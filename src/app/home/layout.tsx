"use client";

import type { PropsWithChildren } from 'react';
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

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex flex-1 md:grid md:grid-cols-[auto_1fr]">
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
                    tooltip={{content: "Cart", side: "right", align: "center"}} 
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
                    tooltip={{content: "Orders", side: "right", align: "center"}} 
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
                    tooltip={{content: "Profile", side: "right", align: "center"}} 
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
          
          <SidebarInset className="flex flex-col"> {/* SidebarInset for main content area */}
            <div className="flex-grow">
              {children}
            </div>
            <footer className="py-8 text-center text-muted-foreground border-t mt-auto">
              © {new Date().getFullYear()} Gastronomic Getaway. All rights reserved.
            </footer>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}


"use client";

import React, { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/home/site-header';
import { SiteFooter } from '@/components/home/site-footer'; // Import the new footer

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <main className="flex-grow overflow-y-auto"> {/* Ensure main content can scroll */}
          {children}
        </main>
        <SiteFooter /> {/* Use the new SiteFooter component */}
      </div>
    </div>
  );
}

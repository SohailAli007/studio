
"use client";

import React, { type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/home/site-header';
import { SiteFooter } from '@/components/home/site-footer';

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      {/* This div controls the main content and footer alignment and width. Added overflow-hidden. */}
      <div className="flex flex-1 flex-col w-full max-w-5xl ml-auto overflow-hidden">
        <main className="flex-grow overflow-y-auto"> {/* Ensure main content can scroll */}
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}

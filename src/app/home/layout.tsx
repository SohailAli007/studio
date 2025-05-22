
"use client";

import React, { useState, useEffect, type PropsWithChildren } from 'react';
import { SiteHeader } from '@/components/home/site-header';

export default function HomeLayout({ children }: PropsWithChildren) {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex flex-1 flex-col"> {/* Simplified main content wrapper */}
        <div className="flex flex-col flex-grow overflow-y-auto">
          {children}
        </div>
        <footer className="py-8 text-center text-muted-foreground border-t mt-auto">
          © {currentYear !== null ? currentYear : "..."} Gastronomic Getaway. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
